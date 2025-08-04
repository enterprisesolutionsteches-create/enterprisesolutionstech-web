import { styled } from "../../stitches.config";
import { ElementContainer } from "../../components/Container/Container.styles";

export const ServicesRoot = styled("div", {});

export const Section = styled("section", {
  position: "relative",
  textAlign: "center",
});

export const Container = styled(ElementContainer, {
  px: "$23",
  py: "$19",
  textAlign: "left",
  "@bp5": { px: "$22" },
  "@bp4": { px: "$20" },
  "@bp3": { px: "$19" },
  "@bp2": {
    px: "$7 !important",
    py: "$9",
  },
});

export const Title = styled("h1", {
  color: "$primary800",
  fontFamily: "$AgrandirRegular",
  fontWeight: "$regular",
  fontSize: "$40",
  lineHeight: "$125",
  margin: 0,
  "@bp2": { fontSize: "$24", lineHeight: "$140" },
});

export const Description = styled("div", {
  color: "$neutral800",
  lineHeight: "$135",
  margin: 0,
  py: "$13",
  "@bp2": { py: "$9" },
  a: {
    textDecoration: "underline",
  },
});

export const List = styled("ul", {
  display: "grid",
  rowGap: "$7",
  margin: 0,
  padding: 0,
});

export const Item = styled("li", {
  backgroundColor: "$white",
  border: "1px solid $neutral400",
  borderRadius: "$12",
  boxShadow: "$1",
  color: "$neutral800",
  fontFamily: "$AgrandirRegular",
  fontWeight: "$regular",
  fontSize: "$20",
  lineHeight: "$140",
  listStyle: "none",
  width: "100%",
  "& a": {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    padding: "$7",
    "& svg": { color: "$primary600" },
  },
  transition: "box-shadow 0.3s ease",
  "&:hover": {
    border: "1px solid $success500",
    boxShadow: "0px 2px 23px 0px #45595F26",
  },
});
