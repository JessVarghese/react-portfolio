import React from 'react'
import { Navbar, Container,Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Footer/footer.css'



export const Footer = () => {
  return (
      


<Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="mx-auto">
      <div className="icon-container">
        <div><a href="https://github.com/jessvarghese" target="_blank" title="GitHub"><i class="fa fa-github fa-3x"></i></a>
        </div>
        <div><a href="https://www.linkedin.com/in/jessvarghese/" target="_blank" title="Linkedin"><i class="fa fa-linkedin fa-3x"></i></a>
        </div>
        <div><a href="mailto: JessVargehse@gmail.com" target="_blank" title="Email"><i class="fa fa-envelope fa-3x"></i></a>
        </div>
        
    </div>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default Footer;
