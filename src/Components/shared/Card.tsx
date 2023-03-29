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
    | "space-between";
  children?: ReactElement | ReactElement[];
};

export default function Card({
  backgroundColor = "white",
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
    props.boxShadow ? "rgba(100, 100, 111, 0.1) 0px 1px 20px 0px" : "none"};
  background-color: "${(props) => props.backgroundColor}";

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
