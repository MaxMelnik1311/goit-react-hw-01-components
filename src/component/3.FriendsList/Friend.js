import React from 'react';
import T from 'prop-types';
import styles from './FriendList.module.css';

function Friend({ isOnline, avatar, name }) {
  return (
    <li className={styles.person}>
      <span className={isOnline ? styles.online : styles.offline} />
      <img className={styles.avatar} src={avatar} alt="your friend" />
      <p className="name">{name}</p>
    </li>
  );
}

Friend.propTypes = {
  isOnline: T.bool.isRequired,
  avatar: T.string.isRequired,
  name: T.string.isRequired,
};

export default Friend;
