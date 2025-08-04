import { styled } from "../../stitches.config";

export const Container = styled("div", {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  background: "white",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});
export const Content = styled("div", {
  color: "$primary800",
});
