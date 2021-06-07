import styled from 'styled-components';
import backgroundImage from '../../../../assets/images/image.jpg';

type Attribute = {
  border: boolean;
};

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HomeDiv = styled.div<Attribute>`
  padding-left: 55px;
  border-left: ${(props) => (props.border ? 'solid' : 'initial')};
  border-width: 5px;
  border-color: var(--color-border);
`;

export const HomeSocials = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
`;

export const TitleGreet = styled.span`
  font-size: 36px;
  color: var(--color-normal-title);
`;

export const HomeH1 = styled.h1`
  font-size: 56px;
  text-align: center;
  margin: 0;
  color: var(--color-normal-title);
`;

export const HomeH2 = styled.h2`
  font-size: 36px;
  text-align: center;
  margin: 0;
  color: var(--color-normal-title);
`;
