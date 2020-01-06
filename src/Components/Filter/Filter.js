import React from 'react';

import style from './Filter.module.scss';

const Filter = (props) => {
  const leftActive = props.searchBy === props.leftBtnText ? style.active : '';
  const rightActive = props.searchBy === props.rightBtnText ? style.active : '';

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
