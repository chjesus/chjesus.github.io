import styled from 'styled-components';
import { Button, ButtonProps } from 'antd';

const StylesTypeButton = (props: ButtonProps) => {
  const bgColor =
    props.shape === 'round'
      ? props.type === 'text'
        ? 'transparent'
        : 'var(--bg-btn)'
      : 'transparent';

  const borderColor =
    props.shape === 'round'
      ? props.type === 'text'
        ? 'var(--color-border)'
        : 'transparent'
      : 'transparent';

  return `
    background-color: ${bgColor};
    border-color: ${borderColor};
  `;
};

export const Btn = styled(Button)`
  ${StylesTypeButton}
  color: ${(props) =>
    props.type === 'link' ? 'var(--color-text)' : 'var(--color-link)'};

  && {
    height: auto;
    display: inline-flex;
    align-items: center;
    padding: 6.4px 20px !important;
    justify-content: center;
    transition: all 0.3s;
  }

  svg {
    width: 30px;
    height: 30px;
  }

  :focus {
    border-color: ${(props) =>
      props.type === 'link' ? 'transparent' : 'var(--color-link)'};
    color: var(--color-text);
  }

  :hover {
    ${StylesTypeButton}
    color: ${(props) =>
      props.type === 'link' && props.shape === 'circle'
        ? 'var(--color-link)'
        : 'var(--color-text)'};
  }
`;
