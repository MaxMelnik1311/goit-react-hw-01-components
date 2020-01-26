import React from 'react';
import styles from './FriendList.module.css';

function FriendList(prop) {
  const { friends } = prop;
  const list = friends.map(friend => (
    <li key={friend.id} className={styles.person}>
      <span className={friend.isOnline ? styles.online : styles.offline} />
      <img className={styles.avatar} src={friend.avatar} alt="" />
      <p className="name">{friend.name}</p>
    </li>
  ));
  return <ul className={styles.friendList}>{list}</ul>;
}

export default FriendList;
