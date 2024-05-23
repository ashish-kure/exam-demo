import React from "react";
import ForgotPasswordContainer from "../container/ForgotPassword/ForgotPasswordContainer";
import Form from "../shared/Form";
import ButtonLoader from "../shared/ButtonLoader";
import Message from "../shared/Message";

const ForgotPassword = () => {
  const { loading, handleSubmit, forgotPasswordFields, message, statusCode } =
    ForgotPasswordContainer();

  return (
    <section style={forgotPassStyle}>
      <Form fields={forgotPasswordFields} onSubmit={handleSubmit} />
      {loading && <ButtonLoader />}
      {statusCode && <Message message={message} />}
    </section>
  );
};

export default ForgotPassword;

const forgotPassStyle = {
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
