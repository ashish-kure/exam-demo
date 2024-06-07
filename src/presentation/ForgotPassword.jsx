import React from "react";
import ForgotPasswordContainer from "../container/ForgotPassword/ForgotPasswordContainer";
import Form from "../shared/Form";
import ButtonLoader from "../shared/ButtonLoader";
import { Stack } from "@mui/material";

const ForgotPassword = () => {
  const { loading, handleSubmit, forgotPasswordFields } =
    ForgotPasswordContainer();

  return (
    <Stack spacing={2} sx={stackStyle}>
      <Form fields={forgotPasswordFields} onSubmit={handleSubmit} />
      {loading && <ButtonLoader />}
    </Stack>
  );
};

export default ForgotPassword;

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
