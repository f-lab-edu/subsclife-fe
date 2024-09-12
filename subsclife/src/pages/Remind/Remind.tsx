import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { RemindContainer, BackButton } from "./Remind.styled";

const Remind: React.FC = () => {
  const navigate = useNavigate();

  return (
    <RemindContainer>
      <BackButton onClick={() => navigate(-1)}>{"< 이전"}</BackButton>
      <Outlet />
    </RemindContainer>
  );
}

export default Remind;
