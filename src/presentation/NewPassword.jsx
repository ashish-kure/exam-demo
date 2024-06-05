import React from "react";
import Form from "../shared/Form";
import ButtonLoader from "../shared/ButtonLoader";
import NewPasswordContainer from "../container/ForgotPassword/NewPasswordContainer";
import Message from "../shared/Message";
import { Stack } from "@mui/material";

const NewPassword = () => {
  const { handleSubmit, newPasswordFields, loading, statusCode, message } =
    NewPasswordContainer();

  return (
    <Stack sx={stackStyle}>
      <Form fields={newPasswordFields} onSubmit={handleSubmit} />
      {loading && <ButtonLoader />}
      {statusCode && (
        <Message
          severity={statusCode === 200 ? "success" : "warning"}
          message={message}
        />
      )}
    </Stack>
  );
};

export default NewPassword;

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
