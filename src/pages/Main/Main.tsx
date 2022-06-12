import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { observer } from "mobx-react";
import { Helmet } from "react-helmet";

import { ThemeContext } from "src/shared/themes";

import { CustomDragLayer } from "src/pages/Main/components/CustomDragLayer/";
import { ChatList } from "src/pages/Main/components/ChatList/";
import { TagList } from "src/pages/Main/components/TagList/";
import { Header } from "src/pages/Main/components/Header";
import { AddChatButton } from "src/pages/Main/components/AddChatButton";

import styles from "src/pages/Main/Main.module.css";

export const Main = observer(() => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles["Main"]} style={{ background: theme.background }}>
      <Helmet>
        <title>24chat</title>
        <meta name="description" content="Приложение с чатами на 24 часа" />
      </Helmet>
      <Header />
      <TagList />
      <AddChatButton />
      <Box sx={{ flex: 1 }}>
        <DndProvider backend={HTML5Backend}>
          <ChatList />
          <CustomDragLayer />
        </DndProvider>
      </Box>
    </div>
  );
});
