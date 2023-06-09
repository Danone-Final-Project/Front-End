import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function navBar() {
  return (
    <Navbar className='justify-content-between px-5 mainNavbar'>
      <div>
        <Navbar.Brand>
          <Link className='brandlink' to="/">D'Care</Link>
        </Navbar.Brand>
      </div>
      <div>
        <Nav className='jutify-content-center'>
          <Nav.Link ><Link className='navlink' to="/">Home</Link></Nav.Link>
          <Nav.Link ><Link className='navlink' to="/bmi">BMI</Link></Nav.Link>
          <Nav.Link ><Link className='navlink' to="/article">Article</Link></Nav.Link>
        </Nav>
      </div>
      <div>
        <Nav>
          <Nav.Link><Link className='navlink' to="/login">Login</Link></Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
}

export default navBar;
