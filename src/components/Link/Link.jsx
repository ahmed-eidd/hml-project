import React from 'react';
import { extendClasses } from '../../utilities/extendClasses';
import classes from './Link.module.scss';

const Link = ({ children, to = '#', className, style }) => {
  return (
    <a
      className={extendClasses(classes.Link, className)}
      style={style}
      href={to}
    >
      {children}
    </a>
  );
};

export default Link;
