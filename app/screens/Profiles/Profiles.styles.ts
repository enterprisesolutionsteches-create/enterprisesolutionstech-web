import { styled } from "../../stitches.config";

export const CVRoot = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
  padding: "40px 20px"
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
  borderColor: "$secondary300"
});

export const CVImage = styled("img", {
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "15px"
});

export const CVName = styled("h2", {
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: "5px"
});

export const CVRole = styled("h3", {
  fontSize: "1rem",
  color: "#555",
  marginBottom: "10px"
});

export const CVDescription = styled("p", {
  fontSize: "0.9rem",
  color: "#666",
  marginBottom: "15px"
});

export const TechList = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  justifyContent: "center",
  marginBottom: "15px"
});

export const TechItem = styled("span", {
  padding: "5px 10px",
  borderRadius: "20px",
  fontSize: "0.8rem",
  color: "#000"
});

export const CVButtons = styled("div", {
  display: "flex",
  gap: "10px"
});

export const CVButton = styled("a", {
  padding: "8px 16px",
  borderRadius: "6px",
  color: "#fff",
  fontWeight: "bold",
  textDecoration: "none",
  transition: "0.3s ease",
  background: "rgb(146, 100, 39)",
  "&:hover": { opacity: 0.85 }
});
