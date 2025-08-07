import { styled } from "../../stitches.config";
import { ElementContainer } from "../Container/Container.styles";

export const AboutRoot = styled("div", {});
export const Section = styled("section", {
  position: "relative",
  textAlign: "center",
  variants: {
    background: {
      undefined03: { backgroundColor: "$undefined03" },
    },
  },
});

export const ContainerCards = styled(ElementContainer, {
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  padding: "0px 20px",
  "@bp1": {
    display: "grid",
  },
});

export const Container = styled(ElementContainer, {
  py: "$10",
  "&.about": {
    paddingTop: "0px",
    paddingBottom: "120px",
  },
  "&.search": { py: "$11" },
  "@bp1": {
    px: "$7 !important",
    py: "$12",
  },
});

export const Grid = styled("div", {
  alignItems: "center",
  display: "grid",
  columnGap: "$6",

  gridTemplateColumns: "45% auto",
  px: "$0",
  textAlign: "left",
  "@bp3": {
    gridTemplateAreas: `
      'title'
      'slogan'
      'description'
    `,
    gridTemplateColumns: "1fr",
    rowGap: "$6",
    px: 0,
  },
});

export const Title = styled("h1", {
  color: "$neutral900",
  fontFamily: "$AgrandirRegular",
  fontSize: "$40",
  fontWeight: "$regular",
  gridArea: "title",
  lineHeight: "$50",
  margin: 0,
  paddingBottom: "$9",
  "@bp1": {
    fontSize: "$24",
    lineHeight: "$140",
  },
});

export const SubTitle = styled("strong", {
  color: "$black",
  fontFamily: "$AgrandirRegular",
  fontSize: "$32",
  lineHeight: "$125",
  margin: 0,
  paddingBottom: "$5",
  marginBottom: "10px",
  fontWeight: "600",
});

export const Slogan = styled("h3", {
  color: "$neutral800",
  fontFamily: "$Montserrat",
  fontSize: "$20",
  fontWeight: "$regular",
  gridArea: "slogan",
  lineHeight: "$28",
  margin: 0,
});

export const Description = styled("p", {
  color: "$neutral800",
  fontSize: "$def",
  gridArea: "description",
  lineHeight: "$24",
  margin: 0,
  marginBottom: 30,
});

export const GridWeHave = styled("div", {
  display: "flex",
  columnGap: "$5",
  justifyContent: "center",
  py: "$11",
  width: "100%",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "@bp5": {
    justifyContent: "flex-start",
    overflowX: "scroll",
    scrollSnapType: "x mandatory",
  },
});

export const GridCompanies = styled("div", {
  textAlign: "left",
  "@bp3": { px: 0 },
});

export const GridCompaniesTitle = styled("h1", {
  fontFamily: "$AgrandirRegular",
  fontWeight: "$regular",
  fontSize: "$40",
  lineHeight: "$125",
  margin: 0,
  paddingBottom: "$12",
  width: "55%",
  "& b": { color: "$secondary700", fontWeight: "$regular" },
  "@bp5": { width: "100%" },
});

export const GridList = styled("ul", {
  display: "grid",
  gap: "$9",
  gridTemplateColumns: "repeat(2, 1fr)",
  margin: 0,
  padding: 0,
  "@bp3": {
    gridTemplateColumns: "1fr",
  },
});

export const GridListItem = styled("li", {
  letterSpacing: ".25px",
  listStyle: "none",
  lineHeight: "$135",
  margin: 0,
  "& a": { my: "$6" },
});

export const GridCompaniesItemDesc = styled("p", {
  margin: 0,
  padding: 0,
  color: "$neutral800",
  fontFamily: "$Lato",
  lineHeight: "$130",
});

export const GridCompaniesItemMore = styled("span", {
  color: "$secondary600",
  fontFamily: "$Montserrat",
  fontWeight: "$semiBold",
  fontSize: "$16",
  lineHeight: "$150",
  textTransform: "uppercase",
  "&:hover": {
    color: "#3A2799",
  },
});

