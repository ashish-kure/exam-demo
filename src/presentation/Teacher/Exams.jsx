import React from "react";
import ExamContainer from "../../container/Teacher/ExamContainer";
import Table from "../../shared/Table";
import ButtonLoader from "../../shared/ButtonLoader";
import CustomButton from "../../shared/CustomButton";
import { button } from "../../constants/formConstants";
import { Box, Stack } from "@mui/material";

const Exams = () => {
  const { loading, tableData, handleCreateExam } = ExamContainer();

  if (loading) {
    return <ButtonLoader />;
  }

  return (
    <Stack alignItems="center" spacing={2}>
      <Table tableData={tableData} />
      <Box>
        <CustomButton
          type={button}
          label="Create New Exam"
          onClick={handleCreateExam}
        />
      </Box>
    </Stack>
  );
};

export default Exams;
