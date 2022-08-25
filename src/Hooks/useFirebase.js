import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../firebase.config';



const auth = getAuth(app);
const useFirebase = () => {

    // Set all value in state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('');
    const [error, setError] = useState('')

    // Get email from email field
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    // Get password from password field
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    // Implement sign Up method using password and email
    const handleSignin = (e) => {
        // Preventing page from auto loading
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);

            })

    }

    // Sign in method using Google
    const handleGoogleSignin = () => {

    }



    return {
        user, error, email, password, handleEmail, handlePassword, handleSignin, handleGoogleSignin
    }
};

export default useFirebase;