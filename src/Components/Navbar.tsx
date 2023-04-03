import { ReactElement } from "react";
import styled from "styled-components";
import Title from "./shared/Title";
import { CardTitle, CardContent } from "@/pages";
import { lightTheme } from "@/themes";

type Props = {
  cardContent: CardContent;
  onClick: (pageContent: CardContent, cardTitle: CardTitle) => void;
  backgroundColor?: string;
};

export default function Navbar({
  cardContent,
  onClick,
  backgroundColor = "transparent",
}: Props): ReactElement {
  return (
    <NavbarContainer backgroundColor={backgroundColor}>
      <div className={"logo-placeholder "}></div>
      <RightLinks>
        <Title
          text={"Home"}
          fontSize="15px"
          onClick={() => {
            onClick(CardContent.Home, CardTitle.Home);
          }}
          underline={cardContent === CardContent.Home}
          fontColor={lightTheme.primary.main}
          underlineColor={lightTheme.tertiary.main}
          hoverColor={lightTheme.primary.dark}
        />
        <Title
          text={"About Me"}
          fontSize="15px"
          onClick={() => {
            onClick(CardContent.AboutMe, CardTitle.AboutMe);
          }}
          underline={cardContent === CardContent.AboutMe}
          fontColor={lightTheme.primary.main}
          underlineColor={lightTheme.tertiary.main}
          hoverColor={lightTheme.primary.dark}
        />
        <Title
          text={"Skills"}
          fontSize="15px"
          onClick={() => {
            onClick(CardContent.Skills, CardTitle.Skills);
          }}
          underline={cardContent === CardContent.Skills}
          fontColor={lightTheme.primary.main}
          underlineColor={lightTheme.tertiary.main}
          hoverColor={lightTheme.primary.dark}
        />
        <Title
          text={"Projects"}
          fontSize="15px"
          onClick={() => {
            onClick(CardContent.Projects, CardTitle.Projects);
          }}
          underline={cardContent === CardContent.Projects}
          fontColor={lightTheme.primary.main}
          underlineColor={lightTheme.tertiary.main}
          hoverColor={lightTheme.primary.dark}
        />
        <Title
          text={"Contact Me"}
          fontSize="15px"
          onClick={() => {
            onClick(CardContent.ContactMe, CardTitle.ContactMe);
          }}
          underline={cardContent === CardContent.ContactMe}
          fontColor={lightTheme.primary.main}
          underlineColor={lightTheme.tertiary.main}
          hoverColor={lightTheme.primary.dark}
        />
      </RightLinks>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div<{ backgroundColor: string }>`
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  background-color: ${(props) => props.backgroundColor};
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  & .logo-placeholder {
    background-color: rgb(125, 125, 125, 0.5);
    border-radius: 50%;
    height: 45px;
    width: 45px;
    margin-left: 25px;
  }
`;

const RightLinks = styled.div`
  margin-right: 25px;

  & h1 {
    margin-right: 15px;
  }
`;
