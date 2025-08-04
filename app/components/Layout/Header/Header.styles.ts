import { styled } from "../../../stitches.config";
import { ElementContainer } from "../../Container/Container.styles";

export const Block = styled("header", {
  display: "grid",
  gridArea: "header",
  filter: "drop-shadow(0px 4px 16px rgba(71, 69, 95, 0.06))",
  position: "relative",
  zIndex: 2,
  "@bp2": {
    inset: 0,
    "& nav": { display: "none" },
    "&.fixed": {
      position: "fixed",
      "& nav": { display: "flex" },
    },
  },
});

export const Container = styled(ElementContainer, {
  "@bp3": { px: 0 },
});

export const BlockContact = styled("div", {
  backgroundColor: "$secondary300",
  py: "$op",
  "@bp2": { display: "none" },
});

export const Contact = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "$3 $13",
  justifyContent: "space-between",
  padding: "0px 24px",
  "& a": {
    // alignItems: "flex-end",
    display: "flex",
    minWidth: "max-content",
  },
});

export const ContactText = styled("a", {
  color: "$secondary700",
  fontSize: "$min",
  lineHeight: "$140",
  cursor: "pointer"
});

export const Networks = styled("div", {
  alignItems: "center",
  display: "flex",
  columnGap: "$8",
});

export const BlockHeader = styled("div", {
  backgroundColor: "$neutral100",
  borderBottom: "1px solid $neutral500",
  overflow: "hidden",
  py: "$9",
  "@bp3": {
    py: 0,
  },
});

export const HeaderContent = styled("div", {
  alignItems: "center",
  columnGap: "$13",
  display: "flex",
  "@bp3": {
    display: "flex",
    height: "100%",
    flexDirection: "column",
  },
});

export const HeaderBar = styled("div", {
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  "@bp3": {
    backgroundColor: "$white",
    width: "100%",
    py: "$5",
    px: "$7",
  },
});

export const Logo = styled("div", {});

export const IconMenu = styled("div", {
  cursor: "pointer",
  display: "none",
  "@bp3": { display: "block" },
});

export const NavContent = styled("nav", {
  alignItems: "center",
  display: "grid",
  gridTemplateAreas: `
    'nav quote'
  `,
  justifyContent: "space-between",
  rowGap: "$def",
  width: "100%",
  "@bp3": {
    backgroundColor: "$white",
    gridTemplateAreas: `
      'nav'
      'quote'
    `,
    //display: "none",
    display: "flex",
    height: "auto",
    flexDirection: "column",
    justifyContent: "flex-start",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

export const NavPrimary = styled("ul", {
  columnGap: "$9",
  display: "flex",
  gridArea: "nav",
  flexWrap: "wrap",
  margin: 0,
  padding: 0,
  rowGap: "$def",
  "@bp3": {
    flexDirection: "column",
    width: "100%",
    borderTop: "1px solid $neutral400",
    borderBottom: "1px solid $neutral400",
    rowGap: 0,
  },
  "@bp7": {
    "&.active": {
      marginTop: "10px",
    },
  },
});

export const NavPrimaryItem = styled("li", {
  color: "$primary",
  fontFamily: "$Montserrat",
  fontWeight: "$semiBold",
  fontSize: "$min",
  lineHeight: "$22",
  listStyle: "none",
  position: "relative",
  "& svg": { display: "none" },
  "& a:hover, & a.active": { fontWeight: "$bold", color: "$secundary" },
  "& a.active": {
    color: "$secundary",
    "&:after": {
      borderRadius: "50%",
      bottom: "$neg8",
      content: "",
      backgroundColor: "$secundary",
      height: "$op",
      left: 0,
      margin: "0 auto",
      position: "absolute",
      right: 0,
      width: "$op",
    },
  },
  "@bp3": {
    fontSize: "$16",
    py: "$6",
    px: "$7",
    borderBottom: "1px solid $neutral400",
    "&:last-child": { border: 0 },
    "& a": {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      "& svg": { display: "block", color: "$primary600" },
      "&:after": {
        display: "none",
      },
    },
  },
  "&.selected": {
    fontWeight: "$bold !important",
    color: "#36AD55 !important",
  },
});

export const Selected = styled("div", {
  display: "none",
  "@bp7": {
    "&.active": {
      display: "block !important",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "40px",
      marginTop: "-12px",
    },
  },
});

export const Quote = styled("div", {
  columnGap: "$5",
  display: "flex",
  gridArea: "quote",
  width: "100%",
  "@bp3": {
    px: "$7",
  },
  "@bp1": { justifyContent: "space-between" },
});

export const ImageLogo = styled("img", {
  height: "60px",
});
export const Image = styled("img");

export const QuoteButton = styled("button", {
  backgroundColor: "$primary600",
  border: 0,
  borderRadius: "$999",
  color: "$white",
  cursor: "pointer",
  fontFamily: "$Montserrat",
  fontWeight: "$bold",
  fontSize: "$min",
  lineHeight: "$150",
  padding: "$2 $4",
  textTransform: "uppercase",
  "&:hover": {
    backgroundColor: "$primary800",
  },
  variants: {
    background: {
      white: {
        backgroundColor: "$white",
        border: "2px solid $primary600",
        color: "$primary600",
      },
    },
  },
  "@bp3": {
    fontSize: "$16",
    // padding: "$3 $5",
  },
  "&.portal": {
    "&:hover": {
      backgroundColor: "$white !important",
      border: "2px solid $primary800 !important",
      color: "$primary800 !important",
    },
  },
});

export const QuoteButtonSPAN = styled("span", {
  "@bp1": { display: "none" },
});

export const FooterContact = styled("div", {
  backgroundColor: "$neutral100",
  display: "none",
  padding: "$5 $7",
  width: "100%",
  "@bp3": { display: "block" },
});

export const FooterContactList = styled("ul", {
  margin: 0,
  padding: 0,
  position: "relative",
});

export const FooterContactItem = styled("li", {
  alignItems: "center",
  display: "flex",
  listStyle: "none",
  margin: 0,
  paddingBottom: "$2",
  "&:nth-child(3n)": {
    padding: 0,
  },
  "&:last-child": {
    bottom: 0,
    padding: 0,
    position: "absolute",
    right: 0,
  },
  "& a": {
    alignItems: "center",
    color: "$neutral800",
    display: "flex",
    columnGap: "$2",
    fontSize: "$min",
    "& span": { color: "$neutral800" },
    "& svg": { height: "20px", width: "20px" },
  },
});

export const networkStyles = {
  link: {
    display: "inline-block",
    transition: "transform 0.3s ease, filter 0.3s ease",
  },
  hover: {
    transform: "scale(1.2)",
    filter: "brightness(1.3)",
  },
};

export const ContainerPhone = styled("div", {
  display: "flex",
  gap: 15,
  justifyContent: "center",
  alignItems: "center",
});
