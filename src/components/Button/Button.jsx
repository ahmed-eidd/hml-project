import React from 'react';
import { Button as AntButton } from 'antd';
import './Button.scss';
import { extendClasses } from '../../utilities/extendClasses';

const Button = ({ children, className, variant = 'primary', ...props }) => {
  let btnVariant = '';
  switch (variant) {
    case 'primary':
      btnVariant = 'ant-btn-primary';
      break;
    case 'dark':
      btnVariant = 'ant-btn-dark';
      break;
    default:
      break;
  }

  return (
    <AntButton
      className={extendClasses('ant-btn', btnVariant, className)}
      {...props}
    >
      {children}
    </AntButton>
  );
};

export default Button;
