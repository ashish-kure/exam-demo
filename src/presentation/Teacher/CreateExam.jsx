import React from "react";
import ExamForm from "../exam/ExamForm";
import CreateExamContainer from "../../container/Teacher/CreateExamContainer";
import { Stack, Typography } from "@mui/material";

const CreateExam = () => {
  const { loading, fields, totalQuestions, onSubmit } = CreateExamContainer();

  return (
    <Stack spacing={4} alignItems="center">
      <Typography variant="h6" sx={typographyStyle}>
        Examination
      </Typography>
      <ExamForm {...{ fields, totalQuestions, onSubmit, loading }} />
    </Stack>
  );
};

export default CreateExam;

const typographyStyle = {
  p: 2,
  m: "auto",
  width: "fit-content",
  color: "#444",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: 1.2,
};
