import React, { FC } from "react";
import { useTheme } from "../../styles";
import { StyledFooter } from "./Footer.styles";

const Footer: FC = () => {
  const { lightBlue, white } = useTheme().colors;

  return (
    <StyledFooter background={lightBlue} color={white}>
      <p>Copyright © 2020 by Stamper.</p>
      <p>All rights reserved.</p>
    </StyledFooter>
  );
};

export default Footer;
