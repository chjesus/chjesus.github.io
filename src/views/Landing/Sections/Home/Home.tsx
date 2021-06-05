import React from 'react';

import Typed from 'react-typed';

import { Row, Col } from 'antd';

import Button from '../../../../components/Button';
import Socials from '../../../../components/Socials';

import {
  Container,
  TitleH1,
  TitleH2,
  Span,
  Text,
} from '../../../../utils/styledComponents';
import { HomeContainer, HomeDiv, TitleGreet, HomeSocials } from './styledHome';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Container>
        <HomeDiv border={true}>
          <Row>
            <Col span="auto">
              <TitleGreet>Hi,</TitleGreet>
            </Col>
          </Row>
          <Row>
            <Col span="auto">
              <TitleH1>
                I’m <Span>Jesus Chacon</Span>
              </TitleH1>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Text>
                I specialize in front-end development. I am creative, proactive
                and committed with a passion for making things beautiful and
                efficient.
              </Text>
            </Col>
          </Row>
          <Row>
            <Col span="auto">
              <TitleH2>
                <Typed
                  strings={['Frontend Developer', 'Web Development']}
                  typeSpeed={40}
                  backSpeed={50}
                  backDelay={1500}
                  loop
                />
              </TitleH2>
            </Col>
          </Row>
        </HomeDiv>
        <HomeDiv border={false}>
          <HomeSocials>
            <Button type="primary" shape="round" value="Hire me" />
            <Socials />
          </HomeSocials>
        </HomeDiv>
      </Container>
    </HomeContainer>
  );
};

export default Home;
