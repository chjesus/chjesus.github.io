import React from 'react';
import { Row, Col } from 'antd';

import { Div, Span, H3, H4, Text } from './styledCardEducation';

interface Education {
  title: string;
  dateStart: string;
  dateEnd: string;
  content: string;
}

const CardEducation: React.FC<Education> = (props) => {
  const { title, dateStart, dateEnd, content } = props;
  return (
    <Div>
      <Row gutter={[0, 8]}>
        <Col span="24">
          <H3>{title}</H3>
        </Col>
        <Col span="24">
          <H4>
            {dateStart} - {dateEnd}
          </H4>
        </Col>
        <Col span="24">
          <Text>{content}</Text>
        </Col>
      </Row>
      <Span />
      <Span />
      <Span />
      <Span />
    </Div>
  );
};

export default CardEducation;
