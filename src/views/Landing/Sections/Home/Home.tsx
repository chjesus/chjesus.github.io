import React from 'react';
import Typed from 'react-typed';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';

import Button from '../../../../components/Button';
import Socials from '../../../../components/Socials';

import { Container, Span } from '../../../../utils/styledComponents';
import {
  HomeContainer,
  HomeDiv,
  HomeH1,
  HomeH2,
  TitleGreet,
  HomeSocials,
  Text,
} from './styledHome';

const Home: React.FC = () => {
  const [t] = useTranslation('Home');
  return (
    <HomeContainer>
      <Container>
        <HomeDiv border={true}>
          <Row>
            <Col span="auto">
              <TitleGreet>{t('title')}</TitleGreet>
            </Col>
          </Row>
          <Row>
            <Col span="auto">
              <HomeH1>
                {t('sub-title')} <Span>Jesus Chacon</Span>
              </HomeH1>
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ span: '24' }}
              md={{ span: '16' }}
              lg={{ span: '14' }}
              xl={{ span: '8' }}
            >
              <Text>{t('description')}</Text>
            </Col>
          </Row>
          <Row>
            <Col span="auto">
              <HomeH2>
                <Typed
                  strings={['Frontend Developer', 'Web Development']}
                  typeSpeed={40}
                  backSpeed={50}
                  backDelay={1500}
                  loop
                />
              </HomeH2>
            </Col>
          </Row>
        </HomeDiv>
        <HomeDiv border={false}>
          <HomeSocials>
            <Button
              type="link"
              shape="round"
              size="large"
              value="Hire me"
              href="https://www.upwork.com/workwith/jesuschacon6"
              target="_blank"
            />
            <Socials />
          </HomeSocials>
        </HomeDiv>
      </Container>
    </HomeContainer>
  );
};

export default Home;
