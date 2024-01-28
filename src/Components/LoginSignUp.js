import React from 'react';
import '../Style/LoginSignUp.css';

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
                                    {/* { ***** } */}
                                    <input type='text' placeholder='Name'></input>
                                </div>
                                <div className='input'>
                                    {/* { ***** } */}
                                    <input type='email' placeholder='Email'></input>
                                </div>
                                <div className='input'>
                                    {/* { ***** } */}
                                    <input type='password' placeholder='Password'></input>
                                </div>
                                <div className='input'>
                                    {/* { ***** } */}
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