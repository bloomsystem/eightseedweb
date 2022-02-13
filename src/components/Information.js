import { Col, Container, Row } from 'react-bootstrap';

export const Information = () => {
  return (
    <Container className="my-5 py-5">
      <Row>
        <Col>
          <img
            className="d-block mx-auto"
            src={`${process.env.PUBLIC_URL}/earth.svg`}
            width="300px"
          />
        </Col>
        <Col>
          <h2 className="en-new-spirit">Informations</h2>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};