export const GridCompaniesEmphasis = styled("div", {
  backgroundColor: "$secondary300",
  border: "1px solid $secondary500",
  borderRadius: "$1",
  color: "$secondary700",
  fontFamily: "$AgrandirRegular",
  fontSize: "$20",
  lineHeight: "$140",
  marginTop: "$12",
  padding: "$9 $12",
  "& b": { fontFamily: "$Montserrat", fontWeight: "$medium" },
});

export const GridAgreement = styled("div", {
  px: "$18",
  textAlign: "left",
  "& h2": { width: "50%", paddingBottom: "$9" },
  "@bp3": {
    px: 0,
    "& h2": {
      width: "100%",
    },
  },
});

export const GridAliados = styled("div", {
  columnGap: "$7",
  display: "grid",
  gridTemplateAreas: `
    'title description'
    'brand brand'
  `,
  gridTemplateColumns: "50% auto",
  px: "$18",
  rowGap: "$12",
  "&.row-gap-about": {
    rowGap: "$6",
  },
  textAlign: "left",
  "@bp3": {
    px: 0,
    gridTemplateAreas: `
      'title'
      'description'
      'brand'
    `,
    gridTemplateColumns: "1fr",
    "& h2": {
      width: "100%",
    },
  },
});

export const AliadosTitle = styled("h2", {
  color: "$black",
  gridArea: "title",
  fontFamily: "$AgrandirRegular",
  fontSize: "$32",
  fontWeight: "$regular",
  lineHeight: "$125",
  margin: 0,
});

export const AliadosDescription = styled("div", {
  color: "$neutral800",
  gridArea: "description",
  fontSize: "$def",
  lineHeight: "$24",
  margin: 0,
});

export const Brand = styled("div", {
  alignItems: "center",
  columnGap: "$6",
  rowGap: "$7",
  display: "flex",
  gridArea: "brand",
  flexWrap: "wrap",
  justifyContent: "flex-start",
});

export const Image = styled("img");

export const AliadosMore = styled("span", {
  color: "#7B61FF",
  display: "block",
  fontWeight: "$bold",
  fontSize: "$def",
  lineHeight: "$135",
  marginTop: "$6",
  textTransform: "uppercase",
  "&:hover": {
    color: "#3A2799",
  },
});

export const SectionBlog = styled("section", {
  backgroundColor: "$undefined04",
  py: "$16",
  position: "relative",
  textAlign: "center",
});

export const ContainerBlog = styled(ElementContainer, {
  py: "$2",
  px: "$13",
  "@bp1": {
    px: "$7 !important",
  },
});

export const TitleBlog = styled("h1", {
  color: "$neutral900",
  fontFamily: "$AgrandirRegular",
  fontSize: "$40",
  fontWeight: "$regular",
  lineHeight: "$125",
  margin: 0,
  paddingBottom: "$6",
  variants: {
    size: {
      32: { fontSize: "$32", paddingBottom: "$2" },
    },
  },
  "@bp1": {
    fontSize: "35px",
  },
});

export const DescriptionBlog = styled("p", {
  color: "$undefined01",
  lineHeight: "$135",
  margin: 0,
  paddingBottom: "$4",
  variants: {
    size: {
      24: { fontSize: "$24", lineHeight: "$33" },
    },
  },
});

export const GridBlog = styled("div", {
  display: "flex",
  columnGap: "$7",
  justifyContent: "center",
  py: "$13",
  width: "100%",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "@bp5": {
    justifyContent: "flex-start",
    overflowX: "scroll",
    scrollSnapType: "x mandatory",
  },
});

export const ButtonBlog = styled("div", {
  backgroundColor: "$white",
  borderRadius: "$999",
  border: "2px solid $secondary600",
  color: "$secondary600",
  display: "inline-block",
  fontFamily: "$Montserrat",
  fontWeight: "$bold",
  fontSize: "$16",
  padding: "$3 $5",
  textTransform: "uppercase",
  variants: {
    color: {
      green: {
        border: "2px solid $primary600",
        color: "$primary600",
      },
    },
  },
});

