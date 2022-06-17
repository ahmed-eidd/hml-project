import React from 'react';
import './Select.scss';
import { Select as AntSelect } from 'antd';

const Select = ({ icon, options, onChange, ...props }) => {
  return (
    <AntSelect
      onChange={onChange}
      suffixIcon={icon}
      {...props}
      options={
        options === undefined
          ? [
              { value: 1, label: 1 },
              { value: 2, label: 2 },
            ]
          : options
      }
    />
  );
};

export default Select;
