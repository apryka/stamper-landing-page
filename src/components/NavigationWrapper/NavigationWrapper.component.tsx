import React, { FC } from "react";
import { NavContainer } from "./NavigationWrapper.styles";

const NavigationWrapper: FC = ({ children }) => (
  <NavContainer>{children}</NavContainer>
);

export default NavigationWrapper;
