import React, { useState } from 'react';

import { MenuUnfoldOutlined } from '@ant-design/icons';
import Button from '../Button';
import Menu from '../Menu';

import { NavBar, Drawer } from './styledNav';

const Nav: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <NavBar>
        <Button
          type="link"
          shape="circle"
          size="large"
          icon={<MenuUnfoldOutlined />}
          showDrawer={() => setVisible(!visible)}
        />
      </NavBar>
      <Drawer
        placement="right"
        closable={false}
        onClose={() => setVisible(!visible)}
        visible={visible}
      >
        <Menu />
        <button>EN</button>
        <button>ES</button>
      </Drawer>
    </>
  );
};

export default Nav;
