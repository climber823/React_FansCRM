import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleLogin = () => {
    setUser({ username, token: 'sample-token' });
    navigate('/user');  // Redirect to the user page after login
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
