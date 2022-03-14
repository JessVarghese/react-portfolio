import React from "react";
import "./about.css";
import Me from "../../images/portfolio_headshot.png";
import ReactRoundedImage from "react-rounded-image";
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
          <h4>Digital Media Professional | Front End Web Developer</h4>
        </div>

        <div className="about-left-wrapper">
          <div className="about-desc">
         <text>
          Over the last decade I’ve gained extensive experience within the
            digital media landscapes.</text> 
            <br></br>
            <br></br>
            <text>
            In my most recent role as an Account
            Executive for a physician healthcare marketing company, I managed
            the company’s portfolio of top hospital, medical device, and medical
            education clients and served as a key advisor in the implementation
            of their digital publishing platform and video content marketing
            strategy. In addition, I directed a cross functional team comprised
            of employees within our production, marketing, design, and
            development departments. Prior to my promotion to Account Executive,
            I managed all stages of production, produced live surgical webcasts
            to clinical round table discussions, and played a key role in
            editing web and video content for client websites as a senior video
            producer. </text>
            <br></br>
            <br></br>
            I recently earned a certificate in full-stack web
            development from the UConn Coding Bootcamp where I developed skills
            in HTML, JavaScript, CSS, React.js, Node.JS, and responsive web
            design. As an innovative problem solver passionate about developing
            apps, with a focus on mobile-first design and development, I am
            currently looking for opportunities to combine my experience with my
            new skills in full stack development.
            <br></br>
            <br></br>
            <text>Outside of work and learning about web development, I enjoy
              spending time with family, my dog Herbie, traveling, cooking,
              reading non-fiction books, and going to live concerts.</text>
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
