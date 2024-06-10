import React from "react";
import GiveExamContainer from "../../container/Student/GiveExamContainer";
import Form from "../../shared/Form";
import ButtonLoader from "../../shared/ButtonLoader";
import { Box, Stack, Typography } from "@mui/material";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

const GiveExam = () => {
  const {
    currentExam,
    questionFields,
    loading,
    submitLoading,
    onInputChange,
    handleSubmit,
  } = GiveExamContainer();

  if (loading) {
    return <ButtonLoader />;
  }

  return (
    <Stack spacing={2}>
      <Typography variant="h5" textAlign="center" sx={style}>
        {currentExam?.info?.subject}
      </Typography>

      <Box display="flex" flexDirection="column" gap={1}>
        {currentExam?.info?.notes.map((note, ind) => (
          <Typography
            key={ind}
            display="flex"
            justifyContent="space-between"
            gap={1}
            sx={{ ...style, p: 1.5 }}
          >
            {note}
            <PushPinOutlinedIcon color="action" />
          </Typography>
        ))}
      </Box>

      <Box sx={style}>
        <Form
          fields={questionFields}
          onInputChange={onInputChange}
          onSubmit={handleSubmit}
        />
      </Box>
      {submitLoading && <ButtonLoader />}
    </Stack>
  );
};

export default GiveExam;

const style = {
  p: 2,
  border: "1px solid",
  borderColor: "divider",
  borderRadius: 1.2,
};
