import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
  const [passwordError, setPasswordError] = useState("");
  const [userNameError, setUserNameError ] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',

  }, onRegisterSubmit);
  
  const validateUserName = () => {
    if (values.userName.length < 2){
      setUserNameError("UserName must be at least 2 characters long");
    } else{
      setUserNameError("");
    }
  };

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
  const validatePhoneNumber = () => {
    if (values.phoneNumber.length < 10){
      setPhoneNumberError("Phone number must be at least 7 digits");
    } else{
      setPhoneNumberError("");
    }
  };

  return (
    <section id="register-page" className="content auth">
      <form className="Register" id="register" method="post" onSubmit={onSubmit}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Register</h1>

          <label htmlFor="userName">User Name:</label>
          <input
            type="userName"
            id="userName"
            name="userName"
            value={values.userName}
            onBlur={validateUserName}
            onChange={changeHandler}
          />
          {userNameError && <span className="error">{userNameError}</span>}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
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

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="phoneNumber"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="+359"
            value={values.phoneNumber}
            onBlur={validatePhoneNumber}
            onChange={changeHandler}
          />
          {phoneNumberError && <span className="error">{phoneNumberError}</span>}

          <input className="btn submit" type="submit" value="Register" />

          <p className="field">
            <span>If you already have profile click <Link to="/login">here</Link></span>
          </p>
        </div>
      </form>
    </section>
  );
};
