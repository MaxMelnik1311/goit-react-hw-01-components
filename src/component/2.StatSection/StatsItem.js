import React from 'react';
import T from 'prop-types';
import styles from './Stats.module.css';

function StatsItem({ label, percentage }) {
  return (
    <li className={styles.item}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage} %</span>
    </li>
  );
}

StatsItem.propTypes = {
  label: T.string.isRequired,
  percentage: T.number.isRequired,
};

export default StatsItem;
