import React from 'react';

import {
  GithubOutlined,
  LinkedinFilled,
  TwitterSquareFilled,
} from '@ant-design/icons';

import { Row, Col } from 'antd';
import Button from '../Button';

import { Div } from './styledSocials';

const Socials: React.FC = () => {
  return (
    <Div>
      <Row gutter={[8, 0]} justify="center">
        <Col span="auto">
          <Button
            type="link"
            shape="circle"
            size="small"
            icon={<GithubOutlined />}
          />
        </Col>
        <Col span="auto">
          <Button
            type="link"
            shape="circle"
            size="small"
            icon={<LinkedinFilled />}
          />
        </Col>
        <Col span="auto">
          <Button
            type="link"
            shape="circle"
            size="small"
            icon={<TwitterSquareFilled />}
          />
        </Col>
      </Row>
    </Div>
  );
};

export default Socials;
