import Image from "next/image";
import Carousel from "../../components/carousel";

import "../../styles/css/projects.css";

import { getProjectBySlug, getPostSlugs } from "../../api";
import mdToHtml from "../../api/mdToHtml";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug: slug.replace(/\.md$/, "") }));
}

export const getPageData = async (slug) => {
  const projectData = getProjectBySlug(slug, [
    "title",
    "repo",
    "techs",
    "images",
    "lang",
    "slug",
    "content",
  ]);

  const content = await mdToHtml(projectData.content);
  return { projectData: { ...projectData, content } };
};

export default async function ProjectDetails({ params }) {
  const { projectData } = await getPageData(params.slug);

  const displayTechList = (techs = []) => {
    if (techs.length > 0) {
      return (
        <div className="tech">
          {techs.reduce((acc, curr, i) => {
            if (i > 0) return (acc += ` | ${curr}`);
            else return curr;
          }, "")}
        </div>
      );
    } else return null;
  };

  const { images, title, repo, techs, content } = projectData;
  return (
    <main className="project-container">
      <div className="content">
        <div className="img-carousel">
          <Carousel images={images}></Carousel>
        </div>
        <div className="details">
          <div className="project-header">
            <h1 className="title">{title}</h1>
            <a className="repo" href={repo}>
              <Image
                className="gh-badge"
                height={24}
                width={24}
                src="/assets/img/GitHub-Mark-64px.png"
                alt="GitHub mark"
              />
              Repo
            </a>
          </div>
          {displayTechList(techs)}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </main>
  );
}
