import Head from "next/head";

import { useContext, useEffect, useState } from "react";
import useInput from "../../components/hooks/useInput";
import FirebaseContext from "../../context/firebase";

const Signin = () => {
  const { db, auth } = useContext(FirebaseContext);

  const {
    value: email,
    resetValue: resetEmail,
    bind: bindEmail,
  } = useInput("");

  const {
    value: password,
    resetValue: resetPassword,
    bind: bindPassword,
  } = useInput("");

  // handle signin

  const handleSignin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
    resetEmail();
    resetPassword();
  };

  return (
    <div>
      <head>
        <title>Signin</title>
      </head>
      <main>
        <div>
          <h2>SignIn</h2>
          <form onSubmit={handleSignin}>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Email" {...bindEmail} />
            </div>
            <div>
              <label>Password</label>
              <input type="password" placeholder="Password" {...bindPassword} />
              <div>
                <button type="submit">SignIn</button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Signin;
