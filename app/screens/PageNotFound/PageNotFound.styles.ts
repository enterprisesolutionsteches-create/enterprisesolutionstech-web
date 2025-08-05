import { styled } from "../../stitches.config";

export const HomeRoot = styled("div", {});
export const Section = styled("section", {
  position: "relative",
  textAlign: "center",
  "&.bgProgram": {
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
  },
  variants: {
    background: {
      undefined04: { backgroundColor: "$undefined04" },
    },
  },
  margin: "40px 0px",
});
export const Title = styled("h1", {
  color: "$neutral900",
  fontFamily: "$AgrandirRegular",
  fontSize: "60px",
  fontWeight: "600",
  lineHeight: "$125",
  margin: 0,
  paddingBottom: "$6",
  variants: {
    size: {
      32: { fontSize: "$32", paddingBottom: "$2" },
    },
  },
  "@bp2": {
    fontSize: "40px",
  },
});