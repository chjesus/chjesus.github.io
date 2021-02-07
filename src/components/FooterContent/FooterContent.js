import React from "react";

import { Layout, Row, Col } from "antd";
import Socials from "../Socials";

const { Footer } = Layout;
function FooterContent() {
  return (
    <Footer className="footer">
      <div className="container">
        <Row justify="center" gutter={[8, 8]}>
          <Col className="footer_left" md={{ span: 24 }} lg={{ span: 12 }}>
            <p className="m-0">CopyRight © 2018 | Design by DEKHA </p>
          </Col>
          <Col md={{ span: 24 }} lg={{ span: 12 }} className="footer_right">
            <Socials />
          </Col>
        </Row>
      </div>
    </Footer>
  );
}

export default FooterContent;
