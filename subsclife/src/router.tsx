import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

import App from "./App";

import Remind from "./pages/Remind/Remind";
import RemindInfo from "./pages/Remind/RemindInfo/RemindInfo";
import RemindAchieve from "./pages/Remind/RemindArchive/RemindArchive";
import RemindPros from "./pages/Remind/RemindPros/RemindPros";
import RemindCons from "./pages/Remind/RemindCons/RemindCons";
import RemindImprove from "./pages/Remind/RemindImprove/RemindImprove";
import Main from "@/pages/Main";
import TaskDetail from "@/pages/TaskDetail";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import WriteTask from "@/pages/WriteTask";
import Introduction from "@/pages/Introduction";
import ProtectGuard from "./components/ProtectGuard";
import RemindDetail from "./pages/RemindDetail";
import History from "./pages/History/History";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Outlet />
      </App>
    ),
    children: [
      {
        path: "/task",
        element: (
          <ProtectGuard>
            <WriteTask />
          </ProtectGuard>
        ),
      },
      {
        path: "/",
        element: (
          <ProtectGuard>
            <Main />
          </ProtectGuard>
        ),
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/task/:taskId",
        element: (
          <ProtectGuard>
            <TaskDetail />
          </ProtectGuard>
        ),
      },
      {
        path: "/history",
        element: (
          <ProtectGuard>
            <History />
          </ProtectGuard>
        ),
      },
      {
        path: "/history/:historyId",
        element: <RemindDetail />,
      },
      {
        path: "/remind",
        element: <Remind />,
        children: [
          {
            path: ":taskId/info",
            element: <RemindInfo />,
          },
          {
            path: ":taskId/archive",
            element: <RemindAchieve />,
          },
          {
            path: ":taskId/pros",
            element: <RemindPros />,
          },
          {
            path: ":taskId/cons",
            element: <RemindCons />,
          },
          {
            path: ":taskId/improve",
            element: <RemindImprove />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/introduction",
        element: <Introduction />,
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;
