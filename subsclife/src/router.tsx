import { createBrowserRouter, Outlet } from "react-router-dom";

import App from "./App";
import Main from "@/pages/Main";

import TaskDetail from "@/pages/TaskDetail";
import WriteTask from "./pages/WriteTask";

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
        element: <WriteTask />,
      },
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/search",
        element: <div>조회 페이지</div>,
      },
      {
        path: "/task/:taskId",
        element: <TaskDetail />,
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
        element: <div>로그인 페이지</div>,
      },
    ],
  },
  {
    path: "/*",
    element: <Main />,
    },
]);

export default router;
