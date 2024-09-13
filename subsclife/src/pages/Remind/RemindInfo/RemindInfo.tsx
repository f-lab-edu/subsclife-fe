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
  const taskName = "해커톤 개발 마무리";
  const userList = ["권혁빈", "김현성", "진성진", "고청천"];
  return (
    <RemindContainer>
      <BackButton onClick={() => navigate(-1)}>{"< 이전"}</BackButton>
      <br />
      <TextBox textName={taskName}/>
      <NumberInfo number={userList.length} />
      <UserList userNames={userList}/>
      <Outlet />
      <NextButton mode="next" nextPage={`/remind/${remindId}/archive`} />
    </RemindContainer>
  );
}

export default RemindInfo;
