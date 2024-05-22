import React from "react";
import ForgotPasswordContainer from "../container/ForgotPassword/ForgotPasswordContainer";
import Form from "../shared/Form";
import ButtonLoader from "../shared/ButtonLoader";

const ForgotPassword = () => {
  const { loading, handleSubmit, forgotPasswordFields } =
    ForgotPasswordContainer();

  return (
    <>
      <Form fields={forgotPasswordFields} onSubmit={handleSubmit} />
      {loading && <ButtonLoader />}
    </>
  );
};

export default ForgotPassword;
