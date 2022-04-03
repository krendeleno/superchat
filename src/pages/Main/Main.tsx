import React, {useState, useEffect} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import styles from "./Main.module.css"
import ChatStore from "../../stores/main.store";
import ChatList from "./ChatList/ChatList";
import {Chat} from "../../types";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {observer} from "mobx-react";
import {CustomDragLayer} from "./CustomDragLayer/CustomDragLayer";

const Main = observer(() => {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Superchat
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <DndProvider backend={HTML5Backend}>
                <ChatList />
                <CustomDragLayer />
            </DndProvider>
        </Box>
    );
});

export default Main;