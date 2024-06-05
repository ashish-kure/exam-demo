import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import api from "../../redux/actions/apiAction";
import { GET, STUDENT_DETAIL_EP } from "../../constants/apiConstants";
import { STUDENT } from "../../constants/nameConstants";

const StudentContainer = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.api.loading);
  const data = useSelector((state) => state.api.data);

  useEffect(() => {
    const fetchAPI = async () => {
      const config = {
        method: GET,
        url: STUDENT_DETAIL_EP,
        params: { id: searchParams.get("id") },
      };

      await dispatch(api({ name: STUDENT, config }));
    };

    fetchAPI();
  }, [dispatch, searchParams]);

  const handleBack = () => navigate(-1);

  // Result Array!
  const result = data[STUDENT]?.data[0]?.Result.map((field) => ({
    subject: field.subjectName,
    rank: field.rank,
    score: field.score,
  }));

  return {
    result,
    handleBack,
    studentData: data[STUDENT]?.data[0],
    loading: loading[STUDENT],
  };
};

export default StudentContainer;
