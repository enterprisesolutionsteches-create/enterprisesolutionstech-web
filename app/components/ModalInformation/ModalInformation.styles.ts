import { styled } from "../../stitches.config";

export const Section = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  inset: 0,
  zIndex: 99,
  background: "$modalBg",
  padding: "20px",
  "@bp1": {
    padding: "0px",
  },
});

export const Container = styled("div", {
  width: "100%",
  margin: "0 auto",
  height: "100%",
  padding: "0px",
  maxWidth: "1440px",
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
});

export const Box = styled("div", {
  background: "$white",
  borderRadius: "8px",
  px: "24px",
  py: "8px",
  height: "100%",
  width: "100%",
  "@bp1": {
    borderRadius: "0px",
  },
});

export const Header = styled("div", {
  background: "$white",
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
});

export const HeaderClose = styled("div", {
  borderRadius: "1rem",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  width: "24px",
  alignSelf: "baseline",
  color: "$primary600",
});

export const Body = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  py: "0.5rem",
  width: "100%",
  height: "calc(100% - 50px)",
  "@bp1": {
    minHeight: "502px",
  },
});

export const Title = styled("div", {
  color: "$blue500",
  fontSize: "$16",
  fontFamily: "$Agrandir",
  fontWeight: "$bold",
  lineHeight: "2rem",
  paddingBottom: "16px",
  width: "100%",
});

export const Description = styled("div", {
  textAlign: "start",
  justifyContent: "initial",
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingRight: 15,
  a: {
    display: "inline-block",
  },
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "8px",
    minHeight: "422px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "$undefined06",
    borderRadius: "10px",
    border: "3px solid $gray100",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#F5F5F5",
    borderRadius: "10px",
  },
});

export const SeeMoreText = styled("span", {
  color: "$primary600",
  cursor: "pointer",
  fontSize: "$16",
  fontFamily: "$Agrandir",
  marginTop: "$4",
  "@bp1": {
    marginTop: "$4",
  },
  textAlign: "left",
});

export const Image = styled("img", {
  width: "100%",
  display: "flex",
  height: "100%",
  justifyContent: "center",
});
