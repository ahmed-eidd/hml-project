import React, { useState } from 'react';
import { Dropdown, Menu, Space } from 'antd';
import classes from './NavLang.module.scss';
import { extendClasses } from '../../../utilities/extendClasses';

const customMenu = (
  <Menu
    items={[
      {
        label: <p>Ar</p>,
        key: 'Ar',
      },
      {
        label: <p>En</p>,
        key: 'En',
      },
    ]}
  />
);

const NavLang = ({ className, style }) => {
  return (
    <Dropdown
      className={extendClasses(classes.NavLang, className)}
      style={style}
      overlay={customMenu}
      trigger={['click']}
    >
      <div className={classes.NavLang__Placeholder}>Ar</div>
    </Dropdown>
  );
};

export default NavLang;
