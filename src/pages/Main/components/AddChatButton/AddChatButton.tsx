import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react";

import { Plus } from "src/assets/icons";
import { FormCreateChat } from "src/pages/Main/components/FormCreateChat";

import styles from "./AddChatButton.module.css";
import { ThemeContext } from "src/shared/themes";

export const AddChatButton = observer(() => {
  const { theme } = useContext(ThemeContext);

  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  useEffect(() => {
    const closeModal = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", closeModal);
    return () => window.removeEventListener("keydown", closeModal);
  }, []);

  return (
    <>
      <FormCreateChat isOpen={isOpen} setOpen={setOpen} />
      <div
        className={styles["AddChatButton"]}
        onClick={handleClick}
        style={{ backgroundColor: theme.button }}
      >
        <Plus color={theme.buttonText} />
        <span
          className={styles["AddChatButton-Text"]}
          style={{ color: theme.buttonText }}
        >
          создать чат
        </span>
      </div>
    </>
  );
});
