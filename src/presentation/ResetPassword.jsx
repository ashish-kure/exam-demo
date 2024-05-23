import React from "react";
import Form from "../shared/Form";
import ButtonLoader from "../shared/ButtonLoader";
import ResetPasswordContainer from "../container/ResetPassword/ResetPasswordContainer";
import Message from "../shared/Message";

const ResetPassword = () => {
  const { handleSubmit, resetPasswordFields, loading, statusCode, message } =
    ResetPasswordContainer();

  return (
    <section style={resetPassStyle}>
      <Form fields={resetPasswordFields} onSubmit={handleSubmit} />
      {loading && <ButtonLoader />}
      {statusCode && <Message message={message} />}
    </section>
  );
};

export default ResetPassword;

const resetPassStyle = {
  padding: 16,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  display: "flex",
  flexDirection: "column",
  gap: 25,
  border: "1px solid #cdcdcd",
  borderRadius: 8,
};
