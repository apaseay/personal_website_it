import React from "react";
import Badge from "../elements/Badge";
import Resume from "../../resume.json";

function AboutMe() {
  return (
    <section className="section has-background-link" id="aboutMe">
      <div className="container has-text-centered">
        <figure className="image container is-180x180">
          <img
            src={`${import.meta.env.BASE_URL}${Resume.basics.picture}`}
            alt={Resume.basics.name}
            className="profile"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `${import.meta.env.BASE_URL}${Resume.basics.x_pictureFallback}`;
            }}
          />
        </figure>

        <p className="subtitle is-4 has-text-white has-text-weight-bold about-greeting">
          {Resume.basics.x_title}
        </p>

        <p className="subtitle is-5 has-text-white has-text-weight-bold about-name">
          {Resume.basics.name}
        </p>

        <hr className="about-divider" />

        <p className="subtitle is-5 has-text-white has-text-weight-light summary-text">
          {Resume.basics.summary}
        </p>

        <div className="container interests">
          <div className="field is-grouped is-grouped-multiline has-text-centered">
            {Resume.interests.map((value, index) => (
              <Badge key={index} text={value.name} faIcon={value.x_icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;