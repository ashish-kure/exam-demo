import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../shared/CustomButton";
import api from "../../redux/actions/apiAction";
import { addAllStudents } from "../../redux/slices/teacherSlice";
import { ALL_STUDENTS } from "../../constants/nameConstants";
import { GET, SUCCESS_CODE } from "../../constants/apiConstants";
import { button } from "../../constants/formConstants";

const AllStudentsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allStudents = useSelector((state) => state.teacher.allStudents);
  const loading = useSelector((state) => state.api.loading);

  useEffect(() => {
    const fetchAPI = async () => {
      const config = { method: GET, url: "dashboard/Teachers" };

      if (!allStudents.length) {
        const response = await dispatch(api({ name: ALL_STUDENTS, config }));
        const { statusCode, data } = response?.payload?.data;

        statusCode === SUCCESS_CODE && dispatch(addAllStudents(data));
      }
    };

    fetchAPI();
  }, [allStudents.length, dispatch]);

  const handleViewButton = (id) => {
    navigate(`/teacher/student/?id=${id}`);
  };

  // Table Data
  const tableData = allStudents.map((student, ind) => ({
    sr: ind + 1,
    ...student,
    action: (
      <CustomButton
        label="view"
        type={button}
        onClick={() => handleViewButton(student._id)}
      />
    ),
  }));

  return {
    tableData,
    loading: loading[ALL_STUDENTS],
  };
};

export default AllStudentsContainer;
