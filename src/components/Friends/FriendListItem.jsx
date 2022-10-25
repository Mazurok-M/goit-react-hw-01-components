import PropTypes from 'prop-types';

import styles from './friendList.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  const fullClassName = isOnline
    ? `${styles.status} ${styles.online}`
    : `${styles.status} ${styles.ofline}`;
  return (
    <li className={styles.item}>
      <span className={fullClassName}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
