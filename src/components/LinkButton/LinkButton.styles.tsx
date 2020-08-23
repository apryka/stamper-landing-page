import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

type Props = {
  background: string;
  color: string;
};

const StyledGatsbyLink = styled(GatsbyLink)<Props>`
  display: inline-flex;
  text-decoration: none;

  padding: 12px 20px;

  justify-content: center;
  align-items: center;

  color: ${({ color }) => color};
  background: ${({ background }) => background};

  font-family: "Nunito", sans-serif;
  font-size: 16px;
  line-height: 22px;

  border-radius: 24px;
`;

const StyledLink = styled.a<Props>`
  display: inline-flex;
  text-decoration: none;

  padding: 12px 20px;

  justify-content: center;
  align-items: center;

  color: ${({ color }) => color};
  background: ${({ background }) => background};

  font-family: "Nunito", sans-serif;
  font-size: 16px;
  line-height: 22px;

  border-radius: 24px;
`;

export { StyledLink, StyledGatsbyLink };
