import React from "react";
import Button from "./NextButton.styled";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

interface NextButtonProps {
  mode: "next" | "complete"; // mode 인자를 통해 다음 또는 완료 구분
  nextPage?: string; // 다음 페이지로 넘어갈 경우 사용할 페이지 경로
}

const NextButton: React.FC<NextButtonProps> = ({ mode, nextPage }) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    if (mode === "complete") {
      try {
        // await axios.post("/api/complete", { data: "완료된 데이터" });
        alert("완료되었습니다.");
      } catch (error) {
        alert(error + "완료 중 오류가 발생했습니다.");
      }
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