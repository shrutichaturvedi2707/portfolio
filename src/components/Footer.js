import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light py-4 mt-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Portfolio</h5>
            <p>A showcase of my skills and projects</p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: shrutichaturvedi@dal.ca</p>
            <div>
              <a 
                href="https://github.com/shrutichaturvedi2707" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="me-3"
              >
                <i className="bi bi-github"></i>
              </a>
              <a 
                href="https://linkedin.com/in/shrutichaturvedi27" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">&copy; {currentYear} Shruti Chaturvedi</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;