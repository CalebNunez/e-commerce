import React, { useState } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import './sign-up-styles.scss';

const SignUp = () => {

  const [user, setUserInfo] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async e => {
    e.preventDefault();

    if(password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      setUserInfo({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUserInfo({ ...user, [name]: value })
  };

  const { displayName, email, password, confirmPassword } = user;

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />

        <CustomButton type='submit'>Sign Up</CustomButton>

      </form>
    </div>
  );
};

export default SignUp;
