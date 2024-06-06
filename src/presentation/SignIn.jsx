import Form from "../shared/Form";
import SignInContainer from "../container/SignIn/SignInContainer";
import Message from "../shared/Message";
import { Link } from "react-router-dom";
import ButtonLoader from "../shared/ButtonLoader";
import { SERVER_ERROR_CODE } from "../constants/apiConstants";
import { Stack, Typography } from "@mui/material";

const SignIn = () => {
  const { handleSubmit, signInFields, statusCode, message, loading } =
    SignInContainer();

  return (
    <Stack spacing={2} sx={stackStyle}>
      <Form fields={signInFields} onSubmit={handleSubmit} />
      {loading && <ButtonLoader />}

      <Stack direction="row" justifyContent="space-between">
        <Typography>
          <Link to="/sign-up">New User?</Link>
        </Typography>
        <Typography>
          <Link to="/forgot-password">Forgot Password?</Link>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SignIn;

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
