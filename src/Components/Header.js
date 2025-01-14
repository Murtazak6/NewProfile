import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const logo = this.props.data.logo
    const description = this.props.data.description;
    // "color"
    // "ball"
    // "lines"
    // "thick"
    // "circle"
    // "cobweb"
    // "polygon"
    // "square"
    // "tadpole"
    // "fountain"
    // "random"
    // "custom"
    return (
      <header id="home">
        <ParticlesBg type="cobweb" color="#393186" num={150} bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            {/* <li>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li> */}

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <img src={logo} style={{height:'200px'}} alt="logo"/>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              {description.split('\n').map((e) => <h3>{e}</h3>)}
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                {project ? <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a>: null}
                {github ? <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>:null}
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
