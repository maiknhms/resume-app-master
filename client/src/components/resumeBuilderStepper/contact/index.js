import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
	Box,
	Button,
	FilledInput,
	FormControl,
	Grid,
	InputLabel,
	OutlinedInput,
	TextField,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Notification from "../../utils/notification/Notification";
import config from "../../../config.json";

function Contact({ resumeData, handleComplete }) {
	const token = useSelector((state) => state.token);

	const resumeTemplateReducer = useSelector((state) => state.resumeTemplateReducer);
	const { picture, firstName, lastName, positionTitle, bio, email, contactNumber, address } =
		resumeTemplateReducer;
	const dispatch = useDispatch();
	const emailRef = useRef(null);

	const [isValidEmail, setIsValidEmail] = useState(true);

	useEffect(() => {
		if (email != "") {
			setIsValidEmail(validEmail.test(emailRef.current.value));
		}
	}, []);

	useEffect(() => {
		if (resumeData != null) {
			if (!picture) {
				dispatch({
					type: "pictureChange",
					payload: resumeData.picture,
				});
			}
			if (!firstName) {
				dispatch({
					type: "firstNameChange",
					payload: resumeData.firstName,
				});
			}
			if (!lastName) {
				dispatch({
					type: "lastNameChange",
					payload: resumeData.lastName,
				});
			}
			if (!positionTitle) {
				dispatch({
					type: "positionTitleChange",
					payload: resumeData.positionTitle,
				});
			}
			if (!bio) {
				dispatch({
					type: "bioChange",
					payload: resumeData.bio,
				});
			}
			if (!email) {
				dispatch({
					type: "emailChange",
					payload: resumeData.email,
				});
			}
			if (!contactNumber) {
				dispatch({
					type: "contactNumberChange",
					payload: resumeData.contactNumber,
				});
			}
			if (!address) {
				dispatch({
					type: "addressChange",
					payload: resumeData.address,
				});
			}
		}
	}, [resumeData]);

	const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
	const handleSubmit = async () => {
		setIsValidEmail(validEmail.test(emailRef.current.value));
		if (validEmail.test(emailRef.current.value)) {
			if (token) {
				try {
					await axios
						.post(
							`${config.API_ENDPOINT}/resume/profile`,
							{
								picture,
								firstName,
								lastName,
								positionTitle,
								bio,
								email,
								contactNumber,
								address,
							},
							{
								headers: { Authorization: token },
								withCredentials: true,
							}
						)
						.then((res) => {
							handleComplete();
						});
				} catch (err) {
					console.log(err);
				}
			} else {
				handleComplete();
			}
		}
	};

	return (
		<>
			<h2>Contact Section</h2>
			<Box component="p" mb={2}>
				This information will be placed at the top of your resume.
			</Box>
			<form>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Button
							variant="outlined"
							component="label"
							endIcon={
								<CheckCircleIcon sx={{ display: picture ? "block" : "none" }} />
							}
						>
							Upload Picture
							<input
								hidden
								accept="image/*"
								multiple
								type="file"
								onChange={(e) => {
									dispatch({
										type: "pictureChange",
										payload: URL.createObjectURL(e.target.files[0]),
									});
								}}
							/>
						</Button>
					</Grid>
					<Grid item xs={6}>
						<TextField
							label="First Name"
							variant="standard"
							fullWidth
							value={firstName}
							onChange={(e) =>
								dispatch({
									type: "firstNameChange",
									payload: e.target.value,
								})
							}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							label="Last Name"
							variant="standard"
							fullWidth
							value={lastName}
							onChange={(e) =>
								dispatch({
									type: "lastNameChange",
									payload: e.target.value,
								})
							}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Job Title"
							variant="standard"
							fullWidth
							value={positionTitle}
							onChange={(e) =>
								dispatch({
									type: "positionTitleChange",
									payload: e.target.value,
								})
							}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Objective"
							variant="standard"
							multiline
							maxRows={4}
							fullWidth
							value={bio}
							onChange={(e) =>
								dispatch({
									type: "bioChange",
									payload: e.target.value,
								})
							}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Email"
							variant="standard"
							fullWidth
							inputRef={emailRef}
							value={email}
							error={!isValidEmail}
							helperText={!isValidEmail && "Please enter valid email address."}
							onChange={(e) =>
								dispatch({
									type: "emailChange",
									payload: e.target.value,
								})
							}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Phone Number"
							variant="standard"
							fullWidth
							value={contactNumber}
							onChange={(e) =>
								dispatch({
									type: "contactNumberChange",
									payload: e.target.value,
								})
							}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Address"
							variant="standard"
							fullWidth
							value={address}
							onChange={(e) =>
								dispatch({
									type: "addressChange",
									payload: e.target.value,
								})
							}
						/>
					</Grid>
					<Grid item xs={12}>
						<LoadingButton
							variant="contained"
							endIcon={<ArrowForwardIcon />}
							sx={{ float: "right" }}
							onClick={() => handleSubmit()}
						>
							Next
						</LoadingButton>
					</Grid>
				</Grid>
			</form>
		</>
	);
}

export default Contact;
