import { ReactElement } from "react";
import Title from "./shared/Title";
import { lightTheme } from "@/themes";
import SwipeableTextMobileStepper from "./Carousel";
import styled from "styled-components";

export default function Projects(): ReactElement {
  return (
    <>
      <Top>
        <Title
          text={"Projects"}
          fontSize={"30px"}
          fontColor={lightTheme.primary.main}
          underlineColor={lightTheme.primary.main}
          hoverColor={lightTheme.primary.main}
        />
      </Top>
      <Bottom>
        <SwipeableTextMobileStepper />
      </Bottom>
    </>
  );
}

const Top = styled.div`
  height: auto;
  width: 100%;
  text-align: center;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 100%;
`;
