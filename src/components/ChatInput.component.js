import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import PropTypes from "prop-types";
import { getRoomRefByUid } from "./../database/refs.database";
import { set, push } from "firebase/database";
import Emoji from "./Emoji.component";
import EMOJIS from "../emojiData";

function ChatInput(props) {
	const [messageContent, setMessageContent] = useState("");
	const [displayIconBox, setDisplayIconBox] = useState(false);

	const { roomUid, userUid } = props;

	const handleChangeInput = (event) => {
		setMessageContent(event.target.value);
	};

	const handleSendMessage = (event) => {
		event.preventDefault();

		if (!messageContent.trim()) {
			return;
		}

		const roomRef = getRoomRefByUid(roomUid);

		set(push(roomRef), {
			content: messageContent,
			senderUid: userUid,
		});

		setMessageContent("");
	};

	const handleToggleIconBox = () => {
		setDisplayIconBox(!displayIconBox);
	};

	const handlePickEmoji = (emoji) => {
		setMessageContent(messageContent + emoji);
	};

	const renderIconBox = displayIconBox ? (
		<Box
			sx={{
				position: "absolute",
				width: "200px",
				height: "200px",
				backgroundColor: "#fff",
				bottom: "10%",
				left: "25%",
				borderRadius: "6px",
				overflowY: "scroll",
				display: "flex",
				border: "1px solid rgba(0,0,0,0.6)",
				padding: "5px",
				justifyContent: "flex-start",
				alignContent: "start",
				rowGap: "5px",
				alignItems: "flex-start",
				flexWrap: "wrap",
				gap: "5px",
			}}
		>
			{EMOJIS.map((elm, index) => (
				<IconButton
					key={index}
					sx={{ display: "inline-block" }}
					onClick={() => handlePickEmoji(elm)}
				>
					<Emoji symbol={elm} />
				</IconButton>
			))}
		</Box>
	) : null;

	return (
		<Box
			component="form"
			sx={{
				width: "100%",
				flexGrow: "1",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
			onSubmit={handleSendMessage}
		>
			{renderIconBox}

			<IconButton onClick={handleToggleIconBox}>
				<Emoji symbol={EMOJIS[0]} />
			</IconButton>

			<TextField
				sx={{ width: "90%" }}
				label="Aa"
				size="small"
				value={messageContent}
				onChange={handleChangeInput}
			/>

			<IconButton sx={{ color: "#00FF00" }} type="submit">
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
