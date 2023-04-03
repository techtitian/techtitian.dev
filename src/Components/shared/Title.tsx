import { ReactElement } from "react";
import styled from "styled-components";

type Props = {
  text: string;
  onClick?: () => void;
  fontSize?: string;
  underline?: boolean;
  fontColor: string;
  underlineColor: string;
  hoverColor: string;
  display?: "block" | "inline" | "inline-block";
};

export default function Title({
  text,
  onClick,
  fontColor,
  underlineColor,
  hoverColor,
  fontSize = "18px",
  underline = false,
  display = "inline-block",
}: Props): ReactElement {
  return (
    <Text
      onClick={onClick}
      fontSize={fontSize}
      fontColor={fontColor}
      underline={underline}
      underlineColor={underlineColor}
      hoverColor={hoverColor}
      display={display}
    >
      {text}
    </Text>
  );
}

const Text = styled.h1<{
  fontSize: string;
  fontColor: string;
  underline: boolean;
  underlineColor: string;
  hoverColor: string;
  display: string;
}>`
  font-size: ${(props) => props.fontSize};
  display: ${(props) => props.display};
  color: ${(props) => props.fontColor};
  font-weight: bold;
  transition: ease-in-out 0.3s;
  padding: 0;
  margin: 0;

  text-align: center;

  &::after {
    content: "";
    width: ${(props) => (props.underline ? "100%" : "0")};
    height: 2px;
    display: block;
    background: ${(props) => props.underlineColor};
    transition: ease-in-out 0.3s;
  }

  &:hover {
    cursor: pointer;
    color: ${(props) => props.hoverColor};
  }
`;
