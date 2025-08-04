import { ComponentProps, FC } from "react";
import { Wrapper } from "./Button.styles";

type ButtonOwnProps = ComponentProps<typeof Wrapper>;
type ButtonProps = ButtonOwnProps & {};

export const Button: FC<ButtonProps> = (props) => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};
