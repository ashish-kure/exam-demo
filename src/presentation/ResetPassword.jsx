import React from "react";
import Form from "../shared/Form";
import ButtonLoader from "../shared/ButtonLoader";
import ResetPasswordContainer from "../container/ResetPassword/ResetPasswordContainer";
import { Typography, Stack } from "@mui/material";

const ResetPassword = () => {
  const { handleSubmit, resetPasswordFields, loading } =
    ResetPasswordContainer();

  return (
    <Stack sx={stackStyle}>
      <Typography margin="auto" sx={{ fontSize: 18 }}>
        Change Password
      </Typography>

      <Form fields={resetPasswordFields} onSubmit={handleSubmit} />
      {loading && <ButtonLoader />}
    </Stack>
  );
};

export default ResetPassword;

const stackStyle = {
  gap: 4,
  padding: 4,
  width: "fit-content",
  border: "1px solid #cdcdcd",
  borderRadius: 2,
};
