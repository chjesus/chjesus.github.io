import styled from 'styled-components';
import { Drawer as DrawerAntd } from 'antd';

export const NavBar = styled.nav`
  position: fixed;
  z-index: 20;
  top: 5%;
  right: 5%;
  background: rgba(255, 255, 255, 0);
`;

export const Drawer = styled(DrawerAntd)`
  .ant-drawer-content {
    background-color: var(--bg-dark-hight);
  }
  .ant-drawer-body {
    padding: 40px 0;
  }
`;

export const ContainerBtnTranslate = styled.div`
  text-align: center;
  padding-top: 2rem;

  button {
    margin: 0 0.5rem;
  }
`;

export const ButtonTranslate = styled.button``;
