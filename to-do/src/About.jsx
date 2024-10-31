import React from "react";
import "./style.css";
import AboutImg from "./imges/about.png";
import ToDo from "./imges/ToDo.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="content">
            <img src={ToDo} alt="img" />
            <div className="nav-text">
              <Link to="/">Home</Link>
              <Link className="Active" to="/about">
                About
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="main-header">
          <div className="container">
            <div className="content-main">
              <h1>Simple ToDo App</h1>
              <p>This todo app for test design.</p>
            </div>
          </div>
        </div>
        <section>
          <div className="container">
            <div className="about-img">
              <img className="img" src={AboutImg} alt="" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
