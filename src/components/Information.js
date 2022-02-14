import { Col, Container, Row } from 'react-bootstrap';

export const Information = () => {
  return (
    <Container className="my-5 py-5">
      <Row>
        <Col md="6">
          <img
            className="d-block mx-auto info-logo"
            src={`${process.env.PUBLIC_URL}/earth.svg`}
            width="300px"
          />
        </Col>
        <Col mD="6">
          <h2 className="en-new-spirit fw-bold text-accent">Informations</h2>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};
