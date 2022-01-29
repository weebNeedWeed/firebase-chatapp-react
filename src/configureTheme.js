import { createTheme } from "@mui/material/styles";

const configureTheme = () => {
	const theme = createTheme({
		custom: {
			border: "1px solid rgba(0,0,0,0.3)",
		},
	});

	return theme;
};

export default configureTheme;
