import React from 'react';
import { Row, Col } from 'antd';

import { Div, Text, Figure, Img, Icon } from './styledService';
import { H2 } from '../../utils/styledComponents';
interface PropsType {
  img: string;
  title: string;
  content: string;
  icon: string;
  position: string;
}

const Service: React.FC<PropsType> = (props) => {
  const { img, title, content, icon, position } = props;
  const band = position === 'left';

  const justify = band ? 'end' : 'start';
  const iconRight = band ? 1 : 2;
  const iconLeft = band ? 2 : 1;

  return (
    <Div band={band}>
      <Row gutter={[64, 0]} align="middle">
        <Col
          xs={{ span: '24', order: 1 }}
          sm={{ span: '24', order: 1 }}
          md={{ span: '24', order: 1 }}
          lg={{ span: '8', order: iconRight }}
        >
          <Figure>
            <Img src={img} />
          </Figure>
        </Col>
        <Col
          xs={{ span: '24', order: 2 }}
          sm={{ span: '24', order: 2 }}
          md={{ span: '24', order: 2 }}
          lg={{ span: '16', order: iconLeft }}
        >
          <Row gutter={[24, 24]} align="middle" justify={justify}>
            <Col span="auto" order={iconRight}>
              <H2>{title}</H2>
            </Col>
            <Col span="auto" order={iconLeft}>
              <Icon type={icon} />
            </Col>
            <Col span="24" order="3">
              <Text band={band}>{content}</Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Div>
  );
};

export default Service;
