import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import{ Navbar, Nav, Container} from 'react-bootstrap'
import  About  from './components/About'
import Portfolio from './components/Portfolio'
import ContactForm from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <>
       <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to='/about'>Jess Varghese Portfolio</Navbar.Brand>
    <Nav className="ms-auto">
      {/* <Nav.Link as={Link} to='/about'>Home</Nav.Link> */}
      <Nav.Link as={Link} to='/about'>About</Nav.Link>
      <Nav.Link as={Link} to='/portfolio'>Portfolio</Nav.Link>
      <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
      <Nav.Link as={Link} to='/resume'>Resume</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <Footer />
  </>
  <div>
    <Routes>
      <Route path='/about' element={ <About /> } />
      <Route path='/portfolio' element={ <Portfolio /> } />
      <Route path='/contact' element={ <ContactForm/> } />
      <Route path='/resume' element={ <Resume /> } />
      
    </Routes>
  </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
