import AllStudentsContainer from "../../container/Teacher/AllStudentsContainer";
import Table from "../../shared/Table";
import CustomInput from "../../shared/CustomInput";
import CustomDropdown from "../../shared/CustomDropdown";
import ButtonLoader from "../../shared/ButtonLoader";

const AllStudents = () => {
  const { loading, options, status, tableData, handleChange, handleSelect } =
    AllStudentsContainer();

  return (
    <section style={style}>
      <CustomDropdown
        label="Status"
        name="status"
        value={status}
        onChange={handleSelect}
        options={options}
      />
      <CustomInput label="Search" placeholder="Name" onChange={handleChange} />
      {loading ? <ButtonLoader /> : <Table tableData={tableData} />}
    </section>
  );
};

export default AllStudents;

const style = {
  marginLeft: 150,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};
