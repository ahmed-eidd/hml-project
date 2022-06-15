import React from 'react';
import { ReactComponent as UserIcon } from '../../../assets/user.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/arrow.svg';
import { extendClasses } from '../../../utilities/extendClasses';
import classes from './NavMenu.module.scss';

const NavMenu = ({ name, className, points }) => {
  return (
    <div className={extendClasses(classes.NavMenu, className)}>
      <UserIcon className={classes.NavMenu__UserIcon} />
      <div className={classes.NavMenu__TextContainer}>
        <div className={classes.NavMenu__Name}>
          <p className={classes.NavMenu__Name__Text}>{name}</p>
          <ArrowIcon className={classes.NavMenu__Name__ArrowIcon} />
        </div>
        <p className={classes.NavMenu__Points}>
          {`Points : `} <span className={classes.NavMenu__Points__Amount}>{points}</span>
        </p>
      </div>
    </div>
  );
};

export default NavMenu;
