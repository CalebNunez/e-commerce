import React, { useState } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import './sign-in-styles.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
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

        <CustomButton type="submit"> Sign In </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
