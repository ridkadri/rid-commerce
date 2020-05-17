import React, { Component } from 'react';

import FormInput from '../FormInput/forminput';
import CustomButton from '../CustomButton/custom-button';

import {auth, signInWithGoogle} from '../../Firebase/firebase.utils';

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './sign-in.styles';

class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email: '', password: ''})
        } catch (error) {
            console.log(error);
        }

        
    }

    handleChange = e => {
        const {value, name} = e.target;

        this.setState({[name]: value});
    }
    
    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        label="email"
                        required 
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="password"
                        required 
                    />
                    <ButtonsBarContainer>
                        <CustomButton type="submit"> Sign In</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn> 
                            Sign In With Google
                        </CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        );
    }
}

export default SignIn;