import React from 'react';

import Socials from '../../../../components/Socials';

import { FooterContainer, Span, Link } from './styledFooter';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Socials />
      <Span>
        Jesus Chacon © 2021 | Vectors by{' '}
        <Link href="https://undraw.co/illustrations" target="_target">
          unDraw
        </Link>
      </Span>
    </FooterContainer>
  );
};

export default Footer;
