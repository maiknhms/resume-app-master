import React, { useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";
import config from "../../../config.json";

function Interests({ resumeData, handleNext, handleComplete, handleBack }) {
	const token = useSelector((state) => state.token);
	const resumeTemplateReducer = useSelector((state) => state.resumeTemplateReducer);
	const { interests } = resumeTemplateReducer;
	const dispatch = useDispatch();

	useEffect(() => {
		if (resumeData != null) {
			if (interests.length == 0) {
				dispatch({
					type: "interestsChange",
					payload: resumeData.interests,
				});
			}
		}
	}, [resumeData]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (token) {
			try {
				await axios
					.post(
						`${config.API_ENDPOINT}/resume/profile`,
						{ interests },
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
	};
	return (
		<>
			<Box component="h2" mb={2}>
				What are your top interests?
			</Box>
			<form onSubmit={handleSubmit}>
				<TextField
					variant="standard"
					id="outlined-multiline-static"
					label="Interests"
					fullWidth
					helperText="Please enter comma(,) before each new interest."
					value={interests}
					onChange={(e) =>
						dispatch({
							type: "interestsChange",
							payload: e.target.value.split(/\r?,/),
						})
					}
				/>
				<Button
					variant="text"
					color="warning"
					startIcon={<ArrowBackIcon />}
					onClick={handleBack}
				>
					Back
				</Button>
				<Box sx={{ float: "right" }}>
					<Button variant="text" color="warning" sx={{ mr: 2 }} onClick={handleNext}>
						Skip for Now
					</Button>
					<LoadingButton type="submit" variant="contained" endIcon={<ArrowForwardIcon />}>
						Next
					</LoadingButton>
				</Box>
			</form>
		</>
	);
}

export default Interests;
