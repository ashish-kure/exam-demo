import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../shared/CustomButton";
import { addVerifiedStudents } from "../../redux/slices/teacherSlice";
import api from "../../redux/actions/apiAction";
import { GET, SUCCESS_CODE } from "../../constants/apiConstants";
import { VERIFIED_STUDENTS } from "../../constants/nameConstants";

const VerifiedStudentsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.api.loading);
  const verifiedStudents = useSelector(
    (state) => state.teacher.verifiedStudents
  );

  useEffect(() => {
    const fetchAPI = async () => {
      const config = { method: GET, url: "dashboard/Teachers/StudentForExam" };

      if (verifiedStudents.length !== 0) {
        return;
      }

      const response = await dispatch(api({ name: VERIFIED_STUDENTS, config }));
      const { statusCode, data } = response?.payload?.data;

      statusCode === SUCCESS_CODE && dispatch(addVerifiedStudents(data));
    };

    fetchAPI();
  }, [dispatch, verifiedStudents.length]);

  const handleViewButton = (id) => {
    navigate(`/teacher/student/?id=${id}`);
  };

  // Table Data
  const tableData = verifiedStudents.map((student, ind) => ({
    sr: ind + 1,
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
    tableData,
    loading: loading[VERIFIED_STUDENTS],
  };
};

export default VerifiedStudentsContainer;
