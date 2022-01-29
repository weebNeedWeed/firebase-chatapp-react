import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import UserAvatar from "./UserAvatar.component";

function Message(props) {
	const { onLeftSide } = props;

	let messageStyle = {
		float: "right",
		flexDirection: "row",
	};

	if (onLeftSide) {
		messageStyle = {
			float: "left",
			flexDirection: "row-reverse",
		};
	}

	return (
		<Box
			sx={{
				display: "flex",
				columnGap: "10px",
				marginBottom: "30px",
				...messageStyle,
			}}
		>
			<Box
				sx={{
					backgroundColor: onLeftSide ? "#C4C4C4" : "#8AA4FF",
					display: "inline-block",
					padding: "12px",
					borderRadius: "6px",
					maxWidth: "450px",
					textAlign: "justify",
					fontSize: "16px",
				}}
			>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
				recusandae doloremque quaerat ipsam, illum et ex optio fuga vel mollitia
				ullam maiores beatae corporis id dolor distinctio sed debitis tempora?
			</Box>

			<UserAvatar
				name="dssada"
				sx={{ width: "30px", height: "30px", marginTop: "10px" }}
			/>
		</Box>
	);
}

Message.propTypes = {
	onLeftSide: PropTypes.bool,
};

export default Message;
