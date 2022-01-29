import React from "react";
import Box from "@mui/system/Box";
import UserInfo from "./UserInfo.component";
import OnlineUserList from "./OnlineUserList.component";

function SizeBar() {
	return (
		<Box
			sx={{
				flexBasis: "450px",
				height: "100%",
				borderRight: (theme) => theme.custom.border,
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-start",
			}}
		>
			<UserInfo />

			<OnlineUserList />
		</Box>
	);
}

export default SizeBar;
