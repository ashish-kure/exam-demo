import { Alert } from "@mui/material";

const Message = ({ message, severity }) => {
  return <Alert severity={severity}>{message}</Alert>;
};

export default Message;
