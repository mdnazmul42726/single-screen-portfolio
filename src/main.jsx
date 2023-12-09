import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./pages/Home";
import ParcelSync from "./pages/Projects/ParcelSync";
import CraveCrafter from "./pages/Projects/CraveCrafter";
import TechTrove from "./pages/Projects/TechTrove";

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: '/projects/parcel-sync', element: <ParcelSync /> },
      { path: '/projects/crave-crafter', element: <CraveCrafter /> },
      { path: '/projects/tech-trove', element: <TechTrove /> },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);