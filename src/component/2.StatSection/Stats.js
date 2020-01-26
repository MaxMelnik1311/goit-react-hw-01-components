import React from 'react';
import T from 'prop-types';
import styles from './Stats.module.css';

function Stats({ stats, title }) {
  return (
    <section className={styles.statsSection}>
      <h2 className="title">{title}</h2>
      <ul className={styles.statList}>
        {stats.map(item => (
          <li key={item.id} className={styles.item}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Stats.propTypes = {
  title: T.string.isRequired,
  stats: T.arrayOf(
    T.shape({
      label: T.string,
      percentage: T.number,
      id: T.number,
    }),
  ).isRequired,
};

export default Stats;
