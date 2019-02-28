import React from 'react';
import SignInForm from './SignInForm';
import { SignUpLink } from '../SignUp';

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <SignUpLink />
  </div>
);

export default SignInPage;