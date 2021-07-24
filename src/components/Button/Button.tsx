import React from 'react';
import { ButtonProps } from 'antd';
import { Btn } from './styledButton';
interface PropsType extends ButtonProps {
  onClick?: React.MouseEventHandler;
}

export const Button: React.FC<PropsType> = (props) => {
  const { type, value, shape, size, icon, href, target, onClick } = props;

  return (
    <Btn
      type={type}
      shape={shape}
      size={size}
      icon={icon}
      href={href}
      target={target}
      onClick={onClick}
    >
      {value}
    </Btn>
  );
};

export default Button;
