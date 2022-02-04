import React from 'react';

const InputCell = ({edit, label, ...restProps}) => {
  return (
    <>
      {
        edit ?
        <input
          {...restProps}
        ></input>
        :
        <span {...restProps}>{label}</span>
      }
    </>
  );
}

export default InputCell;
