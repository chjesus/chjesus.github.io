import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';

import { Div, Icon, H3, H4, Text } from './styledCardExperience';

interface PropsType {
  id: string;
  title: string;
  dateStart: string;
  dateEnd: string;
  position: string;
}
const CardExperience: React.FC<PropsType> = (props) => {
  const { id, title, dateStart, dateEnd, position } = props;
  const [t] = useTranslation('Experience');

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
          <H3>{title}</H3>
          <H4>
            {dateStart} - {dateEnd}
          </H4>
          <Text>{t(`${id}.description`)}</Text>
        </Col>
      </Row>
    </Div>
  );
};

export default CardExperience;
