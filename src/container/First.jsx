import React from "react";
import { useDispatch, useSelector } from "react-redux";
import signUp from "../redux/actions/signUpAction";

const First = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const formData = {
      name: "ashish",
      email: "ashish@gamail.com",
      password: "qwerty123",
      role: "student",
    };

    const config = {
      url: "users/SignUp",
      data: formData,
    };

    dispatch(signUp(config));
  };

  const handleLogin = () => {
    const formData = {
      email: "ashish@gamail.com",
      password: "qwerty123",
    };

    const config = {
      url: "users/Login",
      data: formData,
    };

    dispatch(signUp(config));
  };

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleLogin}>login</button>
    </>
  );
};

export default First;
