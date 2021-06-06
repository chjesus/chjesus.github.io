import React from 'react';

import { Row, Col } from 'antd';

import Button from '../../../../components/Button';
import Service from '../../../../components/Service';

import {
  Container,
  DivContainer,
  TitleH2,
  Span,
} from '../../../../utils/styledComponents';

import { Div, Text, Figure, Img, TagsContainer, Tag } from './styledAbout';

import { IconFont } from '../../../../utils/IconFont';

import Foto from '../../../../assets/images/foto.jpg';

import { Services } from '../../../../utils/Data';

const AboutMe: React.FC = () => {
  return (
    <DivContainer>
      <Container>
        <TitleH2>
          About <Span>Me</Span>
        </TitleH2>
        <Row gutter={[104, 104]} justify="center" align="middle">
          <Col span="8">
            <Figure>
              <Img src={Foto} />
            </Figure>
          </Col>
          <Col span="11">
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
                <Button type="primary" shape="round" value="Resume" />
              </TagsContainer>
            </Div>
          </Col>
        </Row>
        <Row gutter={[0, 48]} justify="center" align="middle">
          {Services.map((service) => (
            <Col span="16" key={service.id}>
              <Service
                img={service.img}
                title={service.title}
                content={service.content}
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
