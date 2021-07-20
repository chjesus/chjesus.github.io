import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';
import { Div, MenuAntd, Item, Icon, H1, H2 } from './styledMenu';

const Menu: React.FC = () => {
  const [name, setName] = useState<string>('name');
  const [t] = useTranslation('Menu');

  return (
    <Row gutter={[0, 40]}>
      <Col span="24">
        <Div>
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
        </Div>
      </Col>
      <Col span="24">
        <MenuAntd defaultSelectedKeys={[name]} theme="dark">
          <Item key="home" icon={<Icon type="icon-home" />}>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={70}
              duration={500}
              onClick={() => scroll.scrollToTop()}
            >
              {t('home')}
            </Link>
          </Item>
          <Item key="about" icon={<Icon type="icon-bxs-user-detail" />}>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={70}
              duration={500}
              onClick={() => setName('about')}
            >
              {t('about')}
            </Link>
          </Item>
          <Item key="education" icon={<Icon type="icon-education" />}>
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={70}
              duration={500}
              onClick={() => setName('education')}
            >
              {t('education')}
            </Link>
          </Item>
          <Item key="experience" icon={<Icon type="icon-xiangmujingyan" />}>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={70}
              duration={500}
              onClick={() => setName('experience')}
            >
              {t('experience')}
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
              {t('portfolio')}
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
              {t('posts')}
            </Link>
          </Item>
        </MenuAntd>
      </Col>
    </Row>
  );
};

export default Menu;
