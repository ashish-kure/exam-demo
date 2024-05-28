import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAllExams } from "../../redux/slices/studentSlice";
import { ALL_EXAMS } from "../../constants/nameConstants";
import { GET, SUCCESS_CODE } from "../../constants/apiConstants";
import api from "../../redux/actions/apiAction";
import CustomButton from "../../shared/CustomButton";
import { button } from "../../constants/formConstants";

const AllExamsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allExams = useSelector((state) => state.student.allExams);
  const loading = useSelector((state) => state.api.loading);

  useEffect(() => {
    const fetchAPI = async () => {
      const config = { method: GET, url: "student/studentExam" };

      if (!allExams.length) {
        const response = await dispatch(api({ name: ALL_EXAMS, config }));
        const { statusCode, data } = response?.payload?.data;

        statusCode === SUCCESS_CODE && dispatch(addAllExams(data));
      }
    };

    fetchAPI();
  }, [allExams.length, dispatch]);

  const handleAttempt = ({ id, subject, notes }) => {
    navigate(`../give-exam?id=${id}`, { state: { subject, notes } });
  };

  // Table Data
  const tableData = allExams.map((fields, ind) => ({
    sr: ind + 1,
    subject: fields.subjectName,
    faculty: fields.email,
    action: (
      <CustomButton
        type={button}
        label="Attempt"
        onClick={() =>
          handleAttempt({
            id: fields._id,
            notes: fields.notes,
            subject: fields.subjectName,
          })
        }
      />
    ),
  }));

  return {
    tableData,
    loading: loading[ALL_EXAMS],
  };
};

export default AllExamsContainer;
