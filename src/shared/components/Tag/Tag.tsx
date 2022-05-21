import React from "react";

import styles from "./Tag.module.css";
import { observer } from "mobx-react";
import { themes } from "src/shared/constants";
import { ThemeColors } from "src/shared/types";

type TagProps = {
  tag: string,
  className?: string,
  isActive?: boolean,
  onClick?: (event: any) => void,
  shadow?: boolean;
  small?: boolean
  color?: ThemeColors;
}

export const Tag = observer(({ tag, className, shadow, small, isActive, color, ...rest }: TagProps) => {
  return (
      <div {...rest} className={[
        styles['Tag'],
        className,
        isActive ? styles['Tag_active'] : "",
        shadow ? styles['Tag_shadow'] : "",
        small ? styles['Tag_small'] : "",
      ].filter(x => x).join(' ')}
      style={color ? {backgroundColor: themes[color].secondary} : {}}
      >{tag}</div>
  );
});
