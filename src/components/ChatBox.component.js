import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import MessageList from "./MessageList.component";
import UserAvatar from "./UserAvatar.component";
import ChatInput from "./ChatInput.component";
import { useSelector } from "react-redux";

function ChatBox() {
	const selectedUser = useSelector((state) => state.chat.selected);

	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				justifyContent: "flex-start",
				flexDirection: "column",
			}}
		>
			<Box
				sx={{
					padding: "20px",
					paddingBottom: "25px",
					width: "100%",
					borderBottom: (theme) => theme.custom.border,
					display: "flex",
					justifyContent: "flex-start",
				}}
			>
				<UserAvatar
					name={selectedUser.name}
					sx={{ width: "30px", height: "30px" }}
				/>

				<Typography
					sx={{ marginLeft: "10px", fontWeight: "bold", fontSize: "20px" }}
				>
					{selectedUser.name}
				</Typography>
			</Box>

			<MessageList />

			<ChatInput />
		</Box>
	);
}

export default ChatBox;
