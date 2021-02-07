import React from "react";

import { RightOutlined } from "@ant-design/icons";
import { Button } from "antd";

function Description(props) {
  const { name, description, homepage } = props;
  return (
    <div className="work-item_description">
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={homepage} target="_blank" rel="noreferrer">
        <Button type="primary" shape="circle" icon={<RightOutlined />} />
      </a>
    </div>
  );
}

export default Description;
