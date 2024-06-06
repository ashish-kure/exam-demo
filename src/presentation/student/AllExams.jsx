import AllExamsContainer from "../../container/Student/AllExamsContainer";
import Table from "../../shared/Table";
import CustomInput from "../../shared/CustomInput";
import CustomDropdown from "../../shared/CustomDropdown";
import ButtonLoader from "../../shared/ButtonLoader";
import { Stack } from "@mui/material";

const AllExams = () => {
  const { status, loading, options, tableData, handleChange, handleSelect } =
    AllExamsContainer();

  if (loading) {
    return <ButtonLoader />;
  }

  return (
    <Stack spacing={2} alignItems="center">
      <Stack direction="row" margin="auto" spacing={2}>
        <CustomDropdown
          label="Status"
          name="status"
          value={status}
          onChange={handleSelect}
          options={options}
        />
        <CustomInput
          label="Search"
          placeholder="Subject"
          onChange={handleChange}
        />
      </Stack>
      <Table tableData={tableData} />
    </Stack>
  );
};

export default AllExams;
