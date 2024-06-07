import React from "react";
import StudentContainer from "../../container/Teacher/StudentContainer";
import Table from "../../shared/Table";
import ButtonLoader from "../../shared/ButtonLoader";
import CustomButton from "../../shared/CustomButton";
import { button } from "../../constants/formConstants";
import { Box, Stack, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";

const Student = () => {
  const { handleBack, studentData, loading, result } = StudentContainer();

  if (loading) {
    return <ButtonLoader />;
  }

  return (
    <Stack spacing={2}>
      <Box>
        <Typography variant="subtitle1">Name</Typography>
        <Typography sx={typographyStyle}>
          <SentimentSatisfiedAltOutlinedIcon color="action" />
          {studentData?.name}
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle1">Email</Typography>
        <Typography sx={typographyStyle}>
          <EmailOutlinedIcon color="action" /> {studentData?.email}
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle1">Result</Typography>
        <Table tableData={result} />
      </Box>
      <CustomButton
        label="Back"
        type={button}
        sx={{ alignSelf: "center" }}
        onClick={handleBack}
      />
    </Stack>
  );
};

export default Student;

const typographyStyle = {
  p: 2,
  border: "1px solid",
  borderColor: "divider",
  borderRadius: 1.2,
  fontWeight: "bolder",
  fontSize: 16,
  display: "flex",
  alignItems: "center",
  gap: 2,
};
