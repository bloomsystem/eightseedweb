import { Col, Container, Row } from 'react-bootstrap';

export const Contact = () => {
  return (
    <Container fluid={true} className="bg-secondary py-5">
      <Container>
        <Row className="justify-contents-center">
          <Col
            md="8"
            className="mx-auto text-left mb-5 text-basic fw-bold pt-5"
          >
            <p className="text-basic fw-bold">無料見積もりやご相談等</p>
            <h2 className="text-basic fw-bold en-new-spirit ">Contact Us</h2>
            <hr className="dots mx-0 mb-5" />
            <p>
              解決したい課題の本質に着目し、やることが目的となってしまっていないか、具体的にこれをやると誰が喜ぶの？といった部分で、ビジネススキームの理解から始め、クライアント様との共通認識を持ちお仕事をさせていただき、
              ビジネスの成果を刈り取るフェーズまで見届けることを重視しています。
            </p>
            <p>
              そのため、全てお任せ等ヒアリングが不可能なご案件についてはお断りしております。
            </p>
            <p>
              お見積は無料です。ご発注確度が低い段階でも他社様との検討や予算感、仕様部分の見直し材料としてご利用いただいても結構です。
            </p>
            <a
              href="https://forms.gle/igQkPtFtLs7FhQ8L6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn button-accent mt-4"
            >
              <span>お問合せ</span>
            </a>
            <p className="text-basic pt-3">※GoogleFormが開きます</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
