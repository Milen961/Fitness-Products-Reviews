import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
  const [passwordError, setPasswordError] = useState("");
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm({
    email: '',
    password: '',
    confirmPassword: '',
  }, onRegisterSubmit);

  const validatePassword = () => {
    if (values.password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = () => {
    if (values.password !== values.confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  return (
    <section id="register-page" className="content auth">
      <form className="Register" id="register" method="post" onSubmit={onSubmit}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Register</h1>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="milen_skrin@abv.bg"
            value={values.email}
            onChange={changeHandler}
          />

          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            name="password"
            id="register-password"
            value={values.password}
            onBlur={validatePassword}
            onChange={changeHandler}
          />
          {passwordError && <span className="error">{passwordError}</span>}

          <label htmlFor="con-pass">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirm-password"
            value={values.confirmPassword}
            onBlur={validateConfirmPassword}
            onChange={changeHandler}
          />
          {passwordError && <span className="error">{passwordError}</span>}

          <input className="btn submit" type="submit" value="Register" />

          <p className="field">
            <span>If you already have profile click <Link to="/login">here</Link></span>
          </p>
        </div>
      </form>
    </section>
  );
};
