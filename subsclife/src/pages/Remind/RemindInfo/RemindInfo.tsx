import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RemindContainer } from "../Remind.styled";
import NextButton from "@/components/NextButton/NextButton";
import TextBox from "./TextBox";
import NumberInfo from "./NumberInfo";
import UserList from "./UserList";
import instance from "@/api/instance"; // axios 인스턴스 가져오기
import { remindStore } from "@/store/remind";

interface User {
  userId: number;
  name: string;
  nickname: string;
}

const RemindInfo: React.FC = () => {
  const navigate = useNavigate();
  const { task, updateTask } = remindStore();
  const { taskId } = useParams() as { taskId: string };
  const [userList, setUserList] = useState<User[]>([]);

  // useEffect를 통해 컴포넌트가 렌더링될 때 API 호출
  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await instance.get(
          `/api/v1/tasks/${taskId}/subscribers`
        );

        const result = await instance.get(`/api/v1/tasks/${taskId}`);
        updateTask(result.data);

        setUserList(response.data);
      } catch (error) {
        console.error("Error fetching subscribers:", error);
      }
    };

    if (taskId) {
      fetchSubscribers();
    }
  }, []);

  const nextHandler = () => {
    navigate(`/remind/${taskId}/archive`);
  };

  return (
    <RemindContainer>
      <div className="divider">
        <TextBox textName={task?.title || ""} />
        <NumberInfo number={userList.length} />
        <UserList userNames={userList.map((user) => user.name)} />
      </div>
      <div className="button_wrapper">
        <NextButton
          mode="next"
          nextPage={`/remind/${taskId}/archive`}
          callback={nextHandler}
        />
      </div>
    </RemindContainer>
  );
};

export default RemindInfo;
