import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import UserAvatar from "./UserAvatar.component";

function OnlineUserCard() {
	return (
		<Box
			sx={{
				width: "100%",
				borderRadius: "6px",
				display: "flex",
				justifyContent: "flex-start",
				alignItems: "center",
				padding: "5px",

				"&:hover": {
					backgroundColor: "rgba(0,0,0,0.2)",
					transition: "all .1s",
					cursor: "pointer",
				},
			}}
		>
			<UserAvatar
				sx={{ width: "50px", height: "50px" }}
				name="ONline 2321312 user"
			/>

			<Box
				sx={{
					marginLeft: "5px",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				<Typography sx={{ fontSize: "16px", lineHeight: "15px" }}>
					Online gg 1122
				</Typography>

				<Typography
					sx={{
						textTransform: "uppercase",
						color: "#00FF00",
						fontSize: "10px",
						marginLeft: "1px",
					}}
				>
					Online
				</Typography>
			</Box>
		</Box>
	);
}

export default OnlineUserCard;
