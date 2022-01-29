import Box from "@mui/material/Box";
import React from "react";
import OnlineUserCard from "./OnlineUserCard.component";

function OnlineUserList() {
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
			{Array.from(Array(10).keys()).map((elm, index) => (
				<OnlineUserCard key={index} />
			))}
		</Box>
	);
}

export default OnlineUserList;
