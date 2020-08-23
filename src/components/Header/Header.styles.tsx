import styled from "styled-components";

type HeaderProps = {
  variant: "normal" | "bold";
  color: string;
};

export const StyledHeader = styled.h2<HeaderProps>`
  margin: 0;
  padding: 0;

  font-family: "Poppins", sans-serif;
  font-weight: ${({ variant }) => (variant === "normal" ? "400" : "700")};
  font-size: 30px;
  line-height: 45px;
  text-transform: uppercase;

  color: ${({ color }) => color};
`;

export const HeaderWrapper = styled.div`
  margin-bottom: 20px;
`;
