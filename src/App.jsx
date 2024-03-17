import React from 'react'
import LoginButton from './authentication/auth'
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = "361329961613-62a9oo0vdj7on749nft2q4lq8k5p7ep0.apps.googleusercontent.com";
const res = fetch('http://localhost:5173/api/Candidate/GetCandidateCount', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    // handle response
  })
  .catch(error => {
    console.error('Failed to call API', error);
  });
function App() {
    return (
            <div>
                <p className="flex font-extrabold text-red-600">Hello world</p>
                
                <GoogleOAuthProvider clientId={clientId}>
                    <LoginButton/>
                </GoogleOAuthProvider>
            </div>
            );
        }
export default App
