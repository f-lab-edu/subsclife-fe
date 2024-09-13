import { useEffect, useState } from "react";
import instance from "@/api/instance";
import RemindCard from "@/components/RemindCard/RemindCard";
import styled from "styled-components";
import TaskCardContent from "@/components/TaskCardContent";

const PaddingWrapper = styled.div`
  padding: 30px 30px 20px;
`;


const RemindCardContainer = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 20px;
  margin: 10px 0; 
`;

const History = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReminds = async () => {
      const pageSize = 10;
      try {
        const response = await instance.get(`http://223.130.150.89:8080/api/v1/reminds?page_size=${pageSize}`)
        console.log(JSON.stringify(response));

        if (response.data.items) {
          setData(response.data.items);
        } else {
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching reminds:", error);
        setData([]); 
      } finally {
        setLoading(false);
      }
    };

    fetchReminds();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // 로딩 중일 때 표시할 컴포넌트
  }

  return (
    <PaddingWrapper>
      <TaskCardContent.Title>지난 회고들</TaskCardContent.Title>
        <RemindCardContainer>
        {data.length > 0 ? (
          data.map((item) => (
            <RemindCard
              key={item.remindContent.remindId}
              taskId={item.taskInfo.taskId}
              title={item.taskInfo.title}
              startDate={item.taskInfo.startDate}
              endDate={item.taskInfo.endDate}
              achievementRate={item.remindContent.achievementRate}
              achieveReason={item.remindContent.achieveReason}
              failReason={item.remindContent.failReason}
              improvementPlan={item.remindContent.improvementPlan}
              subscriberCount={item.taskInfo.subscriberCount}
            />
          ))
        ) : (
          <div></div>
        )}
      </RemindCardContainer>
    </PaddingWrapper>
  );
};

export default History;
