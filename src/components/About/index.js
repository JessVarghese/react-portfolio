import React from 'react'
import "./about.css"
import Me from '../../images/portfolio_headshot.png'
import ReactRoundedImage from "react-rounded-image";
import { Card } from 'react-bootstrap';
import {Animated} from "react-animated-css";

const About = () => {
  return (
<Animated animationIn="fadeInUpBig" animationOut="fadeOut" isVisible={true}>
    <section className="about pb-5">
      
      
      <div className="about-name">
      <div>
      <Card.Img className='card-img' variant="top" src={Me} />
      </div>
      <h1>Jess Varghese</h1>
      <h4>Digital Media Professional | Full Stack Web Developer</h4>

      </div>
      
        <div className="about-left-wrapper">
          
            <div className="about-desc">
            Over the last decade I’ve worked within
            the digital media landscapes. In my most recent role as an Account
            Executive for a physician healthcare marketing company, I managed the
            company’s portfolio of top hospital, medical device, and medical
            education clients and served as a key advisor in the implementation of
            their digital publishing platform and video content marketing
            strategy. In addition, I directed a cross functional team comprised of
            employees within our production, marketing, design, and development
            departments. Prior to my promotion to Account Executive, I managed all
            stages of production, produced live surgical webcasts to clinical
            round table discussions, and played a key role in editing web and
            video content for client websites as a senior video producer. I am
            currently look for opportunities to combine my experience with my new
            skills in full stack development.
          </div>
        </div>
      
      
    </section>
    </Animated>
  );
}

export default About;