import { CSSProperties, PropsWithChildren } from "react";

import * as Styled from "./Loader.styled";

interface LoaderProps extends PropsWithChildren {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
}

const Container = ({
  children,
  width = "100%",
  height = "100%",
}: LoaderProps) => {
  return (
    <Styled.Wrapper $width={width} $height={height}>
      {children}
    </Styled.Wrapper>
  );
};

interface LoadingProps {
  size?: "lg" | "md" | "sm";
}

const Loading = ({ size = "lg" }: LoadingProps) => (
  <Styled.LoadingSpan $size={size} />
);

const Loader = Object.assign(Container, { Loading });

export default Loader;
