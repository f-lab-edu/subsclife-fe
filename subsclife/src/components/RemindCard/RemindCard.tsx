import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import LogoHeader from "@/layouts/LogoHeader";
import * as Icons from "@/assets/icons";
import { css } from "styled-components";
import TaskCardContent from "../TaskCardContent";
import { Dayjs } from "dayjs";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;

  p {
    margin: 4px 0 10px 0;
    line-height: 1.5; 
  }

  .sectionTitle {
    color: ${({ theme }) => theme.color["green-1"]};
    font-weight: bold;
  }

  .reasonContent {
    text-indent: 0;
  }
`;

const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column; 
  margin: 15px 0;
`;

const ProgressBarBackground = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color["yellow-6"]};
  border-radius: 20px;
  height: 32px;
  position: relative;
`;

const ProgressBarFill = styled.div<{ width: number }>`
  background-color: ${({ theme }) => theme.color["yellow-1"]};
  width: ${({ width }) => width}%;
  height: 100%;
  border-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const ProgressBarText = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${({ theme }) => theme.color["black"]};
`;

const ProgressLabel = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

interface RemindProbs {
  taskId: number;
  title: string;
  startDate: string | Date | Dayjs;
  endDate: string | Date | Dayjs;
  achievementRate: number;
  achieveReason: string;
  failReason: string;
  improvementPlan: string;
  subscriberCount: number;
}

const RemindCard: React.FC<RemindProbs> = ({
  taskId,
  title,
  startDate,
  endDate,
  achievementRate,
  achieveReason,
  failReason,
  improvementPlan,
  subscriberCount,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/history/${taskId}`);
  };
  return (
    <div>
      <Header>
        <LogoHeader />
      </Header>
      <TaskCardContent icon={<Icons.UpRightArrowIcon />} type="green" onClick={handleClick}>
        <TaskCardContent.Subscriber prefix={<Icons.AvatarCircleIcon />} children={subscriberCount} />
        <TaskCardContent.Title>{title}</TaskCardContent.Title>
        <TaskCardContent.Date
          taskId={taskId}
          css={css`margin-bottom: 15px`}
          startDate={startDate}
          endDate={endDate}
        />

        <TaskCardContent.Toggle>
          <StyledSection>
            <ProgressLabel>달성률</ProgressLabel>
            <ProgressBarContainer>
              <ProgressBarBackground>
                <ProgressBarFill width={achievementRate}>
                </ProgressBarFill>
                <ProgressBarText>{achievementRate}%</ProgressBarText>
              </ProgressBarBackground>
            </ProgressBarContainer>

            <div className="sectionTitle">달성 이유</div>
            <p className="reasonContent">{achieveReason}</p>
            
            <div className="sectionTitle">미달성 이유</div>
            <p className="reasonContent">{failReason}</p>

            <div className="sectionTitle">개선점</div>
            <p className="reasonContent">{improvementPlan}</p>
          </StyledSection>
        </TaskCardContent.Toggle>
      </TaskCardContent>
      <Footer />
    </div>
  );
};

export default RemindCard;
