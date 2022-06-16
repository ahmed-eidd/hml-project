import React from 'react';
import './Select.scss';
import { Select as AntSelect } from 'antd';

const Select = ({
  icon,
  options = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
  ],
  onChange,
  ...props
}) => {
  return (
    <AntSelect
      // overlayClassName={classes.Product__DropdownMenu}
      onChange={onChange}
      suffixIcon={icon}
      defaultValue={options[0].value}
      {...props}
      options={options}
    ></AntSelect>
  );
};

export default Select;
