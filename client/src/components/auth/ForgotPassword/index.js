import React, { useEffect, useState } from "react";
import * as styles from "./ForgotPassword.module.scss";
import axios from "axios";
import { isEmail } from "../../utils/validation/Validation";

import config from "../../../config.json";

import { Box, Button, FilledInput, FormControl, InputLabel } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Notification from "../../utils/notification/Notification";

const initialState = {
	email: "",
	err: "",
	success: "",
};

function ForgotPassword() {
	const [data, setData] = useState(initialState);
	const [notificationKey, setNotificationKey] = useState("");

	useEffect(() => {
		setNotificationKey(Math.random());
	}, [data]);

	const { email, err, success } = data;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value, err: "", success: "" });
	};

	const forgotPassword = async () => {
		if (!isEmail(email)) return setData({ ...data, err: "Invalid emails.", success: "" });

		try {
			const res = await axios.post(`${config.API_ENDPOINT}/user/forgot`, {
				email,
			});

			return setData({ ...data, err: "", success: res.data.msg });
		} catch (err) {
			err.response.data.msg && setData({ ...data, err: err.response.data.msg, success: "" });
		}
	};

	return (
		<Box className={styles.forgotPage}>
			<Box>
				<h2>Forgot Your Password?</h2>
				<p>Please enter your email address</p>
				{err && <Notification msg={err} key={notificationKey} type="error" />}
				{success && <Notification msg={success} key={notificationKey} type="success" />}

				<FormControl variant="filled" fullWidth margin="normal" required>
					<InputLabel htmlFor="filled-adornment-email">Email Address</InputLabel>
					<FilledInput
						id="filled-adornment-email"
						type="email"
						value={email}
						name="email"
						onChange={handleChangeInput}
						label="Email Address"
					/>
				</FormControl>

				<Button onClick={forgotPassword} variant="contained" endIcon={<SendIcon />}>
					Send Email
				</Button>
			</Box>
		</Box>
	);
}

export default ForgotPassword;
