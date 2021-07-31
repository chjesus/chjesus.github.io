import styled from 'styled-components';
import { Timeline as TimelineAntd } from 'antd';

import { screens } from '../../../../utils/BreakPoints';

const { Item } = TimelineAntd;

export const Timeline = styled(TimelineAntd)`
  padding: 0;

  ${screens.xl} {
    padding: 0 80px;
  }
`;

export const TimelineItem = styled(Item)`
  .ant-timeline-item-tail {
    top: 15px;
    height: calc(100% - 20px);
  }

  .ant-timeline-item-head {
    border-color: var(--color-border);
    background-color: var(--bg);
  }
`;
