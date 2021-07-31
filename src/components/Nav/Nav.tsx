import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuUnfoldOutlined } from '@ant-design/icons';

import Button from '../Button';
import Menu from '../Menu';

import { NavBar, Drawer, ContainerBtnTranslate } from './styledNav';

const Nav: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [value, setValue] = useState<boolean>(true);
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation('Posts');

  const changeLanguage = (value: boolean, language: string) => {
    setValue(value);
    i18n.changeLanguage(language.toLowerCase());
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
            onClick={(e) => changeLanguage(true, 'EN')}
          />
          <Button
            type={value ? 'text' : 'link'}
            shape="round"
            size="small"
            value="ES"
            onClick={(e) => changeLanguage(false, 'ES')}
          />
        </ContainerBtnTranslate>
      </Drawer>
    </>
  );
};

export default Nav;
