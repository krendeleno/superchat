import React, { useContext, useState } from "react";
import { observer } from "mobx-react";
import { AnimatePresence, motion } from "framer-motion";

import { themes } from "src/shared/constants";
import { ThemeColors } from "src/shared/types";
import { CrossSmall } from "src/assets/icons";

import styles from "src/shared/components/Tag/Tag.module.css";
import { colors, ThemeContext } from "src/shared/themes";

type TagProps = {
  tag: string;
  className?: string;
  isActive?: boolean;
  onClick?: (event: any) => void;
  shadow?: boolean;
  small?: boolean;
  color?: ThemeColors;
  deletable?: boolean;
};

export const Tag = observer(
  ({
    tag,
    className,
    shadow,
    small,
    isActive,
    color,
    deletable = false,
    ...rest
  }: TagProps) => {
    const { theme } = useContext(ThemeContext);
    const [showDelete, setShowDelete] = useState(false);
    const getStyles = () => {
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
    return (
      <motion.div
        {...rest}
        initial={small ? false : { opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.3 }}
        className={[
          styles["Tag"],
          className,
          isActive ? styles["Tag_active"] : "",
          shadow ? styles["Tag_shadow"] : "",
          small ? styles["Tag_small"] : "",
        ]
          .filter((x) => x)
          .join(" ")}
        style={getStyles()}
        onMouseEnter={() => setShowDelete(true)}
        onMouseLeave={() => setShowDelete(false)}
      >
        <AnimatePresence>
          {showDelete && deletable && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.3 }}
              className={styles["Tag_delete"]}
            >
              <CrossSmall />
            </motion.div>
          )}
        </AnimatePresence>
        <span className={styles["Tag_text"]}>{tag}</span>
      </motion.div>
    );
  }
);
