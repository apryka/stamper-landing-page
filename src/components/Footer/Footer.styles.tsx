import styled from "styled-components";

const StyledFooter = styled.footer<{ background: string; color: string }>`
  padding: 28px 20px;

  background-color: ${({ background }) => background};
  color: ${({ color }) => color};

  p {
    margin: 0;

    font-family: "Nunito", sans-serif;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
  }
`;

export { StyledFooter };
