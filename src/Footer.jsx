import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
  return (
    <Container className="footer">
      <Row>
        <Col md={{ span: 7, offset: 5 }}>
          <a href="https://codepen.io/" target="_blank">
            <img src="https://pnggrid.com/wp-content/uploads/2021/07/Facebook-Logo-Square-768x768.png" class="icon"/></a>

          <a href="https://codepen.io/" target="_blank">
            <img src="https://www.comune.foggia.it/wp-content/uploads/2021/04/instagram-logo-png.png" class="icon"/></a>

          <a href="https://codepen.io/" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/480px-Telegram_logo.svg.png" class="icon"/></a>
      
          <a href="https://codepen.io/" target="_blank">
            <img src="https://www.espronceda.net/wp-content/uploads/2021/12/format-twitter-logo-transparent-11549680770lolovrdq8m.png" class="icon"/></a>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 7, offset: 5 }}>
            <p> RING STORE  © 2022 </p>
        </Col>
      </Row>
    </Container>
  );
}
