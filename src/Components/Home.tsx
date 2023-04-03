import { ReactElement } from "react";
import styled from "styled-components";
import Button from "./shared/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { lightTheme } from "@/themes";
import Card from "./shared/Card";
import Icon from "./shared/Svg";
import Svg from "./shared/Svg";

export default function Home(): ReactElement {
  return (
    <>
      <Left id="left-container">
        <div className="imgPlaceholder"></div>
      </Left>
      <Right id="right-container" textColor={lightTheme.primary.main}>
        <div id="introText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </div>
        <div className="buttons">
          <Button
            id="resumeButton"
            label={"Resumé"}
            backgroundColor={lightTheme.tertiary.main}
            textColor={lightTheme.quinary.light}
            onHoverBackgroundColor={lightTheme.tertiary.dark}
            onClick={() => {}}
          ></Button>
          <div className="icons">
            <Svg
              component={LinkedInIcon}
              fill={lightTheme.tertiary.main}
              onHoverFill={lightTheme.tertiary.dark}
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <Svg
              component={GitHubIcon}
              fill={lightTheme.tertiary.main}
              onHoverFill={lightTheme.tertiary.dark}
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <Svg
              component={EmailIcon}
              fill={lightTheme.tertiary.main}
              onHoverFill={lightTheme.tertiary.dark}
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </div>
      </Right>
    </>
  );
}

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  height: 100%;
  width: 30%;

  & .imgPlaceholder {
    background-color: rgb(125, 125, 125, 0.5);
    width: 90%;
    height: 0;
    padding-top: 90%;
    border-radius: 50%;
  }
`;

const Right = styled.div<{ textColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  height: 100%;
  width: 70%;
  flex-direction: column;

  & #introText {
    font-size: 18px;
    height: auto;
    margin-bottom: 10%;
    font-size: 1.25rem;
    text-align: justify;
    color: ${(props) => props.textColor};
  }

  & .buttons {
    display: flex;
    height: auto;
    width: 100%;
    align-items: center;
    column-gap: 18%;
    justify-content: center;

    & .icons {
      display: flex;
      align-items: center;
      column-gap: 0.8rem;
      height: 100%;
    }

    & #linkedInIcon,
    #githubIcon,
    #emailIcon {
      height: 50px;
      width: 50px;
    }
  }
`;
