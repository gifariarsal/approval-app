import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      primary900: "#212529",
      primary800: "#343A40",
      primary700: "#495057",
      primary600: "#6C757D",
      primary500: "#ADB5BD",
      primary400: "#CED4DA",
      primary300: "#DEE2E6",
      primary200: "#E9ECEF",
      primary100: "#F8F9FA",
      primary50: "#FAFAFA",
      secondary900: "#ECC94B",
      secondary800: "#D69E2E",
      secondary700: "#B7791F",
    },
    base: "#F0F4F9",
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
});

export default theme;
