export const defaultTheme = {
  grid: {
    container: "96rem",
  },
  colors: {
    mainBg: "#2F2E41",
    primary: "#009EDD",
    white: "#FFFFFF",
    green: "#039B00",
    grey: "#999999",
    greyLight: "#D9D9D9",
    greyDark: "#333333",
  },
  border: {
    radius: "0.4rem",
  },
  font: {
    family: "'Open Sans' ,'sans-serif'",
    light: 300,
    normal: 400,
    semiBold: 600,
    bold: 700,
    sizes: {
      xsmall: "1.2rem",
      small: "1.4rem",
      medium: "1.6rem",
      large: "1.8rem",
      xlarge: "2.0rem",
      xxlarge: "2.8rem",
      huge: "5.2rem",
    },
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem",
  },
} as const;
