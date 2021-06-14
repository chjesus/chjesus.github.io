import styled from 'styled-components';
import { Layout, Drawer as DrawerAntd, Menu as MenuAntd } from 'antd';
import { IconFont } from '../../utils/IconFont';

const { Header } = Layout;

export const HeaderNav = styled(Header)`
  position: fixed;
  height: auto;
  z-index: 2;
  top: 0;
  left: 0;
  padding: 0;
  background: rgba(255, 255, 255, 0);
  padding-top: 50px;
  width: 100%;
`;

export const NavBar = styled.nav`
  background: rgba(255, 255, 255, 0);
  width: 100%;
`;

export const Drawer = styled(DrawerAntd)`
  .ant-drawer-content {
    background-color: var(--bg-dark-hight);
  }
  .ant-drawer-body {
    padding: 40px 0;
  }
`;

export const DrawerHead = styled.div``;

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

export const Icon = styled(IconFont)`
  font-size: 80px;
  color: var(--color-icon);
`;

export const Menu = styled(MenuAntd)`
  &&:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: transparent;
  }
`;

export const Item = styled(MenuAntd.Item)`
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
