import { marked } from 'marked';
import { Col, Container, Row } from 'react-bootstrap';

export const Markdown = () => {
  const markdown = `# テスト
  ## 見出し
  コンテンツ
  込コンテンツ

  コンテンツ
  
  `;

  return (
    <Container className="py-5 my-5">
      <Row>
        <Col>
          <article dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
        </Col>
      </Row>
    </Container>
  );
};
