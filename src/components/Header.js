import React from 'react'

const Header = () => {
  return (
    <header className="masthead text-white text-center">
      <div className="overlay"></div>
      <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source src="https://user-images.githubusercontent.com/43749971/107545995-a7471d00-6baa-11eb-9c75-e31da86a6e76.mp4" type="video/mp4" />
      </video>
      <div className="container position-relative d-flex align-items-center flex-column">
        <img className="masthead-avatar mb-5 rounded-circle" src="https://avatars0.githubusercontent.com/u/43749971" alt="" />
        <h1 className="masthead-heading mb-0">John Emerson</h1>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-code"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        <p className="masthead-subheading font-weight-light mb-0">I'm <span className="typed-text"></span><span className="cursor">&nbsp;</span></p>
      </div>
    </header>
  )
}

export default Header
