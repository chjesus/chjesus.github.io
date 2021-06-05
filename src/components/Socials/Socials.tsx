import React from 'react';

import {
  GithubOutlined,
  LinkedinFilled,
  TwitterSquareFilled,
} from '@ant-design/icons';

import Button from '../Button';

import { Div } from './styledSocials';

const Socials: React.FC = () => {
  return (
    <Div>
      <Button type="link" shape="circle" icon={<GithubOutlined />} />
      <Button type="link" shape="circle" icon={<LinkedinFilled />} />
      <Button type="link" shape="circle" icon={<TwitterSquareFilled />} />
    </Div>
  );
};

export default Socials;
