import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./component/Root/Root";
import ErrorPage from "./ErrorPage";
import Home from "./component/Home/Home";
import ListedBook from "./component/ListedBook/ListedBook";
import PagesRead from "./component/PagesRead/PagesRead";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/lists",
        element: <ListedBook></ListedBook>,
      },
      {
        path: "/Reads",
        element: <PagesRead></PagesRead>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
