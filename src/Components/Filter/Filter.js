import React from 'react';
import { connect } from 'react-redux';

import style from './Filter.module.scss';

const Filter = (props) => {
  let leftActive;
  let rightActive;

  if (props.searchBy) {
    leftActive = props.searchBy === props.leftBtnValue ? style.active : '';
    rightActive = props.searchBy === props.rightBtnValue ? style.active : '';
  } else if (props.sortBy) {
    leftActive = props.sortMapping[props.sortBy] === props.leftBtnValue ? style.active : '';
    rightActive = props.sortMapping[props.sortBy] === props.rightBtnValue ? style.active : '';
  }

  return (
    <div className={style.filter}>
      <span>{props.title}</span>
      <input
        type={'button'}
        value={props.leftBtnValue}
        onClick={props.click}
        className={`${style.left} ${leftActive}`}
      />
      <input
        type={'button'}
        value={props.rightBtnValue}
        onClick={props.click}
        className={`${style.right} ${rightActive}`}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  sortMapping: state.sortMapping,
});

export default connect(mapStateToProps)(Filter);
