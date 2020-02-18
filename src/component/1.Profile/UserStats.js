import React from 'react';
import T from 'prop-types';
import styles from './UserStats.module.css';

function UserStats({ followers, views, likes }) {
  return (
    <ul className={styles.stats}>
      <li className={styles.item}>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li className={styles.item}>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li className={styles.item}>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  );
}

UserStats.propTypes = {
  followers: T.number.isRequired,
  views: T.number.isRequired,
  likes: T.number.isRequired,
};

export default UserStats;
