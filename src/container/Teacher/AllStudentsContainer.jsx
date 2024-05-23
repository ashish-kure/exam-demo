import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../redux/actions/apiAction";
import { allStudents } from "../../constants/nameConstants";

const AllStudentsContainer = () => {
  const dispatch = useDispatch();
  const [students, setStudents] = useState([]);
  const { loading } = useSelector((state) => state.api);

  useEffect(() => {
    const fetchAPI = async () => {
      const config = { url: "dashboard/Teachers" };

      const response = await dispatch(api({ name: allStudents, config }));
      setStudents(response?.payload?.data?.data);
    };

    fetchAPI();
  }, [dispatch]);

  return { students, loading: loading.allStudents };
};

export default AllStudentsContainer;
