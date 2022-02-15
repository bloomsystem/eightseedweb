import { Col, Container, Row } from 'react-bootstrap';
import { Contact } from '../components/Contact';
import NavbarPart from '../components/NavbarPart';

export const Works = () => {
  return (
    <>
      <NavbarPart />
      <Container>
        <Row className="justify-content-center">
          <Col md="8" className="py-5">
            <h1 className="text-basic fw-bold en-new-spirit ">Works</h1>
            <hr className="dots mx-0 mb-5" />
          </Col>
        </Row>
      </Container>
      <Contact />
    </>
  );
};
