import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoginForm from "../components/LoginForm.component";

function LoginPage() {
	return (
		<Box sx={{ textAlign: "center" }}>
			<Typography variant="h3" component="h2" sx={{ mt: "100px" }} gutterBottom>
				Firebase Chatapp
			</Typography>

			<LoginForm />
		</Box>
	);
}

export default LoginPage;
