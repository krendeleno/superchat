import React, { useEffect, useCallback } from "react";
import styles from "./TagList.module.css";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ChatStore from "src/stores/main.store";
import { observer } from "mobx-react";

export const TagList= observer(()  => {
  useEffect(() => {
    ChatStore.fetchTags();
  }, []);

  const handleClick = useCallback((event) => {ChatStore.changeTags(event.target.value)}, [])

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      {ChatStore.tagArray.size && Array.from(ChatStore.tagArray.keys()).map(tag =>
        <Button color={ChatStore.selectedTags.has(tag) ? "secondary" : "primary"} key={tag} value={tag} onClick={handleClick}>{tag}</Button>)}
    </ButtonGroup>
  );
});
