import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Spotify Clone",
      description: "Implemented responsive design for optimal user experience across devices using HTML, CSS, and JavaScript.",
      image: "https://via.placeholder.com/300x200",
      link: "https://github.com/shrutichaturvedi2707/spotify_clone"
    },
    {
      id: 2,
      title: "Game:ID-LOST",
      description: "Implemented an HTML-based game where players navigate through different parts of the university campus",
      image: "https://via.placeholder.com/300x200",
      link: "https://shrutichaturvedi2707.github.io/idlost.github.io/"
    },
    {
      id: 3,
      title: "Task Manager",
      description: "Developing a web-based Task Tracker with a focus on completing backend functionality for efficient task management.",
      image: "https://via.placeholder.com/300x200",
      link: "https://github.com/shrutichaturvedi2707/taskmanager"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Developed a personalized online portfolio using HTML, CSS, and JavaScript, showcasing my skills in front-end.",
      image: "https://via.placeholder.com/300x200",
      link: "https://shrutichaturvedi2707.github.io/portfolio.github.io/"
    }
  ];

  return (
    <Container>
      <h1 className="mb-4">My Projects</h1>
      <p>Here are some of the projects I've worked on.</p>
      
      <Row>
        {projects.map(project => (
          <Col key={project.id} md={6} className="mb-4">
            <Card>
              <Card.Img 
                variant="top" 
                src={project.image} 
                alt={`Screenshot of ${project.title}`} 
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button 
                  variant="primary" 
                  href={project.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;