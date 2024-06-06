import React from "react";
import Form from "../shared/Form";
import ButtonLoader from "../shared/ButtonLoader";
import ResetPasswordContainer from "../container/ResetPassword/ResetPasswordContainer";
import Message from "../shared/Message";
import { Box, Stack } from "@mui/material";

const ResetPassword = () => {
  const { handleSubmit, resetPasswordFields, loading, statusCode, message } =
    ResetPasswordContainer();

  return (
    <Stack sx={resetPassStyle}>
      <Box margin="auto" sx={{ fontSize: 18 }}>
        Change Password
      </Box>
      <br /> <br />
      <Form fields={resetPasswordFields} onSubmit={handleSubmit} />
      {loading && <ButtonLoader />}
      {statusCode === 500 && <Message severity="warning" message={message} />}
    </Stack>
  );
};

export default ResetPassword;

const resetPassStyle = {
  padding: 4,
  width: "fit-content",
  border: "1px solid #cdcdcd",
  borderRadius: 2,
};
