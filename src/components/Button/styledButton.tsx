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
    props.shape === 'round' && props.type === 'text'
      ? 'var(--color-link)'
      : 'var(--color-text)'};

  && {
    height: auto;
    display: inline-flex;
    align-items: center;
    padding: 6.4px 20px !important;
    justify-content: center;
    transition: all 0.3s;

    :focus {
      background: transparent;
      color: var(--color-link);
    }
    :hover {
      color: ${(props) =>
        props.type === 'link' && props.shape === 'circle'
          ? 'var(--color-link)'
          : 'var(--color-text)'};
    }
  }

  svg {
    width: 30px;
    height: 30px;
  }

  :focus {
    background-color: var(--bg-btn);
    border-color: var(--color-border);
  }

  :hover {
    ${StylesTypeButton}
    color: ${(props) =>
      props.type !== 'link' ? 'var(--color-text)' : 'var(--color-link)'};
  }
`;
