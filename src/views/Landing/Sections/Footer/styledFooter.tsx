import styled from 'styled-components';
import { Layout } from 'antd';

const { Footer } = Layout;

export const FooterContainer = styled(Footer)`
  background-color: var(--bg-dark);
  padding: 20px;
`;

export const Span = styled.span`
  color: var(--color-text);
  font-size: 19px;
  width: 100%;
  display: inline-block;
  text-align: center;
`;

export const Link = styled.a`
  color: var(--color-link);
  :hover {
    color: var(--color-link);
    text-decoration: underline;
  }
`;
