import React from 'react';

import Button from '../Button';

import PortfolioLogo from '../../assets/images/the-movie-1.png';

import { CardP, Img, DivContent, H3, Text } from './styledCard';

interface PropsTypes {
  type: string;
}

const Card: React.FC<PropsTypes> = (props) => {
  const { type } = props;

  return (
    <CardP card={type} cover={<Img src={PortfolioLogo} alt="project-image" />}>
      <DivContent>
        <H3>Lorem ipsum dolor sit amet</H3>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut
          viverra fermentum vitae eget gravida.
        </Text>
      </DivContent>
      <Button type="link" shape="round" size="small" value="vasdas"></Button>
    </CardP>
  );
};

export default Card;
