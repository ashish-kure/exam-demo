import AllStudentsContainer from "../../container/Teacher/AllStudentsContainer";
import Table from "../../shared/Table";
import ButtonLoader from "../../shared/ButtonLoader";

const AllStudents = () => {
  const { tableData, loading } = AllStudentsContainer();

  if (loading) {
    return <ButtonLoader />;
  }

  return (
    <section style={style}>
      <Table tableData={tableData} />
    </section>
  );
};

export default AllStudents;

const style = {
  marginLeft: 150,
};
