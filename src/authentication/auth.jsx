import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';

function LoginButton() {
  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log('Google login successful', tokenResponse);
    fetch('http://localhost:44396/signin-oidc?code='+{tokenResponse}, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      response.JSON();
    })
    .catch(error => {
      console.error('Failed api', error);
    });
      
    },
    onError: () => {
      console.error('Google login failed');
    },
    flow: 'auth-code',
  });

  return (
    <button onClick={() => googleLogin()}>
      Sign in with Google 
    </button>
  );
}

export default LoginButton;