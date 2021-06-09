import React, { useState } from 'react';

import { Row, Col } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';

import Button from '../Button';

import { Container } from '../../utils/styledComponents';
import {
  HeaderNav,
  NavBar,
  Drawer,
  DrawerHead,
  H1,
  H2,
  Icon,
  Menu,
  Item,
} from './styledNav';

const Nav: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <HeaderNav>
      <Container>
        <NavBar>
          <Row justify="end">
            <Col span="auto">
              <Button
                type="link"
                shape="circle"
                size="large"
                icon={<MenuUnfoldOutlined />}
                showDrawer={showDrawer}
              />
              <Drawer
                placement="right"
                closable={false}
                onClose={closeDrawer}
                visible={visible}
              >
                <Row gutter={[0, 40]}>
                  <Col span="24">
                    <DrawerHead>
                      <Row justify="center">
                        <Col span="auto">
                          <Icon type="icon-user" />
                        </Col>
                        <Col span="24"></Col>
                        <Col span="24">
                          <H1>Jesus Chacon</H1>
                          <H2>Frontend Developer</H2>
                        </Col>
                      </Row>
                    </DrawerHead>
                  </Col>
                  <Col span="24">
                    <Menu defaultSelectedKeys={['home']} theme="dark">
                      <Item key="home" icon={<Icon type="icon-home" />}>
                        Home
                      </Item>
                      <Item
                        key="about"
                        icon={<Icon type="icon-bxs-user-detail" />}
                      >
                        About me
                      </Item>
                      <Item
                        key="education"
                        icon={<Icon type="icon-education" />}
                      >
                        Education
                      </Item>
                      <Item
                        key="experience"
                        icon={<Icon type="icon-xiangmujingyan" />}
                      >
                        Experience
                      </Item>
                      <Item key="portfolio" icon={<Icon type="icon-work" />}>
                        Portfolio
                      </Item>
                      <Item key="posts" icon={<Icon type="icon-list-add" />}>
                        Posts
                      </Item>
                    </Menu>
                  </Col>
                </Row>
              </Drawer>
            </Col>
          </Row>
        </NavBar>
      </Container>
    </HeaderNav>
  );
};

export default Nav;
