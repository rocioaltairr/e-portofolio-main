import React, { useState } from 'react';
import ParticlesBg from 'particles-bg';
import Fade from 'react-reveal';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <header id="home">
      <ParticlesBg type="circle" bg={true} />

      <nav id="nav-wrap">

        <ul id="nav" className="nav nav-web">
          <li className="current">
            <a className="smoothscroll" href="">
              Home
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="">
              <Link to="/about">About</Link>
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="">
              <Link to="/resume">Course</Link>
            </a>
          </li>
        </ul>
        <a onClick={toggle}  className="mobile-btn">
          Show navigation
        </a>
        {isOpen && (
          <ul id="nav" className="nav nav-mobile">
            <li className="current">
              <a className="smoothscroll" href="">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="">
                <Link to="/about">About</Link>
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="">
                <Link to="/resume">Course</Link>
              </a>
            </li>
          </ul>
        )}
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <Fade bottom>
            <h1 className="responsive-headline">Rocio Altair</h1>
          </Fade>
          <Fade bottom duration={1200}>
            <p>SOFTWARE DEVELOPER & MSC COMPUTER SCIENCE STUDENT IN ESSEX</p>
          </Fade>
          <hr />
          <Fade bottom duration={2000}>
            <ul className="social">
              <a href="{project}" className="button btn project-btn">
                <i className="fa fa-book"></i>Project
              </a>
              <a href="https://github.com/rocioaltairr" className="button btn github-btn">
                <i className="fa fa-github"></i>Github
              </a>
            </ul>
          </Fade>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;