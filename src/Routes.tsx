import Layout from "./pages/DefaultLayput/Layout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";

const routes = () => [
  { path: "*", element: <NotFound /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "", elemanr: "" },
    ],
  },
];

export default routes;
