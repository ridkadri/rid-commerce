import React, {useState} from 'react';
import { connect } from 'react-redux';

import FormInput from '../FormInput/forminput';
import CustomButton from '../CustomButton/custom-button';

import {googleSignInStart, emailSignInStart} from '../../Redux/User/user.actions';

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './sign-in.styles';

const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({
        email: '', password: ''
    });

    const {email, password} = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = userCredentials;

        emailSignInStart(email, password);
    }

    const handleChange = e => {
        const {value, name} = e.target;

        setCredentials({...userCredentials, [name]: value});
    }
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        handleChange={handleChange} 
                        value={email} 
                        label="email"
                        required 
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={password} 
                        handleChange={handleChange}
                        label="password"
                        required 
                    />
                    <ButtonsBarContainer>
                        <CustomButton type="submit"> Sign In</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn> 
                            Sign In With Google
                        </CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);