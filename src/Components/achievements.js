import React from "react";

const Achievements = ({ data }) => {
  if (data) {
    var achievements = data.achievements.map(function (achievements) {
      return (
        <li key={achievements.user}>
          <blockquote>
            <p>{achievements.text}</p>
            <cite>{achievements.user}</cite>
          </blockquote>
        </li>
      );
    });
  }

  return (
    <section id="achievements">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client achievements</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{achievements}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
