import React, { FC } from "react";
import { StyledText } from "./Text.styles";

type Props = {
  color: string;
  children: React.ReactNode;
};

const Text: FC<Props> = ({ color, children }) => (
  <StyledText color={color}>{children}</StyledText>
);

export default Text;
