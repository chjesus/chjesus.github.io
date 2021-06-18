import styled from 'styled-components';
import { Drawer as DrawerAntd } from 'antd';

export const NavBar = styled.nav`
  position: fixed;
  z-index: 10;
  top: 5%;
  left: 95%;
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
