import React from 'react';

import { Row, Col } from 'antd';

import { Div, Icon, H4, H6, Text } from './styledCardExperience';

interface PropsType {
  position: string;
}
const CardExperience: React.FC<PropsType> = (props) => {
  const { position } = props;
  const band = position === 'left';
  const iconLeft = band ? 1 : 2;
  const iconRight = band ? 2 : 1;

  return (
    <Div>
      <Row gutter={[16, 16]} align="top" justify={band ? 'start' : 'end'}>
        <Col xs={3} sm={2} md={4} lg={3} order={iconLeft}>
          <Icon type="icon-work" />
        </Col>
        <Col xs={21} sm={22} md={20} lg={21} order={iconRight}>
          <H4>Villartechnologies</H4>
          <H6>February 2020 - April 2020</H6>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At mattis
            libero, tellus congue ultrices dictum aliquet purus.
          </Text>
        </Col>
      </Row>
    </Div>
  );
};

export default CardExperience;
