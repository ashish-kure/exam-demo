import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import api from "../../redux/actions/apiAction";
import { equal, objectValues } from "../../utils/javascript";
import { checkExistingErrors, validateForm } from "../../utils/validation";
import { radio } from "../../constants/formConstants";
import { CURRENT_EXAM, GIVE_EXAM } from "../../constants/nameConstants";
import { resetForm } from "../../redux/slices/formSlice";
import {
  addCurrentExam,
  fillExamQuestion,
} from "../../redux/slices/studentSlice";
import {
  GET,
  POST,
  SUCCESS_CODE,
  GIVE_EXAM_EP,
  EXAM_PAPER_EP,
} from "../../constants/apiConstants";
import useSignal from "../../hooks/useSignal";

const GiveExamContainer = () => {
  const [controller, signal] = useSignal();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.api.loading);
  const currentExam = useSelector((state) => state.student.currentExam);
  const answerSheet = useSelector((state) => state.student.answerSheet);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const {
    state: { subject, notes },
  } = useLocation();

  useEffect(() => {
    const fetchAPI = async () => {
      const config = {
        method: GET,
        url: EXAM_PAPER_EP,
        params: { id: searchParams.get("id") },
        signal,
      };

      const response = await dispatch(
        api({ name: CURRENT_EXAM, config, toast: false })
      );
      const { statusCode, data } = response?.payload?.data ?? {};

      if (equal(statusCode, SUCCESS_CODE)) {
        dispatch(addCurrentExam({ data, info: { subject, notes } }));
      }
    };

    fetchAPI();
    return () => {
      controller.abort();
      dispatch(resetForm());
    };
  }, [dispatch, notes, searchParams, subject]);

  const questionFields = currentExam?.questions?.map(
    ({ question, options, _id }, ind) => [
      {
        type: radio,
        name: `question ${ind + 1}`,
        label: `Q${ind + 1}. ${question}`,
        id: _id,
        isRequired: true,
        options: options.map((option) => ({
          label: option,
          value: option,
        })),
      },
    ]
  );

  const onInputChange = (event) => {
    const { id, value, name } = event.target;
    dispatch(
      fillExamQuestion({ name, value: { question: id, answer: value } })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const config = {
      method: POST,
      url: GIVE_EXAM_EP,
      params: { id: searchParams.get("id") },
      data: objectValues(answerSheet),
    };

    if (validateForm(questionFields.flat()) && !checkExistingErrors()) {
      const response = await dispatch(api({ name: GIVE_EXAM, config }));
      const { statusCode } = response?.payload?.data ?? {};
      equal(statusCode, SUCCESS_CODE) && navigate("../results");
    }
  };

  return {
    currentExam,
    questionFields,
    onInputChange,
    handleSubmit,
    loading: loading[CURRENT_EXAM],
    submitLoading: loading[GIVE_EXAM],
  };
};

export default GiveExamContainer;
