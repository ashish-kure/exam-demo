import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { radio } from "../../constants/formConstants";
import {
  addCurrentExam,
  fillExamQuestion,
} from "../../redux/slices/studentSlice";
import { GET, POST, SUCCESS_CODE } from "../../constants/apiConstants";
import { objectValues } from "../../utils/javascript";
import { CURRENT_EXAM, GIVE_EXAM } from "../../constants/nameConstants";
import { checkExistingErrors, validateForm } from "../../utils/validation";
import api from "../../redux/actions/apiAction";
import { useEffect } from "react";

const GiveExamContainer = () => {
  const dispatch = useDispatch();
  const currentExam = useSelector((state) => state.student.currentExam);
  const answerSheet = useSelector((state) => state.student.answerSheet);
  const loading = useSelector((state) => state.api.loading);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const {
    state: { subject, notes },
  } = useLocation();

  useEffect(() => {
    const fetchAPI = async () => {
      const config = {
        method: GET,
        url: "student/examPaper",
        params: { id: searchParams.get("id") },
      };

      const response = await dispatch(api({ name: CURRENT_EXAM, config }));
      const { statusCode, data } = response?.payload?.data;

      if (statusCode === SUCCESS_CODE) {
        dispatch(addCurrentExam({ data, info: { subject, notes } }));
      }
    };

    fetchAPI();
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
      url: "student/giveExam",
      params: { id: searchParams.get("id") },
      data: objectValues(answerSheet),
    };

    if (validateForm(questionFields.flat()) && !checkExistingErrors()) {
      const response = await dispatch(api({ name: GIVE_EXAM, config }));
      const { statusCode, message } = response?.payload?.data;

      if (statusCode === SUCCESS_CODE) {
        alert(message);
        navigate("../results");
      }
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
