import React, { useState, useEffect } from "react";
import * as styles from "./Login.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { dispatchLogin } from "../../../redux/actions/authAction";
import { useDispatch } from "react-redux";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import config from "../../../config.json";
import {
	Box,
	Button,
	FilledInput,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	TextField,
	Typography,
} from "@mui/material";
import Notification from "../../utils/notification/Notification";

const initialState = {
	email: "",
	password: "",
	err: "",
	success: "",
};

function Login() {
	const [user, setUser] = useState(initialState);
	const dispatch = useDispatch();
	const history = useRouter();
	const [customLogin, setCustomLogin] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [notificationKey, setNotificationKey] = useState("");

	useEffect(() => {
		setNotificationKey(Math.random());
	}, [user]);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const { email, password, err, success } = user;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value, err: "", success: "" });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(
				`${config.API_ENDPOINT}/user/login`,
				{
					email,
					password,
				},
				{
					withCredentials: true,
				}
			);
			setUser({ ...user, err: "", success: res.data.msg });

			localStorage.setItem("firstLogin", true);

			dispatch(dispatchLogin());
			history.push("/dashboard");
		} catch (err) {
			console.log(err);
			// err.response.data.msg && setUser({ ...user, err: err.response.data.msg, success: "" });
		}
	};

	return (
		<Box className={styles.loginPage}>
			<Box>
				<h2>Log In</h2>
				{customLogin ? (
					<Box>
						<p>Please enter your email address and password.</p>
						{err && <Notification msg={err} key={notificationKey} type="error" />}
						{success && (
							<Notification msg={success} key={notificationKey} type="success" />
						)}

						<form onSubmit={handleSubmit}>
							<FormControl variant="filled" fullWidth margin="normal">
								<InputLabel htmlFor="filled-adornment-email">
									Email Address
								</InputLabel>
								<FilledInput
									id="filled-adornment-email"
									type="email"
									value={email}
									name="email"
									onChange={handleChangeInput}
									label="Email Address"
								/>
							</FormControl>

							<FormControl variant="filled" fullWidth margin="normal">
								<InputLabel htmlFor="filled-adornment-password">
									Password
								</InputLabel>
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
							<Box
								my={2}
								style={{
									width: "100%",
									display: "flex",
									justifyContent: "space-between",
								}}
							>
								<Button variant="outlined" onClick={() => setCustomLogin(false)}>
									Back
								</Button>
								<Button type="submit" variant="contained">
									Login
								</Button>
							</Box>
							<Link href="/forgotPassword">
								<a>Forgot your password?</a>
							</Link>
						</form>
					</Box>
				) : (
					<Box>
						<Typography mb={4}>Welcome!</Typography>

						<Box className={styles.social}>
							<Button
								startIcon={<FacebookOutlinedIcon className={styles.loginIcon} />}
								variant="contained"
								size="large"
								className={styles.loginBtn}
								style={{ backgroundColor: "rgb(19, 113, 240)" }}
							>
								Facebook
							</Button>
							<Button
								startIcon={<GoogleIcon className={styles.loginIcon} />}
								variant="contained"
								size="large"
								className={styles.loginBtn}
								style={{ backgroundColor: "rgb(219, 68, 55)" }}
							>
								Google
							</Button>
							<Button
								startIcon={<LinkedInIcon className={styles.loginIcon} />}
								variant="contained"
								size="large"
								className={styles.loginBtn}
								style={{
									backgroundColor: "rgb(40, 103, 178)",
								}}
							>
								LinedIn
							</Button>
							<Button
								startIcon={<MailRoundedIcon className={styles.loginIcon} />}
								variant="outlined"
								size="large"
								className={styles.loginBtn}
								onClick={() => {
									setCustomLogin(true);
								}}
							>
								Email
							</Button>
						</Box>
						<Typography mt={4}>
							I am not registered - <Link href="/register">Register</Link>
						</Typography>
					</Box>
				)}
			</Box>
		</Box>
	);
}

export default Login;
