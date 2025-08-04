import { styled } from "../../stitches.config";

export const ElementContainer = styled("div", {
  width: "100%",
  margin: "0 auto",
  height: "100%",
  padding: "0 $12",
  maxWidth: "1440px",
  "@bp1": {
    padding: "0 $7",
  },
});
