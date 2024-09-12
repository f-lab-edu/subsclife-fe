import styled, { css, RuleSet } from "styled-components";

interface RuleSetCSSType {
  $css?: RuleSet<object>;
}

const Subscriber = styled.div<RuleSetCSSType>`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  margin-top: 17px;
  margin-bottom: 5px;

  p {
    font-size: 15px;
  }

  ${({ $css }) => css`
    ${$css}
  `}
`;

const Title = styled.p<RuleSetCSSType>`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.green};
  line-height: 30px;
  word-break: keep-all;

  ${({ $css }) => css`
    ${$css}
  `}
`;

const SimpleInfo = styled.p<RuleSetCSSType>`
  font-size: 14px;
  color: ${({ theme }) => theme.color.black};
  word-break: keep-all;

  ${({ $css }) => css`
    ${$css}
  `}
`;

const Date = styled.div<RuleSetCSSType>`
  display: flex;

  justify-content: space-between;
  font-size: 14px;
  word-break: keep-all;

  &,
  & * {
    color: ${({ theme }) => theme.color.black};
  }

  .date {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;

    p {
      display: flex;
      align-items: center;
      padding-top: 1px;
      gap: 5px;
    }

    span {
      display: flex;
      align-items: center;
      height: 20px;
      padding: 0 15px;
      border-radius: 9999px;
      background-color: ${({ theme }) => theme.color["yellow-1"]};
      font-size: 12px;
      font-weight: bold;
    }
  }

  button {
    font-size: 18px;
    font-weight: bold;
    padding: 12px 24px;
    background-color: ${({ theme }) => theme.color["yellow-1"]};
    border: none;
    border-radius: 10px;
  }

  ${({ $css }) => css`
    ${$css}
  `}
`;

const NotStart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 32px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color["green-6"]};
  color: ${({ theme }) => theme.color.black};
  font-weight: bold;
`;

const Gauge = styled.div<{
  $percent: number;
  $gaugecolor?: "white" | "yellow";
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 32px;
  border-radius: 9999px;
  background-color: ${({ theme, $gaugecolor }) =>
    $gaugecolor === "yellow" ? theme.color["yellow-6"] : theme.color.white};
  overflow: hidden;

  .gauge {
    position: absolute;
    left: 0;
    top: 0;
    width: ${({ $percent }) => $percent}%;
    height: 100%;
    background-color: ${({ theme }) => theme.color["yellow-1"]};
    z-index: 1;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.color.black};
    z-index: 2;
  }
`;

const ReadyToRemind = styled.div`
  button {
    width: 100%;
    height: 32px;
    margin-bottom: 10px;
    background-color: ${({ theme }) => theme.color["yellow-1"]};
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.black};
  }

  p {
    color: ${({ theme }) => theme.color.red};
    font-size: 12px;
    font-weight: bold;
    text-align: center;
  }
`;

const Container = styled.div<RuleSetCSSType & { type: "yellow" | "green" }>`
  position: relative;
  width: 100%;
  padding: 20px;
  border-radius: 10px;

  i {
    position: absolute;
    top: 5px;
    right: 5px;
  }

  ${({ $css }) => css`
    ${$css}
  `}

  ${({ theme, type = "yellow" }) =>
    type === "yellow"
      ? css`
          background-color: ${theme.color["yellow-6"]};
        `
      : css`
          background-color: ${theme.color["white"]};

          ${Date} {
            span {
              background-color: ${theme.color["green"]};
              color: ${theme.color["white"]};
              font-weight: 400;
            }
            button {
              display: none;
            }
          }
        `}
`;

const ToggleButton = styled.button`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  background-color: ${({ theme }) => theme.color.green};
  border-radius: 0px 0px 10px 10px;
`;

const ToggleContent = styled.div<RuleSetCSSType & { $open?: boolean }>`
  width: 100%;
  margin-bottom: 40px;
  display: ${({ $open }) => ($open ? "block" : "none")};
`;

export {
  Container,
  Subscriber,
  Title,
  SimpleInfo,
  Date,
  NotStart,
  Gauge,
  ReadyToRemind,
  ToggleButton,
  ToggleContent,
};
