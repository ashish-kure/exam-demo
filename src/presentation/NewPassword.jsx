import React from "react";
import Form from "../shared/Form";
import ButtonLoader from "../shared/ButtonLoader";
import NewPasswordContainer from "../container/ForgotPassword/NewPasswordContainer";
import Message from "../shared/Message";

const NewPassword = () => {
  const { handleSubmit, newPasswordFields, loading, statusCode, message } =
    NewPasswordContainer();

  return (
    <section style={newPassStyle}>
      <Form fields={newPasswordFields} onSubmit={handleSubmit} />
      {loading && <ButtonLoader />}
      {statusCode && <Message message={message} />}
    </section>
  );
};

export default NewPassword;

const newPassStyle = {
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
