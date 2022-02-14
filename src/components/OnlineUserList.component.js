import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import OnlineUserCard from "./OnlineUserCard.component";
import { useSelector } from "react-redux";
import { getUserListRef } from "./../database/refs.database";
import { off, onValue } from "firebase/database";

function OnlineUserList() {
	const userUid = useSelector((state) => state.user.uid);
	const [onlineUserList, setOnlineUserList] = useState([]);

	useEffect(() => {
		const userListRef = getUserListRef();

		onValue(userListRef, (data) => {
			const obj = data.val() ?? {};

			const newOnlineUserList = Object.keys(obj).map((key) => {
				const { name } = obj[key];

				return {
					uid: key,
					name,
				};
			});

			setOnlineUserList(newOnlineUserList);
		});

		return () => {
			off(userListRef);
		};
	}, [setOnlineUserList]);

	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
				padding: "20px",
				paddingTop: "25px",
				overflowY: "scroll",
			}}
		>
			{onlineUserList.map((elm, index) =>
				elm.uid === userUid ? null : <OnlineUserCard key={index} user={elm} />,
			)}
		</Box>
	);
}

export default OnlineUserList;
