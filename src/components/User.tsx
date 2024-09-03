import React from 'react';
import { useUser } from '../context/UserContext';

const User = () => {
  const { user } = useUser();

  if (!user) {
    return <p>You need to log in first!</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
      <p>Token: {user.token}</p>
    </div>
  );
};

export default User;
