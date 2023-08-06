import Header from "./components/header";
import Footer from "./components/footer";

import "./styles/css/index.css";
import Socials from "./components/contact";
import Projects from "./components/projects";
import Hero from "./components/hero";

import { getSocials, getAllPosts } from "./api";

export const getPageData = async () => {
  const socials = getSocials();
  const projectCards = getAllPosts([
    "preview",
    "imgClass",
    "title",
    "lang",
    "desc",
    "index",
    "slug",
    "repo",
  ]).sort((a, b) => a.index - b.index);
  return { socials, projectCards };
};

export default async function Page() {
  const { socials, projectCards } = await getPageData();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Socials className={"contact"} items={socials} />
        <Projects projects={projectCards} />
      </main>
      <Footer />
    </>
  );
}
