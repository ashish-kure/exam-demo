import Table from "../../shared/Table";
import ButtonLoader from "../../shared/ButtonLoader";
import AllResultsContainer from "../../container/Student/AllResultsContainer";

const AllResults = () => {
  const { loading, tableData } = AllResultsContainer();

  if (loading) {
    return <ButtonLoader />;
  }

  return (
    <section style={style}>
      <Table tableData={tableData} />
    </section>
  );
};

export default AllResults;

const style = {
  marginLeft: 150,
};
