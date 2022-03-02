import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import SizeBar from "./../components/SizeBar.component";
import ChatBox from "../components/ChatBox.component";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function HomePage() {
	const navigate = useNavigate();
	const isUserAuthenticated = useSelector((state) => state.user.authenticated);
	const selectedUser = useSelector((state) => state.chat.selected);

	const renderChatBox =
		selectedUser.name && selectedUser.uid ? <ChatBox /> : null;

	useEffect(() => {
		if (!isUserAuthenticated) {
			navigate("/login");
		}
	}, [isUserAuthenticated, navigate]);

	return (
		<Box
			sx={{ p: "15px", width: "100vw", height: "100vh", position: "relative" }}
		>
			<Box
				sx={{
					border: (theme) => theme.custom.border,
					borderRadius: "6px",
					width: "100%",
					height: "100%",
					display: "flex",
					justifyContent: "flex-start",
				}}
			>
				<SizeBar />

				{renderChatBox}
			</Box>
		</Box>
	);
}

export default HomePage;
