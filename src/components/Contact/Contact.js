import React from "react";
import { Row, Col } from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

import Title from "../Title";

function Contact() {
  const title = "Get In Toch";
  const content = `For more information about my services as a frontend developer send me a message to know how I can help you`;

  const arrayContacts = [
    {
      id: 0,
      icon: <EnvironmentOutlined style={{ fontSize: "24px" }} />,
      title: "Location:",
      text: "Venezuela",
    },
    {
      id: 1,
      icon: <PhoneOutlined style={{ fontSize: "24px" }} />,
      title: "Phone:",
      text: "+58 (424) 725 83 43",
    },
    {
      id: 2,
      icon: <MailOutlined style={{ fontSize: "24px" }} />,
      title: "Email:",
      text: "chjesussao@gmail.com",
    },
  ];
  return (
    <div className="contact" name="Contact">
      <div className="container">
        <Title title={title} text={content} />
        <Row gutter={[48, 48]}>
          {arrayContacts.map((e) => (
            <Col
              key={e.id}
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <div className="contact_item">
                {e.icon}
                <div className="contact_item-description">
                  <h3>
                    <strong>{e.title}</strong>
                  </h3>
                  <span>{e.text}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Contact;
