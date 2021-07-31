import styled from 'styled-components';
import { Menu } from 'antd';

import { IconFont } from '../../utils/IconFont';

export const Div = styled.div``;

export const MenuAntd = styled(Menu)`
  &&:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: transparent;
  }
`;

export const Item = styled(Menu.Item)`
  &&& {
    margin-bottom: 0;
    margin-top: 0;
    border-left: solid;
    border-width: 3px;
    border-color: transparent;
    font-size: 14px;
  }

  &&&:focus {
    background-color: var(--bg-dark);
    border-left: solid;
    border-width: 3px;
    border-color: var(--color-border);
  }

  &&:hover {
    background-color: var(--bg-dark);
    border-left: solid;
    border-width: 3px;
    border-color: var(--color-border);
  }

  &&:not() {
    background-color: var(--bg-dark);
  }
`;

export const Icon = styled(IconFont)`
  font-size: 80px;
  color: var(--color-icon);
`;

export const H1 = styled.h1`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  color: var(--color-hight-title);
  margin: 0;
`;

export const H2 = styled.h2`
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  color: var(--color-text);
`;
