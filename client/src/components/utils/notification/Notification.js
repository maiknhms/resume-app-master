import { Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./notification.module.css";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notification({ msg, type }) {
	const [open, setOpen] = useState(true);

	useEffect(() => {
		setOpen(true);
	}, []);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};
	return (
		<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
			<Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
				{msg}
			</Alert>
		</Snackbar>
	);
}
