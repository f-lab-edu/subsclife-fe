import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

import App from "./App";
import Main from "@/pages/Main";

import TaskDetail from "@/pages/TaskDetail";
import Login from "@/pages/Login";
import WriteTask from "@/pages/WriteTask";
import ProtectGuard from "./components/ProtectGuard";

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
        element: <div>조회 페이지</div>,
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
        element: <div>회고 히스토리 페이지</div>,
      },
      {
        path: "/history/:historyId",
        element: <div>회고 히스토리 상세 페이지</div>,
      },
      {
        path: "/remind",
        element: (
          <div>
            <Outlet />
          </div>
        ),
        children: [
          {
            path: ":remindId/info",
            element: <div>회고 작성 정보 페이지</div>,
          },
          {
            path: ":remindId/archive",
            element: <div>회고 달성률 체크 페이지</div>,
          },
          {
            path: ":remindId/pros",
            element: <div>회고 달성 이유 페이지</div>,
          },
          {
            path: ":remindId/cons",
            element: <div>회고 미달성 이유 페이지</div>,
          },
          {
            path: ":remindId/improve",
            element: <div>회고 개선점 페이지</div>,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;
