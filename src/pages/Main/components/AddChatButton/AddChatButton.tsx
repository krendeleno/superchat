import React, { useState } from "react";
import { observer } from "mobx-react";

import { Plus } from "src/assets/icons";
import { FormCreateChat } from "src/pages/Main/components/FormCreateChat";

import styles from "./AddChatButton.module.css";

export const AddChatButton = observer(()  => {
  const [isOpen, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true);
  }

  return (
    <>
      <FormCreateChat isOpen={isOpen} setOpen={setOpen}/>
      <div className={styles['AddChatButton']} onClick={handleClick}>
        <Plus />
        <span className={styles['AddChatButton-Text']}>создать чат</span>
      </div>
    </>
  );
});
