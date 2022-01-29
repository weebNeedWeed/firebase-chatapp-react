import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./redux/configureStore";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import configureTheme from "./configureTheme";

const store = configureStore();
const theme = configureTheme();

ReactDOM.render(
	<StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Router>
					<CssBaseline />
					<App />
				</Router>
			</ThemeProvider>
		</Provider>
	</StrictMode>,
	document.getElementById("root"),
);
