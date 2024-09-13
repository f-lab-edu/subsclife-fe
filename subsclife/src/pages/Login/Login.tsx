import { useNavigate } from "react-router-dom";

import { getAuth } from "@/api/auth";
import globalStore from "@/store/global";
import Header from "@/layouts/Header";
import LogoHeader from "@/layouts/LogoHeader";

import * as Icons from "@/assets/icons";
import * as Styled from "./Login.styled";

const Login = () => {
  const navigate = useNavigate();
  const { changeAuth } = globalStore();

  const login = async () => {
    const result = await getAuth();
    if (result === 200) {
      changeAuth(true);
      navigate("/");
    }
  };

  return (
    <Styled.Container>
      <Header>
        <LogoHeader />
      </Header>
      <Styled.Title>로그인</Styled.Title>
      <Styled.ButtonWrapper color="black" onClick={login}>
        <Icons.GoogleIcon />
        <span>Google</span>
      </Styled.ButtonWrapper>
      <Styled.ButtonWrapper color="green" onClick={login}>
        <Icons.NaverIcon />
        <span>Naver</span>
      </Styled.ButtonWrapper>
      <Styled.ButtonWrapper color="yellow" onClick={login}>
        <Icons.KakaotalkIcon />
        <span>Kakaotalk</span>
      </Styled.ButtonWrapper>
    </Styled.Container>
  );
};

export default Login;
