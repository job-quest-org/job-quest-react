import React from 'react';

const LoginButton = () => {
  const handleLogin = () => {
    window.location.href = 'https://localhost:44396/login';
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginButton;