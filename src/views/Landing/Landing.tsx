import React from 'react';
import { Layout } from 'antd';

// import Home from './Sections/Home';
import AboutMe from './Sections/AboutMe';
import Education from './Sections/Education';
import Experience from './Sections/Experience';
import Portfolio from './Sections/Portfolio';
import Posts from './Sections/Posts';
import Footer from './Sections/Footer';

const { Content } = Layout;

const Landing: React.FC = () => {
  return (
    <Layout className="container">
      <Content>
        {/* <Home /> */}
        <AboutMe />
        <Education />
        <Experience />
        <Portfolio />
        <Posts />
      </Content>
      <Footer />
    </Layout>
  );
};

export default Landing;
