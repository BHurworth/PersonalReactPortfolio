import React from "react";
import ProjectCard from "../projects/projectCard";
import img1 from "../../../../assets/images/data.png";
import separator from "../../../../assets/images/Vector 1.png";
import img2 from "../../../../assets/images/happy-music.png";
import img3 from "../../../../assets/images/personal-site.png";

function projects() {
  return (
    <div className="projects-wrapper">

      {/* SEPERATOR */}

      <h1 id="sub-title">My Latest Projects</h1>
      <div id="divider-line"></div>

      <ProjectCard
        title="Game Stat-tracker"
        desc="A website which combines stat-tracking with the news on upcoming tournaments and the game"
        img={img1}
        link = 'https://hungry-poitras-25342f.netlify.app/'
        gitLink = 'https://github.com/BHurworth/Game-Stat-Tracker'
        linkDesc='View Project'
      ></ProjectCard>
      <ProjectCard
        title="Psyche Support"
        desc="A mental health app created to give users easy access to useful tools and support them as they achieve their goals"
        img={img2}
        gitLink = 'https://github.com/BHurworth/Social-Anxiety-Relief-App'
        linkDesc='N/A'
      ></ProjectCard>
      <ProjectCard
        title="Personal Website"
        desc="My first project: a personal website creates with HTML/CSS/JS to display my latest projects and photos"
        img={img3}
        link = 'https://www.benhurworth.com/'
        gitLink = 'https://github.com/BHurworth/Personal-Portfolio'
        linkDesc='View Project'
      ></ProjectCard>
    </div>
  );
}

export default projects;
