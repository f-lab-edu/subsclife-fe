import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { RemindContainer, BackButton } from "../Remind.styled";
import NextButton from "@/components/NextButton/NextButton";
import TextBox from "./TextBox";
import NumberInfo from "./NumberInfo";
import UserList from "./UserList";
import instance from "@/api/instance"; // axios 인스턴스 가져오기

interface User {
  userId: number;
  name: string;
  nickname: string;
}

const RemindInfo: React.FC = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const navigate = useNavigate();

  const [userList, setUserList] = useState<User[]>([]);
  const taskName = "해커톤 개발 마무리";

  // useEffect를 통해 컴포넌트가 렌더링될 때 API 호출
  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await instance.get(`/api/v1/tasks/${taskId}/subscribers`);
        setUserList(response.data);
      } catch (error) {
        console.error("Error fetching subscribers:", error);
      }
    };

    if (taskId) {
      fetchSubscribers();
    }
  }, [taskId]);

  return (
    <RemindContainer>
      <BackButton onClick={() => navigate(-1)}>{"< 이전"}</BackButton>
      <br />
      <TextBox textName={taskName} />
      <NumberInfo number={userList.length} />
      <UserList userNames={userList.map(user => user.name)} />
      <Outlet />
      <NextButton mode="next" nextPage={`/remind/${taskId}/archive`} />
    </RemindContainer>
  );
};

export default RemindInfo;
