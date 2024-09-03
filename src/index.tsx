import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Login from './components/Login';
import User from './components/User';

const App = () => (
  <UserProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  </UserProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
