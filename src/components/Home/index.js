import React from "react";
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";
import '../Home/home.css'
import {Animated} from "react-animated-css";


export default function Home() {
  return (
    
    <section className="home">
      <Animated animationIn="fadeInUpBig" animationOut="fadeOut" isVisible={true}>
      <div>
        <p>
        <h2 className="hello" class='animate__fadeIn'>Hello, my name is</h2>
            <h1 className="intro">Jess Varghese</h1>
            <h4 className="cred">Digital Media Professional | Full Stack Web Developer</h4>
        </p>
        <Link to="/about">
        <Button variant="outline-dark p-2 m-2">Learn About Me</Button>
        </Link>
        <Link to="/portfolio">
        <Button variant="outline-dark p- m-2">My Work</Button>
        </Link>
      </div>
      </Animated>
    </section>
    
  );
}

