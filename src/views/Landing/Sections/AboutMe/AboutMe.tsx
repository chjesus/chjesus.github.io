import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Divider } from 'antd';

import Button from '../../../../components/Button';
import Service from '../../../../components/Service';

import {
  Container,
  DivContainer,
  H2,
  Span,
} from '../../../../utils/styledComponents';
import { Div, Text, Figure, Img, TagsContainer, Tag } from './styledAbout';

import { IconFont } from '../../../../utils/IconFont';
import Foto from '../../../../assets/images/foto.jpg';
import { Services } from '../../../../utils/Data';

const AboutMe: React.FC = () => {
  const [t] = useTranslation('About');

  return (
    <DivContainer color="hight" id="about">
      <Container>
        <H2>
          {t('title')} <Span>{t('title-color')}</Span>
        </H2>
        <Divider orientation="left" />
        <Row gutter={[16, 32]} justify="center" align="middle">
          <Col
            xs={{ span: '18' }}
            sm={{ span: '14' }}
            md={{ span: '10' }}
            lg={{ span: '10' }}
            xl={{ span: '8' }}
          >
            <Figure>
              <Img src={Foto} alt="photo-profile" />
            </Figure>
          </Col>
          <Col
            xs={{ span: '24' }}
            sm={{ span: '24' }}
            md={{ span: '24' }}
            lg={{ span: '13', offset: '1' }}
            xl={{ span: '12', offset: '2' }}
          >
            <Div>
              <Text>{t('description')}</Text>
              <TagsContainer>
                <Tag icon={<IconFont type="icon-location1" />}>Venezuela</Tag>
                <Tag icon={<IconFont type="icon-email" />}>
                  chjesuscode@gmail.com
                </Tag>
                <Button
                  type="link"
                  shape="round"
                  size="large"
                  value="Download CV"
                />
              </TagsContainer>
            </Div>
          </Col>
        </Row>
        <Divider orientation="left" />
        <Row gutter={[0, 48]} justify="center" align="middle">
          {Services.map((service) => (
            <Col lg={{ span: '18' }} xl={{ span: '16' }} key={service.id}>
              <Service
                id={service.id}
                img={service.img}
                icon={service.icon}
                position={service.position}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </DivContainer>
  );
};

export default AboutMe;
