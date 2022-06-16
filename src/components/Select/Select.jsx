import React from 'react';
import classes from './Select.scss';
import { Select as AntSelect } from 'antd';

const Select = ({ icon, ...props }) => {
  return (
    <AntSelect
      // overlayClassName={classes.Product__DropdownMenu}
      onChange={() => console.log('sdfs')}
      suffixIcon={icon}
      {...props}
      options={[
        { value: 1, label: 1 },
        { value: 2, label: 2 },
      ]}
    ></AntSelect>
  );
};

export default Select;
