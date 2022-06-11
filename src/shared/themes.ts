import React from "react";

export const colors = {
  black: "#414141",
  white: "#FFFFFF",
  grey: "#A5A5A5",
};

export const themes = {
  light: {
    background: colors.white,
    header: colors.grey,
    tags: colors.white,
    tagsText: colors.black,
    tagsActive: colors.black,
    tagsActiveText: colors.white,
    button: colors.black,
    buttonText: colors.white,
    form: colors.white,
    toggler: colors.black,
    placeholder: colors.grey,
    border: colors.grey,
    text: colors.black,
    line: colors.grey,
    buttonAddTag: colors.grey,
    buttonAddTagText: colors.white,
    logo: colors.black,
    switchTrack: colors.white,
  },
  dark: {
    background: colors.grey,
    header: colors.black,
    tags: colors.black,
    tagsText: colors.white,
    tagsActive: colors.white,
    tagsActiveText: colors.black,
    button: colors.white,
    buttonText: colors.black,
    form: colors.black,
    toggler: colors.white,
    placeholder: colors.grey,
    border: colors.grey,
    text: colors.white,
    line: colors.white,
    buttonAddTag: colors.white,
    buttonAddTagText: colors.black,
    logo: colors.white,
    switchTrack: colors.grey,
  },
};
export type Theme = "light" | "dark";
export type ThemeContextType = {
  theme: typeof themes.light;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext({} as ThemeContextType);
