import React, { FC } from "react";
import { StyledContainer } from "./Container.styles";

const Container: FC = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
