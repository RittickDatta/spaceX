import React from 'react';
import * as classes from './FilterControl.module.css';

const filterControl = (props) => {
  return (
    <div
      className={classes.filterControl}
      onClick={() =>
        props.clickHandler(
          typeof(props.data) === 'boolean' ? props.data : props.data.toString()
        )
      }
    >
      {props.data.toString()}
    </div>
  );
};

export default filterControl;
