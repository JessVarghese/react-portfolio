import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import{ Navbar, Nav, Container, Redirect} from 'react-bootstrap'
import About from '../About';
import Portfolio from '../Portfolio'
import ContactForm from '../Contact'
import Resume from '../Resume'
import Home from '../Home';
import Footer from '../Footer';

import {
  Routes,
  Route,
  Link,
 HashRouter
} from "react-router-dom";


function TopNav() {
  return (
    <HashRouter>
    <div className='App'>
      <>
       <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to='/'>Jess Varghese Portfolio</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link as={Link} to='/about'>About</Nav.Link>
      <Nav.Link as={Link} to='/portfolio'>Portfolio</Nav.Link>
      <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
      <Nav.Link as={Link} to='/resume'>Resume</Nav.Link>
    </Nav>
    
    </Container>
  </Navbar>

  </>
  <div>
    <Routes>
      <Route path='/about' element={ <About /> } />
      <Route path='/portfolio' element={ <Portfolio /> } />
      <Route path='/contact' element={ <ContactForm/> } />
      <Route path='/resume' element={ <Resume /> } />
      <Route path='/' element={<Home />} />
    </Routes>
  </div>
    </div>
    </HashRouter>
    
  );
}

export default TopNav;
