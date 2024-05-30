import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { radio } from "../../constants/formConstants";
import { fillExamQuestion } from "../../redux/slices/studentSlice";
import { POST, SUCCESS_CODE } from "../../constants/apiConstants";
import { objectValues } from "../../utils/javascript";
import { GIVE_EXAM } from "../../constants/nameConstants";
import { checkExistingErrors, validateForm } from "../../utils/validation";
import api from "../../redux/actions/apiAction";

const GiveExamContainer = () => {
  const dispatch = useDispatch();
  const currentExam = useSelector((state) => state.student.currentExam);
  const answerSheet = useSelector((state) => state.student.answerSheet);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const questionFields = currentExam?.questions?.map(
    ({ question, options, _id }, ind) => [
      {
        type: radio,
        name: `question ${ind + 1}`,
        label: question,
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
      data: objectValues(answerSheet).map((value) => value),
    };

    if (validateForm(questionFields.flat()) && !checkExistingErrors()) {
      const response = await dispatch(api({ name: GIVE_EXAM, config }));
      const { statusCode, message } = response?.payload?.data;

      if (statusCode === SUCCESS_CODE) {
        alert(message);
        navigate("/student");
      }
    }
  };

  return {
    currentExam,
    questionFields,
    onInputChange,
    handleSubmit,
  };
};

export default GiveExamContainer;
