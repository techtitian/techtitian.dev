import { ReactElement } from "react";
import styled from "styled-components";

type Props = {
  backgroundColor?: string;
  boxShadow?: boolean;
  flexDir?: "row" | "column";
  justifyContent?:
    | "left"
    | "right"
    | "center"
    | "space-around"
    | "space-between"
    | "none";
  children?: ReactElement | ReactElement[];
};

export default function Card({
  backgroundColor = "transparent",
  boxShadow = false,
  flexDir = "row",
  justifyContent = "center",
  children,
}: Props): ReactElement {
  return (
    <CardContainer
      backgroundColor={backgroundColor}
      flexDir={flexDir}
      boxShadow={boxShadow}
      justifyContent={justifyContent}
      key={Math.random()}
    >
      {children}
    </CardContainer>
  );
}

const CardContainer = styled.div<{
  backgroundColor: string;
  boxShadow: boolean;
  flexDir: string;
  justifyContent: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.flexDir};
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  padding: 50px;
  border-radius: 10px;
  width: 50%;
  height: 50%;
  box-shadow: ${(props) =>
    props.boxShadow
      ? "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;"
      : "none"};
  background-color: ${(props) => props.backgroundColor};

  animation: fadeIn 1.5s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
