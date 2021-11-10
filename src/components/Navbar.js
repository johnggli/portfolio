import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent text-uppercase fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">John Emerson</a>
        <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars" style={{fontSize: 1.25 + 'rem'}}></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger lang" href="#portfolio" key="portfolio">Portfolio</a></li>
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger lang" href="#about" key="about">About</a></li>
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger lang" href="#contact" key="contact">Contact</a></li>
            <li className="nav-item mx-0 mx-lg-1 dropdown">
              <a className="nav-link py-3 px-0 px-lg-3 rounded dropdown-toggle lang" href="#" id="navbardrop" data-toggle="dropdown" key="language">English</a>
              <div className="dropdown-menu">
                <a className="dropdown-item js-scroll-trigger translate" id="en">English</a>
                <a className="dropdown-item js-scroll-trigger translate" id="pt">Português</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
