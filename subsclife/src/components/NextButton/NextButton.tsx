import React from "react";
import Button from "./NextButton.styled";
import { useNavigate } from "react-router-dom";
import instance from "@/api/instance";

interface NextButtonProps {
  mode: "next" | "complete"; 
  nextPage?: string; 
}

const NextButton: React.FC<NextButtonProps> = ({ mode, nextPage }) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    if (mode === "complete") {
      try {
        const data = {
          taskId: 3,
          achievementRate: 50,
          achieveReason: "string",
          failReason: "string",
          improvementPlan: "string",
        };
        const response = await instance.post("/api/v1/reminds", data);
        console.log(response);
        if (response.status === 200) {
          console.log("회고 작성 완료했습니다");
        } else {
          console.log("완료 중 오류가 발생했습니다.");
        }
      } catch (error) {
        console.log("완료 중 오류가 발생했습니다. 오류 내용: " + error);
      }
      navigate("/");
    } else if (mode === "next" && nextPage) {
      navigate(nextPage);
    }
  };

  return (
    <Button onClick={handleClick}>
      {mode === "complete" ? "완료" : "다음"}
    </Button>
  );
};

export default NextButton;
