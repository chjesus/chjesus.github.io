import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
interface PropsTypes {
  style: React.CSSProperties;
}

const CustomScrollBars: React.FC<PropsTypes> = (props) => {
  return (
    <Scrollbars
      renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
      {...props}
    />
  );
};

const renderThumb: React.FC<PropsTypes> = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: '#f5977d',
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

export default CustomScrollBars;
