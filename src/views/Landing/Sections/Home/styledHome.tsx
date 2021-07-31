import styled from 'styled-components';
import backgroundImage from '../../../../assets/images/image.jpg';
import { screens } from '../../../../utils/BreakPoints';
type Attribute = {
  border: boolean;
};

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const HomeDiv = styled.div<Attribute>`
  padding-left: 20px;
  border-left: ${(props) => (props.border ? 'solid' : 'initial')};
  border-width: 5px;
  border-color: var(--color-border);

  ${screens.md} {
    padding-left: 55px;
  }
`;

export const HomeSocials = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
`;

export const TitleGreet = styled.span`
  font-size: 24px;
  color: var(--color-normal-title);

  ${screens.md} {
    font-size: 36px;
  }
`;

export const HomeH1 = styled.h1`
  font-size: 36px;
  text-align: center;
  margin: 15px 0 0 0;
  color: var(--color-normal-title);

  ${screens.md} {
    font-size: 56px;
  }
`;

export const HomeH2 = styled.h2`
  font-size: 24px;
  text-align: center;
  margin: 0;
  color: var(--color-normal-title);

  ${screens.md} {
    font-size: 36px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  color: var(--color-normal-title);
  margin: 15px 0;
  font-weight: 300;
  font-style: normal;
`;
