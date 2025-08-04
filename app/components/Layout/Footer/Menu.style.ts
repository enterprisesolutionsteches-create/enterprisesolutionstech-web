import { styled } from "../../../stitches.config";

export const Nav = styled("div", {});
export const Content = styled("div", {
  paddingBottom: "$7",
  marginLeft: "$13",
  "&.apps": { padding: 0 },
  "@bp1": {
    borderBottom: "1px solid $primary600",
    paddingBottom: 0,
    marginBottom: "$3",
    "&.apps": { borderBottom: "none" },
  },
  "@bp3": {
    marginLeft: "$0",
  },
});

export const Title = styled("h5", {
  alignItems: "center",
  color: "$primary100",
  display: "flex",
  letterSpacing: ".25px",
  lineHeight: "$130",
  fontSize: "$def",
  fontWeight: "$bold",
  margin: 0,
  paddingBottom: "$5",
  position: "relative",
  "&.small": { lineHeight: "$140", fontSize: "$min", padding: 0 },
  "&.normal": { padding: 0 },
  "& svg": { display: "none" },
  "@bp1": {
    "&.normal": { paddingBottom: "$5" },
    "& svg": {
      display: "block",
      position: "absolute",
      right: 0,
    },
  },
});

export const NavList = styled("ul", {
  margin: 0,
  padding: 0,
  "@bp1": {
    display: "none",
    "&.active": {
      display: "block",
      paddingBottom: "$7",
      "& ul": {
        display: "block",
      },
    },
  },
});

export const NavItem = styled("li", {
  listStyle: "none",
  color: "$primary100",
  lineHeight: "140%",
  fontSize: "$min",
  paddingBottom: "$2",
  "&:last-child": { padding: 0 },
  variants: {
    submenu: {
      true: {
        paddingBottom: "$7",
      },
    },
  },
});

export const NavItemTitle = styled("div", {
  fontWeight: "$bold",
  paddingBottom: "$2",
});

export const Networks = styled("div", {
  alignItems: "center",
  display: "flex",
  columnGap: "$def",
  paddingBottom: "$7",
});

export const Apps = styled("div", {
  display: "flex",
  flexDirection: "column",
  rowGap: "$1",
  "& a": { display: "block" },
  "@bp1": {
    paddingBottom: "$4",
  },
});
