import React from 'react';
import { Divider, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';

import CardEducation from '../../../../components/CardEducation';

import {
  DivContainer,
  Container,
  H2,
} from '../../../../utils/styledComponents';

import { Educations } from '../../../../utils/Data';
const Education: React.FC = () => {
  const [t] = useTranslation('Education');
  return (
    <DivContainer color="low" id="education">
      <Container>
        <H2>{t('title')}</H2>
        <Divider orientation="left" />
        <Row gutter={[0, 32]} justify="center">
          {Educations.map((education) => (
            <Col xs={24} sm={24} md={22} lg={20} xl={16} key={education.id}>
              <CardEducation
                id={education.id}
                dateStart={education.date_start}
                dateEnd={education.date_end}
                certificate={education.certificate}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </DivContainer>
  );
};

export default Education;
