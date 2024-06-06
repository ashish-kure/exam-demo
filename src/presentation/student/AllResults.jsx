import Table from "../../shared/Table";
import ButtonLoader from "../../shared/ButtonLoader";
import AllResultsContainer from "../../container/Student/AllResultsContainer";
import CustomInput from "../../shared/CustomInput";
import { Stack } from "@mui/material";

const AllResults = () => {
  const { loading, tableData, handleChange } = AllResultsContainer();

  if (loading) {
    return <ButtonLoader />;
  }

  return (
    <Stack spacing={2} alignItems="center">
      <CustomInput
        label="Search"
        placeholder="Subject"
        onChange={handleChange}
      />
      <Table tableData={tableData} />
    </Stack>
  );
};

export default AllResults;
