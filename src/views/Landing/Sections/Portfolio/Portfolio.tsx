import React from 'react';

import { Row, Col, Divider } from 'antd';
import Card from '../../../../components/Card';

import {
  DivContainer,
  Container,
  H2,
} from '../../../../utils/styledComponents';

import { Projects } from '../../../../utils/Data';

const Portfolio: React.FC = () => {
  return (
    <DivContainer color="low">
      <Container>
        <H2>Portfolio</H2>
        <Divider orientation="left" />
        <Row gutter={[32, 32]}>
          {Projects.map((project) => (
            <Col key={project.id} xs={24} sm={24} md={12} lg={12} xl={8}>
              <Card
                title={project.title}
                content={project.content}
                url={project.url}
                img={project.img}
                tags={project.tags}
                type="project"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </DivContainer>
  );
};

export default Portfolio;
