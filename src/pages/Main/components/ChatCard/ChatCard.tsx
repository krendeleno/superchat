import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./ChatCard.module.css";
import { LastMessage } from "src/types";
import ChatStore from "src/stores/main.store";

export function ChatCard({ id }: { id: number | string }) {
  const { title, lastMessages } = ChatStore.chatArray[id];

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography color="text.secondary" gutterBottom variant="h5">
          {title}
        </Typography>
        {lastMessages &&
          lastMessages.map((lastMessage: LastMessage) => (
            <div
              className={styles["ChatCard-message"]}
              key={lastMessage.message}
            >
              <Typography component="div">{lastMessage.sender}</Typography>
              <Typography component="div">{lastMessage.message}</Typography>
            </div>
          ))}
      </CardContent>
      <CardActions>
        <Button size="small">Открыть чат</Button>
      </CardActions>
    </Card>
  );
}
