import { combineReducers } from "redux";
import chatReducer from "./chat.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
	user: userReducer,
	chat: chatReducer,
});

export default rootReducer;
