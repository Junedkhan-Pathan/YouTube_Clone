import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import App from "./App.jsx";
import SearchResults from "./components/SearchResults.jsx";
import VideoContainer from "./components/VideosComponents/VideoContainer.jsx";
import ShortsPage from "./pages/ShortsPage.jsx";
import SubscriptionPage from "./pages/SubscriptionPage.jsx";
import FeedYouPage from "./pages/FeedYouPage.jsx";
const WatchPage = lazy(() => import("./pages/WatchPage.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <VideoContainer />,
      },
      {
        path: "/channel",
        element: <VideoContainer />,
      },
      {
        path: "/results",
        element: <SearchResults />,
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
        path: "/shorts",
        element: <ShortsPage />,
      },
      {
        path: "/feed/subscription",
        element: <SubscriptionPage />,
      },
      {
        path: "/feed/you",
        element: <FeedYouPage />,
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
