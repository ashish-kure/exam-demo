import { button } from "../../constants/formConstants";
import ResultContainer from "../../container/Student/ResultContainer";
import CustomButton from "../../shared/CustomButton";

const Result = () => {
  const { result, handleBack } = ResultContainer();

  return (
    <section style={style}>
      <div>
        Subject <h3>{result?.subject}</h3>
      </div>
      <div>
        Score <h3>{result?.score}</h3>
      </div>
      <div>
        Rank <h3>{result?.rank}</h3>
      </div>

      <CustomButton type={button} label="Back" onClick={handleBack} />
    </section>
  );
};

export default Result;

const style = {
  marginLeft: 150,
};
