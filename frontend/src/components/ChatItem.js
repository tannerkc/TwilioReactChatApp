import React from "react";
import { ListItem } from "@material-ui/core";

function ChatItem(props) {
  
    const message = props.message;
    const email = props.email;
    const isOwnMessage = message.author === email;

    console.log(props.email)

    return (
      <ListItem style={styles.listItem(isOwnMessage)}>
        <div style={styles.author}>{message.author}</div>
        <div style={styles.container(isOwnMessage)}>
          {message.body}
          <div>
            {new Date(message.dateCreated.toISOString()).toLocaleString()}
          </div>
        </div>
      </ListItem>
    );
  }


const styles = {
  listItem: (isOwnMessage) => ({
    flexDirection: "column",
    alignItems: isOwnMessage ? "flex-end" : "flex-start",
  }),
  container: (isOwnMessage) => ({
    maxWidth: "75%",
    borderRadius: 12,
    padding: 16,
    color: "white",
    fontSize: 12,
    backgroundColor: isOwnMessage ? "#F36E65" : "#9ea1a8",
  }),
  author: { fontSize: 10, color: "gray" },
  timestamp: { fontSize: 8, color: "white", textAlign: "right", paddingTop: 4 },
};

export default ChatItem;