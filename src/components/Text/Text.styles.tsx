import styled from "styled-components";

export const StyledText = styled.p<{ color }>`
  margin: 0 0 40px 0;
  padding: 0;

  color: ${({ color }) => color};
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  line-height: 22px;
`;
