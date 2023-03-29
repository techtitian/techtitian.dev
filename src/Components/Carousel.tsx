import * as React from "react";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Svg from "./shared/Svg";
import { lightTheme } from "@/themes";
import Title from "./shared/Title";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const projects = [
  {
    title: "San Francisco – Oakland Bay Bridge, United States",
    img: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    description: "This is a test ",
  },
  {
    title: "Bird",
    img: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    description: "This is a test",
  },
];

export default function Carousel() {
  // const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = projects.length;

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleStepChange = (step: number) => {
  //   setActiveStep(step);
  // };

  return (
    <Container>
      <Title
        text={"Duo Finder Q"}
        fontColor={lightTheme.primary.main}
        underlineColor={lightTheme.primary.main}
        hoverColor={lightTheme.primary.main}
      />
      <CarouselContainer>
        <Svg
          component={ArrowBackIosNewIcon}
          fill={lightTheme.tertiary.main}
          onHoverFill={lightTheme.tertiary.dark}
          onClick={() => {}}
          width={"30px"}
        />
        <img
          src={
            "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
          }
        />
        <Svg
          component={ArrowForwardIosIcon}
          fill={lightTheme.tertiary.main}
          onHoverFill={lightTheme.tertiary.dark}
          onClick={() => {}}
          width={"30px"}
        />
      </CarouselContainer>
      <CarouselDescription> pp popo </CarouselDescription>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: "row";
  justify-content: "center";
  align-items: "center";
  height: 100%;
  width: 100%;
`;

const CarouselDescription = styled.div``;

// const Test = styled(AutoPlaySwipeableViews)`
//   display:block,
//   justify-content: center,
//   overflow: hidden,
//   width: auto;
//   margin: 0;
//   padding: 0;
//   /* transform: scale(1.5); */
// `;
