import { styled } from "../../stitches.config";

export const CVRoot = styled("div", {
  display: "flex",
  justifyContent: "center",
  padding: "40px 20px",
});

export const CVCard = styled("div", {
  background: "#fff",
  border: "3px solid",
  borderRadius: "12px",
  padding: "20px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderColor: "$secondary300",
  maxWidth: "600px",
  width: "100%",
});

export const CVImage = styled("img", {
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "15px",
});

export const CVName = styled("h2", {
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: "10px",
});

export const ContactLinks = styled("div", {
  display: "flex",
  gap: "15px",
  marginBottom: "10px",
  alignItems: "center",
});

export const SocialIcon = styled("a", {
  color: "$secondary700",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "$primary800",
  },
});

export const CVRole = styled("h3", {
  fontSize: "1rem",
  color: "#555",
  marginBottom: "10px",
});

export const CVDescription = styled("p", {
  fontSize: "0.9rem",
  color: "#666",
  marginBottom: "15px",
});

export const TechList = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  justifyContent: "center",
  marginBottom: "15px",
});

export const TechItem = styled("span", {
  display: "flex",
  alignItems: "center",
  gap: "5px",
  padding: "5px 10px",
  borderRadius: "20px",
  fontSize: "0.8rem",
  color: "#000",
  background: "$gray200",
});

export const CVButtons = styled("div", {
  display: "flex",
  gap: "10px",
  marginTop: "40px",
});

export const CVButton = styled("a", {
  padding: "8px 16px",
  borderRadius: "6px",
  color: "#fff",
  fontWeight: "bold",
  textDecoration: "none",
  transition: "0.3s ease",
  background: "rgb(146, 100, 39)",
  "&:hover": { opacity: 0.85 },
});

// ESTILOS PARA LOS EXPANSION PANELS
export const SectionTitle = styled("h4", {
  fontSize: "1.1rem",
  fontWeight: "bold",
  marginTop: "20px",
  marginBottom: "10px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  "& svg": {
    transition: "transform 0.3s ease",
    "&.active": {
      transform: "rotate(180deg)",
    },
  },
});

export const ExpansionPanel = styled("div", {
  width: "100%",
  maxHeight: "0",
  overflow: "hidden",
  transition: "max-height 0.3s ease",
  "&.active": {
    maxHeight: "500px",
  },
});

export const ExperienceItem = styled("div", {
  padding: "10px",
  borderBottom: "1px solid #eee",
  textAlign: "left",
});

export const ExperienceLogo = styled("img", {
  width: "40px",
  height: "40px",
  objectFit: "contain",
  marginRight: "10px",
});

export const FlexWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
});

export const PortfolioLink = styled("a", {
  display: "block",
  padding: "10px",
  textAlign: "left",
  textDecoration: "none",
  color: "#333",
  borderBottom: "1px solid #eee",
  "&:hover": {
    background: "#f9f9f9",
  },
});
