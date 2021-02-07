import React from "react";
import { Button } from "antd";
import {
  TwitterOutlined,
  GithubOutlined,
  CodepenOutlined,
  LinkedinOutlined,
  SlackOutlined,
} from "@ant-design/icons";

function Socials() {
  return (
    <div className="socials">
      <a href="https://twitter.com/ch__jesus" target="_blank" rel="noreferrer">
        <Button shape="circle" icon={<TwitterOutlined />} />
      </a>
      <a href="https://github.com/chjesus" target="_blank" rel="noreferrer">
        <Button shape="circle" icon={<GithubOutlined />} />
      </a>
      <a href="https://codepen.io/chjesus" target="_blank" rel="noreferrer">
        <Button shape="circle" icon={<CodepenOutlined />} />
      </a>
      <a
        href="https://www.linkedin.com/in/jesus-chacon-510643162/"
        target="_blank"
        rel="noreferrer"
      >
        <Button shape="circle" icon={<LinkedinOutlined />} />
      </a>
      <a href="https://cjesus.slack.com" target="_blank" rel="noreferrer">
        <Button shape="circle" icon={<SlackOutlined />} />
      </a>
    </div>
  );
}

export default Socials;
