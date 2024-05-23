import React from "react";
import Form from "../shared/Form";
import ButtonLoader from "../shared/ButtonLoader";
import NewPasswordContainer from "../container/ForgotPassword/NewPasswordContainer";

const NewPassword = () => {
  const { handleSubmit, newPasswordFields, loading } = NewPasswordContainer();

  return (
    <>
      <Form fields={newPasswordFields} onSubmit={handleSubmit} />
      {loading && <ButtonLoader />}
    </>
  );
};

export default NewPassword;
