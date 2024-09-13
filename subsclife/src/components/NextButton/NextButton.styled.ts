import styled from "styled-components";

export const Button = styled.button`
  width: 90%;
  padding: 15px 0;
  background-color: ${({ theme }) => theme.color["yellow-1"]};
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.black};
  font-weight: bold;
  border-radius: 10px;
  width: 100%; /* 부모 요소 너비에 맞춤 */
  box-sizing: border-box; /* padding과 border를 포함하여 너비 계산 */
`;
export default Button;
