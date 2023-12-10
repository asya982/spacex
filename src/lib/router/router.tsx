import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import MainPage from "../../pages/MainPage";
import FavoritesPage from "../../pages/FavoritesPage";
import NotFoundPage from "../../pages/NotFoundPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "favorites", element: <FavoritesPage /> },
    ],
    errorElement: <NotFoundPage />,
  },
]);
