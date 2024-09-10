import "styled-components";
import { ThemeColors } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    color: ThemeColors;
  }
}
