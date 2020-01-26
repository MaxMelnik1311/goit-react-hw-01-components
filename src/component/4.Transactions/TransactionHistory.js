import React from "react";
import T from "prop-types";
import styles from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  const tableBody = items.map(item => (
    <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  ));
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: T.arrayOf(
    T.shape({
      type: T.string,
      amount: T.string,
      currency: T.string
    })
  ).isRequired
};

export default TransactionHistory;
