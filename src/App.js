import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import '../jquery-3.3.1.min';
import "jquery/dist/jquery";
import "bootstrap/dist/css//bootstrap.min.css";

import './App.css';

import NavBar from './components/navbar.component';
import About from './components/about.component';
import Experience from './components/experience.component';
import Education from './components/education.component';
import Skills from './components/skills.component';

class App extends Component {
  state = {

    education: [
      {
        school: "Eulogio 'Amang' Rodriguez Institute of Science and Technology (EARIST - MANILA)",
        course: "Bachelor of Science",
        major: "Computer Science",
        duration: "June 2014 - May 2018"
      },
      {
        school: "Technological Institute of the Philippines (TIP - QC)",
        course: "Bachelor of Science",
        major: "Information Technology",
        duration: "June 2011 - April 2013"
      }
    ],

    experiences: [

      {
        job: "Blockchain Cadet",
        company: "UnionBank of the Philippines",

        jdesc: "Blockchain Trainee",
        duration: "October 15, 2018 - Present"
      },

      {
        job: "Bench Engineer",
        company: "Hewlett-Packard (HP-SC)",
        jdesc: "Troubleshoot and Repair Laptop, Desktop and Printer",
        duration: "June 20, 2017 - August 10, 2018"
      }
    ]
  }
  render() {
    return (
      <div className="App">

        <NavBar></NavBar>
        <About id="about"></About>

        <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
          <div className="w-100">
            <h2 className="mb-5">Experience</h2>
            <Experience id="experience" job={this.state.experiences[0].job}
              company={this.state.experiences[0].company} jdesc={this.state.experiences[0].jdesc}
              duration={this.state.experiences[0].duration}></Experience>
            <Experience id="experience" job={this.state.experiences[1].job}
              company={this.state.experiences[1].company} jdesc={this.state.experiences[1].jdesc}
              duration={this.state.experiences[1].duration}></Experience>
          </div>
        </section>

        <hr className="m-0"></hr>

        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
          <div className="w-100">
            <h2 className="mb-5">Education</h2>
            <Education id="education" school={this.state.education[0].school}
              course={this.state.education[0].course}
              major={this.state.education[0].major} duration={this.state.education[0].duration}>
            </Education>
            <Education id="education" school={this.state.education[1].school}
              course={this.state.education[1].course}
              major={this.state.education[1].major} duration={this.state.education[1].duration}>
            </Education>
          </div>
        </section>

        <hr className="m-0"></hr>
        <Skills id="#skills"></Skills>
      </div>
    );
  }
}

export default App;
