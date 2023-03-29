import { ReactElement } from "react";
import styled from "styled-components";
import Title from "./shared/Title";
import { PageContent } from "@/pages";
import { lightTheme } from "@/themes";

type Props = {
  pageContent: PageContent;
  onClick: (pageContent: PageContent) => void;
};

export default function Navbar({ pageContent, onClick }: Props): ReactElement {
  return (
    <NavbarContainer>
      <div className={"logo-placeholder "}></div>
      <RightLinks>
        <Title
          text={"Home"}
          fontSize="15px"
          onClick={() => {
            onClick(PageContent.Home);
          }}
          underline={pageContent === PageContent.Home}
          fontColor={lightTheme.quaternary.main}
          underlineColor={lightTheme.quaternary.main}
          hoverColor={lightTheme.quaternary.dark}
        />
        <Title
          text={"About Me"}
          fontSize="15px"
          onClick={() => {
            onClick(PageContent.AboutMe);
          }}
          underline={pageContent === PageContent.AboutMe}
          fontColor={lightTheme.quaternary.main}
          underlineColor={lightTheme.quaternary.main}
          hoverColor={lightTheme.quaternary.dark}
        />
        <Title
          text={"Skills"}
          fontSize="15px"
          onClick={() => {
            onClick(PageContent.Skills);
          }}
          underline={pageContent === PageContent.Skills}
          fontColor={lightTheme.quaternary.main}
          underlineColor={lightTheme.quaternary.main}
          hoverColor={lightTheme.quaternary.dark}
        />
        <Title
          text={"Projects"}
          fontSize="15px"
          onClick={() => {
            onClick(PageContent.Projects);
          }}
          underline={pageContent === PageContent.Projects}
          fontColor={lightTheme.quaternary.main}
          underlineColor={lightTheme.quaternary.main}
          hoverColor={lightTheme.quaternary.dark}
        />
        <Title
          text={"Contact Me"}
          fontSize="15px"
          onClick={() => {
            onClick(PageContent.ContactMe);
          }}
          underline={pageContent === PageContent.ContactMe}
          fontColor={lightTheme.quaternary.main}
          underlineColor={lightTheme.quaternary.main}
          hoverColor={lightTheme.quaternary.dark}
        />
      </RightLinks>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  background-color: white;
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
