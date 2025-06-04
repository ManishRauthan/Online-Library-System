import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Browserbooks from "./Component/Browsebooks.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Component/Body.jsx";
import Viewdetail from "./Component/Viewdetail.jsx";
import Error from "./Component/Error.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/browsebook",
        element: <Browserbooks />,
      },
      {
        path: "/viewdetail/:id",
        element: <Viewdetail />,
      },
    ],
  },  
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
