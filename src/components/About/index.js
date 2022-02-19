import React from 'react'
import "./about.css"
import Me from '../../img/portfolio_headshot.png'
import ReactRoundedImage from "react-rounded-image";


const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-left-wrapper">
            <h2 className="about-hello">Hello, my name is</h2>
            <h1 className="about-name">Jess Varghese</h1>
            <div className="about-desc">
            Welcome to my portfolio page! Over the last decade I’ve worked within
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
            skills in full-stack development.
          </div>
        </div>
      </div>
      <div className='about-right'>
      <ReactRoundedImage image={Me} roundedColor="black" roundedSize="10" imageWidth="700" imageHeight="700" />
      </div>
    </div>
  );
}

export default About;