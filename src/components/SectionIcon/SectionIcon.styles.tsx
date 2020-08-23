import styled from "styled-components";

type HeaderProps = {
  color: string;
};

export const Header = styled.h3<HeaderProps>`
  margin: 0;
  padding: 0;

  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;

  color: ${({ color }) => color};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & + & {
    margin-top: 74px;
  }
`;

export const HeaderWrapper = styled.div`
  margin-top: 34px;
  text-align: center;
`;
