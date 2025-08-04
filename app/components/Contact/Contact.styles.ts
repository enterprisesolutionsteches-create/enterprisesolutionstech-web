import { styled } from "../../stitches.config";
import { ElementContainer } from "../Container/Container.styles";

export const Wrapper = styled("div", {
  px: "$20",
  "@bp2": { px: 0 },
});

export const TitleList = styled("div", {
  lineHeight: "$28",
  fontFamily: "$Montserrat",
  fontSize: "$20",
  paddingBottom: "$5",
  paddingTop: "$9",
});

export const DescriptionPlanDetalle = styled("div", {
  color: "$neutral800",
  margin: 0,
  letterSpacing: ".25px",
  lineHeight: "$135",
});

export const FormRow = styled("div", {
  columnGap: "$5",
  display: "grid",
  "&.gap-1": {
    gridTemplateColumns: "1fr",
  },
  "&.gap-2": {
    gridTemplateColumns: "repeat(2,1fr)",
  },
  "&.gap-3": {
    gridTemplateColumns: "repeat(3,1fr)",
  },
  "&.gap-4": {
    gridTemplateColumns: "repeat(4,1fr)",
  },
  "&.gap-xs": {
    alignItems: "center",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr) auto",
    columnGap: "var(--space-7)",
  },
  "@bp10": {
    gridTemplateColumns: "1fr !important",
    rowGap: "$3",
  },
  "&.padding-top-10": {
    paddingTop: "10px",
  },
});

export const ToolFormGroup = styled("div", {
  // marginBottom: "2rem",
  position: "relative",
  paddingTop: "0px",
  "@bp1": {
    "&.padding-top-mobile-20": {
      paddingTop: "20px",
    },
  },
});

export const ToolFormGroupLabel = styled("label", {
  color: "$neutral800",
  display: "block",
  fontWeight: "$regular",
  marginBottom: "0.5rem",
  fontSize: "$min",
  textAlign: "left",
});

export const CustomSelect = styled("div", {
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  border: "2px solid $neutral600",
  borderRadius: "$min4",
  color: "$neutral900",
  fontFamily: "$Lato",
  cursor: "pointer",
  width: "100%",
  background: "white",
  "> select": {
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    color: "inherit",
    flex: "1",
    zIndex: 1,
    padding: "$3",
    fontSize: "14px",
  },

  "&:after": {
    marginLeft: "10px",
    marginRight: "0",
    color: "#b1b1b1",
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    pointerEvents: "none",
  },
});

export const Select = styled("select", {
  fontSize: "$def",
  "@bp3": {
    "&.select-medicos": {
      width: "100% !important",
    },
  },
});

export const OptionSelect = styled("option", {
  padding: "8px 16px",
  margin: "0 8px",
  transition: "all 0.2s ease 0s",
  textAlign: "left",
  fontFamily: "$FocoTrialRegular",
  fontSize: "14px",
});

export const Description = styled("div", {
  color: "$undefined01",
  letterSpacing: ".25px",
  lineHeight: "$135",
  margin: 0,
  paddingBottom: "$4",
  variants: {
    size: {
      24: { fontSize: "$24", lineHeight: "$33" },
    },
  },
  "@bp2": {
    textAlign: "left",
  },
  "& span": {
    color: "$primary600",
    fontWeight: "$bold",
    fontFamily: "$Lato",
  },
});

export const ToolFormInputText = styled("input", {
  border: "2px solid $neutral600",
  borderRadius: "$min4",
  outline: "none",
  padding: "$3",
  width: "100%",
  fontSize: "$min",
  "-webkit-appearance": "textfield",
  "&::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: "0",
  },
  "&::-webkit-outer-spin-button ": {
    "-webkit-appearance": "none",
    margin: "0",
  },
  "&[type='date']": {
    color: "#787575",
    padding: "$3",
    fontSize: "13px",
  },
  "&:focus": {
    border: "2px solid $primary800",
  },
  "&[disabled]": {
    background: "#EBEEF1",
  },
  "&.input-medicos": {
    width: "100% !important",
  },
});

export const FormHelperText = styled("div", {
  color: "red",
  fontWeight: "$regular",
  marginTop: "8px",
  fontSize: "13px",
  textAlign: "left",
  marginBottom: "4px",
});

export const FormContent = styled("div", {
  display: "flex",
});

export const LabelCheckbox = styled("label", {
  alignItems: "flex-start",
  color: "$neutral800",
  columnGap: "$3",
  cursor: "pointer",
  display: "flex",
  fontSize: "$def",
  lineHeight: "$135",
  position: "relative",
  fontWeight: "bold",
  paddingRight: "8px",
});

export const InputCheckbox = styled("input", {
  height: 0,
  opacity: 0,
  position: "absolute",
  width: 0,
});

export const ElementCheckbox = styled("span", {
  color: "$primary600",
});

export const ButtonSuccess = styled("button", {
  backgroundColor: "$primary600",
  border: 0,
  borderRadius: "$999",
  color: "$white",
  cursor: "pointer",
  fontFamily: "$Montserrat",
  fontSize: "$16",
  fontWeight: "$bold",
  lineHeight: "$150",
  padding: "$3 $5",
  textTransform: "uppercase",
});

export const ImagePlan = styled("img", {
  "@bp1": {
    display: "none",
  },
});

export const ToolFormInputTextArea = styled("textarea", {
  border: "2px solid $neutral600",
  borderRadius: "$min4",
  outline: "none",
  padding: "15px 1rem",
  paddingRight: "40px",
  resize: "none",
  width: "100%",
  height: "120px",
});

