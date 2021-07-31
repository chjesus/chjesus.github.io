import styled from 'styled-components';
import { Layout } from 'antd';

const { Header: HeaderAntd } = Layout;

export const Header = styled(HeaderAntd)`
  width: 100%;
  height: 100vh;
  color: var(--color-icon);
  line-height: normal;
`;
