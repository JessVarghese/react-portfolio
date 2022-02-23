import React from "react";
import { Card, CardGroup, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProjOne from "../../images/TPP.png";
import ProjTwo from "../../images/catmom.jpg";
import Wedash from "../../images/weather_dashboard_thumb.png";
import CommUnity from "../../images/common_unity.png";
import ReadmeGen from "../../images/readme_gen.png";
import PassGen from "../../images/password_gen.png";
import { Animated } from "react-animated-css";

function Portfolio() {
  return (
    <Animated animationIn="fadeInUpBig" animationOut="fadeOut" isVisible={true}>
      <CardGroup className="p-3 mt-3">
        <Card className="p-3">
          <a
            href="https://jessvarghese.github.io/the_pet_project/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card.Img variant="top" src={ProjOne} />
            <Card.Body>
              <Card.Title>The Pet Project</Card.Title>
            </Card.Body>
          </a>
          <Card.Subtitle>
            Technologies: Bulma, flaticon, RescueGroups.org API , ZipCodeAPI.com
          </Card.Subtitle>
          <Card.Text className="p-2">
            The Pet Project is an application that allows a user to easily find
            a Dog or Cat to potentially adopt. The user can use the search
            function to select either a Dog or Cat and search for those animals
            by location.
          </Card.Text>
        </Card>

        <Card className="p-3">
          <a
            href="https://glacial-plains-94450.herokuapp.com/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card.Img variant="top" src={ProjTwo} />
            <Card.Body>
              <Card.Title>Cat Mom Dot Com</Card.Title>
            </Card.Body>
          </a>
          <Card.Subtitle>
            Technologies: Bcrypt, cookie parser, dotenv, express,
            express-handlebars, express session, handlebars, morgan, mysql2,
            requirejs, sequelize, HTML, CSS, BULMA, Boostrap, Javascript
          </Card.Subtitle>
          <Card.Text className="p-5">
            Who doesn’t love GIFs of cute cuddly cats? CatMom DotCom is a site
            intended for a user to login to view random cat GIFs, facts and get
            specific info on a particular breed of cat.
            </Card.Text>
        </Card>

        <Card className="p-3">
          <a
            href="https://github.com/JessVarghese/common-unity-network#readme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card.Img variant="top" src={CommUnity} />
            <Card.Body>
              <Card.Title>Common Unity Network</Card.Title>
            </Card.Body>
          </a>
          <Card.Subtitle>
            Technologies: Express, Mongoose, Insomnia
          </Card.Subtitle>
          <Card.Text className="p-2">
            The Common Unity Network is a social application using a NoSQL
            database where you can create users, add friends, share thoughts and
            reactions.
          </Card.Text>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card className="p-3">
          <a
            href="https://github.com/JessVarghese/Rocket-README#readme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card.Img variant="top" src={ReadmeGen} />
            <Card.Body>
              <Card.Title>Rocket README</Card.Title>
            </Card.Body>
          </a>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card>


        <Card className="p-3">
          <a
            href="https://jessvarghese.github.io/password-generator/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card.Img variant="top" src={PassGen} />
            <Card.Body>
              <Card.Title>Password Generator</Card.Title>
            </Card.Body>
          </a>
          <Card.Subtitle>Technologies: HTML, Javascript</Card.Subtitle>
          <Card.Text className="p-2">
            The password generator provides a user with a secure password that
            they can utilize for any application requiring a secure password.
            The user will be prompted with windows to select criteria based on
            uppercase and lowercase letters, numbers and symbols to which they
            will then be provided a random password based on the selected
            criteria.
          </Card.Text>
        </Card>



        <Card className="p-3">
          <a
            href="https://jessvarghese.github.io/weather_dashboard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card.Img variant="top" src={Wedash} />
            <Card.Body>
              <Card.Title>Weather Dashboard</Card.Title>
            </Card.Body>
          </a>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card>
      </CardGroup>
    </Animated>
  );
}

export default Portfolio;
