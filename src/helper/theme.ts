import * as React from "react";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    font_20_700: true;
    font_20_600: true;
    font_18_600: true;
    font_12_500: true;
    font_12_400: true;
    font_14_400: true;
    font_14_500: true;
    font_16_600: true;
    font_16_500: true;
    font_16_400: true;
    font_14_600: true;
  }
}
interface ExtendedTypographyOptions extends TypographyOptions {
  font_20_700: React.CSSProperties;
  font_20_600: React.CSSProperties;
  font_18_600: React.CSSProperties;
  font_12_500: React.CSSProperties;
  font_12_400: React.CSSProperties;
  font_14_400: React.CSSProperties;
  font_14_500: React.CSSProperties;
  font_16_600: React.CSSProperties;
  font_16_500: React.CSSProperties;
  font_16_400: React.CSSProperties;
  font_14_600: React.CSSProperties;
}

export const AsiaChemicalTheme = createTheme({
  typography: {
    fontFamily: ["Figtree", "sans-serif"].join(","),
    button: {
      textTransform: "none",
      ":disabled": {
        backgroundColor: "#E6EBF0 !important",
        color: "#99A6B2 !important",
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true
        }
      }
    },
    font_20_600: {
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      display: "block",
      margin: "8px 0",
    },
    font_18_600: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: "1.75rem",
      display: "block",
    },
    font_20_700: {
      fontWeight: 700,
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      display: "block",
      margin: "8px 0",
    },
    font_12_500: {
      fontWeight: 500,
      fontSize: "0.75rem",
      lineHeight: "1rem",
      display: "block",
      margin: "4px 0",
    },
    font_12_400: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: "1rem",
      display: "block",
      margin: "4px 0",
    },
    font_14_400: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      display: "block",
    },
    font_14_500: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: "1.313rem",
      display: "block",
    },
    font_16_600: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      display: "block",
    },
    font_16_500: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      display: "block",
    },
    font_16_400: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      display: "block",
    },
    font_14_600: {
      fontWeight: 600,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      display: "block",
    },
  } as ExtendedTypographyOptions,
  palette: {
    action: {
      disabled: "#ffffff",
      disabledBackground: "#C0C9D1",
    },
  },
} as ThemeOptions);

export const font_20_600_Modal = {
  fontWeight: 600,
  fontSize: "1.25rem",
  lineHeight: "1.75rem",
  display: "block",
  margin: "8px 0",
};
export const font_12_500_Modal = {
  fontWeight: 500,
  fontSize: "0.75rem",
  lineHeight: "1rem",
  margin: "4px 0",
};
export const font_12_400_Modal = {
  fontWeight: 400,
  fontSize: "0.75rem",
  lineHeight: "1rem",
  margin: "4px 0",
};
export const font_14_400_Modal = {
  fontWeight: 400,
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
};
export const font_14_500_Modal = {
  fontWeight: 500,
  fontSize: "0.875rem",
  lineHeight: "1.313rem",
};
export const font_16_600_Modal = {
  fontWeight: 600,
  fontSize: "1rem",
  lineHeight: "1.5rem",
};
export const font_16_500_Modal = {
  fontWeight: 500,
  fontSize: "1rem",
  lineHeight: "1.5rem",
  display: "block",
};
export const font_16_400_Modal = {
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: "1.5rem",
  display: "block",
};
export const font_14_600_Modal = {
  fontWeight: 600,
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  display: "block",
};

export const makeFallBackImageLink = `https://elasticbeanstalk-ap-south-1-812175807951.s3.ap-south-1.amazonaws.com/static-resources/notification-resources/notification_images/1681973183_img_deafult_motor_logos.png`;
export const lightgray = "#62778C";
export const borderLightShade = "#CCE3FA";
export const lightSkyBlue = "#F2F8FE";
export const neutral700 = "#3D4954";
export const neutral600 = "#4B5966";
export const neutral500 = "#697785";
export const neutral900 = "#1D242B";
export const neutral100 = "#E0E4E8";
export const neutral300 = "#CED6DE";
export const neutral400 = "#99A6B2";
export const neutral200 = "#E6EBF0";
export const neutral50 = "#F7F9FC";
export const neutral25 = "#FAFCFD";
export const red600 = "#D44A4A";
export const red500 = "#F25A55";
export const red100 = "#FFECEB";
export const red50 = "#FFF6F5";
export const primary500 = "#1576D6";
export const boxShad =
  "0px 0px 2px rgba(41, 71, 190, 0.06), 0px 3px 8px rgba(41, 71, 190, 0.1)";
export const boxShad2 = `0px 0px 1px rgba(20, 24, 28, 0.06), 0px 1px 2px rgba(20, 24, 28, 0.1)`;
export const boxshad_sm = `0px 0.6914893984794617px 1.3829787969589233px 0px rgba(16, 29, 40, 0.06), 0px 0.6914893984794617px 2.0744681358337402px 0px rgba(16, 29, 40, 0.10)`;
export const boxShad_Premium_Breakup = `0px 0px 2px rgba(20, 24, 28, 0.06), 0px 2px 4px rgba(20, 24, 28, 0.1)`;
export const buttonBoxShad = `0px -0.69px 2.07447px rgba(16, 29, 40, 0.1), 0px -0.69px 1.38298px rgba(16, 29, 40, 0.06)`;
export const Shimmer_Shadow = `0px 0.691489px 2.07447px rgba(16, 29, 40, 0.1), 0px 0.691489px 1.38298px rgba(16, 29, 40, 0.06)`;
export const neutral87 = "#050A19";
export const bgGrey = "#E5E5E5";
export const primary02_500 = "#00BD87";
export const primary02_50 = "#EBFFF8";
export const green500 = "#43BF54";
export const green100 = "#DFF1DA";
export const green50 = "#F7FCF6";
export const primary_25 = "#F9FCFE";
export const primary02_100 = "#CCF2E2";
export const primary02_25 = "#F9FDFB";
export const primary_100 = "#CCE3FA";
export const primary_200 = "#99C7F5";
export const primary600 = "#1576D6";
export const primary_50 = "#F0F7FF";
export const cyan800 = "#005675";
export const cyan700 = "#006B8F";
export const cyan100 = "#CDEEF6";
export const cyan200 = "#C5F3FD";
export const cyan500 = "#00C3EB";
export const cyan50 = "#F0FDFF";
export const yellow500 = "#FFCC00";
export const yellow600 = "#CC9900"
export const yellow200 = "#FFF4C7";
export const yellow50 = "#FFFBED";
export const background_Light_Secondary = "#F9FAFC";
