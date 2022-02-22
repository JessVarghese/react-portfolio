import React from "react";
import { Card, Row, Col, CardGroup } from "react-bootstrap";
import ProjOne from '../../images/TPP.png'
import ProjTwo from '../../images/catmom.jpg'
import RunBuddy from '../../images/run_buddy_image.png'
import {Animated} from "react-animated-css";

function Portfolio() {
    return (
        <Animated animationIn="fadeInUpBig" animationOut="fadeOut" isVisible={true}>
        <CardGroup>
  <Card>
    <Card.Img variant="top" src={ProjOne} />
    <Card.Body>
      <Card.Title>The Pet Project</Card.Title>
      <Card.Text>
        TEST
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={ProjTwo} />
    <Card.Body>
      <Card.Title>Cat Mom Dot Com</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" src={RunBuddy} />
    <Card.Body>
      <Card.Title>Run Buddy</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>
      </Animated>
    );
}

export default Portfolio;