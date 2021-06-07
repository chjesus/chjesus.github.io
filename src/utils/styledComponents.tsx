import styled from 'styled-components';
import { screens } from '../utils/BreakPoints';

export const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  height: inherit;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

  ${screens.xs} {
    padding: 0 15px;
  }

  ${screens.sm} {
    padding: 0 24px;
  }

  ${screens.md} {
    padding: 0 50px;
  }

  ${screens.lg} {
    padding: 0 72px;
  }
  ${screens.xl} {
    padding: 0 100px;
  }
`;

export const H1 = styled.h1`
  font-size: 56px;
  text-align: center;
  margin: 0;
  color: var(--color-normal-title);
`;

export const H2 = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 0;
  color: var(--color-normal-title);
`;

export const H3 = styled.h3`
  font-size: 24px;
  text-align: center;
  margin: 0;
  color: var(--color-normal-title);
`;

export const H4 = styled.h4`
  font-size: 18px;
  text-align: center;
  margin: 0;
  color: var(--color-normal-title);
`;

export const H5 = styled.h5`
  font-size: 14px;
  text-align: center;
  margin: 0;
  color: var(--color-normal-title);
`;

export const H6 = styled.h6`
  font-size: 13px;
  text-align: center;
  margin: 0;
  color: var(--color-normal-title);
`;

export const Text = styled.p`
  font-size: 18px;
  color: var(--color-normal-title);
  margin: 0;
`;

export const Span = styled.span`
  color: var(--color-hight-title);
`;

export const DivContainer = styled.div`
  background-color: ${(props) =>
    props.color === 'hight' ? 'var(--bg-dark-hight)' : 'var(--bg-dark)'};
  width: 100%;

  ${screens.xs} {
    padding: 25px 0;
  }

  ${screens.sm} {
    padding: 25px 0;
  }

  ${screens.md} {
    padding: 50px 0;
  }

  ${screens.lg} {
    padding: 50px 0;
  }
  ${screens.xl} {
    padding: 100px 0;
  }
`;
