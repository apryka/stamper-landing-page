import React, { FC } from "react";
import { useTheme } from "../../styles";
import { StyledHeader, HeaderWrapper } from "./Header.styles";

type Props = {
  firstLine?: string;
  secondLine?: string;
};

const Header: FC<Props> = ({ firstLine, secondLine }) => {
  const { white } = useTheme().colors;
  return (
    <HeaderWrapper>
      {firstLine && (
        <StyledHeader variant="bold" color={white}>
          {firstLine}
        </StyledHeader>
      )}
      {secondLine && (
        <StyledHeader variant="normal" color={white}>
          {secondLine}
        </StyledHeader>
      )}
    </HeaderWrapper>
  );
};

export default Header;
