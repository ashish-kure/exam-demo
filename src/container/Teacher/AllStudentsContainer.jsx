import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../shared/CustomButton";
import api from "../../redux/actions/apiAction";
import { addAllStudents } from "../../redux/slices/teacherSlice";
import { ALL_STUDENTS } from "../../constants/nameConstants";
import {
  ALL_STUDENTS_EP,
  ALL_VERIFIED_STUDENTS_EP,
  GET,
  SUCCESS_CODE,
} from "../../constants/apiConstants";
import { button } from "../../constants/formConstants";

const AllStudentsContainer = () => {
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState("all");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allStudents = useSelector((state) => state.teacher.allStudents);
  const loading = useSelector((state) => state.api.loading);

  const options = [
    { label: "All", value: "all" },
    { label: "Verified", value: "verified" },
  ];

  useEffect(() => {
    const fetchAPI = async () => {
      const config = {
        method: GET,
        url: status === "all" ? ALL_STUDENTS_EP : ALL_VERIFIED_STUDENTS_EP,
      };

      const response = await dispatch(api({ name: ALL_STUDENTS, config }));
      const { statusCode, data } = response?.payload?.data ?? {};

      statusCode === SUCCESS_CODE && dispatch(addAllStudents(data));
    };

    fetchAPI();
  }, [status, dispatch]);

  const handleViewButton = (id) => {
    navigate(`/teacher/student/?id=${id}`);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelect = (event) => {
    setStatus(event.target.value);
  };

  // Table Data
  const tableData = allStudents
    .filter(({ name }) => name.toLowerCase().includes(inputValue.toLowerCase()))
    .map((student, ind) => ({
      sr: ind + 1,
      ...student,
      action: (
        <CustomButton
          label="View"
          type={button}
          onClick={() => handleViewButton(student._id)}
        />
      ),
    }));

  return {
    status,
    options,
    tableData,
    handleChange,
    handleSelect,
    loading: loading[ALL_STUDENTS],
  };
};

export default AllStudentsContainer;
