import React from 'react';
import T from 'prop-types';

function TableBody({ type, amount, currency }) {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TableBody.propTypes = {
  type: T.string.isRequired,
  amount: T.string.isRequired,
  currency: T.string.isRequired,
};

export default TableBody;
