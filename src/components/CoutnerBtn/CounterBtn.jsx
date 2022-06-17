import React from 'react';
import classes from './CounterBtn.module.scss';
import { Spin } from 'antd';
import TrashIcon from '../../assets/trash.png';
import { extendClasses } from '../../utilities/extendClasses';

const CounterBtn = ({
  className,
  style,
  count,
  onIncrement,
  onDecrement,
  onDelete,
  loading,
  size,
}) => {
  return (
    <div
      className={extendClasses(
        classes.CounterBtn,
        loading ? classes.disabled : '',
        className
      )}
      style={style}
    >
      <div className={classes.CounterBtn__Counter}>
        {loading && (
          <div className={classes.CounterBtn__Spinner}>
            <Spin size='large' />
          </div>
        )}
        <button
          disabled={loading}
          onClick={onIncrement}
          className={classes.CounterBtn__Plus}
        >
          +
        </button>
        <p className={classes.CounterBtn__Count}>{count}</p>
        <button
          disabled={loading}
          onClick={onDecrement}
          className={classes.CounterBtn__Minus}
        >
          -
        </button>
      </div>
      <div onClick={onDelete} className={classes.CounterBtn__Delete}>
        <img src={TrashIcon} alt='trash icon' />
      </div>
    </div>
  );
};

export default CounterBtn;
