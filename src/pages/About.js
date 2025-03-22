import { Container, Row, Col, Card } from 'react-bootstrap';
import Skills from '../components/Skills';

function About() {
  return (
    <Container>
      <h1 className="mb-4">About Me</h1>
      
      <section className="mb-5">
        <h2>Career Goals</h2>
        <p>
          I am passionate about web development and creating accessible applications.
          My goal is to become a full-stack developer specializing in modern JavaScript frameworks.
        </p>
      </section>

      <section className="mb-5">
        <h2>Education</h2>
        <Card className="mb-3">
          <Card.Body>
            <h3>Bachelor of Applied Computer Science</h3>
            <p className="text-muted">Dalhousie University, 2023-Present</p>
            <p>Focusing on web development, algorithms, and software engineering.</p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <h3>High School Diploma</h3>
            <p className="text-muted">City Montessori School, 2016-2020</p>
            <p>Graduated with 90 percentile in board exams.</p>
          </Card.Body>
        </Card>
      </section>

      <section className="mb-5">
        <h2>Experience</h2>
        <Card className="mb-3">
          <Card.Body>
            <h3>Business Analyst</h3>
            <p className="text-muted">CGI, Winter 2025</p>
            <p>Worked with gathering requirements and closely assessing client feedback. </p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <h3>Technical Analyst</h3>
            <p className="text-muted">RBC, Summer 2024</p>
            <p>Worked on and maintained the RBC application, implemented responsive designs.</p>
          </Card.Body>
        </Card>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <Row>
          <Col md={6}>
            <h3>Programming Languages</h3>
            <ul>
              <li>HTML5 & CSS3</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Java</li>
            </ul>
          </Col>
          <Col md={6}>
            <h3>Frameworks & Tools</h3>
            <ul>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Node.js</li>
              <li>Git</li>
            </ul>
          </Col>
        </Row>
      </section>
      <section>
        <Row className="mb-5">
          <Col>
          <Skills />
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default About;