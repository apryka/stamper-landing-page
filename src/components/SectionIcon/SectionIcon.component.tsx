import React, { FC } from "react";
import { useTheme } from "../../styles";
import { Wrapper, Header, HeaderWrapper } from "./SectionIcon.styles";

type Props = {
  children?: React.ReactNode;
  firstLine: string;
  secondLine: string;
};

const SectionIcon: FC<Props> = ({ firstLine, secondLine, children }) => {
  const { white, textBlue } = useTheme().colors;

  return (
    <Wrapper>
      {children}
      <HeaderWrapper>
        <Header color={textBlue}>{firstLine}</Header>
        <Header color={white}>{secondLine}</Header>
      </HeaderWrapper>
    </Wrapper>
  );
};

export default SectionIcon;
