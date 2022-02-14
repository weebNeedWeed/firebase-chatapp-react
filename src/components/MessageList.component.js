import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Message from "./Message.component";
import { useSelector } from "react-redux";
import { getRoomRefByUid } from "./../database/refs.database";
import { off, onValue } from "firebase/database";

function MessageList() {
	const [messageList, setMessageList] = useState([]);

	const userUid = useSelector((state) => state.user.uid);
	const selectedUserUid = useSelector((state) => state.chat.selected.uid);

	const roomUid =
		userUid < selectedUserUid
			? selectedUserUid + userUid
			: userUid + selectedUserUid;

	console.log(roomUid);

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
	}, [setMessageList, roomUid]);

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

export default MessageList;
