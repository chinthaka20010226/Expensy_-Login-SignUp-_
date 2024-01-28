import React from 'react';
import '../Style/LoginSignUp.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import con_password_icon from '../Assets/password.png';

function LoginSignUp(){
    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='card'>
                        <div className='card-body'>                                                                       
                            <div className='top-section'>
                                <h1 className='top-title'>Sign Up</h1>
                                <div className='text-underline'></div>
                            </div>
                            <div className='inputs-section'>
                                <div className='input'>
                                    <img src={user_icon} alt='user icon' className='input-icon'></img>
                                    <input type='text' placeholder='Name'></input>
                                </div>
                                <div className='input'>
                                    <img src={email_icon} alt='email icon' className='input-icon'></img>
                                    <input type='email' placeholder='Email'></input>
                                </div>
                                <div className='input'>
                                    <img src={password_icon} alt='password icon' className='input-icon'></img>
                                    <input type='password' placeholder='Password'></input>
                                </div>
                                <div className='input'>
                                    <img src={con_password_icon} alt='confirm password icon' className='input-icon'></img>                    
                                    <input type='password' placeholder='Confirm Password'></input>
                                </div>
                            </div>
                            <div className='lost-password'>
                                <p>Lost Password ? <span>Click Here</span></p>
                            </div>
                            <div className='submit-section'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='Sign-Up'>Sign Up</div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='Sign-Up'>Login</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignUp;