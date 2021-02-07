import React from "react";
import { Row, Col } from "antd";

import { createFromIconfontCN } from "@ant-design/icons";
import Title from "../Title";

function Services() {
  const IconFont = createFromIconfontCN({
    scriptUrl: [
      "//at.alicdn.com/t/font_2332453_iikknik0xi9.js", // icon-javascript, icon-java, icon-shoppingcart (overrided)
    ],
  });
  const services = [
    {
      id: 1,
      icon: <IconFont type="icon-web" style={{ fontSize: "64px" }} />,
      title: "Web Developemnt",
      text:
        "Well documented easy to understand code makes life easier for everyone.",
    },
    // {
    //   id: 2,
    //   icon: <IconFont type="icon-design" style={{ fontSize: "64px" }} />,
    //   title: "Web Design",
    //   text:
    //     "Responsive web design, so that it adapts to any screen including phones and tables.",
    // },
    {
      id: 3,
      icon: <IconFont type="icon-modular" style={{ fontSize: "64px" }} />,
      title: "Modularity",
      text:
        "Whether styling (sass, less, BEM) or DOM manipulation, I write modular, reusable, and scalable code.",
    },
    {
      id: 4,
      icon: <IconFont type="icon-mobile" style={{ fontSize: "64px" }} />,
      title: "Responsive",
      text:
        "Responsive web design, so that it adapts to any screen including phones and tables.",
    },
  ];

  const title = "My Services";
  const content = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
  eligendi odio nobis iure minima maiores earum, exercitationem officia
  nihil beatae iusto facilis incidunt impedit quisquam sit ab nam illum
  recusandae.`;

  return (
    <div className="service" name="Service">
      <div className="container">
        <Title title={title} text={content} />
        <div className="service_list">
          <Row gutter={[48, 48]}>
            {services.map((e) => (
              <ServiceItem
                key={e.id}
                icon={e.icon}
                title={e.title}
                text={e.text}
              />
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

function ServiceItem(props) {
  const { icon, title, text } = props;
  return (
    <Col
      sm={{ span: 12 }}
      md={{ span: 12 }}
      lg={{ span: 8 }}
      style={{ textAlign: "center" }}
    >
      <div className="item">
        {icon}
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </Col>
  );
}
export default Services;
