export interface IColor {
  light: string;
  main: string;
  dark: string;
}

export interface ITheme {
  primary: IColor;
  secondary: IColor;
  tertiary: IColor;
  quaternary: IColor;
  quinary: IColor;
}

// Color Palette: https://coolors.co/4d5057-4e6e5d-4da167-3bc14a-cfcfcf
export const lightTheme: ITheme = {
  primary: {
    light: "#737782",
    main: "#4D5057",
    dark: "#3A3C41",
  },
  secondary: {
    light: "#709984",
    main: "#4E6E5D",
    dark: "#445F51",
  },
  tertiary: {
    light: "#83C396",
    main: "#4DA167",
    dark: "#285335",
  },
  quaternary: {
    light: "#92DD9B",
    main: "#3BC14A",
    dark: "#226D2B",
  },
  quinary: {
    light: "#FFFFFF",
    main: "#CFCFCF",
    dark: "#292929",
  },
};
