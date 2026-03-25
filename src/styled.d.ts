import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    brand: string;
    primary: string;
    secondary: string;
    backgroundPrimary: string;
    backgroundSecondary: string;
    backgroundCanvas: string;
    backgroundInput: string;
    backgroundColorTransition: string;
    error: string;
    link: string;
    borderColor: string;
    borderWidth: string;
    borderRadius: string;
  }
}
