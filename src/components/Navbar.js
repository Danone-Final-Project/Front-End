import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';


function navBar() {
  return (
    <Navbar className='justify-content-between px-5 mainNavbar'>
      <div>
        <Navbar.Brand>
          <Link className='brandlink' to="#">D&apos;Care</Link>
        </Navbar.Brand>
      </div>
      <div>
        <Nav className='jutify-content-center'>
          <Nav.Link ><Link className='navlink' to="#">Home</Link></Nav.Link>
          <Nav.Link ><Link className='navlink' to="#">BMI</Link></Nav.Link>
          <Nav.Link ><Link className='navlink' to="/article">Article</Link></Nav.Link>
        </Nav>
      </div>
      <div>
        <Nav>
          <Nav.Link><Link className='navlinklogin' to="#">Login</Link></Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
}

export default navBar;