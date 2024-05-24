import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { GET } from "../../constants/apiConstants";
import api from "../../redux/actions/apiAction";

const StudentContainer = ({ flag }) => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     const fetchAPI = async () => {
  //       const config = {
  //         method: GET,
  //         url: "dashboard/Teachers/viewStudentDetail",
  //         params: {
  //           id: searchParams.get("id"),
  //         },
  //       };

  //       const response = await dispatch(api({ name: "", config }));
  //     };

  //     fetchAPI();
  //   }, [dispatch, searchParams]);

  return flag && <h1>{searchParams.get("id")}</h1>;
};

export default StudentContainer;
