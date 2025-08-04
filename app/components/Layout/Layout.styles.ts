import { styled } from "../../stitches.config";

export const LayoutRoot = styled("div", {
  display: "grid",
  gridTemplateAreas: `
  'header'
  'slider'
  'main'
  'footer'
 `,
  gridTemplateRows: "auto auto 1fr auto",
  minHeight: "100vh",
  width: "100%",
});

export const MainRoot = styled("main", {
  backgroundColor: "$gray100",
  gridArea: "main",
  overflow: "hidden",
});
