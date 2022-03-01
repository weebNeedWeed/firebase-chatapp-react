import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Message from "./Message.component";
import { getRoomRefByUid } from "./../database/refs.database";
import { off, onValue } from "firebase/database";
import PropTypes from "prop-types";

function MessageList(props) {
	const [messageList, setMessageList] = useState([]);

	const { roomUid, userUid } = props;

	useEffect(() => {
		const roomRef = getRoomRefByUid(roomUid);

		onValue(roomRef, (data) => {
			const obj = data.val() ?? {};

			const newMessageList = Object.values(obj);

			setMessageList(newMessageList);
		});

		return () => {
			off(roomRef);
		};
	}, [roomUid]);

	return (
		<Box
			sx={{
				flexBasis: "80%",
				padding: "25px",
				overflowY: "scroll",
			}}
		>
			{messageList.map((elm, index) => {
				const isOnLeftSide = elm.senderUid !== userUid;

				return (
					<Message onLeftSide={isOnLeftSide} key={index}>
						{elm.content}
					</Message>
				);
			})}
		</Box>
	);
}

MessageList.propTypes = {
	roomUid: PropTypes.string,
	userUid: PropTypes.string,
};

export default MessageList;
