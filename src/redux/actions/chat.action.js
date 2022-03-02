import { createAction } from "@reduxjs/toolkit";

export const selectUserToChatWith = createAction(
	"CHAT/SELECT_USER_TO_CHAT_WITH",
);

export const resetChatData = createAction("CHAT/RESET_CHAT_DATA");
