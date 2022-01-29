import React, { useMemo } from "react";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import { stringAvatar } from "../helpers/text.helper";

function UserAvatar(props) {
	const { name, sx } = props;
	const { bgcolor, children } = useMemo(() => stringAvatar(name), [name]);

	return <Avatar sx={{ backgroundColor: bgcolor, ...sx }}>{children}</Avatar>;
}

UserAvatar.propTypes = {
	name: PropTypes.string,
	sx: PropTypes.object,
};

export default UserAvatar;
