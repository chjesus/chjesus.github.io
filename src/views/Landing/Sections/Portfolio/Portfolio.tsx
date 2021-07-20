import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Divider } from 'antd';

import Card from '../../../../components/Card';
import {
  DivContainer,
  Container,
  H2,
} from '../../../../utils/styledComponents';

import { Projects } from '../../../../utils/Data';

const Portfolio: React.FC = () => {
  const [t] = useTranslation('Portfolio');
  return (
    <DivContainer color="low" id="portfolio">
      <Container>
        <H2>{t('title')}</H2>
        <Divider orientation="left" />
        <Row gutter={[32, 32]}>
          {Projects.map((project) => (
            <Col key={project.id} xs={24} sm={24} md={12} lg={12} xl={8}>
              <Card
                id={project.id}
                title={project.title}
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
