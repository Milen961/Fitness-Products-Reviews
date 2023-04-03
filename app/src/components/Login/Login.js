import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { onLoginSubmit } = useAuthContext();
  const { values, changeHandler, onSubmit } = useForm({
    email: '',
    password: '',
  }, onLoginSubmit);

  const validateEmail = () => {
    if (values.email.trim() === "") {
      setEmailError("Email field is required");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (values.password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  return (
    <section id="login-page" className="auth">
      <form className="Login" id="login" method="POST" onSubmit={onSubmit}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Login</h1>

          <label htmlFor="email">
            <i className="fas fa-envelope"></i>
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="milen_skrin@abv.bg"
            name="email"
            value={values.email}
            onBlur={validateEmail}
            onChange={changeHandler}
          />
          {emailError && <span className="error">{emailError}</span>}

          <label htmlFor="login-password">
            <i className="fas fa-lock"></i>
            Password:
          </label>
          <input
            type="password"
            id="login-password"
            name="password"
            value={values.password}
            onBlur={validatePassword}
            onChange={changeHandler}
          />
          {passwordError && <span className="error">{passwordError}</span>}

          <input type="submit" className="btn submit" value="Login" />
          <p className="field">
            <span>If you don't have profile click <Link to="/register">here</Link></span>
          </p>
        </div>
      </form>
    </section>
  );
};
