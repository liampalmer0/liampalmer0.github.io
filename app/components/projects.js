import Card from "./card";

import cssCover from "../../public/assets/img/projects/css-art/bike.png";
import portCover from "../../public/assets/img/projects/port.png";
import fotdCover from "../../public/assets/img/projects/fotd/fotd.png";
import dwaCover from "../../public/assets/img/projects/dw-anki.png";

const imageLookup = {
  fotd: fotdCover,
  "css-art": cssCover,
  "dw-anki": dwaCover,
  portfolio: portCover,
};

export default function ProjectSection({ projects }) {
  return (
    projects && (
      <section className="subsection-block projects" id="projects">
        <h2 className="subheading-text note yellow">Projects</h2>
        <div className="project-list">
          <ul className="card-group">
            {projects.map((post) => (
              <Card
                key={post.slug}
                data={post}
                image={imageLookup[post.slug.split("/")[1]]}
                className={"project-card"}
              />
            ))}
          </ul>
        </div>
      </section>
    )
  );
}
