import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import UserAvatar from "./UserAvatar.component";
import { useDispatch, useSelector } from "react-redux";
import { getUserRefByUid } from "./../database/refs.database";
import { remove } from "firebase/database";
import { resetUserData } from "../redux/actions/user.action";
import { resetChatData } from "../redux/actions/chat.action";

function UserInfo() {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const { uid, name: userName } = user;

	const handleUserLogout = () => {
		const userRef = getUserRefByUid(uid);
		remove(userRef);
		dispatch(resetUserData());
		dispatch(resetChatData());
	};

	useEffect(() => {
		window.addEventListener("beforeunload", handleUserLogout);

		return () => {
			window.removeEventListener("beforeunload", handleUserLogout);
		};
	});

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
					{userName}
				</Typography>
			</Box>

			<Button
				variant="contained"
				color="secondary"
				sx={{ flexBasis: "70px", height: "30px" }}
				onClick={handleUserLogout}
			>
				logout
			</Button>
		</Box>
	);
}

export default UserInfo;
