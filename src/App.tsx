import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./Routes";

const AppRoutes = () => {
  const AppRoute = useRoutes(routes());
  return <>{AppRoute}</>;
};

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
