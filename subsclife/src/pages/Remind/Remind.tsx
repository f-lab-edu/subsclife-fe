import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { BackButton } from "./Remind.styled";
import * as Icons from "@/assets/icons";

const Remind: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <BackButton onClick={() => navigate(-1)}>
        <Icons.ChevronLeftIcon />
        <p>이전</p>
      </BackButton>

      <Outlet />
    </>
  );
};

export default Remind;
