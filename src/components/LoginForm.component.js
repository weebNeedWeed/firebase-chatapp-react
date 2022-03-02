import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
	setUserAuthStatus,
	setUserName as setUserNameStore,
	setUserUid,
} from "../redux/actions/user.action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserListRef } from "./../database/refs.database";
import { set, push } from "firebase/database";

function LoginForm() {
	// Local state for controlling input(TextField)
	const [userName, setUserName] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// No space at start and end of string, string length must be less than 20
	const isValidUserName = userName.trim() && userName.length <= 20;

	// If username is valid then no helpertext
	const helperText = isValidUserName ? undefined : "Invalid username";

	const handleInputChange = (event) => {
		const newUserName = event.target.value;

		setUserName(newUserName);
	};

	const handleUserLogin = (event) => {
		event.preventDefault();

		if (isValidUserName) {
			const userListRef = push(getUserListRef());

			// Get uid of new data
			const uid = userListRef.key;

			set(userListRef, {
				name: userName,
			});

			dispatch(setUserUid({ uid }));
			dispatch(setUserNameStore({ name: userName }));
			dispatch(setUserAuthStatus({ status: true }));

			navigate("/");
		}
	};

	return (
		<form onSubmit={handleUserLogin}>
			<TextField
				value={userName}
				onChange={handleInputChange}
				label="Enter your name"
				variant="outlined"
				sx={{ width: "min(90%, 400px)" }}
				error={!isValidUserName}
				helperText={helperText}
			/>

			<Button
				type="submit"
				size="large"
				color="secondary"
				variant="contained"
				sx={{ display: "block", ml: "auto", mr: "auto", mt: "25px" }}
			>
				Login
			</Button>
		</form>
	);
}

export default LoginForm;
