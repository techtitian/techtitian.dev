import { ReactElement } from "react";
import Title from "./shared/Title";
import { lightTheme } from "@/themes";

export default function AboutMe(): ReactElement {
  return (
    <>
      <Title
        text={"ABOUT ME"}
        fontSize={"30px"}
        fontColor={lightTheme.primary.main}
        underlineColor={lightTheme.primary.main}
        hoverColor={lightTheme.primary.main}
      />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </>
  );
}
