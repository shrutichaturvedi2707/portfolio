import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ThemeToggle from './ThemeToggle'; 

function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="light" expand="lg" className="mb-4" expanded={expanded}>
      <Container>
        <Navbar.Brand as={NavLink} to="/">Portfolio</Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={NavLink} 
              to="/" 
              onClick={() => setExpanded(false)}
              end
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/about" 
              onClick={() => setExpanded(false)}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/projects" 
              onClick={() => setExpanded(false)}
            >
              Projects
            </Nav.Link>
            <div className="ms-lg-3 mt-2 mt-lg-0">
              <ThemeToggle />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;