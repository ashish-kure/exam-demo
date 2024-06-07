import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { CREATE_EXAM, EXAM_DETAIL } from "../../constants/nameConstants";
import { addExam } from "../../redux/slices/teacherSlice";
import { setIsEdit } from "../../redux/slices/formSlice";
import api from "../../redux/actions/apiAction";
import createExamFields from "../../description/createExam";
import {
  GET,
  PUT,
  SUCCESS_CODE,
  EDIT_EXAM_EP,
  VIEW_EXAM_DETAIL_EP,
} from "../../constants/apiConstants";

const EditExamContainer = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.api.loading);

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

    fetchAPI();
  }, [dispatch, searchParams, state]);

  const onSubmit = async (exam) => {
    const config = {
      url: EDIT_EXAM_EP,
      method: PUT,
      params: { id: searchParams.get("id") },
      data: exam,
    };

    const response = await dispatch(api({ name: CREATE_EXAM, config }));
    const { statusCode } = response?.payload?.data ?? {};

    if (statusCode === SUCCESS_CODE) {
      navigate("../exams");
      return true;
    }
  };

  return {
    onSubmit,
    fields: createExamFields,
    loading: loading[EXAM_DETAIL],
    updateLoading: loading[CREATE_EXAM],
  };
};

export default EditExamContainer;
