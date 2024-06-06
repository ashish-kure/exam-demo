import { Stack, Typography } from "@mui/material";
import { button } from "../../constants/formConstants";
import ResultContainer from "../../container/Student/ResultContainer";
import CustomButton from "../../shared/CustomButton";

const Result = () => {
  const { result, handleBack } = ResultContainer();

  return (
    <Stack alignItems="center" spacing={2}>
      <Stack direction="row">
        <Stack textAlign="center">
          <Typography sx={typographyStyle}>Subject</Typography>
          <Typography sx={typographyStyle}>Score</Typography>
          <Typography sx={typographyStyle}>Rank</Typography>
        </Stack>

        <Stack textAlign="center">
          <Typography sx={dataStyle}>{result?.subject}</Typography>
          <Typography sx={dataStyle}>{result?.score}</Typography>
          <Typography sx={dataStyle}>{result?.rank}</Typography>
        </Stack>
      </Stack>

      <CustomButton type={button} label="Back" onClick={handleBack} />
    </Stack>
  );
};

export default Result;

const typographyStyle = {
  p: 2,
  border: "1px solid",
  borderColor: "divider",
  fontSize: 18,
};

const dataStyle = {
  p: 2,
  border: "1px solid",
  borderColor: "divider",
  fontSize: 18,
  fontWeight: "bold",
  fontFamily: "monospace",
};
