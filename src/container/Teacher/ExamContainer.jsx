import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GET } from "../../constants/apiConstants";
import api from "../../redux/actions/apiAction";
import { EXAMS } from "../../constants/nameConstants";
import CustomButton from "../../shared/CustomButton";
import { button } from "../../constants/formConstants";

const ExamContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.api.loading);
  const data = useSelector((state) => state.api.data[EXAMS]);

  useEffect(() => {
    const fetchAPI = async () => {
      const config = {
        method: GET,
        url: "dashboard/Teachers/viewExam",
      };

      await dispatch(api({ name: EXAMS, config }));
    };

    fetchAPI();
  }, [dispatch]);

  const handleCreateExam = () => navigate("../create-exam");

  const tableData = data?.data?.map((fields, ind) => ({
    sr: ind + 1,
    subject: fields.subjectName,
    action: <CustomButton type={button} label="Detail" />,
  }));

  return {
    handleCreateExam,
    loading: loading[EXAMS],
    tableData: tableData ? tableData : [],
  };
};

export default ExamContainer;
