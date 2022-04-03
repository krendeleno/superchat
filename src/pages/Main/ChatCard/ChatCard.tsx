import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "./ChatCard.module.css"
import {Chat, LastMessage} from "../../../types";


function ChatCard({title, lastMessages}: Chat) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {title}
                </Typography>
                {lastMessages && lastMessages.map((lastMessage) =>
                    <div className={styles['ChatCard-message']}>
                        <Typography variant="h5" component="div">
                            {lastMessage.sender}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {lastMessage.message}
                        </Typography>
                    </div>
                    )
                }
            </CardContent>
            <CardActions>
                <Button size="small">Открыть чат</Button>
            </CardActions>
        </Card>
    );
}

export default ChatCard;