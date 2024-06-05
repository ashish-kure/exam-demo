import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import createExamFields from "../../description/createExam";
import {
  GET,
  POST,
  PUT,
  SUCCESS_CODE,
  EDIT_EXAM_EP,
  CREATE_EXAM_EP,
  VIEW_EXAM_DETAIL_EP,
} from "../../constants/apiConstants";
import { CREATE_EXAM, EXAM_DETAIL } from "../../constants/nameConstants";
import { resetForm, setIsEdit } from "../../redux/slices/formSlice";
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
    if (!id) {
      dispatch(resetForm());
      dispatch(removeExam());
    }
  }, [dispatch, searchParams]);

  useEffect(() => {
    const id = searchParams.get("id");
    const fetchAPI = async () => {
      const { subjectName, notes } = state;
      const config = {
        method: GET,
        url: VIEW_EXAM_DETAIL_EP,
        params: { id },
      };

      const response = await dispatch(api({ name: EXAM_DETAIL, config }));
      const { statusCode, data } = response?.payload?.data ?? {};

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
    const config = {
      url: isEdit ? EDIT_EXAM_EP : CREATE_EXAM_EP,
      method: isEdit ? PUT : POST,
      params: isEdit ? { id: searchParams.get("id") } : {},
      data: exam,
    };

    const response = await dispatch(api({ name: CREATE_EXAM, config }));
    const { statusCode, message } = response?.payload?.data ?? {};

    if (statusCode === SUCCESS_CODE) {
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
