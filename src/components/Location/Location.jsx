import React from 'react';
import { limitText } from '../../utilities/limitText';
import classes from './Location.module.scss';
import { ReactComponent as Icon } from '../../assets/loc.svg';
import { extendClasses } from '../../utilities/extendClasses';

const Location = ({ location, className }) => {
  return (
    <div className={extendClasses(classes.Location, className)}>
      <Icon className={classes.Location__Icon} />
      <p className={classes.Location__Text}>{limitText(location, 20)}</p>
    </div>
  );
};

export default Location;
