import { ElementContainer } from "../../components/Container/Container.styles";
import { styled } from "../../stitches.config";

export const HomeRoot = styled("div", {});
export const Section = styled("section", {
  position: "relative",
  textAlign: "center",
  "&.bgProgram": {
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
  },
  variants: {
    background: {
      undefined04: { backgroundColor: "$undefined04" },
    },
  },
  margin: "40px 0px",
});

export const SectionDoctorOptions = styled("section", {
  position: "relative",
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
  "@bp1": {
    display: "block",
    flexDirection: "column",
  },
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});
export const Container = styled(ElementContainer, {
  "&.nav": {
    paddingBottom: 20,
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
    alignSelf: "center",
  },
  "&.cerca": {
    padding: "$17",
    "@bp3": { px: "$7" },
    "@bp1": { py: "$9" },
  },
  "@bp1": {
    px: "$7 !important",
    "&.nav": {
      px: "0 !important",
      paddingBottom: "$7",
    },
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

export const Title = styled("h1", {
  color: "$neutral900",
  fontFamily: "$AgrandirRegular",
  fontSize: "60px",
  fontWeight: "600",
  lineHeight: "$125",
  margin: 0,
  paddingBottom: "$6",
  variants: {
    size: {
      32: { fontSize: "$32", paddingBottom: "$2" },
    },
  },
  "@bp2": {
    fontSize: "40px",
  },
});

export const Description = styled("p", {
  color: "$undefined01",
  letterSpacing: ".25px",
  lineHeight: "$135",
  margin: 0,
  paddingBottom: "$4",
  variants: {
    size: {
      24: { fontSize: "$24", lineHeight: "$33" },
    },
    maxWidth: {
      800: { maxWidth: "800px", alignSelf: "center" },
    },
  },
  "@bp2": {
    textAlign: "left",
  },
});

export const GridProgram = styled("div", {
  display: "flex",
  columnGap: "$5",
  justifyContent: "center",
  paddingTop: "$13",
  width: "100%",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "@bp4": {
    justifyContent: "flex-start",
    overflowX: "scroll",
    scrollSnapType: "x mandatory",
  },
  "@bp3": {
    justifyContent: "flex-start",
    overflowX: "scroll",
    scrollSnapType: "x mandatory",
  },
  "@bp1": {
    paddingTop: 0,
    marginLeft: "$7",
    paddingRight: "$12",
  },
});

export const ImageDoctor = styled("img", {
  // width: "100%",
  // height: "100%",
  objectFit: "cover",
  position: "absolute",
  "@bp2": {
    position: "relative",
    objectFit: "none",
  },
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

export const BlockService = styled("div", {
  position: "relative",
  maxHeight: "759px",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const GridService = styled("div", {
  alignItems: "center",
  display: "grid",
  gridTemplateAreas: `
    '. service .'
  `,
  gridTemplateColumns: "2.5fr 2.5fr 1fr",
  height: "100%",
  py: "$17",
  "@bp5": {
    gridTemplateColumns: "40% auto 15%",
  },
  "@bp4": {
    gridTemplateColumns: "35% auto 8%",
  },
  "@bp3": {
    gridTemplateColumns: "20% auto 8%",
  },
  "@bp2": {
    gridTemplateAreas: `
      'service'
    `,
    gridTemplateColumns: "1fr",
    py: 0,
  },
});

export const ContentService = styled("div", {
  gridArea: "service",
});

export const GridServiceNetwork = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  paddingTop: "$12",
  paddingBottom: "$14",
  "@bp1": {
    gridTemplateColumns: "repeat(2, 2fr)",
    gridTemplateRows: "1fr",
    paddingTop: "$7",
    paddingBottom: "$7",
  },
});

export const ContentIcon = styled("div", {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  rowGap: "$7",
  "@bp1": {
    marginBottom: "$7",
  },
});

export const Icon = styled("div", {
  borderRadius: "50%",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "55px",
  height: "55px",
  "& img": { width: "auto" },
  variants: {
    color: {
      error: { backgroundColor: "$error100" },
      warning: { backgroundColor: "$warning100" },
    },
  },
});

export const ContentIconText = styled("div", {
  color: "$neutral800",
  lineHeight: "$135",
  width: "$16",
});

export const Button = styled("div", {
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

export const Wrapper = styled("div", {
  px: "$20",
  "@bp2": { px: 0 },
});

export const GridRed = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "$5",
  py: "$8",
  "@bp5": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@bp2": {
    gridTemplateColumns: "1fr",
    px: "$4 !important",
  },
});

export const GridApp = styled("div", {
  display: "grid",
  gridTemplateAreas: `
    'image text'
  `,
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "$10",
  paddingTop: "$17",
  textAlign: "left",
  "@bp3": {
    gridTemplateAreas: `
      'image'
      'text'
    `,
    gridTemplateColumns: "1fr",
    paddingBottom: "$8",
  },
});

export const AppImage = styled("div", {
  gridArea: "image",
  lineHeight: 0,
});

export const AppText = styled("div", {
  gridArea: "text",
});

export const TitleList = styled("div", {
  lineHeight: "$28",
  fontFamily: "$Agrandir",
  fontSize: "$20",
  paddingBottom: "$5",
  paddingTop: "$9",
});

export const AppList = styled("div", {
  display: "flex",
  columnGap: "$6",
  "& img": {
    width: "auto",
  },
  "@bp1": {
    "& img": {
      width: "100%",
    },
    columnGap: "12px",
  },
});

export const BoxAcction = styled("div", {
  alignItems: "center",
  backgroundColor: "$secondary300",
  borderRadius: "$1",
  boxShadow: "$3",
  display: "flex",
  justifyContent: "space-between",
  marginTop: "$neg5",

  "@bp7": {
    px: "$7",
  },

  py: "$5",
  position: "relative",
  zIndex: 1,
  "@bp1": {
    flexDirection: "column",
    boxShadow: "none",
    borderRadius: "0",
    paddingBottom: "$9",
    paddingLeft: "$7",
  },
});

export const TitleAcction = styled("span", {
  color: "$white",
  fontFamily: "$Agrandir",
  fontSize: "$24",
  fontWeight: "600",
  width: "40%",
  minWidth: "320px",
  "@bp2": {
    width: "100%",
  },
  "@bp1": {
    fontFamily: "$AgrandirBold",
    fontSize: "$def",
    textAlign: "left",
    paddingLeft: "0",
  },
});

export const ListAcction = styled("ul", {
  display: "flex",
  gap: "$4",
  margin: 0,
  overflow: "scroll",
  padding: 0,
  whiteSpace: "nowrap",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "@bp2": {
    width: "100%",
  },
  "@bp1": {
    paddingRight: "$7",
  },
});

export const ItemAcction = styled("li", {
  border: "2px solid $secondary600",
  borderRadius: "$999",
  color: "$secondary600",
  cursor: "pointer",
  fontFamily: "$Montserrat",
  fontSize: "$min",
  fontWeight: "$bold",
  lineHeight: "$150",
  listStyle: "none",
  padding: "$2 $3",
  textTransform: "uppercase",
  "&:hover": {
    border: "2px solid #3A2799 !important",
    color: "#3A2799 !important",
  },
});

////plan

export const BoxPlan = styled("div", {
  backgroundColor: "$white",
  border: "1px solid $neutral400",
  borderRadius: "$1",
  cursor: "pointer",
  padding: "$2",
  maxWidth: "285px",
  minWidth: "285px",
  width: "100%",
  overflow: "hidden",
  "&:hover h2": {
    fontFamily: "$AgrandirRegular",
    fontWeight: "$bold",
    fontSize: "23px",
  },
  "@bp4": {
    display: "flex",
    flexDirection: "column",
    flex: "0 0 50%",
    maxWidth: "calc(50% - 16px)",
    scrollSnapAlign: "start",
  },
  "@bp2": {
    display: "flex",
    flexDirection: "column",
    flex: "0 0 100%",
    maxWidth: "100%",
    scrollSnapAlign: "start",
  },
  "@bp1": {
    maxWidth: "285px",
    minWidth: "285px",
  },
  transition: "box-shadow 0.3s ease",
  "&:hover": {
    boxShadow: "0px 8px 60px 0px #455F5D26",
  },
});

export const HeaderPlan = styled("div", {
  borderRadius: "$1",
  cursor: "pointer",
  overflow: "hidden",
});

export const ImagePlan = styled("img", {
  width: "100%",
});

export const BodyPlan = styled("div", {
  padding: "$5 $3",
  textAlign: "left",
  whiteSpace: "normal",
  minHeight: "120px",
});

export const TitlePlan = styled("h2", {
  color: "$neutral800",
  fontFamily: "$AgrandirRegular",
  fontWeight: "$regular",
  fontSize: "$24",
  lineHeight: "$140",
  margin: 0,
  paddingBottom: "$op",
});

export const DescriptionPlan = styled("p", {
  color: "$neutral800",
  margin: 0,
  letterSpacing: ".25px",
  lineHeight: "$135",
});

export const Box_siempreCerca = styled("div", {
  alignItems: "flex-start",
  backgroundColor: "$undefined05",
  border: "1px solid $neutral400",
  borderRadius: "$min",
  boxShadow: "$2",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  minHeight: "285px",
  padding: "$7",
  position: "relative",
  "& a.more": {
    position: "absolute",
    bottom: "$7",
  },
  "&:hover": {
    border: "1px solid $success500",
    boxShadow: "0px 8px 60px 0px #455F5D26",
  },
});

export const Title_siempreCerca = styled("h2", {
  margin: 0,
  fontFamily: "$AgrandirRegular",
  fontSize: "$24",
  fontWeight: "$regular",
  lineHeight: "$33",
  py: "$2",
});

export const Description_siempreCerca = styled("p", {
  margin: 0,
  lineHeight: "$24",
  paddingBottom: "$10",
});

export const More_siempreCerca = styled("span", {
  color: "$primary600",
  fontFamily: "$Montserrat",
  fontWeight: "$semiBold",
  fontSize: "$min",
  lineHeight: "$22",
  position: "absolute",
  bottom: "35px",
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
    px: "0px !important",
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
  "@bp1": {
    px: "$7",
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
  "@bp1": {
    marginLeft: "$7",
    paddingRight: "$12",
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
    border: "1px solid $success500",
    boxShadow: "0px 2px 23px 0px #45595F26",
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

export const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#EEE",
  maxWidth: "400px",
  borderRadius: "$min",
  color: "black",
  margin: "0 auto",
  gap: "$6",
  paddingTop: "$6",
  "@bp4": {
    flexDirection: "column",
  },
});

export const FormElement = styled("input", {
  backgroundColor: "$white",
  borderRadius: "$min",
  border: "1px solid $neutral600",
  color: "black",
  lineHeight: "$135",
  margin: "0 auto",
  fontSize: "18px",
  padding: "$3",
  width: "320px",
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

export const FormElementArea = styled("textarea", {
  backgroundColor: "$white",
  borderRadius: "$min",
  border: "1px solid $neutral600",
  color: "black",
  lineHeight: "$135",
  margin: "0 auto",
  fontSize: "18px",
  padding: "$3",
  width: "320px",
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

export const FormButtonNext = styled("div", {
  display: "block",
  "@bp1": {
    display: "none",
  },
});

export const FormButtonNextMobile = styled("div", {
  display: "none",
  "@bp1": {
    display: "block",
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

export const LegalContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  marginTop: "$7",
  px: "$2 !important",
});

export const LabelCheckbox = styled("label", {
  color: "$neutral800",
  cursor: "pointer",
  display: "flex",

  fontWeight: "bold",
  paddingTop: "2px",
  paddingLeft: "$1",
});

export const InputCheckbox = styled("input", {
  height: 0,
  opacity: 0,
  width: 0,
});

export const ElementCheckbox = styled("span", {
  color: "$primary600",
});

export const LegalText = styled("span", {
  marginLeft: "$2",
  fontFamily: "$Lato",
  fontWeight: "bold",
  fontSize: "$18",
  lineHeight: "$24",
});

export const LegalTextColor = styled("span", {
  color: "$primary600",
  cursor: "pointer",
});

export const ContainerButtonAndLegal = styled("div", {
  variants: {
    isMobile: {
      true: {
        display: "flex",
        flexDirection: "column-reverse",
      },
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
export const SectionBanner = styled("section", {
  position: "relative",
  textAlign: "center",
  "&.bgProgram": {
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