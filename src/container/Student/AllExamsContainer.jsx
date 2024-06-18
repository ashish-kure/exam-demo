import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAllExams } from "../../redux/slices/studentSlice";
import { ALL_EXAMS } from "../../constants/nameConstants";
import { ALL_EXAM_EP, GET, SUCCESS_CODE } from "../../constants/apiConstants";
import api from "../../redux/actions/apiAction";
import CustomButton from "../../shared/CustomButton";
import { button } from "../../constants/formConstants";
import { equal } from "../../utils/javascript";

const AllExamsContainer = () => {
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState("all");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allExams = useSelector((state) => state.student.allExams);
  const loading = useSelector((state) => state.api.loading);

  const options = [
    { label: "All", value: "all" },
    { label: "Completed", value: "completed" },
    { label: "Pending", value: "pending" },
  ];

  useEffect(() => {
    const fetchAPI = async () => {
      const config = { method: GET, url: ALL_EXAM_EP };

      if (!allExams.length) {
        const response = await dispatch(
          api({ name: ALL_EXAMS, config, toast: false })
        );
        const { statusCode, data } = response?.payload?.data ?? {};
        equal(statusCode, SUCCESS_CODE) && dispatch(addAllExams(data));
      }
    };

    fetchAPI();
  }, [allExams.length, dispatch]);

  // Attempt Exam Handler!
  const handleAttempt = ({ id, subject, notes }) => {
    navigate(`../give-exam?id=${id}`, { state: { subject, notes } });
  };

  // Result Button Handler!
  const handleResult = (result) => {
    navigate(`../result?id=${result._id}`, { state: { result } });
  };

  const handleChange = (event) => setInputValue(event.target.value);

  const handleSelect = (event) => setStatus(event.target.value);

  // Filtered based on Status!
  const filteredData =
    status === "all"
      ? allExams
      : allExams.filter((fields) =>
          status === "completed" ? fields.Result.length : !fields.Result.length
        );

  // Table Data
  const tableData = filteredData
    .filter(({ subjectName }) =>
      subjectName.toLowerCase().includes(inputValue.toLowerCase())
    )
    .map((fields, ind) => ({
      sr: ind + 1,
      subject: fields.subjectName,
      faculty: fields.email,
      action: fields.Result.length ? (
        <CustomButton
          type={button}
          label="Result"
          variant="outlined"
          onClick={() =>
            handleResult({ ...fields.Result[0], subject: fields.subjectName })
          }
        />
      ) : (
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
    status,
    tableData,
    options,
    handleChange,
    handleSelect,
    loading: loading[ALL_EXAMS],
  };
};

export default AllExamsContainer;
