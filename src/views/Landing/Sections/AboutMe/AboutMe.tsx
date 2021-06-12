import React from 'react';

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
  return (
    <DivContainer color="hight" id="about">
      <Container>
        <H2>
          About <Span>Me</Span>
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
              <Text>
                A self-driven software engineer. Able to effectively self-manage
                during independent projects, as well as collaborate in a team
                setting. I always give the best of myself in whatever I do.
              </Text>
              <TagsContainer>
                <Tag icon={<IconFont type="icon-location1" />}>Venezuela</Tag>
                <Tag icon={<IconFont type="icon-email" />}>
                  chjesuscode@gmail.com
                </Tag>
                <Button type="text" shape="round" size="large" value="Resume" />
              </TagsContainer>
            </Div>
          </Col>
        </Row>
        <Divider orientation="left" />
        <Row gutter={[0, 48]} justify="center" align="middle">
          {Services.map((service) => (
            <Col lg={{ span: '18' }} xl={{ span: '16' }} key={service.id}>
              <Service
                img={service.img}
                title={service.title}
                content={service.content}
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
