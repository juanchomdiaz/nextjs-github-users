import { useContext, Fragment } from 'react';

import UsersContext from '@contexts/users/UsersContext';

import UserCard from '@components/users/UserCard';

const UsersList = () => {
  const { users } = useContext(UsersContext);

  return (
    <Fragment>
      {users.lenght !== 0 && (
        <div className="card-grid">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default UsersList;
