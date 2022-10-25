import PropTypes from 'prop-types';

import styles from './friendList.module.css'
import FriendListItem from './FriendListItem'


export default function FriendList({ friends }) {
  return (
    <ul className={styles.friend_list}>
      {friends.map(({ id, ...props }) => (
        <FriendListItem key={id} {...props} />
      ))}
    </ul>
  );
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name:  PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  )

};
