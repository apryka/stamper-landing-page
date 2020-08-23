import React, { FC } from "react";
import { StyledLink } from "./Logo.styles";
import Icon from "../../../static/icons/logo.inline.svg";

const Logo: FC = () => (
  <StyledLink to={"./"}>
    <Icon />
  </StyledLink>
);

export default Logo;
