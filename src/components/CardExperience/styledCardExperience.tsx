import styled from 'styled-components';

import { screens } from '../../utils/BreakPoints';
import { IconFont } from '../../utils/IconFont';

export const Div = styled.div`
  background-color: var(--bg-dark);
  box-shadow: 2px 2px 2px rgba(245, 151, 125, 0.25);
  border-radius: 10px;

  ${screens.xs} {
    padding: 12px;
  }

  ${screens.sm} {
    padding: 15px;
  }

  ${screens.md} {
    padding: 20px;
  }

  ${screens.lg} {
    padding: 20px 30px;
  }
`;

export const H3 = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: var(--color-normal-title);
`;

export const H4 = styled.h4`
  color: var(--color-normal-title);
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  margin-bottom: 10px;
  opacity: 0.54;
`;

export const Icon = styled(IconFont)`
  font-size: 30px;
  color: var(--color-icon);
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin: 0;
  color: var(--color-text);
  font-style: normal;

  ${screens.lg} {
    font-size: 18px;
  }
`;
