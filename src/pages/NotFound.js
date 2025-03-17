import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Container className="text-center py-5">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for doesn't exist.</p>
      <Button as={Link} to="/" variant="primary">
        Back to Home
      </Button>
    </Container>
  );
}

export default NotFound;