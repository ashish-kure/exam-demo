import { Fragment } from "react";
import { button } from "../../constants/formConstants";
import ProfileContainer from "../../container/Student/ProfileContainer";
import ButtonLoader from "../../shared/ButtonLoader";
import CustomButton from "../../shared/CustomButton";
import CustomInput from "../../shared/CustomInput";
import { Box, Divider, Stack, Typography } from "@mui/material";

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
      <Box component="section" textAlign="center">
        {!edit ? (
          <Typography variant="h6" sx={textStyle}>
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

      <Box component="section" textAlign="center">
        <Typography variant="h6" sx={textStyle}>
          {profile?.email}
        </Typography>
      </Box>

      <Stack direction="row" justifyContent="center" spacing={2} margin="auto">
        {!edit ? (
          <CustomButton type={button} label="Edit" onClick={handleEdit} />
        ) : (
          <Fragment>
            <CustomButton type={button} label="Save" onClick={handleUpdate} />
            <CustomButton type={button} label="Cancel" onClick={handleCancel} />
            {updateLoading && <ButtonLoader />}
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
};
