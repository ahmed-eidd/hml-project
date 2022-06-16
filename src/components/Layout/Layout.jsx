import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import classes from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={classes.Layout}>
      <Nav />
      <div className={classes.Layout__Content}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
