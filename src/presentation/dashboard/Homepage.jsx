import React from "react";
import HomepageContainer from "../../container/Homepage/HomepageContainer";
import { Stack, Typography } from "@mui/material";

const Homepage = () => {
  const { name } = HomepageContainer();

  return (
    <Stack alignSelf="flex-start">
      <Typography variant="h4">Welcome, {name}</Typography>
    </Stack>
  );
};

export default Homepage;
