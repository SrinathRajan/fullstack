// import { useForm } from "react-hook-form";
// import "../assets/css/login.css";

// function Login() {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = async (data) => {
//     console.log("Form data submitted:", data);

//         await new Promise(resolve => setTimeout(resolve, 1000));


//     console.log("Simulated asynchronous operation complete");
//   };

//   return (
//     <div className="box">
//       <form className="App" onSubmit={handleSubmit(onSubmit)}>
//         <p className="p"> Login Form</p>

//         {/* <label>Username</label>
//         <input type="text" {...register("name", { required: true })} />
//         {errors.name && <span style={{ color: "red" }}> Name is mandatory </span>} */}

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

// export default Login;


import { useState } from 'react';
import '../assets/css/login.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter valid login credentials.');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Password is short');
      alert('Password is short');
      return;
    }
    try {
      const response = await axios.post('http://127.0.0.1:8081/api/v1/auth/authenticate', {
        email,
        password,
      });

      navigate('/home');

      let token = response.data.token;
      let user = response.data.userResponse;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Error: ', error);
      setErrorMessage('Password is Incorrect');
    }
    // navigate('/home');
  };

  return (
      <div className="sign">
        <form className="signup-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
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
          <br/>
          <div className='logbtn'>
              <button className="b2">Login</button>
          </div>
          <div className='newpage'>
            <h3 id="aaaa">New User?<Link to='/signup'><a>Register here!</a></Link></h3>
          </div>
          <br/>
        </form>
      </div>
  );
}

export default Login;