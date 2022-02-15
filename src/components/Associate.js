import { Col, Container, Row } from 'react-bootstrap';
import Slider from './Slider';

export const Associate = () => {
  const lists = [
    {
      image: '/associate/com-argano.png',
    },
    {
      image: '/associate/com-ikusa.png',
    },
    {
      image: '/associate/com-coco.png',
    },
    {
      image: '/associate/com-workid.png',
    },
    {
      image: '/associate/com-city.png',
    },
    {
      image: '/associate/com-kujira.png',
    },
  ];

  return (
    <Container fluid={true} className="wrap pb-5 my-5 py-5">
      <Container>
        <Row className="justify-content-start">
          <Col xs="12" md="5" className="text-left mb-5">
            <p className="text-basic fw-bold">お取引先様一例</p>
            <h2 className="text-basic fw-bold en-new-spirit ">
              Business Associate
            </h2>
            <hr className="dots mx-0" />
          </Col>
          <Col xs="12" className="mx-auto text-left">
            <Slider lists={lists} className="px-2" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
