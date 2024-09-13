import styled from "styled-components";

export const RemindContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  width: 100%;
  height: calc(100% - 110px);
  position: relative;
  padding: 0 32px;

  .divider {
    flex: 1;
  }

  .button_wrapper {
    padding-bottom: 60px;
  }
`;

export const BackButton = styled.button`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 15px;
  font-size: 18px;
  color: ${({ theme }) => theme.color.black};
`;
