import AboutMe from "@/Components/AboutMe";
import ContactMe from "@/Components/ContactMe";
import Home from "@/Components/Home";
import Navbar from "@/Components/Navbar";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import Card from "@/Components/shared/Card";
import { useState } from "react";

export enum PageContent {
  Home = 0,
  AboutMe = 1,
  Skills = 2,
  Projects = 3,
  ContactMe = 4,
}

export default function Index() {
  const [pageContent, setPageContent] = useState<PageContent>(PageContent.Home);

  // Handlers
  const handlePageContentChange = (pageContent: PageContent) => {
    setPageContent(pageContent);
  };

  // Helpers
  const getPageContent = () => {
    switch (pageContent) {
      case PageContent.Home:
        return <Home />;
      case PageContent.AboutMe:
        return <AboutMe />;
      case PageContent.Skills:
        return <Skills />;
      case PageContent.Projects:
        return <Projects />;
      case PageContent.ContactMe:
        return <ContactMe />;
      default:
        return <></>;
    }
  };

  const getPageContentJustification = () => {
    if (PageContent.Projects === pageContent) {
      return "center";
    } else {
      return "center";
    }
  };

  return (
    <>
      <Navbar
        onClick={handlePageContentChange}
        pageContent={pageContent}
      ></Navbar>
      <div className="inner-body">
        {
          <Card
            boxShadow={
              PageContent.Home !== pageContent &&
              PageContent.Projects !== pageContent
            }
            flexDir={PageContent.Home === pageContent ? "row" : "column"}
            // justifyContent={getPageContentJustification()}
          >
            {getPageContent()}
          </Card>
        }
      </div>
    </>
  );
}
