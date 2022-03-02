import { createReducer } from "@reduxjs/toolkit";
import { resetChatData, selectUserToChatWith } from "../actions/chat.action";

const initialState = {
	selected: {
		uid: "",
		name: "",
	},
};

const chatReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(selectUserToChatWith, (state, action) => {
			const { user } = action.payload;

			state.selected = user;
		})
		.addCase(resetChatData, () => initialState);
});

export default chatReducer;
