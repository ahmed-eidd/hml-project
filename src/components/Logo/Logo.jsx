import React from 'react';
import classes from './Logo.module.scss';
import { ReactComponent as Icon } from '../../assets/Logo pink.svg';
import { extendClasses } from '../../utilities/extendClasses';

const Logo = ({ className = '', style }) => {
  return (
    <div className={extendClasses(classes.Logo, className)} style={style}>
      <Icon />
    </div>
  );
};

export default Logo;
