import React from "react";
import Button from "./NextButton.styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
        const userId = 1;
        const response = await axios.post(
          "http://223.130.150.89:8080/api/v1/reminds",
          data,
          {
            headers: {
              "user-id": userId,
            },
          }
        );
        console.log(response);
        if (response.status === 200) {
          alert("완료되었습니다.");
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
