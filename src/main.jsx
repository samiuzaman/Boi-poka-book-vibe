import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./component/Root/Root";
import ErrorPage from "./ErrorPage";
import Home from "./component/Home/Home";
import ListedBook from "./component/ListedBook/ListedBook";
import PagesRead from "./component/PagesRead/PagesRead";
import BookDetails from "./component/BookDetails/BookDetails";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        path: "/books/:bookId",
        loader: () => fetch("/booksData.json"),
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/lists",
        loader: () => fetch("/booksData.json"),
        element: <ListedBook></ListedBook>,
      },

      {
        path: "/Reads",
        // loader: () => fetch("/booksData.json"),
        element: <PagesRead></PagesRead>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>
);
