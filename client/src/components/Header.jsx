import React, { useState } from 'react';
import './Header.css';
import { IoPersonCircle } from "react-icons/io5";
import logo from "./images/tshirt.jpg";

const Header = () => {

    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction ('active');
    };

    const loginLink = () => {
        setAction ('');
    }

  return (
    
    <div className={`wrapper ${action}`}>
        <div className='form-box login'>
            <form action="">
                <IoPersonCircle style={{fontSize:'80px', marginLeft:'39%', marginTop:'10px'}}/>
                <h1>Login</h1>
                <div className='input-box'>
                    <p>Username:</p>
                    <input type="text" placeholder='Enter your username...' required/>
                </div>
                <div className='input-box'>
                    <p>Password:</p>
                    <input type="password" placeholder='Enter your password...' required/>
                </div>
                <div className='remember-forgot'>
                    <label htmlFor="">
                        <a href="">Forgot Password?</a>
                    </label>
                </div>
                <button type='submit'>Login</button>
                <div className='register-link'>
                    <p>Don't have an account? <a href="" onClick={registerLink}>Register</a></p>
                </div>
            </form>
        </div>
        
        <div className='form-box register'>
            <form action="">
                <h1>Register</h1>
                <div className='info-container'>
                    <div className='input-box'>
                        <p>Email:</p>
                        <input type="email" placeholder='Enter your username...' required/>
                    </div>
                    <div className='input-box'>
                        <p>Username:</p>
                        <input type="text" placeholder='Enter your username...' required/>
                    </div>
                    <div className='input-box'>
                        <p>Password:</p>
                        <input type="password" placeholder='Enter your password...' required/>
                    </div>
                    <div className='input-box'>
                        <p>Confirm Password:</p>
                        <input type="password" placeholder='Enter your password...' required/>
                    </div>
                    <div className='remember-forgot'>
                        <label htmlFor="">
                            <a href="">Forgot Password?</a>
                        </label>
                    </div>
                    <button type='submit'>Login</button>
                    <div className='register-link'>
                        <p>Don't have an account? <a href="" onClick={loginLink}>Register</a></p>
                    </div>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Header;