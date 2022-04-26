import React, { useState } from "react";
import { Button } from "@mui/material";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "../firebase";
import { useNavigate } from "react-router-dom";

const app=initializeApp(firebaseConfig)

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const auth = getAuth();
  
  const signIn = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        navigate('/');
    })
    .catch((error)=>{
        console.log('error-code:',error.code)
        console.log('message:',error.message)
    })
  }

  const register = (e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
    navigate('/')
    })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })
    
  }
  return (
    <div className="signup">
      <div className="box">
        <h3>Log in</h3>
        <form className="signup-form">
          <input type='email' placeholder="E-mail" value={email} onChange= {(e)=>{setEmail(e.target.value)}}></input>
          <input type='password' placeholder="Password" value={password} onChange= {(e)=>{setPassword(e.target.value)}}></input>
          <Button type="submit" onClick={signIn}>Sign in</Button>
        </form>
        <p>New to Netflix? <span onClick={register}>Sign Up Now.</span></p>
      </div>
    </div>
  );
}


export default Signup;
