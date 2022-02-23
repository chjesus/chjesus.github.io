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
            href='https://github.com/chjesus'
            target='_blank'
            icon={<GithubOutlined />}
          />
        </Col>
        <Col span="auto">
          <Button
            type="link"
            shape="circle"
            size="small"
            href='https://www.linkedin.com/in/jesus-chacon-510643162/'
            target='_blank'
            icon={<LinkedinFilled />}
          />
        </Col>
        <Col span="auto">
          <Button
            type="link"
            shape="circle"
            size="small"
            href='https://twitter.com/ch__jesus'
            target='_blank'
            icon={<TwitterSquareFilled />}
          />
        </Col>
      </Row>
    </Div>
  );
};

export default Socials;
