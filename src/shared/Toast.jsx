import { useDispatch, useSelector } from "react-redux";
import { Alert, Snackbar } from "@mui/material";
import { closeToast } from "../redux/slices/toastSlice";

const Toast = () => {
  const dispatch = useDispatch();
  const { open, severity, message } = useSelector((state) => state.toast);

  const handleClose = () => dispatch(closeToast());

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
};

export default Toast;
