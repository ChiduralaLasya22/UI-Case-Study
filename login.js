import React, { useState } from 'react';
//import validationRules from './validationRules.json';
import axios from 'axios';
import Picture1 from './Picture1 (2).png'
import book from './book.png'
const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const handleEmailChange = (e) => {
setEmail(e.target.value);
console.log('{email}');
};
const handlePasswordChange = (e) => {
setPassword(e.target.value);

  };

  const handleSubmit = (e) => {
e.preventDefault();
// Reset previous error messages
setEmailError('');
setPasswordError('');
// Perform form validation
if (!email) {
setEmailError('Please enter your email');

    }

    if (!password) {

      setPasswordError('Please enter your password');

    }

    // Add more validation rules as needed




    // If the form is valid, proceed with login logic

    if (email && password) {

      // Handle login logic here

     

    }

  };
  const handleLogin = async () => {

    try {

      const response = await axios.get(`http://localhost:8000/users?username=${email}&password=${password}`);

     

      const user = response.data[0];

      if (user) {

       

        alert('Login successful');

        window.location.href="/navigation";

       

      } else {

        setErrorMessage('Invalid email or password');

      }

    } catch (error) {

      console.error('Error logging in:', error);

    }

  };



  return (
<div className="container" style={{backgroundColor:'black', height:'100vh', maxWidth:'300vh'}}>
<div style={{paddingLeft:'400px',paddingTop:'170px'}}>

     <form onSubmit={handleSubmit}>

       

         <h2 style={{color:'white'}}><img src={book} style={{borderRadius:'40%',backgroundColor:'white'}}/>E-Library</h2>

        <p style={{color:'white',paddingRight:'600px'}}>Poweredby</p>
        {<img src={Picture1} /> }

        <div className="form-group">
        
        <label style={{color:'white',}}>Email/ SSO Id:</label>

          <input type="email" className="form-control" placeholder="Enter your email" value={email}
      onChange={handleEmailChange} style={{width:'60vh'}}

            required

          />

          
        
        </div>

        <div className="form-group">

          <label style={{color:'white'}}>Password:</label>

          <input

            type="password"

            className="form-control"

            placeholder="Enter your password"

            value={password}

            onChange={handlePasswordChange}

            style={{width:'60vh'}}

            required

          />

          
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        </div>

        <div style={{paddingTop:'30px'}}>

        <button onClick={handleLogin} type="submit" className="btn btn-outline-light"> LogIn</button></div>
      </form></div>

    </div>

  );

};




export default Login;
