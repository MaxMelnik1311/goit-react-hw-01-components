import React from 'react';
import T from 'prop-types';
import styles from './UserStats.module.css';

function UserStats({ followersQuantity, viewsQuantity, likesQuantity }) {
  return (
    <ul className={styles.stats}>
      <li className={styles.item}>
        <span className="label">Followers</span>
        <span className="quantity">{followersQuantity}</span>
      </li>
      <li className={styles.item}>
        <span className="label">Views</span>
        <span className="quantity">{viewsQuantity}</span>
      </li>
      <li className={styles.item}>
        <span className="label">Likes</span>
        <span className="quantity">{likesQuantity}</span>
      </li>
    </ul>
  );
}

UserStats.propTypes = {
  followersQuantity: T.number.isRequired,
  viewsQuantity: T.number.isRequired,
  likesQuantity: T.number.isRequired,
};

export default UserStats;
