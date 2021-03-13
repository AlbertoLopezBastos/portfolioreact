import React from 'react';
import Project from './Project';
import Images from './Images';

function Projects() {
  return (
    <section id="projects" className="projects">
    <div className="projects-bg pt-xl pb-md">Projects</div>
    <div className="work-grid mb-md">
      <Project img={Images.kimi} name="Kimi" website="https://www.kimiartesanal.com.ar" github="https://github.com/AlbertoLopezBastos/kimiwebreact"/>
      <Project img={Images.movies} name="Movies" website="https://albertolopezbastos.github.io/movies" github="https://github.com/AlbertoLopezBastos/movies"/>

    </div>
  </section>
  )
}

export default Projects
