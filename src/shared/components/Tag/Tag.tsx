import React, { useState } from "react";
import { observer } from "mobx-react";
import { AnimatePresence, motion } from "framer-motion";

import { themes } from "src/shared/constants";
import { ThemeColors } from "src/shared/types";
import { CrossSmall } from "src/assets/icons";

import styles from "src/shared/components/Tag/Tag.module.css";

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
    const [showDelete, setShowDelete] = useState(false);

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
        style={color ? { backgroundColor: themes[color].secondary } : {}}
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
