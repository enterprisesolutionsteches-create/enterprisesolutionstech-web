import { styled } from "../../stitches.config";
import { ElementContainer } from "../Container/Container.styles";

export const Section = styled("section", {
  backgroundColor: "$white",
  "& .swiper-pagination": {
    bottom: "$9 !important",
    "& span": {
      backgroundColor: "$white",
      border: "1px solid $neutral800",
      height: "$3",
      opacity: 1,
      width: "$3",
      "&.swiper-pagination-bullet-active": { backgroundColor: "$neutral800" },
    },
  },
});

export const Container = styled(ElementContainer, {});

export const CarouselItem = styled("div", {
  minHeight: "442px",
  maxHeight: "442px",
  "&.tmp_v1": { minHeight: "368px !important" },
  "&.tmp_v2": { minHeight: "414px !important" },
  "&.tmp_v3": { minHeight: "245px !important" },
  "@bp2": {
    maxHeight: "inherit !important",
    minHeight: "inherit !important",
  },
  background: "$white",
  "&.fondo": {
    background: "#F7F7F9",
  },
  "@bp1": {
    "&.tmp_v1": { minHeight: "308px !important" },
    background: "$white !important",
  },
});

export const Image = styled("img", {
  display: "block",
  lineHeight: 0,
  height: "100%",
  objectFit: "cover",
  objectPosition: "center center",
  position: "absolute",
  width: "100%",
  "&.desktop": { display: "block" },
  "&.mobile-carousel": { display: "none" },
  "&.mobile": { display: "none" },
  "@bp2": {
    objectPosition: "center right",
    "&.desktop": { display: "none" },
    "&.desktop.show": { display: "block" },
    "&.mobile-carousel": { display: "block", objectPosition: "center center" },
    "&.mobile": { display: "block", objectPosition: "center center" },
  },
  "@bp1": {
    width: "100%",
  },
});

export const ImgSelloCalidad = styled("img", {
  display: "block",
  position: "absolute",
  right: "48px",
  bottom: "25px",
  width: "90px",
  height: "90px",
  "&.desktop": { display: "block" },
  "&.mobile": { display: "none", maxHeight: "416px" },
  "@bp2": {
    "&.desktop": { display: "none" },
    "&.desktop.show": { display: "block" },
    "&.mobile": { display: "block" },
    right: "20px",
    bottom: "195px",
    width: "60px",
    height: "60px",
  },
});

export const CarouselContent = styled("div", {
  inset: 0,
  position: "absolute",
});

export const Grid = styled("div", {
  alignItems: "center",
  display: "grid",
  gridTemplateAreas: `
    '. text image '
  `,
  gridTemplateColumns: "40% 40% auto",
  height: "100%",
  "&.home": {
    gridTemplateColumns: "10% 83% auto",
    px: "$2",
  },
  "&.services": {
    gridTemplateColumns: "9% 40% auto",
    px: "$2",
  },
  "@bp4": {
    gridTemplateColumns: "16% 60% auto",
    "&.services": {
      gridTemplateColumns: "9% 50% auto",
    },
  },
  "@bp2": {
    gridTemplateAreas: `
      'text'
    `,
    gridTemplateColumns: "1fr !important",
  },
});

export const ColumnText = styled("div", {
  gridArea: "text",
  zIndex: 1,
  fontWeight: 700,
  variants: {
    showButtonMobile: {
      true: {
        "@bp2": {
          "&.banner": {
            ".buttonContent": {
              display: "flex",
              paddingBottom: "$2",
            },
          },
        },
      },
      false: {
        "@bp2": {
          "&.banner": {
            ".buttonContent": {
              display: "none",
            },
          },
        },
      },
    },
  },
  "@bp2": {
    "&.banner": {
      position: "absolute",
      bottom: "24px",
      left: "0px",
      px: "$7",
      ".buttonContent": {
        display: "none",
      },
    },
  },
});

export const Title = styled("h1", {
  color: "$neutral900",
  lineHeight: "$125",
  fontFamily: "$AgrandirRegular",
  fontSize: "$40",
  fontWeight: "$regular",
  padding: 0,
  margin: 0,
  marginBottom: "$7",
  "&.fontWeightBold": {
    color: "black !important",
    fontWeight: "bold",
  },
  "@bp1": {
    fontSize: "$24",
  },
});

export const Description = styled("p", {
  color: "$neutral800",
  lineHeight: "$135",
  fontSize: "$def",
  margin: 0,
  paddingBottom: "$6",
  "@bp1": {
    "&.staff": { paddingBottom: "$2" },
    "&.banner": { display: "none" },
  },
});

export const ButtonContent = styled("div", {
  "&.separate": { paddingTop: "$def" },
  "@bp2": { textAlign: "center", paddingBottom: "$9" },
});

export const Button = styled("button", {
  backgroundColor: "$secondary600",
  border: 0,
  borderRadius: "$999",
  color: "$neutral100",
  cursor: "pointer",
  lineHeight: "$150",
  fontFamily: "$Montserrat",
  fontSize: "$16",
  fontWeight: "$bold",
  margin: 0,
  padding: "$3 $9",
  textTransform: "uppercase",
  "@bp1": { width: "100%" },
  "&:hover": {
    backgroundColor: "#3A2799 !important",
  },
});

export const CarouselControl = styled("div", {
  position: "absolute",
  inset: 0,
});

export const Controls = styled("div", {
  overflow: "hidden",
  position: "relative",
  height: "100%",
  "& .controlPrev, & .controlNext": {
    alignItems: "center",
    bottom: 0,
    display: "flex",
    position: "absolute",
    top: 0,
    zIndex: 1,
    "@bp2": {
      display: "none",
    },
  },
});

export const ControlPrev = styled("div", { left: 0, "@bp1": { left: 0 } });

export const ControlNext = styled("div", { right: 0, "@bp1": { right: 0 } });

export const ControlContent = styled("div", {
  alignItems: "center",
  backgroundColor: "$white",
  border: "2px solid $secondary600",
  borderRadius: "50%",
  cursor: "pointer",
  display: "flex",
  height: "$12",
  justifyContent: "center",
  width: "$12",
  "& svg": { color: "$secondary600" },
  "&:hover": {
    border: "2px solid #3A2799 !important",
    color: "#3A2799 !important",
  },
  "&:hover svg": {
    color: "#3A2799",
  },
});
