import { useState } from 'react';
import { Container, Row, Col, Form, Card, Badge, InputGroup } from 'react-bootstrap';

const skillsData = [
  { id: 1, name: 'React', category: 'Frontend', level: 'Advanced' },
  { id: 2, name: 'JavaScript', category: 'Frontend', level: 'Advanced' },
  { id: 3, name: 'HTML5', category: 'Frontend', level: 'Advanced' },
  { id: 4, name: 'CSS3', category: 'Frontend', level: 'Advanced' },
  { id: 5, name: 'Bootstrap', category: 'Frontend', level: 'Intermediate' },
  { id: 6, name: 'Node.js', category: 'Backend', level: 'Intermediate' },
  { id: 7, name: 'Express', category: 'Backend', level: 'Intermediate' },
  { id: 8, name: 'MongoDB', category: 'Database', level: 'Intermediate' },
  { id: 9, name: 'MySQL', category: 'Database', level: 'Intermediate' },
  { id: 10, name: 'Git', category: 'Tools', level: 'Advanced' },
  { id: 11, name: 'Figma', category: 'Design', level: 'Beginner' },
  { id: 12, name: 'TypeScript', category: 'Frontend', level: 'Intermediate' },
  { id: 13, name: 'Python', category: 'Backend', level: 'Beginner' },
  { id: 14, name: 'Java', category: 'Backend', level: 'Intermediate' },
  { id: 15, name: 'RESTful APIs', category: 'Backend', level: 'Advanced' },
];

const categories = [...new Set(skillsData.map(skill => skill.category))];

function Skills() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const filteredSkills = skillsData.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(skill.category);
    return matchesSearch && matchesCategory;
  });

  const getBadgeVariant = (level) => {
    switch (level) {
      case 'Beginner': return 'info';
      case 'Intermediate': return 'primary';
      case 'Advanced': return 'success';
      default: return 'secondary';
    }
  };

  return (
    <Container>
      <h2 className="mb-4">My Skills</h2>
      
      {/* Search and Filter Controls */}
      <Row className="mb-4">
        <Col md={6} className="mb-3 mb-md-0">
          <InputGroup>
            <InputGroup.Text>
              <i className="bi bi-search"></i>
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search skills"
            />
          </InputGroup>
        </Col>
        <Col md={6}>
          <div className="d-flex flex-wrap gap-2">
            {categories.map(category => (
              <Badge 
                key={category}
                bg={selectedCategories.includes(category) ? 'primary' : 'secondary'}
                className="p-2 cursor-pointer"
                style={{ cursor: 'pointer' }}
                onClick={() => toggleCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </Col>
      </Row>
      
      {/* Skills Grid */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredSkills.map(skill => (
          <Col key={skill.id}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{skill.name}</Card.Title>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <Badge bg="secondary">{skill.category}</Badge>
                  <Badge bg={getBadgeVariant(skill.level)}>{skill.level}</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      {/* No results message */}
      {filteredSkills.length === 0 && (
        <div className="text-center my-5">
          <p>No skills match your search criteria.</p>
        </div>
      )}
    </Container>
  );
}

export default Skills;