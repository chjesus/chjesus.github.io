import React from 'react';
import { Layout } from 'antd';

import Nav from '../../components/Nav';
import Home from './Sections/Home';
import AboutMe from './Sections/AboutMe';
import Education from './Sections/Education';
import Experience from './Sections/Experience';
import Portfolio from './Sections/Portfolio';
import Posts from './Sections/Posts';
import Footer from './Sections/Footer';

import { Scrollbars } from 'react-custom-scrollbars';

const { Content } = Layout;

const Landing: React.FC = () => {
  return (
    <Scrollbars style={{ width: '100%', height: '100vh' }}>
      <Layout className="container">
        <Content>
          <Nav />
          <Home />
          <AboutMe />
          <Education />
          <Experience />
          <Portfolio />
          <Posts />
        </Content>
        <Footer />
      </Layout>
    </Scrollbars>
  );
};

export default Landing;
