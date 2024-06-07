import { useSelector } from "react-redux";
import { capitalize } from "../../utils/javascript";

const HomepageContainer = () => {
  const { name } = useSelector((state) => state.user);

  return { name: capitalize(name) };
};

export default HomepageContainer;
