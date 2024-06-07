import AllStudentsContainer from "../../container/Teacher/AllStudentsContainer";
import Table from "../../shared/Table";
import CustomInput from "../../shared/CustomInput";
import CustomDropdown from "../../shared/CustomDropdown";
import ButtonLoader from "../../shared/ButtonLoader";
import { Stack } from "@mui/material";

const AllStudents = () => {
  const { loading, options, status, tableData, handleChange, handleSelect } =
    AllStudentsContainer();

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
          placeholder="Name"
          onChange={handleChange}
        />
      </Stack>
      {loading ? <ButtonLoader /> : <Table tableData={tableData} />}
    </Stack>
  );
};

export default AllStudents;
