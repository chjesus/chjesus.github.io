import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';

import Button from '../Button';

import { CardP, Img, DivContent, H3, Text, Link } from './styledCard';

interface PropsTypes {
  id: number;
  title: string;
  url: string;
  img: string;
  tags: string[];
  type: string;
}

const Card: React.FC<PropsTypes> = (props) => {
  const { id, title, img, url, tags, type } = props;
  const [t] = useTranslation('Portfolio');

  return (
    <CardP card={type} cover={<Img src={img} alt="project-image" />}>
      <DivContent>
        <H3>{title}</H3>
        <Text>
          {t(`project-${id}.description`)}
          <Link href={url} target="_blank" rel="noreferrer">
            {t('btn')}
          </Link>
        </Text>
      </DivContent>
      <Row gutter={[8, 8]}>
        {tags.map((tag) => (
          <Col span="auto" key={tag}>
            <Button type="text" shape="round" size="small" value={tag} />
          </Col>
        ))}
      </Row>
    </CardP>
  );
};

export default Card;
