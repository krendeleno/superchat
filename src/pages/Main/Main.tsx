import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { ChatList } from "src/pages/Main/components/ChatList/";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { observer } from "mobx-react";
import { CustomDragLayer } from "src/pages/Main/components/CustomDragLayer/";

export const Main = observer(() => {
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Superchat
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
        <Box sx={{flex: 1}}>
            <DndProvider backend={HTML5Backend}>
                <ChatList />
                <CustomDragLayer />
            </DndProvider>
        </Box>

    </Box>
  );
});
