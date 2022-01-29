import { createStore } from "redux";
import rootReducer from "./reducers/root.reducer";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore() {
	const middlewares = [];
	const middlewaresEnhancer = applyMiddleware(...middlewares);

	const store = createStore(
		rootReducer,
		composeWithDevTools(middlewaresEnhancer),
	);

	return store;
}
