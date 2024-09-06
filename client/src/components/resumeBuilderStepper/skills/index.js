import React, { useEffect } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import config from "../../../config.json";

function Skills({ resumeData, handleNext, handleComplete, handleBack }) {
	const token = useSelector((state) => state.token);
	const resumeTemplateReducer = useSelector((state) => state.resumeTemplateReducer);
	const { skills } = resumeTemplateReducer;
	const dispatch = useDispatch();

	useEffect(() => {
		if (resumeData != null) {
			if (skills.length == 0) {
				dispatch({
					type: "skillsChange",
					payload: resumeData.skills,
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
						{ skills },
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
			<h2>Skills</h2>
			<Box component="p" mb={2}>
				Try to add 6-10 skills that are most relevant to your desired job.
			</Box>
			<form onSubmit={handleSubmit}>
				<TextField
					variant="standard"
					id="outlined-multiline-static"
					label="Skills"
					fullWidth
					helperText="Please enter comma(,) to add new skill set."
					value={skills}
					onChange={(e) =>
						dispatch({
							type: "skillsChange",
							payload: e.target.value.split(/\r?,/),
						})
					}
				/>
				<Grid item xs={12}>
					<Button
						variant="text"
						startIcon={<ArrowBackIcon />}
						color="warning"
						onClick={handleBack}
					>
						Back
					</Button>
					<Box sx={{ float: "right" }}>
						<Button variant="text" color="warning" sx={{ mr: 2 }} onClick={handleNext}>
							Skip for Now
						</Button>
						<LoadingButton
							type="submit"
							variant="contained"
							endIcon={<ArrowForwardIcon />}
						>
							Next
						</LoadingButton>
					</Box>
				</Grid>
			</form>
		</>
	);
}

export default Skills;
