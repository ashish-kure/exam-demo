import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ALL_EXAM_EP, GET, SUCCESS_CODE } from "../../constants/apiConstants";
import api from "../../redux/actions/apiAction";
import { addAllResults } from "../../redux/slices/studentSlice";
import CustomButton from "../../shared/CustomButton";
import { ALL_RESULTS } from "../../constants/nameConstants";
import { button } from "../../constants/formConstants";

const AllResultsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.api.loading);
  const allResults = useSelector((state) => state.student.allResults);

  useEffect(() => {
    const fetchAPI = async () => {
      const config = { method: GET, url: ALL_EXAM_EP };

      const response = await dispatch(api({ name: ALL_RESULTS, config }));
      const { statusCode, data } = response?.payload?.data ?? {};

      if (statusCode === SUCCESS_CODE) {
        const results = data
          .filter(({ Result }) => Result.length)
          .map(({ email, subjectName, Result }) => ({
            subject: subjectName,
            faculty: email,
            score: Result[0].score,
            rank: Result[0].rank,
          }));

        dispatch(addAllResults(results));
      }
    };

    fetchAPI();
  }, [dispatch]);

  const handleClick = (result) => {
    navigate(`../result?id=${result._id}`, { state: { result } });
  };

  const tableData = allResults?.map((fields) => ({
    ...fields,
    view: (
      <CustomButton
        type={button}
        label="View"
        onClick={() => handleClick(fields)}
      />
    ),
  }));

  return {
    tableData,
    loading: loading[ALL_RESULTS],
  };
};

export default AllResultsContainer;
