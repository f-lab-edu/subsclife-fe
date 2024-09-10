import { DefaultTheme } from "styled-components";

const color = {
  white: "#F5F7F8",
  black: "#45474B",
  "yellow-1": "#F4CE14",
  "yellow-2": "#FFDC48",
  "yellow-3": "#FFE684",
  "yellow-4": "#FFECA5",
  "yellow-5": "#FFF3C3",
  "yellow-6": "#FFF9E0",
  "gray-1": "#161616",
  "gray-2": "#292929",
  "gray-3": "#484848",
  "gray-4": "#808080",
  "gray-5": "#A4A4A4",
  "gray-6": "#D7D7D7",
  "gray-7": "#F2F2F2",
  green: "#495E57",
  "green-1": "#5F756E",
  "green-2": "#768D85",
  "green-3": "#8EA59D",
  "green-4": "#A7BEB6",
  "green-5": "#C0D8D0",
  "green-6": "#DAF2EA",
  red: "#AC1B1B",
};

const theme: DefaultTheme = { color };

type ThemeColors = typeof color;

export { theme };
export type { ThemeColors };
