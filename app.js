import React, { useState } from 'react';
import ReactDOM from "react-DOM";
import './index.css';

function App() {
    const [showLogin, setShowLogin] = useState(false);

    function login() {
        setShowLogin(true);
    }

    return (
        <div className="ask-user">
            {showLogin ? (
                <div>
                    <input type="text" placeholder='Enter username/number' />
                    <input type="password" placeholder='Enter password' />
                </div>
            ) : (
                <>
                    <p>Already a User?</p>
                    <button onClick={login}>Login</button>
                    <p>New User?</p>
                    <button>Sign Up!</button>
                </>
            )}
        </div>
    );
}

export default App;


