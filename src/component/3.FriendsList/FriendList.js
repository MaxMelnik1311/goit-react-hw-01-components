import React from 'react';
import T from 'prop-types';
import Friend from './Friend';
import styles from './FriendList.module.css';

function FriendList({ friends }) {
  const list = friends.map(friend => (
    <Friend
      key={friend.id}
      isOnline={friend.isOnline}
      avatar={friend.avatar}
      name={friend.name}
    />
  ));
  return <ul className={styles.friendList}>{list}</ul>;
}

FriendList.propTypes = {
  friends: T.arrayOf({}).isRequired,
};

export default FriendList;
