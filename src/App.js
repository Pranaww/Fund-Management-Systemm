import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  const token = localStorage.getItem('token');
  return (
    <div>
      {!token ? <Login /> : <Dashboard />}
    </div>
  );
};

export default App;