import React from 'react';
import { Layout } from 'antd';

import Home from './Sections/Home';
import AboutMe from './Sections/AboutMe';

const { Content, Footer } = Layout;

const Landing: React.FC = () => {
  return (
    <Layout className="container">
      <Content>
        <Home />
        <AboutMe />
      </Content>
      <Footer>3</Footer>
    </Layout>
  );
};

export default Landing;
