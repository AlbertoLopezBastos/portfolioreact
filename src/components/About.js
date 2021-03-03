import React from 'react'

function About() {
  return (
    <section id="about" className="about">
      <div className="about-bg pt-md pb-xl">About me</div>
      <div className="about__content pb-xl">
        <p className="about__paragraph mb-xl"> Learning and loving web development since 2012. I've worked with excellent
        colleagues and was lucky
        enough to eventually lead a wonderful, professional team. Always looking for new challenges!</p>
        <div className="cards-grid mt-lg mb-xl">
          <div className="card">
            <div className="card__side card__side--front card__side--front-1">
              <figure>
                
              </figure>
              <h4 className="heading-4 mt-md mb-sm">Front-end Developer</h4>
              <p>I like to code things from designs, and enjoy bringing ideas to life in the browser.</p>
            </div>
            <div className=" card__side card__side--back card__side--back-1">
              <h3 className="heading-3 mt-sm">Front-End</h3>
              <h4 className="heading-4">Languages:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Sass</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Redux</li>
              </ul>
              <h4 className="heading-4">Dev Tools:</h4>
              <p>VsCode, Chrome DevTools, Git, NPM, Terminal </p>
            </div>
          </div>
          <div className="card">
            <div className="card__side card__side--front card__side--front-2">
              <figure>
              </figure>
              <h4 className="heading-4 mt-md mb-sm">Back-End Developer</h4>
              <p>I'm curious in learning about backend too!</p>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <h3 className="heading-3 mt-sm">Back-End</h3>
              <h4 className="heading-4">Languages I speak:</h4>
              <ul>
                <li>Node</li>
                <li>Express</li>
                <li>Mongodb</li>
              </ul>
              <h4 className="heading-4">Dev Tools:</h4>
              <p>Postman, Mongodb Atlas, Firebase, SQL Server</p>
            </div>
          </div>
          <div className="card">
            <div className="card__side card__side--front card__side--front-3">
              <figure>
              </figure>
              <h4 className="heading-4 mt-md mb-sm fw-bold">Testing</h4>
              <p>Always important!</p>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <h3 className="heading-3 mt-sm">Testing</h3>
              <h4 className="heading-4">Tools I use:</h4>
              <ul>
                <li>Jest</li>
                <li>Enzyme</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
