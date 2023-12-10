import { createBrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "../../App";
import MainPage from "../../pages/MainPage";
import FavoritesPage from "../../pages/FavoritesPage";
import NotFoundPage from "../../pages/NotFoundPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <RecoilRoot>
        <App />
      </RecoilRoot>
    ),
    children: [
      { index: true, element: <MainPage /> },
      { path: "favorites", element: <FavoritesPage /> },
    ],
    errorElement: <NotFoundPage />,
  },
]);
