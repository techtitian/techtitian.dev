import * as React from "react";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Svg from "./shared/Svg";
import { lightTheme } from "@/themes";
import Title from "./shared/Title";

export interface ICarouselData {
  title: string;
  img: string;
  description: string;
}

type Props = {
  data: ICarouselData[];
};

export default function Carousel({ data }: Props): React.ReactElement {
  const [activeStep, setActiveStep] = React.useState(0);

  // Handlers
  const handlePrev = () => {
    setActiveStep(activeStep - 1 < 0 ? data.length - 1 : activeStep - 1);
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1 >= data.length ? 0 : activeStep + 1);
  };

  return (
    <Container>
      {data?.length > 0 && (
        <>
          <Title
            text={data[activeStep]?.title}
            fontColor={lightTheme.primary.main}
            underlineColor={lightTheme.primary.main}
            hoverColor={lightTheme.primary.main}
            display="block"
          />
          <CarouselBody>
            <Svg
              component={ArrowBackIosNewIcon}
              fill={lightTheme.tertiary.main}
              onHoverFill={lightTheme.tertiary.dark}
              onClick={handlePrev}
              width={"30px"}
            />
            <img src={data[activeStep]?.img} />
            <Svg
              component={ArrowForwardIosIcon}
              fill={lightTheme.tertiary.main}
              onHoverFill={lightTheme.tertiary.dark}
              onClick={handleNext}
              width={"30px"}
            />
          </CarouselBody>
          <Title
            text={data[activeStep]?.description}
            fontSize="15px"
            fontColor={lightTheme.primary.main}
            underlineColor={lightTheme.primary.main}
            hoverColor={lightTheme.primary.main}
            display="block"
          />
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const CarouselBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  & img {
    margin: 0 5%;
    height: 80%;
    width: 60%;
    border-radius: 10px;
  }
`;
