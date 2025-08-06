import { ElementContainer } from "../../components/Container/Container.styles";
import { ROOT } from "../../config";
import { styled } from "../../stitches.config";

export const ServicestRoot = styled("div", {});
export const Section = styled("section", {
  position: "relative",
  textAlign: "center",
  "&.bgProgram": {
    backgroundImage: `url(${ROOT}/assets/vector/1.png)`,
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
  },
  variants: {
    background: {
      undefined04: { backgroundColor: "$undefined04" },
    },
  },
});
export const GridContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "20px",
  "@bp2": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@bp1": {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
});
export const GridItem = styled("div", {
  flex: "1 1 calc(50% - 20px)",
  boxSizing: "border-box",
  background: "#f4f4f4",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  textAlign: "center",
  "@media (max-width: 768px)": {
    flex: "1 1 calc(100% - 20px)",
  },
  "@media (max-width: 480px)": {
    flex: "1 1 calc(100% - 20px)",
  },
});
export const CarouselContainer = styled(ElementContainer, {
  "&.nav": {
    paddingBottom: "$15",
    px: "$17",
  },
  "&.app": {
    px: "$164",
  },
  "&.program": {
    paddingTop: "$7",
    paddingBottom: "$10",
    px: "$17",
  },
  "&.services": {
    py: "$16",
    "@bp1": { py: "$9" },
  },
  "&.cerca": {
    padding: "$17",
    "@bp3": { px: "$7" },
    "@bp1": { py: "$9" },
  },
  "@bp1": {
    px: "0px !important",
    "&.nav": {
      px: "0 !important",
      paddingBottom: "$7",
    },
  },
});
export const ContentGeneral = styled("div", {
  "@bp1": {
    paddingLeft: "$7",
    paddingRight: "$7",
  },
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
});
export const Image = styled("img", {
  width: "100%",
  "&.zoom": {
    objectFit: "cover",
    height: "100%",
  },
  "&.float": {
    inset: 0,
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    "@bp2": {
      position: "relative",
    },
  },
  "&.appGallery": {
    marginTop: "-2px",
    "@bp1": {
      marginTop: "0px",
    },
  },
});
export const Title = styled("span", {
  display: "grid",
  color: "$neutral900",
  fontFamily: "$AgrandirRegular",
  fontSize: "25px",
  fontWeight: 600,
  marginBottom: 10,
  marginTop: 20,
  "@bp1": {
    fontSize: "32px",
  },
});
export const Description = styled("span", {
  display: "grid",
  color: "$neutral900",
  fontFamily: "$AgrandirRegular",
  fontWeight: 400,
  fontSize: "18px",
  marginBottom: 10,
});
