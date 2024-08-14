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
                    <label>User name</label>
                    <input type="text" placeholder='Enter username' />
                    <label>Password</label>
                    <input type="password" placeholder='Enter password' />
                </div>
            ) : showSignUp ? (
                <div className='signup-input'>
                    <form action="signup" method="POST">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter name"/>
                        <label>Email</label>
                        <input type="email" placeholder='Email Address' />
                        <label>Create Password</label>
                        <input type="password" placeholder='enter password'/>
                        <label>Confirm Password</label>
                        <input type="password" placeholder='re-enter password'/>
                    </form>
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



