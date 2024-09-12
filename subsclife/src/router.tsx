import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "./App";
import Remind from "./pages/Remind/Remind";
import RemindInfo from "./pages/Remind/RemindInfo/RemindInfo";
import RemindAchieve from "./pages/Remind/RemindArchive/RemindArchive";
import RemindPros from "./pages/Remind/RemindPros/RemindPros";
import RemindCons from "./pages/Remind/RemindCons/RemindCons";

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
          <div>
            <Outlet />
          </div>
        ),
        children: [
          {
            path: "goal",
            element: <div>목표 설정</div>,
          },
          {
            path: "desc",
            element: <div>부가 설명</div>,
          },
          {
            path: "time",
            element: <div>기간 설정</div>,
          },
        ],
      },
      {
        path: "/",
        element: <div>메인 페이지</div>,
      },
      {
        path: "/search",
        element: <div>조회 페이지</div>,
      },
      {
        path: "/task/:taskId",
        element: <div>태스크 상세 페이지</div>,
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
]);

export default router;
