import React from 'react';
import { Row, Col } from 'antd';

import { Div, Title, Text, Figure, Img } from './styledService';

import { IconFont } from '../../utils/IconFont';
interface PropsType {
  img: string;
  title: string;
  content: string;
  position: string;
}

const Service: React.FC<PropsType> = (props) => {
  const { img, title, content, position } = props;
  const band = position === 'left';

  return (
    <Div band={band}>
      <Row gutter={[64, 0]} align="middle">
        <Col span="8" order={band ? 1 : 2}>
          <Figure>
            <Img src={img} />
          </Figure>
        </Col>
        <Col span="16" order={band ? 2 : 1}>
          <Title band={band}>
            {title} <IconFont type="icon-Curlybrackets" />
          </Title>
          <Text band={band}>{content}</Text>
        </Col>
      </Row>
    </Div>
  );
};

export default Service;
