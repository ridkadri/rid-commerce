import React from 'react';


import SignIn from '../../components/SignIn/sign-in';
import SignUp from '../../components/SignUp/sign-up';

import './sign-in-and-sign-up.scss';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInAndSignUpPage;
