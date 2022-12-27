import React, { useState } from "react";
import "./Login.css";
import { Link ,useNavigate} from "react-router-dom";
import { auth } from "./firebase";

function LoginPage() {
  const history = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email,password)
      .then(auth => {history('/')})
      .catch(error => alert(error.message))

    //Some Firebase Login keys
  }

  const register =e => {
    e.preventDefault();  
    //Firebase Register
    auth
      .createUserWithEmailAndPassword(email,password)
      .then((auth) => {
        //Successfully Created the User
        console.log(auth);
        if(auth){
          history('/');
        }
      })
      .catch(error => alert(error.message))

  }

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          className="login__logo"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>

        <form action="">
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e=> setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

          <button onClick={signIn} className="login__signinBtn">Sign In</button>
        </form>
        <p>
          By singing-in you agree to Amazon Clone Conditons of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice anad our Interest-Based Ads
          Notice
        </p>
        <button onClick={register}className="login__registerBtn">Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default LoginPage;
