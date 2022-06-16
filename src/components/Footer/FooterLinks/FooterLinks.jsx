import React from 'react';
import classes from './FooterLinks.module.scss';

const FooterLinks = ({ title, children }) => {
  return (
    <div className={classes.FooterLinks}>
      <h3 className={classes.FooterLinks__Title}>{title}</h3>
      <div className={classes.FooterLinks__Wrapper}>{children}</div>
    </div>
  );
};

export default FooterLinks;
