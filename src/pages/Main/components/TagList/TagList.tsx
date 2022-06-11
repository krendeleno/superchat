import React, { useEffect, useCallback } from "react";
import { observer } from "mobx-react";

import ChatStore from "src/stores/main.store";
import { Tag } from "src/shared/components/Tag";

import styles from "src/pages/Main/components/TagList/TagList.module.css";

export const TagList = observer(() => {
  useEffect(() => {
    ChatStore.fetchTags();
  }, []);

  const handleClick = useCallback((tag) => {
    ChatStore.changeTags(tag);
  }, []);

  return (
    <div className={styles["TagList"]}>
      {ChatStore.tagArray.size &&
        Array.from(ChatStore.tagArray.keys()).map((tag) => {
          return (
            <Tag
              isActive={ChatStore.selectedTags.has(tag)}
              tag={tag}
              key={tag}
              onClick={() => handleClick(tag)}
              shadow
            />
          );
        })}
    </div>
  );
});