export const BoxBlog = styled("div", {
  backgroundColor: "$white",
  border: "1px solid transparent",
  borderRadius: "$min",
  overflow: "hidden",
  textAlign: "left",
  maxWidth: "315px",
  minWidth: "315px",
  width: "100%",
  "@bp5": {
    display: "flex",
    flexDirection: "column",
    flex: "0 0 100%",
    maxWidth: "calc(calc(100% / 3) - 24px)",
    scrollSnapAlign: "start",
  },
  "@bp4": {
    maxWidth: "calc(calc(100% / 2) - 24px)",
  },
  "@bp2": {
    maxWidth: "100%",
  },
  "@bp1": {
    maxWidth: "295px",
    minWidth: "295px",
  },
  transition: "box-shadow 0.3s ease",
  "&:hover": {
    backgroundColor: "$white",
    border: "1px solid $success500",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
  },
});

export const HeaderBlog = styled("div", {
  position: "relative",
  overflow: "hidden",
});

export const ImageBlog = styled("img", { width: "100%" });

export const SpecialtyBlog = styled("span", {
  // backgroundColor: "$neutral100",
  borderRadius: "$min6",
  // color: "$neutral700",
  fontSize: "$12",
  left: "10px",
  lineHeight: "$150",
  position: "absolute",
  px: "$2",
  top: "10px",
  zIndex: 1,
});

export const BodyBlog = styled("div", {
  padding: "$5",
});

export const PostDateBlog = styled("span", {
  color: "$secondary700",
  lineHeight: "$135",
});

export const Title_boxBlog = styled("h2", {
  color: "$neutral800",
  fontFamily: "$Montserrat",
  fontWeight: "$bold",
  fontSize: "$20",
  lineHeight: "$140",
  margin: 0,
  py: "$2",
});

export const Description_boxBlog = styled("p", {
  color: "$neutral800",
  lineHeight: "$135",
  margin: 0,
  paddingBottom: "$2",
});

////boletin
export const SectionNewsletter = styled("section", {
  position: "relative",
  textAlign: "center",
});

export const ContainerNewsletter = styled(ElementContainer, {
  py: "$13",
  "@bp3": {
    backgroundColor: "$neutral400",
  },
  "@bp1": {
    px: "0 !important",
  },
});

export const GridNewsletter = styled("div", {
  display: "grid",
  gridTemplateAreas: `
    'portada register'
  `,
  gridTemplateColumns: "repeat(2, 1fr)",
  px: "$16",
  "@bp4": {
    gridTemplateColumns: "50%",
    px: "$7",
  },
  "@bp3": {
    gridTemplateAreas: `
      'portada'
      'register'
    `,
    gridTemplateColumns: "1fr",
    px: "$7",
  },
  "@bp2": { px: "0" },
});

export const ColumnImageNewsletter = styled("div", {
  borderRadius: "$min",
  gridArea: "portada",
  overflow: "hidden",
  "@bp1": { borderRadius: 0 },
});

export const ImageNewsletter = styled("img", {
  width: "100%",
  objectFit: "cover",
  height: "100%",
});

export const ColumnFormNewsletter = styled("div", {
  alignItems: "center",
  display: "flex",
  gridArea: "register",
  textAlign: "left",
  marginLeft: "$neg60",
  my: "$14",
  "@bp3": {
    margin: "0 auto",
    marginTop: "$neg60",
  },
  "@bp2": { px: "$7" },
});

export const BoxNewsletter = styled("div", {
  backgroundColor: "$white",
  borderRadius: "$min",
  boxShadow: "$1",
  padding: "$8",
});

export const TitleNewsletter = styled("h1", {
  color: "$neutral900",
  fontFamily: "$AgrandirRegular",
  fontSize: "$40",
  fontWeight: "$regular",
  lineHeight: "$125",
  margin: 0,
  paddingBottom: "$6",
  variants: {
    size: {
      32: { fontSize: "$32", paddingBottom: "$2" },
      24: { fontSize: "$24", paddingBottom: "$2" },
    },
  },
});