export const ToolLabel = styled("span", {
  color: "$cyan500",
  fontWeight: "$regular",
});

export const FormAffiliate = styled("div", {
  textAlign: "center",
});

export const ContainerCheckbox = styled("div", {
  marginTop: "25px",
  display: "grid",
  gap: "20px",
  marginBottom: "25px",
});

export const TermsLabel = styled("label", {
  fontFamily: "$Lato",
  fontSize: "$def",
  fontWeight: "bold",
  textAlign: "left",
  variants: {
    green: {
      true: {
        color: "$primary600",
        cursor: "pointer",
        borderBottom: "1px solid",
      },
      false: {
        color: "$neutral500",
      },
    },
  },
});

export const ContactRoot = styled("div", {});

export const Section = styled("section", {
  position: "relative",
  textAlign: "center",
  backgroundColor: "$white",
  "@bp1": {
    backgroundColor: "#F7F7F9",
    padding: "50px 0px"
  },
});

export const Container = styled(ElementContainer, {
  px: "$162",
  py: "$12",
  textAlign: "left",
  "@bp3": { px: "$10" },
  "@bp2": {
    px: "$7 !important",
  },
  "@bp1": {
    py: "$9",
  },
});

export const Grid = styled("div", {
  columnGap: "$12",
  display: "grid",
  gridTemplateAreas: `
    'contact addresses'
  `,
  gridTemplateColumns: "auto 1.5fr",
  "@bp4": {
    gridTemplateAreas: `
      'contact'
      'addresses'
    `,
    gridTemplateColumns: "1fr",
    rowGap: "$13",
    "@bp1": { rowGap: "$9" },
  },
});

export const BlockContact = styled("div", {
  gridArea: "contact",
  paddingTop: "$9",
  "@bp1": {
    paddingTop: "0px",
    width: "90%",
  },
});

export const BlockPhone = styled("div", {
  paddingBottom: "$12",
});

export const Phone = styled("p", {
  color: "$neutral800",
  fontSize: "$def",
  lineHeight: "$130",
  fontFamily: "$Agrandir",
  margin: 0,
  padding: 0,
  "& a": { display: "inline-block" },
});

export const BlockAddresses = styled("div", {
  backgroundColor: "$neutral100",
  borderRadius: "$1",
  gridArea: "addresses",
  overflow: "hidden",
  padding: "$7 $12 $13 $12",
  minWidth: "475px",
  "@bp1": {
    minWidth: "auto !important",
    paddingLeft: "15px",
  },
});

export const Title = styled("h1", {
  color: "$neutral800",
  fontFamily: "$AgrandirRegular",
  fontSize: "$32",
  fontWeight: "$regular",
  lineHeight: "$125",
  margin: 0,
  paddingBottom: "$9",
  variants: {
    size: {
      24: {
        color: "$neutral900",
        fontSize: "$24",
        lineHeight: "$140",
        paddingBottom: "$5",
      },
    },
  },
});

export const BlockContent = styled("div", {});

export const SubTitle = styled("h2", {
  color: "$neutral800",
  fontFamily: "$AgrandirRegular",
  fontSize: "$24",
  fontWeight: "$normal",
  lineHeight: "$140",
  margin: 0,
  paddingBottom: "$8",
});

export const BlockContentItem = styled("div", {
  paddingBottom: "$8",
  "&:last-child": { padding: 0 },
});

export const ContentHospital = styled("div", {
  display: "flex",
  position: "relative",
  cursor: "pointer",
});

export const AvatarIcon = styled("img", {
  position: "absolute",
  right: "10px",
  top: "-2px",
  "&.show": {
    display: "block",
  },
  "&.hide": {
    display: "none",
  },
  "@bp1": {
    right: "-35px",
  },
});

export const ContentDescriptionSede = styled("div", {
  "&.show": {
    display: "block",
  },
  "&.hide": {
    display: "none",
  },
});

export const Hospital = styled("h3", {
  color: "#6A6C74",
  fontFamily: "$Montserrat",
  fontSize: "$16",
  fontWeight: "$semiBold",
  lineHeight: "$150",
  margin: 0,
  paddingBottom: "$3",
  textTransform: "uppercase",
});

export const Paragraph = styled("p", {
  color: "#404248",
  fontSize: "$def",
  lineHeight: "$135",
  margin: 0,
  padding: 0,
});

export const Form = styled("div", {
  display: "flex",
  flexDirection: "column",
  paddingTop: "40px",
  rowGap: "$7",
});

export const FormGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  columnGap: "$7",
});

export const FormLabelCheck = styled("label", {
  alignItems: "center",
  columnGap: "$2",
  cursor: "pointer",
  display: "grid",
  gridTemplateColumns: "auto 1fr",
});

export const FormLabel = styled("label", {
  color: "$neutral800",
  fontSize: "$min",
  lineHeight: "$140",
  paddingBottom: "$1",
});

export const FormLabelContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  color: "$neutral800",
  fontSize: "$def",
  fontWeight: "$bold",
  lineHeight: "$130",
  "& b": {
    color: "$primary600",
  },
});

export const FormLabelText = styled("span", {});
export const FormStrong = styled("b");

export const FormButton = styled("div", {
  textAlign: "left",
  "@bp1": {
    textAlign: "center",
  },
});
export const Button = styled("button", {
  backgroundColor: "$primary600",
  border: 0,
  borderRadius: "$999",
  color: "$white",
  cursor: "pointer",
  fontFamily: "$Montserrat",
  fontSize: "$16",
  fontWeight: "$bold",
  lineHeight: "$150",
  padding: "$3 $5",
  textTransform: "uppercase",
});
