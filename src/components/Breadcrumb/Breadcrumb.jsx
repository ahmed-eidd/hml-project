import React from 'react';
import { Breadcrumb as AntBreadcrumb } from 'antd';
import classes from './Breadcrumb.module.scss'

const Breadcrumb = ({ items }) => {
  return (
    <AntBreadcrumb separator=">" className={classes.Breadcrumb}>
      {items.map((el) => (
        <AntBreadcrumb.Item key={el}>{el}</AntBreadcrumb.Item>
      ))}
    </AntBreadcrumb>
  );
};

export default Breadcrumb;