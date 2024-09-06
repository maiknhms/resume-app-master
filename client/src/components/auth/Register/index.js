import React, { useEffect, useState } from "react";
import * as styles from "./Register.module.scss";
import Link from "next/link";
import axios from "axios";
import { showSuccessMsg } from "../../utils/notification/Notification";
import Notification from "../../utils/notification/Notification";
import { isEmpty, isEmail, isLength, isMatch } from "../../utils/validation/Validation";

import config from "../../../config.json";
import {
	Box,
	Button,
	FilledInput,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	Typography,
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

const initialState = {
	name: "",
	email: "",
	password: "",
	cf_password: "",
	err: "",
	success: "",
};

function Register() {
	const [user, setUser] = useState(initialState);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setshowConfirmPassword] = useState(false);
	const [notificationKey, setNotificationKey] = useState("");

	const { name, email, password, cf_password, err, success } = user;

	useEffect(() => {
		setNotificationKey(Math.random());
	}, [user]);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleClickshowConfirmPassword = () => {
		setshowConfirmPassword(!showConfirmPassword);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value, err: "", success: "" });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (isEmpty(name) || isEmpty(password))
			return setUser({
				...user,
				err: "Please fill in all fields.",
				success: "",
			});

		if (!isEmail(email)) return setUser({ ...user, err: "Invalid emails.", success: "" });

		if (isLength(password))
			return setUser({
				...user,
				err: "Password must be at least 6 characters.",
				success: "",
			});

		if (!isMatch(password, cf_password))
			return setUser({ ...user, err: "Password did not match.", success: "" });

		try {
			const res = await axios.post(
				`${config.API_ENDPOINT}/user/register`,
				{
					name,
					email,
					password,
				},
				{
					withCredentials: true,
				}
			);
			setUser({ ...user, err: "", success: res.data.msg });
		} catch (err) {
			err.response.data.msg && setUser({ ...user, err: err.response.data.msg, success: "" });
		}
	};

	return (
		<Box className={styles.registerPage}>
			<Box>
				<h2>Register</h2>
				{err && <Notification msg={err} key={notificationKey} type="error" />}
				{success && <Notification msg={success} key={notificationKey} type="success" />}

				<form onSubmit={handleSubmit}>
					<FormControl variant="filled" fullWidth margin="normal">
						<InputLabel htmlFor="filled-adornment-name">Name</InputLabel>
						<FilledInput
							type="text"
							id="name"
							value={name}
							name="name"
							onChange={handleChangeInput}
							label="Name"
						/>
					</FormControl>

					<FormControl variant="filled" fullWidth margin="normal">
						<InputLabel htmlFor="filled-adornment-email">Email</InputLabel>
						<FilledInput
							type="text"
							id="email"
							value={email}
							name="email"
							onChange={handleChangeInput}
							label="Email"
						/>
					</FormControl>

					<FormControl variant="filled" fullWidth margin="normal">
						<InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
						<FilledInput
							id="filled-adornment-password"
							type={showPassword ? "text" : "password"}
							value={password}
							name="password"
							onChange={handleChangeInput}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
							label="Password"
						/>
					</FormControl>

					<FormControl variant="filled" fullWidth margin="normal">
						<InputLabel htmlFor="filled-adornment-cf_password">
							Confirm Password
						</InputLabel>
						<FilledInput
							id="filled-adornment-cf_password"
							type={showConfirmPassword ? "text" : "password"}
							value={cf_password}
							name="cf_password"
							onChange={handleChangeInput}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickshowConfirmPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{showConfirmPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
							label="Confirm Password"
						/>
					</FormControl>

					<Typography my={2}>
						<Button type="submit" variant="contained">
							Register
						</Button>
					</Typography>
				</form>

				<p>
					Already an account?
					<Link href="/login">
						<a> Login</a>
					</Link>
				</p>
			</Box>
		</Box>
	);
}

export default Register;
