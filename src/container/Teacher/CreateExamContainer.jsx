import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import createExamFields from "../../description/createExam";
import {
  POST,
  SUCCESS_CODE,
  CREATE_EXAM_EP,
} from "../../constants/apiConstants";
import { CREATE_EXAM } from "../../constants/nameConstants";
import { setIsEdit } from "../../redux/slices/formSlice";
import { removeExam } from "../../redux/slices/teacherSlice";
import api from "../../redux/actions/apiAction";
import { equal } from "../../utils/javascript";

const CreateExamContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.api.loading);

  useEffect(() => {
    return () => {
      dispatch(setIsEdit(false));
      dispatch(removeExam());
    };
  }, [dispatch]);

  // On Submit Handler!
  const onSubmit = async (exam) => {
    const config = {
      url: CREATE_EXAM_EP,
      method: POST,
      data: exam,
    };

    const response = await dispatch(api({ name: CREATE_EXAM, config }));
    const { statusCode } = response?.payload?.data ?? {};

    if (equal(statusCode, SUCCESS_CODE)) {
      navigate("../exams");
      return true;
    }
  };

  return {
    onSubmit,
    totalQuestions: 15,
    fields: createExamFields,
    loading: loading[CREATE_EXAM],
  };
};

export default CreateExamContainer;
