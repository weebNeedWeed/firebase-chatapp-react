import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login.page";
import HomePage from "./pages/Home.page";
import NotFoundPage from "./pages/NotFound.page";

function App() {
	return (
		<Routes>
			<Route path="/" exact element={<HomePage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
