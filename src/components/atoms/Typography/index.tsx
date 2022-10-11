import React from "react";
import { ReactFCWithChildren } from "../../../types/ReactFCWithChildren";
import { TypographyText } from "./Text";
import { TypographyTitle } from "./Title";

export type TypographyType = ReactFCWithChildren & {
  Text: typeof TypographyText;
  Title: typeof TypographyTitle;
};

const Typography: TypographyType = ({ children }) => {
  return <TypographyText>{children}</TypographyText>;
};

Typography.Text = TypographyText;
Typography.Title = TypographyTitle;

export { Typography };
