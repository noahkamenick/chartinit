import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Graph from './Graph';

function Grid() {
  return (
    <Container fluid>
      <Row>
        <Col><Graph/></Col>
      </Row>
    </Container>
  );
}

export default Grid;