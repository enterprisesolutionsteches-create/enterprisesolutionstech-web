import { styled } from "../../stitches.config";

export const Wrapper = styled("button", {
  fontFamily:"$FocoTrialRegular",
  background: "rgb(146, 100, 39)",
  alignItems: "center",
  borderRadius: "24px",
  border: "none",
  color: "$white",
  columnGap: "0.5rem",
  cursor: "pointer",
  display: "inline-flex",
  lineHeight: "24px",
  flexDirection: "row",
  fontSize: "1rem",
  fontWeight: "$bold",
  padding: "12px 2.5rem",
  width: "auto",
  whiteSpace: "nowrap",
  "&.widthSize:hover": {
    width: "100%",
  },
  variants: {
    background: {
      white: {
        backgroundColor: "$white",
        color: "$primary600",
      },
      orange500: { backgroundColor: "$primary600" },
      magenta500: { backgroundColor: "$magenta500" },
      cyan400: { backgroundColor: "$cyan400" },
      cyan500: { backgroundColor: "$cyan500" },
      transparent: { backgroundColor: "$transparent" },
    },
    justify: {
      start: { justifyContent: "flex-start" },
      center: { justifyContent: "center" },
      end: { justifyContent: "flex-end" },
      between: { justifyContent: "space-between" },
      evenly: { justifyContent: "space-evenly" },
    },
    width: {
      100: { width: "100%" },
    },
    type: {
      circle32: {
        height: "32px",
        width: "32px",
        padding: 0,
      },
      circle36: {
        height: "36px",
        width: "36px",
        padding: 0,
      },
      circle40: {
        height: "40px",
        width: "40px",
        padding: 0,
      },
      circle48: {
        height: "48px",
        width: "48px",
        padding: 0,
      },
      square24: {
        borderRadius: "12px",
        height: "44px",
        width: "44px",
        padding: "10px",
      },
      square80: {
        borderRadius: "23px",
        height: "80px",
        width: "80px",
        padding: 0,
      },
    },
  },
});
