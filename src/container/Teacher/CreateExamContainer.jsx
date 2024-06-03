import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import createExamFields from "../../description/createExam";
import { GET, POST, PUT, SUCCESS_CODE } from "../../constants/apiConstants";
import { CREATE_EXAM, EXAM_DETAIL } from "../../constants/nameConstants";
import { setIsEdit } from "../../redux/slices/formSlice";
import { addExam, removeExam } from "../../redux/slices/teacherSlice";
import api from "../../redux/actions/apiAction";

const CreateExamContainer = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const isEdit = useSelector((state) => state.form.isEdit);
  const loading = useSelector((state) => state.api.loading);

  useEffect(() => {
    const id = searchParams.get("id");
    const fetchAPI = async () => {
      const { subjectName, notes } = state;

      const config = {
        method: GET,
        url: "dashboard/Teachers/examDetail",
        params: { id },
      };

      const response = await dispatch(api({ name: EXAM_DETAIL, config }));
      const { statusCode, data } = response?.payload?.data;

      if (statusCode === SUCCESS_CODE) {
        const examObject = { notes, subjectName, ...data };
        dispatch(addExam(examObject));
        dispatch(setIsEdit(true));
      }
    };

    id && fetchAPI();
  }, [dispatch, searchParams, state]);

  // On Submit Handler!
  const onSubmit = async (exam) => {
    const currentExam = { ...exam, notes: exam.notes.filter(Boolean) };

    const config = {
      url: isEdit ? "dashboard/Teachers/editExam" : "dashboard/Teachers/Exam",
      method: isEdit ? PUT : POST,
      params: isEdit ? { id: searchParams.get("id") } : {},
      data: currentExam,
    };

    const response = await dispatch(api({ name: CREATE_EXAM, config }));
    const { statusCode, message } = response?.payload?.data;

    if (statusCode === SUCCESS_CODE) {
      dispatch(setIsEdit(false));
      dispatch(removeExam());
      alert(message);
      navigate("../exams");
      return true;
    }
  };

  return {
    onSubmit,
    totalQuestions: 15,
    fields: createExamFields,
    loading: loading[CREATE_EXAM],
    editLoading: loading[EXAM_DETAIL],
  };
};

export default CreateExamContainer;
