import React, { useState } from 'react';
import './index.css';

function App() {
    const [showLogin, setShowLogin] = useState(false);
    const[showSignUp,setShowSignUp] = useState(false);

    function login() {
        setShowLogin(true);
    }
    function signUp()
    {
        setShowSignUp(true);
    }

    return (
        <div className="ask-user">
            {showLogin ? (
                <div className='login-input'>
                    <input type="text" placeholder='Enter username' />
                    <input type="password" placeholder='Enter password' />
                </div>
            ) : showSignUp ? (
                <div className='signup-input'>
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder='Email Address' />
                </div>
            ) : (
                <>
                    <p>Already a User?</p>
                    <button onClick={login}>Login</button>
                    <p>New User?</p>
                    <button onClick={signUp}>Sign Up!</button>
                </>
            )}
        </div>
    
    );
}

export default App;



