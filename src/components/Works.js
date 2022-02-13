import { Col, Container, Row } from 'react-bootstrap';

export const Works = () => {
  const workFlow = [
    {
      title: '発見',
      data: 'クライアント様とのヒアリングにより要件の洗い出しとニーズの特定。ワイヤーフレームや要件定義書を用いてソリューションを提示します。',
      image: '/idea.svg',
    },
    {
      title: '設計',
      data: '前工程を元に画面設定書の作成。お客様との認識齟齬を防ぎ、Webシステムの場合はモバイルファーストなサイトをデザインします。※お客様合意の上詳細な設計フェーズを省き工数削減、PDCA重視の対応をさせていただく場合もございます。',
      image: '/layers.svg',
    },
    {
      title: '開発',
      data: '直接的にシステムの機能に左右せずともWebやシステムにおいてUIは非常に重要と考えています。ユーザーエクスペリエンスを重視しつつ、保守管理性能の高い開発を心がけます。',
      image: '/code.svg',
    },
    {
      title: 'テスト・デモ環境',
      data: 'リリース前にはお客様サーバー配置前にデモ環境にてテストを致します。デモ環境にはお客様にも公開可能なので、公開前にフィードバック管理をスムーズに運ぶことができるよう努めます。',
      image: '/check_list.svg',
    },
    {
      title: 'ホスティング・デプロイ',
      data: 'レンタルサーバーやVPS、AWS等へのホスティングを致します。Webに精通しておらずご不安な場合には代行してサーバー契約、ドメイン契約なども致します。',
      image: '/cloud_1.svg',
    },
    {
      title: '運用保守',
      data: '買い切りではなく継続的な運用保守を希望していただける場合、Webであればトラフィックの監視、バックアップ、公開後のSEO対策も実施させていただきます。サービスの成長を見守らせて下さい。',
      image: '/web_search_1.svg',
    },
  ];

  return (
    <Container fluid className="bg-tone py-5">
      <Container className="py-5">
        <Row>
          <Col className="mb-5">
            <p className="text-center">各種受託開発・自社開発等</p>
            <h2 className="en-new-spirit text-center">Works</h2>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>webシステム開発</p>
            <p>Android app開発</p>
            <p>iOS app開発</p>
            <p>業務システム開発</p>
            <p>webデザイン</p>
          </Col>
          <Col className="text-center">
            <p>webサイト制作</p>
            <p>ECサイト構築</p>
            <p>インフラ構築</p>
            <p>サーバー管理</p>
            <p>システム運用保守</p>
          </Col>
        </Row>
      </Container>
      <Container className="py-5">
        <Row>
          <Col className="mb-5">
            <p className="text-center">webシステムを例としたアプローチの一例</p>
            <h2 className="en-new-spirit text-center">Work Flow</h2>
            <hr />
          </Col>
        </Row>
        <Row>
          {workFlow.map((list, index) => (
            <Col xs="12" sm="4" md="4 pt-0" className="" key={index}>
              <img
                src={`${process.env.PUBLIC_URL}${list.image}`}
                alt="mv"
                className="mb-2 d-block mx-auto"
                width="100px"
              />
              <h3 className="text-center">{list.title}</h3>
              <p>{list.data}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};
