import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Katie',
      image: 'https://avatars.githubusercontent.com/u/48837909?v=4',
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
