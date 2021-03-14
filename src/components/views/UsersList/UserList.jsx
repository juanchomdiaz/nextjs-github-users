import { useContext, Fragment } from 'react';

import UsersContext from '@context/users/UsersContext';

import UserCard from '@components/views/UserCard';

import styles from './UserList.module.scss';

const UsersList = () => {
  const { users } = useContext(UsersContext);

  return (
    <Fragment>
      {users.lenght !== 0 && (
        <div className={styles.cardGrid}>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default UsersList;
