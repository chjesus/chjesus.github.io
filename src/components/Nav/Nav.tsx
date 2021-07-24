import React, { useState } from 'react';

import { MenuUnfoldOutlined } from '@ant-design/icons';
// import { ButtonType } from 'antd/lib/button';

import Button from '../Button';
import Menu from '../Menu';

import { NavBar, Drawer, ContainerBtnTranslate } from './styledNav';

const Nav: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [value, setValue] = useState<boolean>(true);

  const changeLanguage = (e: any) => {
    setValue(!value);
  };

  return (
    <>
      <NavBar>
        <Button
          type="link"
          shape="circle"
          size="large"
          icon={<MenuUnfoldOutlined />}
          onClick={() => setVisible(!visible)}
        />
      </NavBar>
      <Drawer
        placement="right"
        closable={false}
        onClose={() => setVisible(!visible)}
        visible={visible}
      >
        <Menu />
        <ContainerBtnTranslate>
          <Button
            type={value ? 'link' : 'text'}
            shape="round"
            size="small"
            value="EN"
            onClick={changeLanguage}
          />
          <Button
            type={value ? 'text' : 'link'}
            shape="round"
            size="small"
            value="ES"
            onClick={changeLanguage}
          />
        </ContainerBtnTranslate>
      </Drawer>
    </>
  );
};

export default Nav;
