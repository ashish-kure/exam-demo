import AllExamsContainer from "../../container/Student/AllExamsContainer";
import Table from "../../shared/Table";
import ButtonLoader from "../../shared/ButtonLoader";

const AllExams = () => {
  const { tableData, loading } = AllExamsContainer();

  if (loading) {
    return <ButtonLoader />;
  }

  return (
    <section style={style}>
      <Table tableData={tableData} />
    </section>
  );
};

export default AllExams;

const style = {
  marginLeft: 150,
};
