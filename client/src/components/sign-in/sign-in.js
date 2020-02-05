import React, { useState } from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import './sign-in-styles.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={(e) => setEmail(e.target.value)}
          value={email}
          label="email"
          required
        />

        <FormInput
          name="password"
          type="password"
          handleChange={(e) => setPassword(e.target.value)}
          value={password}
          label="password"
          required
        />

        <div className='buttons'>
          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
