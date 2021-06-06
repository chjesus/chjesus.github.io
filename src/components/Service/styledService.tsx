import styled from 'styled-components';

interface Attributes {
  band: boolean;
}

export const Div = styled.div<Attributes>`
  padding: 15px 40px;
  border-right: ${(props) => (props.band ? 'solid' : 'initial')};
  border-left: ${(props) => (props.band ? 'initial' : 'solid')};
  border-width: 5px;
  border-color: var(--color-border);
`;

export const Title = styled.h2<Attributes>`
  font-size: 36px;
  color: var(--color-normal-title);
  display: flex;
  justify-content: ${(props) => (props.band ? 'flex-end' : 'flex-start')};
  align-items: center;
  span {
    font-size: 50px;
    color: var(--color-custom-icon);
    text-align: right;
  }
`;

export const Text = styled.p<Attributes>`
  font-size: 18px;
  color: var(--color-normal-title);
  text-align: ${(props) => (props.band ? 'right' : 'left')};
`;

export const Figure = styled.figure``;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
