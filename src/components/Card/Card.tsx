import React from 'react';
import { Row, Col } from 'antd';
import Button from '../Button';

import { CardP, Img, DivContent, H3, Text, Link } from './styledCard';

interface PropsTypes {
  title: string;
  content: string;
  url: string;
  img: string;
  tags: string[];
  type: string;
}

const Card: React.FC<PropsTypes> = (props) => {
  const { title, content, img, url, tags, type } = props;

  return (
    <CardP card={type} cover={<Img src={img} alt="project-image" />}>
      <DivContent>
        <H3>{title}</H3>
        <Text>
          {content}
          <Link href={url} target="_blank" rel="noreferrer">
            Visit Site
          </Link>
        </Text>
      </DivContent>
      <Row gutter={[8, 8]}>
        {tags.map((tag) => (
          <Col span="auto" key={tag}>
            <Button type="link" shape="round" size="small" value={tag} />
          </Col>
        ))}
      </Row>
    </CardP>
  );
};

export default Card;
