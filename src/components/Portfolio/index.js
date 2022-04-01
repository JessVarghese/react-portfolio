import React from "react";
import { Card, Row, Col, Container, CardGroup } from "react-bootstrap";

import ProjOne from "../../images/unsplash_img_cd.jpg";
import ProjTwo from "../../images/catmom.jpg";
import ProjThree from "../../images/GG_thumb.jpeg";
import Wedash from "../../images/weather_dashboard_thumb.png";
import CommUnity from "../../images/common_unity.png";
import ReadmeGen from "../../images/readme_gen.png";
import PassGen from "../../images/password_gen.png";
import Thankamma from "../../images/tk_homepage.png";
import { Animated } from "react-animated-css";
import { Button } from "bootstrap";

function Portfolio() {
  return (
    <Animated animationIn="fadeInUpBig" animationOut="fadeOut" isVisible={true}>
      <CardGroup>
        <Card>
          <a href="https://jessvarghese.github.io/Thankammas-Kitchen/" target="_blank" rel="noopener noreferrer">
            <Card.Img variant="top" src={Thankamma} />
          </a>
          <Card.Body>
            <Card.Title>
              <a href="https://jessvarghese.github.io/Thankammas-Kitchen/" target="_blank" rel="noopener noreferrer">
                Thankamma's Kitchen
              </a>
            </Card.Title>
            <Card.Text>
              Thankamma's Kitchen is a fictional restaurant multi-page website
              intended for the user to view a new up-and-coming restaurant. The
              user can view visit info, contact information, menu, and can
              provide their email address using the modal to stay up to date on
              restaurant news.
              <br></br>
              <br></br>
              <Card.Subtitle>
                Technologies: HTML, CSS, jQuery and Bootstrap
              </Card.Subtitle>
            </Card.Text>
            <div class="p-3">
              <a
                href="https://github.com/JessVarghese/Thankammas-Kitchen"
                target="_blank"
                title="GitHub"
              >
                <i class="fa fa-github fa-3x"></i>
              </a>
            </div>
          </Card.Body>
        </Card>

        
        <Card>
        <a href="https://jessvarghese.github.io/Pet-Project/" target="_blank" rel="noopener noreferrer">
          <Card.Img variant="top" src={ProjOne} />
          </a>
          <Card.Body>
          <a href="https://jessvarghese.github.io/Pet-Project/" target="_blank" rel="noopener noreferrer">
              <Card.Title>The Pet Project</Card.Title>
            </a>
            <Card.Text>
              The Pet Project is a simple mobile-first application that allows a
              user to easily find a dog or cat to potentially adopt. he user can
              cheese with a dog or cat to search for, as well as input their zip
              code to view the distance between their location and the pet's
              location.
              <br></br>
              <br></br>
              <Card.Subtitle>
                Technologies: Bulma, RescueGroups.org API , ZipAPI.us
              </Card.Subtitle>
            </Card.Text>
            <div class="p-3">
              <a
                href="https://github.com/JessVarghese/Pet-Project"
                target="_blank"
                title="GitHub"
                rel="noopener noreferrer"
              >
                <i class="fa fa-github fa-3x"></i>
              </a>
            </div>
          </Card.Body>
        </Card>

        <Card>
        <a href="https://glacial-plains-94450.herokuapp.com/login"
                target="_blank"
                rel="noopener noreferrer">
          <Card.Img variant="top" src={ProjTwo} />
          </a>
          <Card.Body>
          <a href="https://glacial-plains-94450.herokuapp.com/login"
                target="_blank"
                rel="noopener noreferrer">

            <Card.Title>Cat Mom Dot Com</Card.Title>
            </a>
            <Card.Text>
            Who doesn’t love GIFs of cute cuddly cats? CatMom DotCom is a
                site intended for a user to login to view random cat GIFs, facts
                and get specific info on a particular breed of cat.

                <br></br>
              <br></br>
                <Card.Subtitle>
                Technologies: Bcrypt, cookie parser, dotenv, express,
                express-handlebars, express session, handlebars, morgan, mysql2,
                requirejs, sequelize, HTML, CSS, BULMA, Boostrap, Javascript
              </Card.Subtitle>
            </Card.Text>
            <div class="p-3">
              <a
                href="https://github.com/Chis517/cat-mom-dotcom"
                target="_blank"
                title="GitHub"
              >
                <i class="fa fa-github fa-3x"></i>
              </a>
            </div>
          </Card.Body>
          
        </Card>
      </CardGroup>



      <CardGroup>
        <Card>
          <a href="https://jessvarghese.github.io/password-generator/" target="_blank"
                rel="noopener noreferrer">
            <Card.Img variant="top" src={PassGen} />
          </a>
          <Card.Body>
            <Card.Title>
              <a href="https://jessvarghese.github.io/password-generator/" target="_blank"
                rel="noopener noreferrer">
              Password Generator
              </a>
            </Card.Title>
            <Card.Text>
            This application generates a random secure password based on the
                user's selected criteria.

              <br></br>
              <br></br>
              <Card.Subtitle>
              jQuery, Moment.js, BULMA, HTML, Javascript
              </Card.Subtitle>
            </Card.Text>
            <div class="p-3">
              <a
                href="https://github.com/JessVarghese/password-generator"
                target="_blank"
                title="GitHub"
                rel="noopener noreferrer"
              >
                <i class="fa fa-github fa-3x"></i>
              </a>
            </div>
          </Card.Body>
        </Card>

        
        <Card>
        <a href="https://jessvarghese.github.io/weather_dashboard/" target="_blank"
                rel="noopener noreferrer">
          <Card.Img variant="top" src={Wedash} />
          </a>
          <Card.Body>
            <a href="https://jessvarghese.github.io/weather_dashboard/" target="_blank">
              <Card.Title>Weather Dashboard</Card.Title>
            </a>
            <Card.Text>
            This application provides the user a way to easily search a city
                and have the current and five-day weather forecast displayed on
                the dashboard.
              <br></br>
              <br></br>
              <Card.Subtitle>
              Technologies: jQuery, Moment.js, BULMA, HTML, Javascript
              </Card.Subtitle>
            </Card.Text>
            <div class="p-3">
              <a
                href="https://github.com/JessVarghese/weather_dashboard"
                target="_blank"
                title="GitHub"
              >
                <i class="fa fa-github fa-3x"></i>
              </a>
            </div>
          </Card.Body>
        </Card>

        <Card>
        <a href="https://github.com/JessVarghese/common-unity-network"
                target="_blank"
                rel="noopener noreferrer">
          <Card.Img variant="top" src={CommUnity} />
          </a>
          <Card.Body>
          <a href="https://github.com/JessVarghese/common-unity-network"
                target="_blank"
                rel="noopener noreferrer">
            <Card.Title>Common Unity Network</Card.Title>
            </a>
            <Card.Text>
            The Common Unity Network is a social application using a NoSQL database where you can create users, add friends, share thoughts and reactions.

                <br></br>
              <br></br>
                <Card.Subtitle>
                Technologies: Express, Mongoose, Insomnia
              </Card.Subtitle>
            </Card.Text>
            <div class="p-3">
              <a
                href="https://github.com/JessVarghese/common-unity-network"
                target="_blank"
                title="GitHub"
              >
                <i class="fa fa-github fa-3x"></i>
              </a>
            </div>
          </Card.Body>
          
        </Card>
      </CardGroup>



    </Animated>
  );
}

export default Portfolio;
