import styled from "styled-components";

const TextContainer = styled.div`
  font-size: 32px;
  margin: 60px 0px 40px 0px;
  font-weight: bold;
  line-height: 48px;
  color: ${({ theme }) => theme.color.green};
`;

export default TextContainer;
