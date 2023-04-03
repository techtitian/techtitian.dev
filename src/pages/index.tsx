import AboutMe from "@/Components/AboutMe";
import ContactMe from "@/Components/ContactMe";
import Home from "@/Components/Home";
import Navbar from "@/Components/Navbar";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import Card from "@/Components/shared/Card";
import CueTitle from "@/Components/shared/CueTitle";
import { lightTheme } from "@/themes";
import { useState } from "react";

export enum CardContent {
  Home = "",
  AboutMe = "About Me",
  Skills = "Skills",
  Projects = "Projects",
  ContactMe = "Contact Me",
}

export enum CardTitle {
  Home = "",
  AboutMe = "Some info",
  Skills = "Check out my",
  Projects = "Take a look at my",
  ContactMe = "Please",
}

export default function Index() {
  const [cardContent, setCardContent] = useState<CardContent>(
    CardContent.Projects
  );
  const [cardTitle, setCardTitle] = useState<CardTitle>(CardTitle.Projects);

  // Handlers
  const handleCardContentChange = (
    cardContent: CardContent,
    cardTitle: CardTitle
  ) => {
    setCardContent(cardContent);
    setCardTitle(cardTitle);
  };

  // Helpers
  const getCardContent = () => {
    switch (cardContent) {
      case CardContent.Home:
        return <Home />;
      case CardContent.AboutMe:
        return <AboutMe />;
      case CardContent.Skills:
        return <Skills />;
      case CardContent.Projects:
        return <Projects />;
      case CardContent.ContactMe:
        return <ContactMe />;
      default:
        return <></>;
    }
  };

  const getCardContentJustification = () => {
    return CardContent.Projects === cardContent ? "none" : "center";
  };

  const isShadowBox = () => {
    return (
      CardContent.Home !== cardContent && CardContent.Projects !== cardContent
    );
  };

  const getFlexDir = () => {
    return CardContent.Home === cardContent ? "row" : "column";
  };

  const getBackgroundColor = () => {
    return CardContent.Home === cardContent ||
      CardContent.Projects === cardContent
      ? "transparent"
      : lightTheme.quinary.main;
  };

  return (
    <>
      <Navbar
        onClick={handleCardContentChange}
        cardContent={cardContent}
        backgroundColor={lightTheme.quinary.main}
      ></Navbar>
      <div className="inner-body">
        <CueTitle cardTitle={cardTitle} cardContent={cardContent}></CueTitle>
        <Card
          boxShadow={isShadowBox()}
          flexDir={getFlexDir()}
          justifyContent={getCardContentJustification()}
          backgroundColor={getBackgroundColor()}
        >
          {getCardContent()}
        </Card>
      </div>
    </>
  );
}
