import React from 'react';
import T from 'prop-types';
import styles from './UserDescription.module.css';

function UserDescription({ image, alt, name, tag, location }) {
  return (
    <div className="description">
      <img src={image} alt={alt} className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
}

UserDescription.defaultProps = {
  alt: 'user avatar',
};

UserDescription.propTypes = {
  image: T.string.isRequired,
  name: T.string.isRequired,
  location: T.string.isRequired,
  tag: T.string.isRequired,
  alt: T.string,
};

export default UserDescription;
