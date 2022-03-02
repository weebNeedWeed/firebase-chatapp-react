import Box from "@mui/material/Box";
import React from "react";
import PropTypes from "prop-types";

function Emoji(props) {
	return <Box component="span">{props.symbol}</Box>;
}

Emoji.propTypes = {
	symbol: PropTypes.string,
};

export default Emoji;
