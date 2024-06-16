import { Box, Icon, Typography } from "@mui/material";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import CustomButton from "./CustomButton";
import { button } from "../constants/formConstants";
import { Link } from "react-router-dom";
import { getLocalStorage } from "../utils/javascript";

const ErrorPage = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={2}
    >
      <Typography
        variant="h5"
        sx={{
          p: 2,
          width: "fit-content",
          border: "1px solid",
          borderColor: "#ccc",
          borderRadius: 1.2,
          fontFamily: "monospace",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        404 - Error
        <Icon color="error">
          <BlockOutlinedIcon />
        </Icon>
      </Typography>
      <Link to={`/${getLocalStorage("role")}`}>
        <CustomButton type={button} label="Go to Dashboard" />
      </Link>
    </Box>
  );
};

export default ErrorPage;
