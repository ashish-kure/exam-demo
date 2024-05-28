import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import api from "../../redux/actions/apiAction";
import { addCurrentExam } from "../../redux/slices/studentSlice";
import { GET, SUCCESS_CODE } from "../../constants/apiConstants";
import { CURRENT_EXAM } from "../../constants/nameConstants";
import { radio } from "../../constants/formConstants";

const GiveExamContainer = () => {
  const { state } = useLocation();
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const currentExam = useSelector((state) => state.student.currentExam);

  useEffect(() => {
    const fetchAPI = async () => {
      const config = {
        method: GET,
        url: "student/examPaper",
        params: {
          id: searchParams.get("id"),
        },
      };

      const response = await dispatch(api({ name: CURRENT_EXAM, config }));
      const { statusCode, data } = response?.payload?.data;

      statusCode === SUCCESS_CODE &&
        dispatch(addCurrentExam({ data, info: state }));
    };

    fetchAPI();
  }, [dispatch, searchParams, state]);

  // Proper Structure of Options
  const questions = currentExam?.questions?.map((fields) => [
    {
      type: radio,
      label: "Options",
      name: "options",
      options: fields.options.map((value) => ({
        label: value,
        value: value,
      })),
      isRequired: true,
    },
  ]);

  return { questions };
};

export default GiveExamContainer;
