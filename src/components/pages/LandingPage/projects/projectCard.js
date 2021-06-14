import React from "react";
import git from "../../../../assets/images/git64.png";
import btn from "../../../../assets/images/project-btn.png";

function projectCard({ img, desc, title, link, gitLink, linkDesc }) {
  return (
    <div className="project-card">
      <img className="project-image" src={img} />
      <div className="project-text">
        <div className="project-info">
          <h1 className="project-title">{title}</h1>
          <div id="divider-line-small"></div>
          <h2 className="project-desc">{desc}</h2>
        </div>
        <div className="buttons">
          <a className='project-link' href={link}><div className="project-btn">{linkDesc}</div></a>
          <a className='project-link' href={gitLink}><img className="git-logo" src={git}></img></a>
        </div>
      </div>
    </div>
  );
}

export default projectCard;
