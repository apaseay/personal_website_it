import React from "react";
import Resume from "../../resume.json";

// Only allow absolute https links in project descriptions.
const isSafeUrl = (url) => {
  try {
    return new URL(url).protocol === "https:";
  } catch {
    return false;
  }
};

// Render a description made of plain strings and { text, url } link objects,
// so no raw HTML is ever injected into the page.
const renderDescriptionParts = (parts) =>
  parts.map((part, i) => {
    if (typeof part === "string") return <React.Fragment key={i}>{part}</React.Fragment>;
    if (part && isSafeUrl(part.url)) {
      return (
        <a key={i} href={part.url} target="_blank" rel="noopener noreferrer">
          {part.text}
        </a>
      );
    }
    return <React.Fragment key={i}>{part?.text}</React.Fragment>;
  });

function Projects() {
  if (!Array.isArray(Resume.projects) || Resume.projects.length === 0) {
    return null;
  }

  return (
    <section className="section" id="projects">
      <div className="container">
        <h1 className="title">Projects</h1>
        <p className="has-text-grey is-size-6 mb-6">
          <strong>The projects listed here are personal projects.</strong>
        </p>
        <div className="columns is-multiline">
          {Resume.projects.map((project, index) => (
            <div key={index} className="column is-6">
              <div className="card skill-card" style={{ height: "100%" }}>
                <div className="card-content">
                  <div className="media" style={{ marginBottom: "0.75rem" }}>
                    <div className="media-left" style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}>
                      {Array.isArray(project.x_icons)
                        ? project.x_icons.map((icon, i) =>
                            icon.startsWith("fa")
                              ? <span key={i} className={`skill-icon has-text-link is-size-3 ${icon}`}></span>
                              : <img
                                  key={i}
                                  src={`https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/${icon.codePointAt(0).toString(16)}.svg`}
                                  alt={icon}
                                  style={{ width: "1.75rem", height: "1.75rem", lineHeight: 1 }}
                                />
                          )
                        : (
                            <span
                              className={`skill-icon has-text-link is-size-3 ${project.x_icon}`}
                            ></span>
                          )
                      }
                    </div>
                    <div className="media-content">
                      <p className="skill-title is-size-6">{project.name}</p>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="is-size-7 has-text-link"
                        >
                          <span className="icon is-small">
                            <i className={project.x_link_icon || "fab fa-github"}></i>
                          </span>
                          <span> {project.x_link_label || "View on GitHub"}</span>
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="has-text-grey is-size-7" style={{ marginBottom: "0.75rem" }}>
                    {Array.isArray(project.x_description_parts)
                      ? renderDescriptionParts(project.x_description_parts)
                      : project.description}
                  </p>
                  {Array.isArray(project.highlights) && project.highlights.length > 0 && (
                    <div className="tags">
                      {project.highlights.map((tag, i) => (
                        <span key={i} className="tag is-link is-light is-small">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
