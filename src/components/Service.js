import { Col, Container, Row } from 'react-bootstrap';
import Slider from './Slider';

export const Service = () => {
  const lists = [
    {
      title: 'IP MEMO',
      data: 'SSH,FTP管理デスクトップアプリ。electronによるクロスプラットフォームソフトウェア。各種SSH、FTPなどの接続先情報をローカルに保存。',
      image: '/service/001.png',
    },
    {
      title: 'My Theater',
      data: '映画情報提供管理ウェブアプリ。APIを利用し映画情報の管理、共有ができる映画SNS。PWAに対応',
      image: '/service/002.png',
    },
    {
      title: 'takibi',
      data: 'チャットアプリ。焚き火の動画を観ながらどこかの誰かとチャットができるサービス。SOCKET IOのデモAPPとして制作',
      image: '/service/003.png',
    },
    {
      title: 'common func',
      data: 'エンジニア向けアプリ。汎用的な関数を閲覧、管理できるサービス',
      image: '/service/004.png',
    },
    {
      title: 'stock word',
      data: 'お気に入りの言葉などをメモして管理するアプリ。ReactNativeによるネイティブアプリ',
      image: '/service/005.png',
    },
    {
      title: '',
      data: '',
      image: '/service/006.png',
    },
    {
      title: '',
      data: '',
      image: '/service/007.png',
    },
    {
      title: '',
      data: '',
      image: '/service/008.png',
    },
    {
      title: '',
      data: '',
      image: '/service/009.png',
    },
  ];

  return (
    <Container fluid={true} className="bg-secondary py-5">
      <Container>
        <Row className="justify-content-start">
          <Col xs="12" md="5" className="text-left mb-5 pt-5">
            <p className="text-basic fw-bold">eight seedによる成果物</p>
            <h2 className="en-new-spirit text-basic fw-bold">Service</h2>
            <hr className="dots mx-0" />
          </Col>
          <Col xs="12" className="mx-auto text-left pb-5">
            <Slider lists={lists} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
