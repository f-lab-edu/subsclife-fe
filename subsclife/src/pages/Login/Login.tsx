import * as Icons from "@/assets/icons";
import * as Styled from "./Login.styled";

const Login = () => {
  return (
    <Styled.Container>
      <Styled.Title>로그인</Styled.Title>
      <Styled.ButtonWrapper color="black">
        <Icons.GoogleIcon />
        <span>Google</span>
      </Styled.ButtonWrapper>
      <Styled.ButtonWrapper color="green">
        <Icons.NaverIcon />
        <span>Naver</span>
      </Styled.ButtonWrapper>
      <Styled.ButtonWrapper color="yellow">
        <Icons.KakaotalkIcon />
        <span>Kakaotalk</span>
      </Styled.ButtonWrapper>
    </Styled.Container>
  );
};

export default Login;
