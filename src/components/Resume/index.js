import React from "react";
import { Button } from "react-bootstrap";
import pdf from "../../docs/JessVarghese_Resume.pdf";
import { Link } from "react-router-dom";

import "../Resume/resume.css";

const Resume = () => {
  return (
    <div className="resume-form">
      <div className="p-3">
        <h1>Jess Varghese</h1>
        <div className="social-icons">
          <div>
            <a
              href="https://github.com/jessvarghese"
              target="_blank"
              title="GitHub"
            >
              <i class="fa fa-github fa-3x"></i>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/jessvarghese/"
              target="_blank"
              title="Linkedin"
            >
              <i class="fa fa-linkedin fa-3x"></i>
            </a>
          </div>
          <div>
            <a
              href="mailto: JessVargehse@gmail.com"
              target="_blank"
              title="Email"
            >
              <i class="fa fa-envelope fa-3x"></i>
            </a>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <a href={pdf} target="_blank">
          <Button>Download Resume</Button>
        </a>
      </div>

      <div class="p-4" className="resume-section">
        <div>
          <div class="p-2">
            <h3>Summary</h3>
            <p>
            Experienced Technical Project Manager with 15+ years of experience managing and analyzing complex content management, asset, and migration projects. Skilled in project management, technical leadership, and team management, a strong communicator with the ability to collaborate effectively with UI/UX Designers, writers, and other valuable team members. Proficient in CMS, HTML, CSS, SEO, and DAM. 
            </p>
          </div>

          <div class="p-3">
            <h3>Education</h3>
            <p>
              <strong>Certificate, Full Stack Web Development,</strong> UConn
              Coding Bootcamp
            </p>
            <p>
              <strong>
                Bachelor of Science in Communications and Mass Media,
              </strong>{" "}
              Nyack College, Nyack, NY
            </p>
          </div>

          <div class="p-3">
            <h3>Relevant Skills</h3>
            <p>
              JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL,
              Express, React, Node, Handlebars, jQuery, Bootstrap
            </p>
          </div>


          <div class="p-3">
            <h3 class="p-2">Experience</h3>

            <div class="p-3">
            <h6>
              REBEL INTERACTIVE GROUP - Cheshire, CT - October 2021 -
              Present
            </h6>
            <p>
              <strong>Technical Project Manager</strong>
            </p>
          </div>
            <h6>BROADCASTMED - Farmington, CT - October 2012 - October 2021</h6>
            <div class="p-2">
              <p>
                <strong>Account Executive</strong>
              </p>
              <p>July 2018 – October 2021</p>
            </div>
            <div class="p-2">
              <p>
                <strong>Senior Producer</strong>
              </p>
              <p>January 2014 - July 2018</p>
            </div>
            <div class="p-2">
              <p>
                <strong>Content Editor</strong>
              </p>
              <p> October 2012 - January 2014</p>
            </div>
          </div>

          <div class="p-3">
            <h6>
              CONNECTICUT SCIENCE CENTER - Hartford, CT - June 2009 - October
              2012
            </h6>
            <p>
              <strong>Digital Multimedia Specialist</strong>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Resume;
