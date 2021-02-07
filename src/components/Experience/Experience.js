import React from "react";

import { Row, Col } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";

function Experience() {
  const IconFont = createFromIconfontCN({
    scriptUrl: [
      "//at.alicdn.com/t/font_2332453_mio0rqex60f.js", // icon-javascript, icon-java, icon-shoppingcart (overrided)
    ],
  });

  const arrayIcons = [
    {
      id: 0,
      name: "icon-happy",
      count: 12,
      title: "Happy Clients",
    },
    {
      id: 1,
      name: "icon-line-reward",
      count: 40,
      title: "Courses",
    },
    {
      id: 2,
      name: "icon-work0",
      count: 10,
      title: "Projects completed",
    },
    {
      id: 3,
      name: "icon-users",
      count: 8,
      title: "Satisfied clients",
    },
  ];

  return (
    <div className="experience">
      <div className="container">
        <Row gutter={[8, 8]}>
          {arrayIcons.map((e) => (
            <Col
              xs={{ span: 12 }}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              key={e.id}
            >
              <div className="experience_items">
                <IconFont type={e.name} style={{ fontSize: "40px" }} />
                <span>{e.count}</span>
                <h5>{e.title}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Experience;
