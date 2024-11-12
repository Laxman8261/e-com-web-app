import React, { useState } from "react";
import '../logInAndSignUpPage/logInAndSignUpPage.css';

const SignUpLogin = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="container">
            {isSignUp ? (
                <div className="form-container">
                    <h1 className="header">Create Account</h1>
                    <input type="text" placeholder="Name" className="input" required />
                    <input type="email" placeholder="Email" className="input" required />
                    <input type="password" placeholder="Password" className="input" required />
                    <button className="signup-button">Sign Up</button>
                    <p className="toggle-text">
                        Already have an account?{" "}
                        <span className="toggle-link" onClick={toggleForm}>
                            Login here
                        </span>
                    </p>
                </div>
            ) : (
                <div className="form-container">
                    <h1 className="header">Sign In</h1>
                    <input type="email" placeholder="Email" className="input" required />
                    <input type="password" placeholder="Password" className="input" required />
                    <button className="login-button">Login</button>
                    <p className="toggle-text">
                        Don't have an account?{" "}
                        <span className="toggle-link" onClick={toggleForm}>
                            Sign up here
                        </span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default SignUpLogin;
