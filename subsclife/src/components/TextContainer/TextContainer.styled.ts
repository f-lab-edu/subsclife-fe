import styled from "styled-components";

const TextContainer = styled.div`
  text-align: left;
  font-size: 32px;
  margin: 130px 0px 0px 25px;
  font-weight: bold;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.green};
`;

export default TextContainer;