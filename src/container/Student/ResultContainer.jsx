import { useLocation, useNavigate } from "react-router-dom";

const ResultContainer = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleBack = () => navigate(-1);

  return {
    handleBack,
    result: state.result,
  };
};

export default ResultContainer;
