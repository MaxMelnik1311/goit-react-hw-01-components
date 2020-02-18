import React from 'react';
import T from 'prop-types';
import StatsItem from './StatsItem';
import styles from './Stats.module.css';

function Stats({ stats, title }) {
  return (
    <section className={styles.statsSection}>
      {title && <h2 className="title">{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(item => (
          <StatsItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
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
