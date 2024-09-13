import Header from "@/layouts/Header";
import LogoHeader from "@/layouts/LogoHeader";

import Intro1 from "@/assets/imgs/intro_1.png";
import Intro2 from "@/assets/imgs/intro_2.png";
import Intro3 from "@/assets/imgs/intro_3.png";
import Intro4 from "@/assets/imgs/intro_4.png";
import Intro5 from "@/assets/imgs/intro_5.png";
import { SmallLogo } from "@/assets/icons";

import * as Styled from "./Introduction.styled";
import { useNavigate } from "react-router-dom";

const Introduction = () => {
  const navigate = useNavigate();

  const moveToLogin = () => navigate("/login");

  return (
    <Styled.Container>
      <Header>
        <LogoHeader />
      </Header>
      <Styled.Block>
        <Styled.Title>
          <em>혹시,</em>
          <br />
          그런적 없으셨나요?
        </Styled.Title>
      </Styled.Block>
      <Styled.Block>
        <Styled.Title>
          어떻게 혼자서도
          <br /> <em>잘 성장할 수 있을 지</em>
          <br /> 궁금했던 적,
        </Styled.Title>
        <Styled.ImageWrapper $width={260}>
          <img src={Intro1} alt="intro_1" />
        </Styled.ImageWrapper>
      </Styled.Block>
      <Styled.Block $backclr="white">
        <Styled.Title $align="right">
          <em>내가 잘 성장하고 있는지</em>
          <br /> 의문이 들었던 적,
        </Styled.Title>
        <Styled.ImageWrapper $width={280}>
          <img src={Intro2} alt="intro_2" />
        </Styled.ImageWrapper>
      </Styled.Block>
      <Styled.Block>
        <Styled.Title>
          <em>스스로를 평가하여</em>
          <br />내 능력을 예측하고
        </Styled.Title>
        <Styled.ImageWrapper $width={280}>
          <img src={Intro3} alt="intro_3" />
        </Styled.ImageWrapper>
      </Styled.Block>
      <Styled.Block $backclr="white">
        <Styled.Title $align="right">
          지난 회고들을 보며
          <br />
          <em>얼마나 성장했는지</em>
          <br />알 수 있고,
        </Styled.Title>
        <Styled.ImageWrapper $width={180}>
          <img src={Intro4} alt="intro_4" />
        </Styled.ImageWrapper>
      </Styled.Block>
      <Styled.Block>
        <Styled.Title>
          다른 사람들과 함께하며
          <br />
          <em>동기부여</em> 받을 수 있어요!
        </Styled.Title>
        <Styled.ImageWrapper $width={280}>
          <img src={Intro5} alt="intro_5" />
        </Styled.ImageWrapper>
      </Styled.Block>
      <Styled.Block>
        <Styled.Title>
          <em>혼자</em>여도, <strong>함께</strong>여도 <br />
          꾸준히 이뤄내는 <u>성장</u>
          <em>.</em>
          <br />
          <SmallLogo />와 <br />
          함께해요!
        </Styled.Title>
      </Styled.Block>
      <Styled.ButtonWrapper>
        <button onClick={moveToLogin}>시작하기</button>
      </Styled.ButtonWrapper>
      <Styled.Footer>
        <p>F-THON (2024.09.08~2024.09.14)</p>
        <em>8조</em>
        <div>
          <p>
            <em>BE</em>
          </p>
          <p>권혁빈</p>
          <p>김현성</p>
        </div>
        <div>
          <p>
            <em>FE</em>
          </p>
          <p>진성진</p>
          <p>고창천</p>
        </div>
      </Styled.Footer>
    </Styled.Container>
  );
};

export default Introduction;
