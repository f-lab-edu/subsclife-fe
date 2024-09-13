import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import NaviHeader from "@/layouts/NaviHeader";
import RemindCard from "@/components/RemindCard";
import { getTerminatedRemindById, TerminatedRemindType } from "@/api/remind";

import * as Icons from "@/assets/icons";
import * as Styled from "./RemindDetail.styled";

const TaskDetail = () => {
  const navigate = useNavigate();
  const { historyId } = useParams() as { historyId: string };
  const [remind, setRemind] = useState<TerminatedRemindType>();

  const getRemindDetail = async () => {
    const terminatedRemindResult = await getTerminatedRemindById(historyId);
    if (terminatedRemindResult) {
      setRemind(terminatedRemindResult);
    }
  };

  useEffect(() => {
    getRemindDetail();
  }, []);

  if (!remind) {
    return (
      <Styled.Container>
        <p className="caution">알 수 없는 에러가 발생했습니다.</p>
        <Styled.Button onClick={() => navigate(-1)}>뒤로 가기</Styled.Button>
      </Styled.Container>
    );
  }

  const { title, simpleInfo, detail, startDate, endDate, reminds } = remind;

  const start = dayjs(startDate).format("YYYY년 M월 D일 H시");
  const end = dayjs(endDate).format("YYYY년 M월 D일 H시");

  return (
    <Styled.Container>
      <Header>
        <NaviHeader>
          <button onClick={() => navigate(-1)}>
            <Icons.ChevronLeftIcon />
            <p>이전</p>
          </button>
        </NaviHeader>
      </Header>

      <h1>{title}</h1>
      <p className="simple_desc">{simpleInfo}</p>
      <div className="gauge">
        <div>종료</div>
      </div>
      <p className="period">
        <span>시작 기간</span>
        {start}
      </p>
      <p className="period">
        <span>종료 기간</span>
        {end}
      </p>
      <h2>활동 목표 설명</h2>
      <div className="desc">{detail ?? "작성된 내용이 없습니다"}</div>
      <h2>
        참여 인원 <span>({reminds.length} / 10)</span>
      </h2>
      <div className="card_list">
        {reminds.map((remindCardData) => (
          <RemindCard
            key={remindCardData.remindContent.remindId}
            remindId={remindCardData.remindContent.remindId}
            title={title}
            startDate={startDate}
            endDate={endDate}
            remindCardData={remindCardData}
          />
        ))}
      </div>
      <Footer />
    </Styled.Container>
  );
};

export default TaskDetail;
