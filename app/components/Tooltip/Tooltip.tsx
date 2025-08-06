import { ComponentProps, FC, useState } from "react";
import { TooltipContainer, TooltipText } from "./Tooltip.styles";

export enum TooltipDirection {
  RIGHT = "right",
  LEFT = "left",
  UP = "up",
  DOWN = "down",
}

type TooltipOwn = ComponentProps<typeof TooltipContainer>;
type TooltipProps = TooltipOwn & {
  onClick?: () => void;
  text?: string;
  disabledTooltip?: boolean;
  direction?: TooltipDirection;
};

export const Tooltip: FC<TooltipProps> = ({
  text,
  children,
  onClick,
  disabledTooltip,
  direction = TooltipDirection.UP,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <TooltipContainer
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {!disabledTooltip && showTooltip && (
        <TooltipText direction={direction}>{text}</TooltipText>
      )}
    </TooltipContainer>
  );
};
