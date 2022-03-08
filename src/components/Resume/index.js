import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

      <div class="p-2" className="resume-section">
        <div>
          <div class="p-2">
            <h3>Summary</h3>
            <p>
              Front-End Web Developer with extensive experience working in the
              digital media field. Recently earned a certificate in full-stack
              web development from the UConn Coding Bootcamp. Creative
              problem-solver, passionate about building applications and
              learning new technologies that streamline the user experience and
              meet client’s end goals. Strengths in collaboration, meeting
              deadlines and project management make me a strong addition to your
              team.
            </p>
          </div>

          <div class="p-3">
            <h3>Education</h3>
            <p>
              <strong>Certificate, Full Stack Web Development,</strong> UConn
              Coding Bootcamp - 2022
            </p>
            <p>
              <strong>
                Bachelor of Science in Communications and Mass Media,
              </strong>{" "}
              Nyack College, Nyack, NY - 2006
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

          <div class="p-3">
            <h6>
              CONNECTICUT PUBLIC TELEVISION - Hartford, CT - August 2006 -
              October 2008
            </h6>
            <p>
              <strong>Freelance Production Assistant</strong>
            </p>
            <p>
              <em>
                Projects | Credits: Work. Learn. Live. (Connecticut) | Critical
                Call for Oral Health | Aging in Place
              </em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
