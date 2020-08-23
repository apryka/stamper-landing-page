import React, { FC } from "react";
import { useTheme } from "../../styles";
import { StyledLink, StyledGatsbyLink } from "./LinkButton.styles";

type Props = {
  children: React.ReactNode;
  href: string;
  target?: "_blank" | "_self";
  type?: "external" | "internal";
};

const LinkButton: FC<Props> = ({
  children,
  href,
  target = "_self",
  type = "external",
}) => {
  const { white, lightBlue } = useTheme().colors;

  return type === "internal" ? (
    <StyledGatsbyLink
      color={white}
      background={lightBlue}
      to={href}
      target={target}
      rel={target === "_blank" ? "noreferrer noopener" : ""}
    >
      {children}
    </StyledGatsbyLink>
  ) : (
    <StyledLink
      color={white}
      background={lightBlue}
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer noopener" : ""}
    >
      {children}
    </StyledLink>
  );
};

export default LinkButton;
