import { AppBar, Typography } from "@mui/material";
import { Toolbar as MuiToolbar } from "@mui/material";
import { capitalize, getLocalStorage } from "../utils/javascript";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

const Toolbar = () => {
  const role = getLocalStorage("role");

  return (
    <AppBar
      position="fixed"
      sx={{
        px: 2,
        boxShadow: "none",
        border: "1px solid",
        borderColor: "divider",
        background: "white",
      }}
    >
      <MuiToolbar sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
        <KeyboardBackspaceOutlinedIcon color="action" />
        <Typography variant="h6" color="#555">
          {capitalize(role)}
        </Typography>
      </MuiToolbar>
    </AppBar>
  );
};

export default Toolbar;
