import React from 'react';
import { Breadcrumb as AntBreadcrumb } from 'antd';
import classes from './Breadcrumb.module.scss';
import { ReactComponent as Icon } from '../../assets/arrowRight.svg';

const Breadcrumb = ({ items }) => {
  return (
    <AntBreadcrumb separator='' className={classes.Breadcrumb}>
      {items.map((el, i) => (
        <React.Fragment key={el}>
          <AntBreadcrumb.Item>{el}</AntBreadcrumb.Item>
          {i < items.length - 1 && (
            <AntBreadcrumb.Separator>
              <Icon />
            </AntBreadcrumb.Separator>
          )}
        </React.Fragment>
      ))}
    </AntBreadcrumb>
  );
};

export default Breadcrumb;
