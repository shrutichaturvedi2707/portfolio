import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Weather from '../components/Weather';

function Home() {
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <Weather />
        </Col>
      </Row>
      <section className="py-5 text-center">
        <h1>Welcome to My Portfolio</h1>
        <p className="lead">
          I'm a web developer passionate about creating accessible and user-friendly websites.
        </p>
        <Button as={Link} to="/projects" variant="primary" className="mt-3">
          View My Projects
        </Button>
      </section>

      <section className="py-4">
        <h2 className="text-center mb-4">My Skills</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <h3>Web Development</h3>
                <Card.Text>
                  Experience with HTML, CSS, JavaScript, and modern frameworks like React.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <h3>UI/UX Design</h3>
                <Card.Text>
                  Creating intuitive user interfaces with a focus on accessibility.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <h3>Problem Solving</h3>
                <Card.Text>
                  Analytical thinking and creative solutions to complex problems.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Home;