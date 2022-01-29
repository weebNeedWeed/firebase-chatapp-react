import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
function LoginForm() {
	// Local state for controlling input(TextField)
	const [userName, setUserName] = useState("");

	const handleInputChange = (event) => {
		const newUserName = event.target.value;

		setUserName(newUserName);
	};

	const handleUserLogin = () => {};

	return (
		<div>
			<TextField
				value={userName}
				onChange={handleInputChange}
				label="Enter your name"
				variant="outlined"
				sx={{ width: "min(90%, 400px)" }}
			/>

			<Button
				size="large"
				color="secondary"
				variant="contained"
				sx={{ display: "block", ml: "auto", mr: "auto", mt: "25px" }}
				onClick={handleUserLogin}
			>
				Login
			</Button>
		</div>
	);
}

export default LoginForm;
