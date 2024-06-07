import { Typography } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

const ErrorMessage = ({ children }) => {
  return (
    <Typography
      variant="subtitle2"
      color="indianred"
      display="flex"
      alignItems="center"
      gap={1}
    >
      {children && <ErrorOutlineOutlinedIcon />}
      {children}
    </Typography>
  );
};

export default ErrorMessage;
