import React from 'react';
import T from 'prop-types';
import UserStats from './UserStats';
import UserDescription from './UserDescription';
import styles from './Profile.module.css';

function Profile({ user }) {
  const { stats } = user;
  return (
    <div className={styles.profile}>
      <UserDescription
        image={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
      />
      <UserStats
        followersQuantity={stats.followers}
        viewsQuantity={stats.views}
        likesQuantity={stats.likes}
      />
    </div>
  );
}

Profile.propTypes = {
  user: T.shape({
    name: T.string.isRequired,
    avatar: T.string.isRequired,
    tag: T.string.isRequired,
    location: T.string.isRequired,
    stats: T.shape({
      followers: T.number.isRequired,
      views: T.number.isRequired,
      likes: T.number.isRequired,
    }),
  }).isRequired,
};

export default Profile;
