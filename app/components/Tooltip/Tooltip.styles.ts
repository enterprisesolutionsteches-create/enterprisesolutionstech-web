import { styled } from "stitches.config";

export const TooltipContainer = styled("div", {
  position: "relative",
  display: "inline-block"
});

export const TooltipText = styled("span", {
  backgroundColor: "$neutral700",
  color: "$white",
  textAlign: "center",
  borderRadius: "6px",
  padding: "5px",
  position: "absolute",
  fontFamily: "$AgrandirRegular",
  zIndex: "1",
  whiteSpace: "nowrap",
  fontSize: "12px",
  variants: {
    direction: {
      right: {
        transform: "translateX(25px)",
        bottom: "-5px",
      },
      left: {
        transform: "translateX(-25px)",
        bottom: "-5px",
      },
      up: {
        transform: "translateX(-50%)",
        bottom: "125%",
        left: "50%",
      },
      down: {
        transform: "translateX(-50%)",
        top: "125%",
        left: "50%",
      },
    }
  }
});