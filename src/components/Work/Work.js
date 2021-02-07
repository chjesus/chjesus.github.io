import React from "react";

import { Row, Col, Tabs } from "antd";

import Title from "../Title";
import Certificate from "../Certificates";
import Picture from "../Picture";
import Description from "../Description";

import cryptoprices from "../../assets/crypto-prices.png";
import currencyconverter from "../../assets/currency-converter.png";
import Developmentweb from "../../assets/Development-Web.png";
import searchusergithub from "../../assets/search-user-github.png";
import themovie from "../../assets/the-movie.png";
import userbadges from "../../assets/user-badges.png";
import landingpages from "../../assets/Landing-Page.png";

const { TabPane } = Tabs;

function Work(props) {
  const { data, certificates } = props;
  const title = "My Work";
  const content = `Some of my personal projects that I have developed in, and certificates of courses that I have completed throughout my learning in the area of technology`;
  const list = {
    "crypto-prices": cryptoprices,
    "currency-converter": currencyconverter,
    "Development-Web": Developmentweb,
    "search-user-github": searchusergithub,
    "the-movie": themovie,
    "user-badges": userbadges,
    "Landing-Page": landingpages,
  };

  const callback = (key) => {
    console.log(key);
  };

  return (
    <div className="container">
      <div className="work" name="Work">
        <Title title={title} text={content} />
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Projects" key="1" style={{ padding: "1.6rem" }}>
            <Row gutter={[32, 32]}>
              {data.map((e) => (
                <Col span="24" sm={{ span: 12 }} md={{ span: 8 }} key={e.id}>
                  <div className="work-item">
                    <Picture src={list[e.name]} />
                    <Description
                      name={e.name}
                      description={e.description}
                      homepage={e.homepage}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </TabPane>
          <TabPane tab="Certificates" key="2">
            <Row gutter={[16, 16]}>
              {certificates.map((e) => (
                <Certificate data={e} key={e.id} />
              ))}
            </Row>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default Work;
