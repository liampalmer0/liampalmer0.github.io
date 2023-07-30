import Card from "./card";

export default function ProjectSection({ projects }) {
  return (
    projects && (
      <section className="subsection-block projects" id="projects">
        <h2 className="subheading-text note yellow">Projects</h2>
        <div className="project-list">
          <ul className="card-group">
            {projects.map((post) => {
              return <Card key={post.slug} data={post} className={"project-card"} />;
            })}
          </ul>
        </div>
      </section>
    )
  );
}
