import { ReactElement } from "react";
import styled from "styled-components";

type Props = {
  id: string;
  label: string;
  backgroundColor: string;
  textColor: string;
  onHoverBackgroundColor: string;
  onClick: () => void;
};

export default function Button({
  id,
  label,
  backgroundColor,
  textColor,
  onHoverBackgroundColor,
  onClick,
}: Props): ReactElement {
  return (
    <CButton
      id={id}
      onClick={onClick}
      backgroundColor={backgroundColor}
      textColor={textColor}
      onHoverBackgroundColor={onHoverBackgroundColor}
    >
      {label}
    </CButton>
  );
}

const CButton = styled.button<{
  backgroundColor: string;
  textColor: string;
  onHoverBackgroundColor: string;
}>`
  padding: 12px;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};
  border: none;
  transition: ease-in-out 0.3s;
  color: ${(props) => props.textColor};
  font-weight: bold;
  font-size: 1.25rem;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.onHoverBackgroundColor};
  }
`;
