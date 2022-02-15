import { Col, Container, Row } from 'react-bootstrap';
import { Contact } from '../components/Contact';
import NavbarPart from '../components/NavbarPart';

export const Recruit = () => {
  return (
    <>
      <NavbarPart />
      <Container>
        <Row className="justify-content-center">
          <Col md="8" className="py-5">
            <h1 className="text-basic fw-bold en-new-spirit ">Recruit</h1>
            <hr className="dots mx-0 mb-5" />
            <div className="text-basic">
              <h2 className="fw-bold text-accent mb-4">
                スタッフファーストとは
              </h2>
              <p>
                個人がより活躍できる時代となった今、組織としても個人の能力を最大限活かすことができるよう助長します。
              </p>
              <p>エンジニアだけど毎日スーツを着て出社をする。</p>
              <p>
                そのような無駄は排除し、フレックス制度での完全リモートにて、時間を有意義に活用するパフォーマンス重視の方針です。
              </p>
              <p>
                家庭環境によりオフィスが必要なメンバーには用意することも可能です。
              </p>
              <h2 className="fw-bold text-accent mt-5 mb-4">
                良いコードが書けるエンジニアは偉い。
              </h2>
              <p>
                極論、スケジューリングやリスクヘッジがきちんとできており前倒しでプロジェクトが進められている場合、浮いた時間を休暇に当てても良いです。
                <br />
              </p>
              <p>
                生涯学習を続けなければならないエンジニアにとって、メンタルコントロールやライフスタイルの維持はとても重要です。
              </p>
              <p>
                スタッフの豊かな人生を第一に考えることで、最大限のパフォーマンスが発揮され、クライアント様の満足に繋がると考えております。
              </p>
              <h2 className="fw-bold text-accent mt-5 mb-4">
                お客様の想いの本質を考える
              </h2>
              <p>
                「書いてあるからその通りに作る」「言われていないことはしない」といったスタイルはあまり好ましくありません。
              </p>
              <p>
                なんのために作るのか、想いを共有することから始めて積極的に提案できる事が重要です。
              </p>
              <p>組織としては、そういった声が届く商流での環境を用意します。</p>
              <h2 className="fw-bold text-accent mt-5 mb-4">
                還元率は業界最高クラス
              </h2>
              <p>
                私達の一員となり、お客様に満足を届けられる。組織としての信頼を勝ち取る。
              </p>
              <p>
                それだけでスタッフには感謝しかありません。若い組織の為具体的なパーセンテージは明記できませんが、還元率は最大限を意識しております。
              </p>
              <h2 className="fw-bold text-accent mt-5 mb-4">求める人物像</h2>
              <p>
                コミュニケーション能力、向上心、誠実さがあれば技術は後追いでも構いません。
              </p>
              <p>私たちの思想に共感していただける方はぜひお問合せください。</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Contact />
    </>
  );
};
