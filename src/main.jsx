import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer.jsx";
import ExploreVideoPage from "./pages/ExploreVideoPage.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import App from "./App.jsx";
import SubScriptionPage from "./pages/SubScriptionPage.jsx";
import SearchResults from "./components/SearchResults.jsx";
const WatchPage = lazy(() => import("./pages/WatchPage.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },

      {
        path: "/watch",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <WatchPage />
          </Suspense>
        ),
      },
      {
        path: "/results",
        element: <SearchResults />,
      },
      {
        path: "/explore",
        element: <ExploreVideoPage />,
      },
      {
        path: "/channel",
        element: <SubScriptionPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
