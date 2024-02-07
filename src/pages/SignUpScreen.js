import React, { useRef } from "react";
import "../styles/signUpScreen.css";
import { auth } from "../firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function SignUpScreen() {
  const emailRef = useRef(null);
  const pwdRef = useRef(null);

  const register = (e) => {
    e.preventDefault(); // to eliminate the typical refresh
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      pwdRef.current.value
    )
      .then((userCredential) => {
        // Signed up
        console.log(userCredential.user);
        //const user = userCredential.user;
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth,
      emailRef.current.value,
      pwdRef.current.value)
      .then((userCredential) => {
        // Signed in
        //const user = userCredential.user;
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={pwdRef} />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signUpScreen_gray">New to Netflix? </span>
          <span className="signUpScreen_link" onClick={register}>
            Sign up now.{" "}
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
