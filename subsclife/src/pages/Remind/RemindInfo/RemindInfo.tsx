import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { RemindContainer, BackButton } from "../Remind.styled"; 
import NextButton from "@/components/NextButton/NextButton";
import TextBox from "./TextBox";
import NumberInfo from "./NumberInfo";
import UserList from "./UserList";

const remindId = 1;
const RemindInfo: React.FC = () => {
  const navigate = useNavigate();
  const taskName = "태스크 1";
  const userCount = 4;
  const userList = ["user1", "user2", "user3", "user4"];
  return (
    <RemindContainer>
      <BackButton onClick={() => navigate(-1)}>{"< 이전"}</BackButton>
      <br />
      <TextBox textName={taskName}/>
      <NumberInfo number={userCount} />
      <UserList userNames={userList}/>
      <Outlet />
      <NextButton mode="next" nextPage={`/remind/${remindId}/archive`} />
    </RemindContainer>
  );
}

export default RemindInfo;
