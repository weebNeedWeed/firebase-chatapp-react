import { createReducer } from "@reduxjs/toolkit";
import { selectUserToChatWith } from "../actions/chat.action";

const initialState = {
	selected: {
		uid: "",
		name: "",
	},
};

const chatReducer = createReducer(initialState, (builder) => {
	builder.addCase(selectUserToChatWith, (state, action) => {
		const { user } = action.payload;

		state.selected = user;
	});
});

export default chatReducer;
