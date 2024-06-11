import { Fragment } from "react";
import { button } from "../../constants/formConstants";
import ProfileContainer from "../../container/Student/ProfileContainer";
import ButtonLoader from "../../shared/ButtonLoader";
import CustomButton from "../../shared/CustomButton";
import CustomInput from "../../shared/CustomInput";
import { Box, Stack, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";

const Profile = () => {
  const {
    edit,
    input,
    profile,
    loading,
    updateLoading,
    handleEdit,
    handleCancel,
    handleUpdate,
    handleNameChange,
  } = ProfileContainer();

  if (loading) {
    return <ButtonLoader />;
  }

  return (
    <Stack spacing={2}>
      <Box component="section">
        <Typography variant="subtitle1">Name</Typography>
        {!edit ? (
          <Typography variant="h6" sx={textStyle}>
            <SentimentSatisfiedAltOutlinedIcon color="action" />
            {profile?.name}
          </Typography>
        ) : (
          <CustomInput
            size="normal"
            value={input}
            onChange={handleNameChange}
          />
        )}
      </Box>

      <Box component="section">
        <Typography variant="subtitle1">Email</Typography>
        <Typography variant="h6" sx={textStyle}>
          <EmailOutlinedIcon color="action" />
          {profile?.email}
        </Typography>
      </Box>

      <Stack direction="row" justifyContent="center" spacing={2} margin="auto">
        {!edit ? (
          <CustomButton type={button} label="Edit" onClick={handleEdit} />
        ) : (
          <Fragment>
            <CustomButton
              type={button}
              label="Save"
              onClick={handleUpdate}
              loading={updateLoading}
              loaderColor="white"
            />
            <CustomButton type={button} label="Cancel" onClick={handleCancel} />
          </Fragment>
        )}
      </Stack>
    </Stack>
  );
};

export default Profile;

const textStyle = {
  p: 2,
  border: "1px solid",
  borderColor: "divider",
  borderRadius: 1.2,
  display: "flex",
  alignItems: "center",
  gap: 2,
};
