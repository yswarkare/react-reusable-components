import darkColors from "./darkColors";
import defaultTheme from "./defaultTheme";

const darkTheme = (theme) => {
  return {
    ...defaultTheme(theme),
    backgroundColor: `${darkColors.surface_800}`,
    color: `${darkColors.primary_800}`,
  }
};

export default darkTheme; 