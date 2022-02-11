import React from "react";
import Box from "@mui/material/Box";
import Message from "./Message.component";

function MessageList() {
	return (
		<Box
			sx={{
				flexBasis: "80%",
				padding: "25px",
				overflowY: "scroll",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Message></Message>
			<Message onLeftSide></Message>
			<Message onLeftSide></Message>
			<Message></Message>
			<Message onLeftSide></Message>
		</Box>
	);
}

export default MessageList;
