import { createReducer } from "@reduxjs/toolkit";
import {
	resetUserData,
	setUserAuthStatus,
	setUserName,
	setUserUid,
} from "../actions/user.action";

const initialState = {
	name: "",
	uid: "",
	authenticated: false,
};

const userReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(setUserName, (state, action) => {
			state.name = action.payload.name;
		})
		.addCase(setUserUid, (state, action) => {
			state.uid = action.payload.uid;
		})
		.addCase(setUserAuthStatus, (state, action) => {
			state.authenticated = action.payload.status;
		})
		.addCase(resetUserData, () => initialState);
});

export default userReducer;
