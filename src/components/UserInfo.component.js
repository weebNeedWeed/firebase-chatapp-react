import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import Typography from "@mui/material/Typography";
import UserAvatar from "./UserAvatar.component";

function UserInfo() {
	return (
		<Box
			sx={{
				width: "100%",
				flexBasis: "70px",
				display: "flex",
				alignItems: "center",
				padding: "20px",
				justifyContent: "space-between",
				paddingBottom: "25px",
				borderBottom: (theme) => theme.custom.border,
			}}
		>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<UserAvatar
					sx={{ width: "30px", height: "30px" }}
					name="user 12312 gg"
				/>

				<Typography
					sx={{ marginLeft: "10px", fontWeight: "bold", fontSize: "20px" }}
				>
					Username 111
				</Typography>
			</Box>

			<Button
				variant="contained"
				color="secondary"
				sx={{ flexBasis: "70px", height: "30px" }}
			>
				logout
			</Button>
		</Box>
	);
}

export default UserInfo;
