import styled from 'styled-components';
import { Button, ButtonProps } from 'antd';

// interface Attributes {
//   type:
//     | 'default'
//     | 'link'
//     | 'text'
//     | 'ghost'
//     | 'primary'
//     | 'dashed'
//     | undefined;
// }

const StylesTypeButton = (props: ButtonProps) => {
  const size = props.size === 'large' ? 'var(--bg-btn)' : 'transparent';
  const bgColor = props.type !== 'link' ? size : 'transparent';
  return `
    background-color: ${bgColor};
    border-color: ${bgColor};
  `;
};

export const Btn = styled(Button)`
  ${StylesTypeButton}
  color: var(--color-text);
  height: auto !important;
  font-size: 18px !important;
  display: inline-block;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
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
