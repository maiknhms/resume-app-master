import React, { useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import config from "../../../config.json";

function Languages({ resumeData, handleNext, handleComplete, handleBack }) {
	const token = useSelector((state) => state.token);
	const resumeTemplateReducer = useSelector((state) => state.resumeTemplateReducer);
	const { languages } = resumeTemplateReducer;
	const dispatch = useDispatch();

	useEffect(() => {
		if (resumeData != null) {
			if (languages.length == 0) {
				dispatch({
					type: "languagesChange",
					payload: resumeData.languages,
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
						{ languages },
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
				Do you speak any other languages?
			</Box>
			<form onSubmit={handleSubmit}>
				<TextField
					variant="standard"
					id="outlined-multiline-static"
					label="Languages"
					fullWidth
					helperText="Please enter comma(,) to add new language."
					value={languages}
					onChange={(e) =>
						dispatch({
							type: "languagesChange",
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

export default Languages;
