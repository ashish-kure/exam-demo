import Table from "../../shared/Table";
import ButtonLoader from "../../shared/ButtonLoader";
import AllResultsContainer from "../../container/Student/AllResultsContainer";
import CustomInput from "../../shared/CustomInput";

const AllResults = () => {
  const { loading, tableData, handleChange } = AllResultsContainer();

  if (loading) {
    return <ButtonLoader />;
  }

  return (
    <section style={style}>
      <CustomInput
        label="Search"
        placeholder="Subject"
        onChange={handleChange}
      />
      <Table tableData={tableData} />
    </section>
  );
};

export default AllResults;

const style = {
  marginLeft: 150,
  display: "flex",
  flexDirection: "column",
  gap: 25,
};
