import React from "react";
import { Card, CardGroup, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProjOne from "../../images/TPP.png";
import ProjTwo from "../../images/catmom.jpg";
import ProjThree from "../../images/GG_thumb.jpeg"
import Wedash from "../../images/weather_dashboard_thumb.png";
import CommUnity from "../../images/common_unity.png";
import ReadmeGen from "../../images/readme_gen.png";
import PassGen from "../../images/password_gen.png";
import { Animated } from "react-animated-css";

function Portfolio() {
  return (
    <Animated animationIn="fadeInUpBig" animationOut="fadeOut" isVisible={true}>
      <Container>
        <Row lg={2}>
          <Col xs={3}>
            <Card className="p-3">
              <a
                href="https://limitless-sands-09171.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img variant="top" src={ProjThree} />
                <Card.Body>
                  <Card.Title>Gamers Garage</Card.Title>
                </Card.Body>
              </a>
              <Card.Subtitle>
                Technologies: MERN Stack , GraphQL, RAWG Video Games API
              </Card.Subtitle>

              <Card.Text className="mt-3">
                Gamers Garage is an application for the user who is interested
                in browsing a database of video games they might be interested
                in playing.
              </Card.Text>

              <a
                href="https://github.com/Chis517/gamers-garage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Subtitle className="mt-3">Github Link</Card.Subtitle>
              </a>
            </Card>
          </Col>



          <Col xs={3}>
            <Card className="p-3">
              <a
                href="https://jessvarghese.github.io/Pet-Project/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img variant="top" src={ProjOne} />
                <Card.Body>
                  <Card.Title>The Pet Project</Card.Title>
                </Card.Body>
              </a>
              <Card.Subtitle>
                Technologies: Bulma, RescueGroups.org API ,
                ZipAPI.us
              </Card.Subtitle>

              <Card.Text className="mt-3">
                The Pet Project is an application that allows a user to easily
                find a Dog or Cat to potentially adopt. The user can use the
                search function to select either a Dog or Cat and search for
                those animals by location.
              </Card.Text>

              <a
                href="https://jessvarghese.github.io/Pet-Project/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Subtitle className="mt-3">Github Link</Card.Subtitle>
              </a>
            </Card>
          </Col>

          <Col xs={2}>
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
              <Card.Text className="mt-3">
                Who doesn’t love GIFs of cute cuddly cats? CatMom DotCom is a
                site intended for a user to login to view random cat GIFs, facts
                and get specific info on a particular breed of cat.
              </Card.Text>
              <a
                href="https://github.com/Chis517/cat-mom-dotcom"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Subtitle className="mt-3">Github Link</Card.Subtitle>
              </a>
            </Card>
          </Col>

          <Col xs={4}>
            <Card className="p-3">
              <a
                href="https://github.com/JessVarghese/common-unity-network"
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

              <Card.Text className="mt-3">
                The Common Unity Network is a social application using a NoSQL
                database where you can create users, add friends, share thoughts
                and reactions.
              </Card.Text>

              <a
                href="https://github.com/JessVarghese/common-unity-network"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Subtitle className="mt-3">Github Link</Card.Subtitle>
              </a>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Second row of projects */}

      <Container>
        <Row>
          <Col xs={4}>
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

              <Card.Subtitle>
                Technologies: HTML, Javascript, Inquirer
              </Card.Subtitle>
              <Card.Text className="mt-3">
                The Rocket README is a command line application that utilizes
                the inquirer package to generate a README file based on the
                users criteria.
              </Card.Text>
              <a
                href="https://github.com/JessVarghese/Rocket-README"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Subtitle className="mt-3">Github Link</Card.Subtitle>
              </a>
            </Card>
          </Col>

          <Col xs={4}>
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
              <Card.Text className="mt-3">
                This application generates a random secure password based on the
                user's selected criteria.
              </Card.Text>
              <a
                href="https://github.com/JessVarghese/password-generator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Subtitle className="mt-3">Github Link</Card.Subtitle>
              </a>
            </Card>
          </Col>

          <Col xs={4}>
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
              <Card.Subtitle>
                Technologies: jQuery, Moment.js, BULMA, HTML, Javascript
              </Card.Subtitle>
              <Card.Text className="mt-3">
                This application provides the user a way to easily search a city
                and have the current and five-day weather forecast displayed on
                the dashboard.
              </Card.Text>
              <a
                href="https://github.com/JessVarghese/weather_dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Subtitle className="mt-3">Github Link</Card.Subtitle>
              </a>
            </Card>
          </Col>
        </Row>
      </Container>
    </Animated>
  );
}

export default Portfolio;
