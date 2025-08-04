import { styled } from "../../stitches.config";
import { ElementContainer } from "../Container/Container.styles";

export const Section = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  inset: 0,
  zIndex: 99,
  background: "$modalBg",
});

export const Container = styled(ElementContainer, {
  alignItems: "center",
  display: "flex",
  px: "11rem",
  justifyContent: "center",
  "@bp5": {
    px: "15rem",
  },
  "@bp4": {
    px: "1rem",
  },
});

export const Box = styled("div", {
  background: "$white",
  borderRadius: "8px",
  px: "24px",
  py: "8px",
  maxHeight: "502px",
  minWidth: "691px",
  "@bp1": {
    minWidth: "301px",
    minHeight: "521px",
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
  maxWidth: "643px",
  minHeight: "521px",
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
  height: "390px",
  width: "643px",
  textOverflow: "ellipsis",
  "@bp1": {
    width: "269px",
  },
  a: {
    display: "inline-block",
  },
  variants: {
    showMore: {
      true: {
        height: "422px",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          width: "8px",
          minHeight: "422px",
          // Ancho de la barra de desplazamiento
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "$undefined06", // Color del pulgar de la barra de desplazamiento
          borderRadius: "10px", // Bordes redondeados del pulgar
          border: "3px solid $gray100", // Bordes del pulgar
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#F5F5F5", // Color de la pista de la barra de desplazamiento
          borderRadius: "10px", // Bordes redondeados de la pista
        },
      },
    },
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
