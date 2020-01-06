import React from 'react';

import style from './Filter.module.scss';

const Filter = (props) => {
  let leftActive;
  let rightActive;

  if (props.searchBy) {
    leftActive = props.searchBy === props.leftBtnText ? style.active : '';
    rightActive = props.searchBy === props.rightBtnText ? style.active : '';
  } else if (props.sortBy) {
    leftActive = props.sortBy === props.leftBtnText ? style.active : '';
    rightActive = props.sortBy === props.rightBtnText ? style.active : '';
  }

  return (
    <div className={style.filter}>
      <span>{props.title}</span>
      <input
        type={'button'}
        value={props.leftBtnText}
        onClick={props.click}
        className={`${style.left} ${leftActive}`}
      />
      <input
        type={'button'}
        value={props.rightBtnText}
        onClick={props.click}
        className={`${style.right} ${rightActive}`}
      />
    </div>
  );
};

export default Filter;
