import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

interface PropsTypes {
  style: any;
}

const CustomScrollBars: React.FC<PropsTypes> = (props) => {
  return (
    <Scrollbars
      {...props}
      autoHide
      renderTrackHorizontal={(props: any) => (
        <div
          {...props}
          style={{ display: 'none' }}
          className="track-horizontal"
        />
      )}
    >
      {props.children}
    </Scrollbars>
  );
};

export default CustomScrollBars;
