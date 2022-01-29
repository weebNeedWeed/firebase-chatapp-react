import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

function ChatInput() {
	return (
		<Box
			sx={{
				width: "100%",
				flexGrow: "1",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<TextField sx={{ width: "90%" }} label="Aa" size="small" />

			<IconButton sx={{ color: "#00FF00" }}>
				<SendIcon />
			</IconButton>
		</Box>
	);
}

export default ChatInput;
