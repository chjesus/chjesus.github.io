import React, { useState } from 'react';

import { Link, animateScroll as scroll } from 'react-scroll';
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
  const [visible, setVisible] = useState<boolean>(false);
  const [name, setName] = useState<string>('name');

  const showDrawer = () => {
    console.log(scroll);

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
                    <Menu defaultSelectedKeys={[name]} theme="dark">
                      <Item key="home" icon={<Icon type="icon-home" />}>
                        <Link
                          to="home"
                          spy={true}
                          smooth={true}
                          offset={70}
                          duration={500}
                          onClick={() => scroll.scrollToTop()}
                        >
                          Home
                        </Link>
                      </Item>
                      <Item
                        key="about"
                        icon={<Icon type="icon-bxs-user-detail" />}
                      >
                        <Link
                          to="about"
                          spy={true}
                          smooth={true}
                          offset={70}
                          duration={500}
                          onClick={() => setName('about')}
                        >
                          About me
                        </Link>
                      </Item>
                      <Item
                        key="education"
                        icon={<Icon type="icon-education" />}
                      >
                        <Link
                          to="education"
                          spy={true}
                          smooth={true}
                          offset={70}
                          duration={500}
                          onClick={() => setName('education')}
                        >
                          Education
                        </Link>
                      </Item>
                      <Item
                        key="experience"
                        icon={<Icon type="icon-xiangmujingyan" />}
                      >
                        <Link
                          to="experience"
                          spy={true}
                          smooth={true}
                          offset={70}
                          duration={500}
                          onClick={() => setName('experience')}
                        >
                          Experience
                        </Link>
                      </Item>
                      <Item key="portfolio" icon={<Icon type="icon-work" />}>
                        <Link
                          to="portfolio"
                          spy={true}
                          smooth={true}
                          offset={70}
                          duration={500}
                          onClick={() => setName('portfolio')}
                        >
                          Portfolio
                        </Link>
                      </Item>
                      <Item key="posts" icon={<Icon type="icon-list-add" />}>
                        <Link
                          to="posts"
                          spy={true}
                          smooth={true}
                          offset={70}
                          duration={500}
                          onClick={() => setName('posts')}
                        >
                          Posts
                        </Link>
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
