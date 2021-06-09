import React from "react";
import ProjectCard from "../projects/projectCard";
import img1 from "../../../../assets/images/data.png";
import separator from "../../../../assets/images/Vector 1.png";
import img2 from "../../../../assets/images/happy-music.png";
import img3 from "../../../../assets/images/personal-site.png";

function projects() {
  return (
    <div className="projects-wrapper">
      <img src={separator}></img>
      <h1 id="sub-title">My Latest Projects</h1>
      <div id="divider-line"></div>

      <ProjectCard
        title="Game Stat-tracker"
        desc="A website which combines stat-tracking with the news on upcoming tournaments and the game"
        img={img1}
      ></ProjectCard>
      <ProjectCard
        title="Psyche Support"
        desc="A mental health app created to give users easy access to useful tools and support them as they achieve their goals"
        img={img2}
      ></ProjectCard>
      <ProjectCard
        title="Personal Website"
        desc="My first project: a personal website creates with HTML/CSS/JS to display my latest projects and photos"
        img={img3}
      ></ProjectCard>
    </div>
  );
}

export default projects;
