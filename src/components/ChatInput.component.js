import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import PropTypes from "prop-types";
import { getRoomRefByUid } from "./../database/refs.database";
import { set, push } from "firebase/database";

function ChatInput(props) {
	const [messageContent, setMessageContent] = useState("");

	const { roomUid, userUid } = props;

	const handleChangeInput = (event) => {
		setMessageContent(event.target.value);
	};

	const handleSendMessage = () => {
		const roomRef = getRoomRefByUid(roomUid);

		set(push(roomRef), {
			content: messageContent,
			senderUid: userUid,
		});
	};

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
			<TextField
				sx={{ width: "90%" }}
				label="Aa"
				size="small"
				value={messageContent}
				onChange={handleChangeInput}
			/>

			<IconButton sx={{ color: "#00FF00" }} onClick={handleSendMessage}>
				<SendIcon />
			</IconButton>
		</Box>
	);
}

ChatInput.propTypes = {
	roomUid: PropTypes.string,
	userUid: PropTypes.string,
};

export default ChatInput;
