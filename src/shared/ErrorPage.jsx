import { Box, Icon, Typography } from "@mui/material";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import CustomButton from "./CustomButton";
import { button } from "../constants/formConstants";

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
    </Box>
  );
};

export default ErrorPage;
