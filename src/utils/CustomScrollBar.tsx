import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { DivScrollBar } from './styledComponents';

const CustomScrollbars: React.FC = () => (
  <Scrollbars
    style={{ height: 'calc(100vh - 72px - 145px)' }}
    autoHide
    renderTrackHorizontal={() => <DivScrollBar />}
  />
);

export default CustomScrollbars;
