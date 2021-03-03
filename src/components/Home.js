import React from 'react'

function Home() {
  return (
      <section className="home">
        <nav className="navbar">
          <a className="navbar__btn" id="projects-btn" href="#projects">Portfolio</a>
          <a className="navbar__btn" id="contact-btn" href="#contact">Contact</a>
        </nav>
      <main className="hero">
        <div className="hero__presentation">
          <h1 className="heading-1">Alberto Lopez Bastos</h1>
          <h2 className="heading-2 mb-sm">front-end javascript web developer</h2>
          <div className="btn "><a id="about-btn" href="#about">About Me</a></div>
        </div>
        <aside className="hero__social">
          <a href="https://www.facebook.com/AlbertoLopezBastos" target="blank">        
            <svg className="hero__icon">          
              <use xlinkHref="img/sprites.svg#icon-facebook-with-circle"></use>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/albertolopezbastos/" target="blank">
            <svg className="hero__icon">
              <use xlinkHref="img/sprites.svg#icon-linkedin-with-circle"></use>
            </svg>
          </a>
          <a href="https://twitter.com/albertolopezba8" target="blank">
            <svg className="hero__icon">
              <use xlinkHref="img/sprites.svg#icon-twitter-with-circle"></use>
            </svg>
          </a>
          <a href="https://github.com/AlbertoLopezBastos" target="blank">
            <svg className="hero__icon">
              <use xlinkHref="img/sprites.svg#icon-github"></use>
            </svg>
          </a>
        </aside>
      </main>
    </section>
  )
}

export default Home
