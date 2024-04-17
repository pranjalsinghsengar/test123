import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);

export default Router;
