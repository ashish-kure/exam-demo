import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET, SUCCESS_CODE } from "../../constants/apiConstants";
import api from "../../redux/actions/apiAction";
import { VERIFIED_STUDENTS } from "../../constants/nameConstants";
import { addVerifiedStudents } from "../../redux/slices/teacherSlice";
import CustomButton from "../../shared/CustomButton";
import { useSearchParams } from "react-router-dom";

const VerifiedStudentsContainer = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.api.loading);
  const verifiedStudents = useSelector(
    (state) => state.teacher.verifiedStudents
  );

  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchAPI = async () => {
      const config = { method: GET, url: "dashboard/Teachers/StudentForExam" };

      if (verifiedStudents.length !== 0) {
        return;
      }

      const response = await dispatch(api({ name: VERIFIED_STUDENTS, config }));
      const { statusCode, data } = response?.payload?.data;

      statusCode === SUCCESS_CODE && dispatch(addVerifiedStudents(data));
    };

    fetchAPI();
  }, [dispatch, verifiedStudents.length]);

  const handleViewButton = (id) => {
    setSearchParams({ id });
  };

  const tableData = verifiedStudents.map((student) => ({
    ...student,
    action: (
      <CustomButton
        label="view"
        type="button"
        onClick={() => handleViewButton(student._id)}
      />
    ),
  }));

  return {
    tableData: tableData.slice(0, 10),
    loading: loading[VERIFIED_STUDENTS],
  };
};

export default VerifiedStudentsContainer;
