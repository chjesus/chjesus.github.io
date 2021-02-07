import React from "react";
import { Col, Tag } from "antd";

function Tags(props) {
  const { icon, info } = props;
  return (
    <Col span="24" xl={{ span: 24 }} sm={{ span: 24 }}>
      <Tag icon={icon}>
        <span>{info}</span>
      </Tag>
    </Col>
  );
}

export default Tags;