export const DescriptionNewsletter = styled("p", {
  color: "$neutral800",
  lineHeight: "$135",
  margin: 0,
  paddingBottom: "$4",
  fontFamily: "$Lato",
  variants: {
    size: {
      24: { fontSize: "$24", lineHeight: "$33" },
      18: { fontSize: "$18", lineHeight: "$24" },
    },
  },
});

export const FormBlockNewsletter = styled("form", {
  display: "flex",
  flexDirection: "row",
  gap: "$6",
  paddingTop: "$6",
  "@bp4": {
    flexDirection: "column",
  },
});

export const FormElementNewsletter = styled("input", {
  backgroundColor: "$white",
  borderRadius: "$min",
  border: "1px solid $neutral600",
  color: "black",
  lineHeight: "$135",
  fontSize: "18px",
  padding: "$3",
  width: "180px",
  "@bp4": {
    width: "100%",
  },
  "&:focus-visible, &:focus": {
    outline: "none",
  },
  fontFamily: "$Lato",
  "&.error": {
    border: "1px solid red",
  },
});

export const ButtonNewsletter = styled("button", {
  backgroundColor: "$primary600",
  borderRadius: "$999",
  border: 0,
  color: "$white",
  fontFamily: "$Montserrat",
  fontSize: "$16",
  fontWeight: "$bold",
  padding: "$3 $5",
  textTransform: "uppercase",
  cursor: "pointer",
});

export const BoxPrograma = styled("div", {
  backgroundColor: "$white",
  borderRadius: "$min",
  border: "1px solid $neutral400",
  overflow: "hidden",
  padding: "$5 $3",
  maxWidth: "220px",
  minWidth: "220px",
  width: "100%",
  cursor: "pointer",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  justifySelf: "center",
  "@bp5": {
    display: "flex",
    flexDirection: "column",
    flex: "0 0 100%",
    maxWidth: "calc(calc(100% / 3) - 16px)",
    scrollSnapAlign: "start",
  },
  "@bp4": {
    maxWidth: "calc(calc(100% / 2) - 16px)",
  },
  "@bp2": {
    maxWidth: "100%",
  },
  "@bp1": {
    maxWidth: "400px",
    minWidth: "240px",
  },
  transition: "box-shadow 0.3s ease",
  "&:hover": {
    backgroundColor: "$white",
    boxShadow: "0px 2px 23px 0px #45595F26",
  },
});

export const HeaderPrograma = styled("div", {
  position: "relative",
  overflow: "hidden",
});

export const ImagePrograma = styled("img");

export const BodyPrograma = styled("div", {
  py: "$3",
});

export const TitlePrograma = styled("h2", {
  color: "$neutral800",
  fontFamily: "$AgrandirRegular",
  fontWeight: "$regular",
  fontSize: "$20",
  lineHeight: "$140",
  margin: 0,
  paddingBottom: "$2",
});

export const DescriptionPrograma = styled("p", {
  color: "$neutral800",
  lineHeight: "$135",
  margin: 0,
  paddingBottom: "$6",
});

export const MorePrograma = styled("span", {
  color: "#4F9B3C",
  fontFamily: "$Montserrat",
  fontWeight: "$semiBold",
  fontSize: "$min",
  lineHeight: "$22",
});

export const Card = styled("div", {
  flex: 1,
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const GridPrograma = styled("div", {
  position: "relative",
  top: "20px",
  display: "grid",
  paddingBottom: 50,
  gap: "$5",
  gridTemplateColumns: "repeat(5, 1fr)",
  width: "100%",
  "@bp3": {
    gridTemplateColumns: "repeat(4, 1fr)",
    margin: "10px 20px",
  },
  "@media (max-width: 1024px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
    margin: "10px 20px",
  },
  "@media (max-width: 768px)": {
    gridTemplateColumns: "repeat(1, 1fr)",
    margin: "10px 60px",
    gap: "$3",
  },
  "@bp1": {
    margin: "10px",
  },
  variants: {
    itemPerRow: {
      0: { gridTemplateColumns: "repeat(1, 1fr)" },
      1: { gridTemplateColumns: "repeat(1, 1fr)" },
    },
  },
});
