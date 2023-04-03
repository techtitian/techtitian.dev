import Title from "./Title";
import { lightTheme } from "@/themes";
import { CardTitle, CardContent } from "@/pages";
import styled from "styled-components";
type Props = {
  cardTitle: CardTitle;
  cardContent: CardContent;
};

export default function CueTitle({ cardTitle, cardContent }: Props) {
  return (
    <CueTitleContainer key={Math.random()}>
      {cardTitle && (
        <div className="cue">
          <div className="line"></div>
          <Title
            text={cardTitle}
            fontSize={"12px"}
            fontColor={lightTheme.primary.main}
            underlineColor={lightTheme.primary.main}
            hoverColor={lightTheme.primary.main}
          />
        </div>
      )}
      <Title
        text={cardContent}
        fontSize={"30px"}
        fontColor={lightTheme.primary.main}
        underlineColor={lightTheme.primary.main}
        hoverColor={lightTheme.primary.main}
      />
    </CueTitleContainer>
  );
}

const CueTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: fadeIn 1.5s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  & .cue {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 15px;
  }

  & .line {
    border-top: solid 1px #4da167;
    width: 35px;
  }
`;
