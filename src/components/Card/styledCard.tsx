import styled from 'styled-components';
import { Card as CardAntd } from 'antd';

interface AttributesTypes {
  card: string;
}

export const CardP = styled(CardAntd)<AttributesTypes>`
  background-color: transparent;
  border: 0;
  cursor: pointer;

  .ant-card-cover {
    margin: 0;
    position: relative;
    z-index: 2;
    :before {
      content: '';
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      transition: all 0.3s;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0);
    }
  }
  .ant-card-body {
    background-color: ${(props) =>
      props.card === 'project' ? 'var(--bg-dark)' : 'var(--bg-dark-hight)'};
    width: 100%;
    position: relative;
    top: 0;
    transition: all 0.3s;
    z-index: 4;
  }
  :hover {
    .ant-card-cover:before {
      background-color: rgba(0, 0, 0, 0.2);
    }
    .ant-card-body {
      top: -20px;
    }
  }
`;

export const Img = styled.img``;

export const DivContent = styled.div`
  padding: 0 20px;
  border-left: solid;
  border-width: 5px;
  border-color: var(--color-border);
`;

export const H4 = styled.h4`
  font-size: 18px;
  color: var(--color-text);
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: var(--color-text);
`;
