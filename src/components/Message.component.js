import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import UserAvatar from "./UserAvatar.component";

function Message(props) {
	const { onLeftSide, children } = props;

	let flexDirection = "row";
	if (onLeftSide) {
		flexDirection = "row-reverse";
	}

	return (
		<Box sx={{ display: "block" }}>
			<Box
				sx={{
					display: "flex",
					flexBasis: "100%",
					columnGap: "10px",
					marginBottom: "30px",
					justifyContent: "flex-end",
					flexDirection,
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
						maxHeight: "100%",
					}}
				>
					{children}
				</Box>

				<UserAvatar
					name="dssada"
					sx={{ width: "30px", height: "30px", marginTop: "10px" }}
				/>
			</Box>
		</Box>
	);
}

Message.propTypes = {
	onLeftSide: PropTypes.bool,
	children: PropTypes.string,
};

export default Message;
