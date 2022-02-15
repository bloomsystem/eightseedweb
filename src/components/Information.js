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
        <Col md="6">
          <h2 className="en-new-spirit fw-bold text-accent">Informations</h2>
          <hr />
          <ul className="text-basic">
            <li className="mb-2">2022-02-14 Webサイトをリニューアルしました</li>
            <li className="mb-2">2020-11-01 Webサイトをリニューアルしました</li>
            <li className="mb-2">2020-08-01 Webサイトをリニューアルしました</li>
            <li className="mb-2">2019-10-25 Webサイトを公開しました</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
