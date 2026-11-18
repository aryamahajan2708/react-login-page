import React, { useState } from 'react'
import './LoginForm.css';
function LoginForm() {
  const [isLogin, setIsLogin]= useState(true);
  return (
    <div className='container'>
      <div className="formcontainer">
        <div className="form-btn">
          <button className={isLogin ? 'active' : ""} onClick={()=> setIsLogin(true)}>login</button>
          <button className={!isLogin ? 'active' : ''} onClick={()=> setIsLogin(false)}>SignUp</button>
        </div>
        {isLogin ? <>
        <div className='form-login'>
          <h2>Login Form</h2>
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          <a href="#">Forget Password?</a>
          <button className='login-btn'>Login</button>
        </div>
        </> : ''}
        {!isLogin ? <>
        <div className='form-signup'>
          <h2>sign up form</h2>
        </div>
        </> : ''}
      </div>
    </div>
    
  )
}

export default LoginForm