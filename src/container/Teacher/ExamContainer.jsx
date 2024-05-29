import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GET, DELETE } from "../../constants/apiConstants";
import api from "../../redux/actions/apiAction";
import CustomButton from "../../shared/CustomButton";
import { button } from "../../constants/formConstants";
import { EXAMS, EXAM_DETAIL, DELETE_EXAM } from "../../constants/nameConstants";
import { SUCCESS_CODE } from "../../constants/apiConstants";
import { fetchExam } from "../../redux/slices/teacherSlice";
import { setIsEdit } from "../../redux/slices/formSlice";

const ExamContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.api.loading);
  const data = useSelector((state) => state.api.data[EXAMS]);

  const fetchAPI = useCallback(async () => {
    const config = { method: GET, url: "dashboard/Teachers/viewExam" };
    dispatch(api({ name: EXAMS, config }));
  }, [dispatch]);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  // Create Exam Handler!
  const handleCreateExam = () => navigate("../create-exam");

  // Edit Exam Handler!
  const handleEditExam = async (id, subjectName, notes) => {
    const config = {
      method: GET,
      url: "dashboard/Teachers/examDetail",
      params: { id },
    };

    const response = await dispatch(api({ name: EXAM_DETAIL, config }));
    const { statusCode, data } = response?.payload?.data;

    if (statusCode === SUCCESS_CODE) {
      const examObject = { notes, subjectName, ...data };

      dispatch(fetchExam(examObject));
      dispatch(setIsEdit(true));
      navigate(`../create-exam?id=${id}`);
    }
  };

  // Delete Exam Handler!
  const handleDeleteExam = async (id) => {
    if (!window.confirm("Are you sure to delete this Exam?")) {
      return;
    }

    const config = {
      method: DELETE,
      url: "dashboard/Teachers/deleteExam",
      params: { id },
    };

    const response = await dispatch(api({ name: DELETE_EXAM, config }));
    const { statusCode, message } = response?.payload?.data;

    if (statusCode === SUCCESS_CODE) {
      alert(message);
      fetchAPI();
    }
  };

  // Table Data!
  const tableData = data?.data?.map((fields, ind) => ({
    sr: ind + 1,
    subject: fields.subjectName,
    notes: fields.notes.join(", "),
    edit: (
      <CustomButton
        type={button}
        label="Edit"
        onClick={() =>
          handleEditExam(fields._id, fields.subjectName, fields.notes)
        }
      />
    ),

    delete: (
      <CustomButton
        type={button}
        label="Delete"
        onClick={() => handleDeleteExam(fields._id)}
      />
    ),
  }));

  return {
    handleCreateExam,
    loading: loading[EXAMS],
    tableData: tableData ? tableData : [],
  };
};

export default ExamContainer;
