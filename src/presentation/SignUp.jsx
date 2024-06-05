import React from "react";
import { Link } from "react-router-dom";
import SignUpContainer from "../container/SignUp/SignUpContainer";
import Form from "../shared/Form";
import ButtonLoader from "../shared/ButtonLoader";
import { SERVER_ERROR_CODE } from "../constants/apiConstants";
import Message from "../shared/Message";
import { Stack, Typography } from "@mui/material";

const SignUp = () => {
  const { signUpFields, handleSubmit, loading, statusCode, message } =
    SignUpContainer();

  return (
    <Stack spacing={2} sx={stackStyle}>
      <Form fields={signUpFields} onSubmit={handleSubmit} />
      {loading && <ButtonLoader />}

      <Typography color="info" component="h6" sx={{ textAlign: "center" }}>
        Already have an Account? <Link to="/sign-in">Sign in</Link>
      </Typography>

      {statusCode === SERVER_ERROR_CODE && (
        <Message severity="warning" message={message} />
      )}
    </Stack>
  );
};

export default SignUp;

const stackStyle = {
  padding: 4,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  border: "1px solid #cdcdcd",
  borderRadius: 2,
};
