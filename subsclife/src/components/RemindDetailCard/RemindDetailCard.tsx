import styled, { css } from "styled-components";
import { forwardRef, Ref } from "react";

import TaskCardContent from "../TaskCardContent";

const RemindWrapper = styled.div`
  div {
    font-size: 14px;
    margin-bottom: 30px;
    p {
      margin-bottom: 5px;
    }

    em {
      font-weight: bold;
    }
  }
`;

import * as Icons from "@/assets/icons";

type RemindCardType = {
  userInfo: {
    userId: string;
    nickname: string;
  };
  remindContent: {
    remindId: string;
    achievementRate: string;
    achieveReason: string;
    failReason: string;
    improvementPlan: string;
  };
};

interface RemindDetailCardProps {
  remindId: string;
  startDate: string;
  endDate: string;
  title: string;
  remindCardData: RemindCardType;
}

const RemindDetailCard = (
  { startDate, endDate, title, remindCardData }: RemindDetailCardProps,
  ref: Ref<HTMLDivElement>
) => {
  const { userInfo, remindContent } = remindCardData;
  const { nickname } = userInfo;
  const { achievementRate, achieveReason, failReason, improvementPlan } =
    remindContent;

  return (
    <TaskCardContent
      ref={ref}
      icon={<></>}
      type="green"
      css={css`
        margin-bottom: 20px;
      `}
    >
      <TaskCardContent.Subscriber prefix={<Icons.AvatarCircleIcon />}>
        {nickname}
      </TaskCardContent.Subscriber>
      <TaskCardContent.Title
        css={css`
          margin-bottom: 10px;
        `}
      >
        {title}
      </TaskCardContent.Title>

      <TaskCardContent.Date
        css={css`
          margin-bottom: 30px;
        `}
        taskId={0}
        startDate={startDate}
        endDate={endDate}
      />
      <TaskCardContent.Toggle>
        <RemindWrapper>
          <div>
            <p>
              <em>달성율</em>
            </p>
            <div className="gauge">{achievementRate}%</div>
          </div>
          <div>
            <p>
              <em>달성 이유</em>
            </p>
            <p>{achieveReason}</p>
          </div>
          <div>
            <p>
              <em>미달성 이유</em>
            </p>
            <p>{failReason}</p>
          </div>
          <div>
            <p>
              <em>개선점</em>
            </p>
            <p>{improvementPlan}</p>
          </div>
        </RemindWrapper>
      </TaskCardContent.Toggle>
    </TaskCardContent>
  );
};

export default forwardRef(RemindDetailCard);
