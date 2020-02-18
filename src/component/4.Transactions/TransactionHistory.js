import React from 'react';
import T from 'prop-types';
import styles from './TransactionHistory.module.css';
import TableBody from './TableBody';

function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TableBody
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: T.arrayOf(
    T.shape({
      type: T.string,
      amount: T.string,
      currency: T.string,
    }),
  ).isRequired,
};

export default TransactionHistory;
