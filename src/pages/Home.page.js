import React from "react";
import Box from "@mui/material/Box";
import SizeBar from "./../components/SizeBar.component";
import ChatBox from "../components/ChatBox.component";

function HomePage() {
	return (
		<Box sx={{ p: "15px", width: "100vw", height: "100vh" }}>
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

				<ChatBox />
			</Box>
		</Box>
	);
}

export default HomePage;
