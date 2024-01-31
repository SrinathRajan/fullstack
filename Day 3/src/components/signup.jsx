// import { useForm } from "react-hook-form";
// import "../assets/css/signup.css";

// function Signup() {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = async (data) => {
//     console.log("Form data submitted:", data);

//         await new Promise(resolve => setTimeout(resolve, 1000));


//     console.log("Simulated asynchronous operation complete");
//   };

//   return (
//     <div className="box">
//       <form className="App" onSubmit={handleSubmit(onSubmit)}>
//         <p className="p"> Signup Form</p>

//         <label>Username</label>
//         <input type="text" {...register("name", { required: true })} />
//         {errors.name && <span style={{ color: "red" }}> Name is mandatory </span>}

//         <label>Email</label>
//         <input type="email" {...register("email", { required: true })} />
//         {errors.email && <span style={{ color: "red" }}> Email is mandatory </span>}

    
//         <label>Password</label>
//         <input type="password" {...register("password", { required: true })} />
//         {errors.password && <span style={{ color: "red" }}> Password Required </span>}

        
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;

// frontend/Signup.js

import  { useState } from 'react';
import '../assets/css/signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage,setErrorMessage]=useState('');
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleSignup = async (e) => {
    e.preventDefault();
    // dispatch({type:"POSTNAME",action:name});
    if (name.trim() === '') {
      alert('Please enter a branch name.');
      return;
    }
    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter valid signup credentials.');
      return;
    }
    if (!name) {
      setErrorMessage('Please enter your name.');
      return;
    }

    // Email validation: Check if the email is in a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password should be at least 6 characters long.');
      return;
    }
    try {
      const response = await axios.post("http://localhost:8081/api/v1/auth/register", {
        name,
        email,
        password,
      });

      if (response.status === 200) {
        setName('');
        setEmail('');
        setPassword('');
        navigate('/');
      }
    } catch (error) {
      console.error('Error: ', error);
    }
    
  };

  return (
   
    <div className='sign'>

    <form className="signup-form" onSubmit={handleSignup}>
 <h2>Sign Up</h2>
 <div className='in'>
 {errorMessage && <p className="error-message">{errorMessage}</p>}

 <input
   className="in"
   type="text"
   placeholder="UserName"
   value={name}
   onChange={(e) => setName(e.target.value)}
   required 
 />
 <input
   className="in"
   type="email"
   placeholder="Email"
   value={email}
   onChange={(e) => setEmail(e.target.value)}
   required
 />
 <input
   className="in"
   type="password"
   placeholder="Password"
   value={password}
   onChange={(e) => setPassword(e.target.value)}
   required
 />
</div>
<div className='up'>
 <button>Sign Up</button>
 </div>
</form>
</div>
  );
}

export default Signup;