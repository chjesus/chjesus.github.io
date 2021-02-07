import React from "react";
import { Row, Col } from "antd";
import Socials from "../Socials";

function HeaderContent() {
  return (
    <div className="home_content" name="Home">
      <div className="container">
        <Row>
          <Col
            span="12"
            xs={{ span: 12 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            xl={{ span: 12 }}
          >
            <div className="banner">
              <h1 className="banner_title border pb-1">Hey There!</h1>
              <h2 className="banner_title pt-2">
                <strong style={{ display: "inline-block" }} className="pr-1">
                  I Am
                </strong>
                <span style={{ display: "inline-block" }}>
                  <b>Jesus Chacon</b>
                </span>
              </h2>
              <p className="banner_text pt-2 pb-2 m-0">
                I am an student and developer front-end creative, proactive and
                committed to a passion to make things beautiful and efficient. I
                am passionate about solving problems, learning, constantly
                improving myself every day in my academic training and putting
                technology at the service of people.
              </p>
              <Socials />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HeaderContent;
