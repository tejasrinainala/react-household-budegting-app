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
    function save(e) {
        e.preventDefault();  // Prevent form submission
        var pw1 = document.querySelector(".pswd1").value;
        var pw2 = document.querySelector(".pswd2").value;
        if (pw1 === pw2) {
            alert("Hurray! You successfully signed up.");
        } else {
            alert("Password doesn't match.");
        }
    }
    return (
        <div className="ask-user">
            {showLogin ? (
                <div className='login-input'>
                    <label>User name</label>
                    <input type="text" placeholder='Enter username' />
                    <label>Password</label>
                    <input type="password" placeholder='Enter password' />
                    <button>Login</button>
                </div>
            ) : showSignUp ? (
                <div className='signup-input'>
                    <form action="signup" method="POST">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter name"/>
                        <label>Email</label>
                        <input type="email" placeholder='Email Address' />
                        <input className="pswd1" type="password" placeholder='enter password'/>
                        <label>Confirm Password</label>
                        <input className='pswd2' type="password" placeholder='re-enter password'/>
                        <button onClick={save}>Save</button>
                        
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



