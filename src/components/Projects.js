import React from 'react';
import Project from './Project';

function Projects() {
  return (
    <section id="projects" className="projects">
    <div className="projects-bg pt-xl pb-md">Projects</div>
    <div className="work-grid mb-md">
      <Project name="Movies" website="https://albertolopezbastos.github.io/movies" github="https://github.com/AlbertoLopezBastos/movies" img="movies"/>
    </div>
  </section>
  )
}

export default Projects
