import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import UserAvatar from "./UserAvatar.component";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { selectUserToChatWith } from "./../redux/actions/chat.action";

function OnlineUserCard({ user }) {
	const dispatch = useDispatch();
	const selectedUser = useSelector((state) => state.chat.selected);

	const { name, uid } = user;

	const isSelectedUser = selectedUser.name === name && selectedUser.uid === uid;

	const handleSelectUser = () => {
		dispatch(selectUserToChatWith({ user }));
	};

	return (
		<Box
			onClick={handleSelectUser}
			sx={{
				width: "100%",
				borderRadius: "6px",
				display: "flex",
				justifyContent: "flex-start",
				alignItems: "center",
				padding: "5px",
				backgroundColor: isSelectedUser ? "rgba(0,0,0,0.2)" : null,

				"&:hover": {
					backgroundColor: "rgba(0,0,0,0.2)",
					transition: "all .1s",
					cursor: "pointer",
				},
			}}
		>
			<UserAvatar sx={{ width: "50px", height: "50px" }} name={name} />

			<Box
				sx={{
					marginLeft: "5px",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				<Typography sx={{ fontSize: "16px", lineHeight: "15px" }}>
					{name}
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

OnlineUserCard.propTypes = {
	user: PropTypes.object,
};

export default OnlineUserCard;
