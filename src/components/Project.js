import React from 'react'

function Project(props) {
  return (
      <div className="project">
        <figure className="project__figure">
          <div className="project__img project__img-1"></div>
          <figcaption>
            <h3 className="project__title heading-3 fw-light text-secondary">{props.name}</h3>
            <a className="project__web text-secondary" href={props.website} target="_blank" rel="noreferrer" >Visit Website</a>
            <a className="project__github text-secondary" href={props.github} target="_blank" rel="noreferrer">Visit Github</a>
          </figcaption>
        </figure>
        <a className="project__web2 text-primary" href={props.website} target="_blank" rel="noreferrer">Website</a>
        <a className="project__github2 text-primary" href={props.github} target="_blank" rel="noreferrer" >Github</a>
      </div>
  )
}

export default Project
