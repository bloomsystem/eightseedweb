import { Col, Container, Row } from 'react-bootstrap';

export const MainView = () => {
  return (
    <>
      <Container fluid className="wrap p-0 bg-basic py-5">
        <Container className="justify-content-center">
          <Row>
            <Col xs="12" className="text-center pt-5">
              <h1 className="grad pb-2 en-new-spirit text-accent">
                eight seed
              </h1>
              <p className="text-secondary en-new-spirit text-tone mb-5">
                aim for warm systems.
              </p>
              <img
                src={`${process.env.PUBLIC_URL}/tree.png`}
                className="w-25"
              />
            </Col>
          </Row>
        </Container>
        <div className="shapedividers_com-4026" />
      </Container>
      <div className="round-under" />
      <Container className="my-5 py-5 text-center">
        <Row className="">
          <p>eight seedの基盤はスタッフファーストの精神</p>
          <p>個人のワークスタイルを尊重し、仕事に誇りと生き甲斐を持ち</p>
          <p>好きを強みに日々進化することを目標に掲げています。</p>
          <p>豊かなスタッフが良いモノを創造し</p>
          <p>お客様へ最上級のクオリティを提供します。</p>
        </Row>
      </Container>
      <Container fluid className="bg-tone pt-5">
        <Container>
          <Row className="d-flex align-items-center justify-content-center">
            <Col xs="12" md="7" className="py-5">
              <h2 className="en-new-spirit">
                breaking down the invisible wall
              </h2>
              <hr />
              <p>お客様との価値基準を共有、Inclusiveな行動をもって</p>

              <p>サービスを共に作り上げることを志しています</p>
              <p>私たちは作り続けることを止めず</p>
              <p>壊し続けることを止めず</p>
              <p>常にベストソリューションを追い求めます</p>
            </Col>
            <Col xs="12" md="4" className="py-5">
              <img
                className="mx-auto d-block"
                src={`${process.env.PUBLIC_URL}/breaking.svg`}
                width="250px"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <div className="wave-under" />
    </>
  );
};
