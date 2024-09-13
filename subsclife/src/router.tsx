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
        element: <div>회고 히스토리 상세 페이지</div>,
      },
      {
        path: "/remind",
        element: <Remind />, 
        children: [
          {
            path: ":remindId/info",
            element: <RemindInfo />,
          },
          {
            path: ":remindId/archive",
            element: <RemindAchieve />,
          },
          {
            path: ":remindId/pros",
            element: <RemindPros />,
          },
          {
            path: ":remindId/cons",
            element: <RemindCons />,
          },
          {
            path: ":remindId/improve",
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
