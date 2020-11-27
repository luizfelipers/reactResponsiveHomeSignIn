import React from 'react'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput,FormButton}  from './SignInElements';

const SignIn = () => {
    return (
        <>
         <Container>
            <FormWrap>
                <Icon to='/'>
                    Tieteense
                </Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel>Email</FormLabel>
                        <FormInput></FormInput>
                        <FormLabel>Password</FormLabel>
                        <FormInput></FormInput>
                        <FormButton>Continue</FormButton>
                    </Form>
                </FormContent>
                </FormWrap>     
        </Container>   
        </>
    )
}

export default SignIn
