import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET, SUCCESS_CODE } from "../../constants/apiConstants";
import api from "../../redux/actions/apiAction";
import { ALL_RESULTS } from "../../constants/nameConstants";
import { addAllResults } from "../../redux/slices/studentSlice";

const AllResultsContainer = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.api.loading);
  const allResults = useSelector((state) => state.student.allResults);

  useEffect(() => {
    const fetchAPI = async () => {
      const config = { method: GET, url: "student/studentExam" };

      const response = await dispatch(api({ name: ALL_RESULTS, config }));
      const { statusCode, data } = response?.payload?.data;

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

  return {
    tableData: allResults,
    loading: loading[ALL_RESULTS],
  };
};

export default AllResultsContainer;
