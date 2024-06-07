import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import { Fragment } from "react";
import Toast from "./shared/Toast";

function App() {
  return (
    <Fragment>
      <AppRoutes />
      <Toast />
    </Fragment>
  );
}

export default App;
