import AllExamsContainer from "../../container/Student/AllExamsContainer";
import Table from "../../shared/Table";
import CustomInput from "../../shared/CustomInput";
import CustomDropdown from "../../shared/CustomDropdown";
import ButtonLoader from "../../shared/ButtonLoader";

const AllExams = () => {
  const { status, loading, options, tableData, handleChange, handleSelect } =
    AllExamsContainer();

  if (loading) {
    return <ButtonLoader />;
  }

  return (
    <section style={style}>
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
      <Table tableData={tableData} />
    </section>
  );
};

export default AllExams;

const style = {
  marginLeft: 150,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};
