import React from "react";
import "./about.css";
import Me from "../../images/portfolio_headshot.png";
import { Card, Button } from "react-bootstrap";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Animated animationIn="fadeInUpBig" animationOut="fadeOut" isVisible={true}>
      <section className="about pb-5">
        <div className="about-name">
          <div>
            <Card.Img className="card-img" variant="top" src={Me} />
          </div>
          <h1>Jess Varghese</h1>
          <h4>Technical Project Manager | Digital Media Professional</h4>
        </div>

        <div className="about-left-wrapper">
          <div className="about-desc">
         <text>
I am a seasoned Technical Project Manager and digital professional with over 15 years of expertise in managing complex content management, asset, and migration projects. My skills in project management, technical leadership, and team management are complemented by my proficiency in CMS, HTML, CSS, SEO, and DAM. As an Account Executive, I successfully oversaw top healthcare clients, guiding the implementation of digital platforms and video strategies. A strong communicator, I collaborate seamlessly with UI/UX Designers, writers, and other team members, ensuring efficient project execution.</text> 
            <br></br>
            <br></br>
            <text>When I am not working, I enjoy
              spending time with family, my dog Herbie, traveling, cooking,
              reading non-fiction books, true crime podcasts, and going to live concerts.</text>
          </div>
        </div>
        <Link to="/portfolio">
          <Button variant="outline-dark p- m-2">My Work</Button>
        </Link>
      </section>
    </Animated>
  );
};

export default About;
