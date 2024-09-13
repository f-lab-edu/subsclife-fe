import styled from 'styled-components';

export const RemindContainer = styled.div`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column; /* 요소들이 위에서 아래로 정렬되도록 설정 */
  justify-content: flex-start; /* 화면 상단부터 정렬 */
  position: relative;
`;

export const BackButton = styled.button`
    position: absolute;
  top: 10px;  /* 상단에서 10px */
  left: 10px;  /* 좌측에서 10px */
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.black};
  padding: 5px;
  border-radius: 4px;
`;