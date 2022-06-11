import { themes } from "src/shared/constants";
import { colors, ThemeContextType } from "src/shared/themes";
import { ThemeColors } from "src/shared/types";

export const getStyles = (
  theme: ThemeContextType["theme"],
  deletable?: boolean,
  isActive?: boolean,
  color?: ThemeColors
) => {
  if (color) {
    return {
      backgroundColor: themes[color].secondary,
      color: colors.black,
    };
  }

  if (deletable) {
    return {
      backgroundColor: colors.white,
      color: colors.black,
    };
  }

  if (isActive) {
    return {
      backgroundColor: theme.tagsActive,
      color: theme.tagsActiveText,
    };
  }

  return { backgroundColor: theme.tags, color: theme.tagsText };
};
