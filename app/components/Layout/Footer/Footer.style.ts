import { styled } from "../../../stitches.config";
import { ElementContainer } from "../../Container/Container.styles";

export const Block = styled("footer", {
  background: "$primary800",
  color: "$white",
  display: "grid",
  gridArea: "footer",
  padding: "0px 24px",
});

export const Container = styled(ElementContainer, {
  variants: {
    isMobile: {
      false: {
        padding: "0px",
        maxWidth: "1384px",
      },
    },
  },
});

export const Grid = styled("div", {
  display: "grid",
  gridTemplateAreas: `
    'footerTop'
    'footerBottom'
  `,
  gridTemplateColumns: "2fr auto",
  paddingTop: "$2",
  "@bp1": {
    gridTemplateColumns: "1fr",
  },
});

export const FooterTop = styled("div", {
  columnGap: "$9",
  display: "grid",
  gridTemplateAreas: `
    'logo col2 col3 col4 col5'
  `,
  gridTemplateColumns: "repeat(3,1fr)",
  py: "48px",
  "@bp5": {
    gridTemplateColumns: "repeat(3,1fr)",
  },
  "@bp4": {
    gridTemplateAreas: `
      'logo col2 col3'
      'logo col4 col5'
    `,
    gridTemplateColumns: "repeat(3,1fr)",
  },
  "@bp3": {
    gridTemplateAreas: `
      'logo col2'
      'col3 col4'
      'col5 col5'
    `,
    gridTemplateColumns: "repeat(2,1fr)",
  },
  "@bp1": {
    gridTemplateAreas: `
      'logo'
      'col2 '
      'col3 '
      'col4 '
      'col5'
    `,
    gridTemplateColumns: "1fr",
    paddingBottom: 0,
  },
});

export const Logo = styled("div", {
  gridArea: "logo",
  paddingBottom: "$7",
});

export const Column2 = styled("div", { gridArea: "col2" });
export const Column3 = styled("div", {
  display: "flex",
  gridArea: "col3",
  flexDirection: "column",
});
export const Column4 = styled("div", { gridArea: "col4" });
export const Column5 = styled("div", { gridArea: "col5" });

export const FooterBottom = styled("div", {
  borderTop: "1px solid $primary600",
  display: "flex",
  flexWrap: "wrap",
  gap: "$7",
  gridArea: "footerBottom",
  justifyContent: "space-between",
  py: "$9",
  flexDirection: "row",
  variants: {
    noMobile: {
      true: {
        flexDirection: "row-reverse",
      },
    },
  },
});

export const FooterBottomColumn = styled("div", {
  display: "flex",
  gap: "$7",
  "@bp1": {
    width: "100%",
    justifyContent: "space-between",
    flexWrap: "wrap",
    rowGap: "$2",
    gap: "0px",
  },
  variants: {
    alignItems: {
      center: {
        "@bp1": {
          justifyContent: "center",
          width: "100%",
        },
      },
    },
  },
});
export const FooterBottomRow = styled("div", {
  display: "flex",
  gap: "$9",
  "@bp1": {
    width: "100%",
    flexWrap: "wrap",
    rowGap: "$2",
    gap: "0px",
  },
  variants: {
    alignItems: {
      center: {
        "@bp1": {
          justifyContent: "center",
          width: "100%",
        },
      },
    },
  },
});

export const FBTitle = styled("a", {
  "@bp1": {
    color: "$primary100",
    fontSize: "$min",
    lineHeight: "$140",
    flex: "1 1 45%",
    textAlign: "center",
    marginBottom: "$4",
    "&.third-option": {
      flex: "1 1 100%",
    },
  },
  fontSize: "$min",
  fontFamily: "$Lato",
  lineHeight: "19.6px",
});

export const AdditionalOption = styled("span", {
  "@bp1": {
    fontSize: "$12",
    lineHeight: "18px",
  },
  variants: {
    isMobile: {
      true: {
        color: "$primary500",
      },
      false: {
        color: "$white",
      },
    },
    marginLeft: {
      4: {
        marginLeft: "$4",
      },
      2: {
        marginLeft: "$2",
      },
      1: {
        marginLeft: "$1",
      },
    },
  },

  fontSize: "$min",
  fontFamily: "$Lato",
  lineHeight: "19.6px",
});
export const Image = styled("img", {
  maxWidth: "350px"
});

export const WrapperApp = styled("span", {
  color: "$white",
  "&.secondary700": { color: "$secondary700" },
});

export const FooterText = styled("span", {
  color: "$primary100",
  fontFamily: "$Lato",
  fontSize: "$min",
  letterSpacing: "0.07px",
  lineHeight: "$19",
  width: "100%",
  "@bp1": {
    fontSize: "$12",
    textAlign: "start",
  },
});

export const CompanyInfo = styled("p", {
  fontSize: "0.85rem",
  color: "#fff",
  marginTop: "20px",
  lineHeight: "1.4",
  letterSpacing: "0.5px",
  marginLeft: "auto",
  marginRight: "auto",
  "@bp1": {
    textAlign: "start",
    maxWidth: "100%",
  },
});

export const ContactInfo = styled("p", {
  color: "#fff",
  fontSize: "0.85rem",
  lineHeight: "1.4",
  marginTop: "10px",
  textAlign: "left",
});

export const LinkLogo = styled("a", {
  background: "white",
  borderRadius: "4px",
  padding: 10
});
