import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import api from "../../redux/actions/apiAction";
import { ALL_STUDENTS } from "../../constants/nameConstants";
import { addAllStudents } from "../../redux/slices/teacherSlice";
import { GET, SUCCESS_CODE } from "../../constants/apiConstants";
import CustomButton from "../../shared/CustomButton";

const AllStudentsContainer = () => {
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const { allStudents } = useSelector((state) => state.teacher);
  const { loading } = useSelector((state) => state.api);

  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchAPI = async () => {
      const config = { method: GET, url: "dashboard/Teachers" };

      if (allStudents.length !== 0) {
        return;
      }

      const response = await dispatch(api({ name: ALL_STUDENTS, config }));
      const { statusCode, data } = response?.payload?.data;

      statusCode === SUCCESS_CODE && dispatch(addAllStudents(data));
    };

    fetchAPI();
  }, [allStudents.length, dispatch]);

  const handleViewButton = (id) => {
    setSearchParams({ id });
    setFlag(true);
  };

  const tableData = allStudents.map((student) => ({
    ...student,
    action: (
      <CustomButton
        label="view"
        type="button"
        onClick={() => handleViewButton(student._id)}
      />
    ),
  }));

  return {
    flag,
    tableData: tableData.slice(0, 20),
    loading: loading[ALL_STUDENTS],
  };
};

export default AllStudentsContainer;
