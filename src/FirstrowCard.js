import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FirstrowCard() {
  return (
    <Container>    
    <Card className="pt-4 shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '30rem' ,
height:"15rem", border:"none" }}>
      <Card.Body>
        <Card.Title>Congratulations 🎉 John!</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">You have won gold medal</Card.Subtitle>
        <Card.Text>
            <h3>$48.9k</h3>
        </Card.Text>
        <Card.Link href="#"><button class="btn btn-primary">View Sales</button></Card.Link>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default FirstrowCard;