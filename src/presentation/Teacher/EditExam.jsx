import React from "react";
import EditExamContainer from "../../container/Teacher/EditExamContainer";
import ButtonLoader from "../../shared/ButtonLoader";
import ExamForm from "../exam/ExamForm";
import { Stack, Typography } from "@mui/material";

const EditExam = () => {
  const { loading, updateLoading, fields, onSubmit } = EditExamContainer();

  if (loading) {
    return <ButtonLoader />;
  }

  return (
    <Stack spacing={4} alignItems="center">
      <Typography variant="h6" sx={typographyStyle}>
        Examination
      </Typography>
      <ExamForm {...{ fields, onSubmit }} />
      {updateLoading && <ButtonLoader />}
    </Stack>
  );
};

export default EditExam;

const typographyStyle = {
  p: 2,
  m: "auto",
  width: "fit-content",
  color: "#444",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: 1.2,
};
