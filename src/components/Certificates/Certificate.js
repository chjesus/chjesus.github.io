import React from "react";
import { Col, Popover, Avatar } from "antd";

function Certificate(props) {
  const { data } = props;
  const title = <h1 className="certificate_title">{data.title}</h1>;
  const content = (
    <span className="certificate_content">
      See
      <a
        href={`https://platzi.com${data.url}`}
        target="_blanl"
        rel="noreferrer"
      >
        Temary
      </a>
      <span>o</span>
      <a
        href={`https://platzi.com${data.diploma_link}`}
        target="_blanl"
        rel="noreferrer"
      >
        Certificate
      </a>
    </span>
  );

  return (
    <Col
      span="8"
      sm={{ span: 6 }}
      md={{ span: 4 }}
      lg={{ span: 4 }}
      xl={{ span: 3 }}
    >
      <div className="work-certificate_item">
        <Popover content={content} title={title}>
          <Avatar
            size={64}
            style={{
              backgroundImage: `url(${data.badge})`,
              backgroundSize: "cover",
            }}
          />
        </Popover>
      </div>
    </Col>
  );
}

export default Certificate;
