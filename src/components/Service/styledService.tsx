import styled from 'styled-components';
import { IconFont } from '../../utils/IconFont';
import { screens } from '../../utils/BreakPoints';
interface Attributes {
  band: boolean;
}

export const Div = styled.div<Attributes>`
  padding: 15px 20px;
  border-right: ${(props) => (props.band ? 'solid' : 'initial')};
  border-left: ${(props) => (props.band ? 'initial' : 'solid')};
  border-width: 5px;
  border-color: var(--color-border);

  ${screens.lg} {
    padding: 15px 40px;
  }
`;

export const Icon = styled(IconFont)`
  font-size: 50px;
  color: var(--color-custom-icon);
  text-align: right;
`;

export const Text = styled.p<Attributes>`
  font-size: 14px;
  font-weight: 400;
  color: var(--color-normal-title);
  text-align: ${(props) => (props.band ? 'right' : 'left')};
  ${screens.md} {
    font-size: 18px;
  }
`;

export const Figure = styled.figure<Attributes>`
  margin-left: ${(props) => (props.band ? 'auto' : '0')};
  margin-right: ${(props) => (props.band ? '0' : 'auto')};
  ${screens.xs} {
    width: 150px;
  }

  ${screens.sm} {
    width: 150px;
    text-align: ${(props) => (props.band ? 'right' : 'left')};
  }

  ${screens.md} {
    width: 200px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
