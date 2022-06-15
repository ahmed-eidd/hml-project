import { Input } from 'antd';
import React from 'react';
import { extendClasses } from '../../utilities/extendClasses';
import classes from './SearchBar.module.scss';
import { ReactComponent as Icon } from '../../assets/search.svg';

const SearchBar = ({ placeholder, style, className, ...props }) => {
  return (
    <Input
      {...props}
      className={extendClasses(classes.SearchBar, className)}
      placeholder='Search'
      style={style}
      suffix={<Icon />}
    />
  );
};

export default SearchBar;
