import styled from 'styled-components';
import { Tag as TagAntd } from 'antd';

export const Div = styled.div`
  border-left: solid;
  border-width: 5px;
  padding-left: 55px;
  border-color: var(--color-border);
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Text = styled.p`
  color: var(--color-text);
  font-size: 18px;
`;

export const Figure = styled.figure`
  border: 4px solid var(--color-border-photo);
  width: 100%;
  position: relative;
  z-index: 0;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: relative;
  top: 25px;
  left: 25px;
  background-color: red;
  ::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: red;
    border: 4px solid var(--color-border-photo);
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Tag = styled(TagAntd)`
  margin-bottom: 1rem;
  background-color: transparent;
  border: 0;
  font-size: 18px;
  span {
    color: var(--color-icon);
  }
  span:last-child {
    color: #cccccc;
  }
`;
