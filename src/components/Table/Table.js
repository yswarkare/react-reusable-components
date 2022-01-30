import React from 'react';

const Table = ({ data = [], className = '', ...restProps}) => {
  return (
    <table className={className}>
      {
        restProps?.children
      }
    </table>
  );
}

export default Table;
