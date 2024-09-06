import React, { useEffect, useState } from "react";
import * as styles from "./experience.module.scss";
import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	IconButton,
	TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import LoadingButton from "@mui/lab/LoadingButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import config from "../../../config.json";

function Experience({ resumeData, handleNext, handleComplete, handleBack }) {
	const token = useSelector((state) => state.token);
	const resumeTemplateReducer = useSelector((state) => state.resumeTemplateReducer);
	const { experience, addedExperience } = resumeTemplateReducer;
	const [isEditable, setIsEditable] = useState(false);
	const [editIndex, setEditIndex] = useState(null);
	const [showValidation, setShowValidation] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		!isEditable && showValidation && setShowValidation(!showValidation);
	}, [isEditable]);

	useEffect(() => {
		if (resumeData != null && resumeData.experience.length > 0) {
			dispatch({
				type: "experienceRemoveAll",
			});
			resumeData.experience.map((experience, index) => {
				dispatch({
					type: "experienceAdd",
					payload: experience,
				});
			});
		}
	}, [resumeData]);

	const handleAdd = async (e) => {
		e.preventDefault();

		if (editIndex == null) {
			if (
				!experience.position ||
				!experience.company ||
				!experience.from ||
				!experience.location.city ||
				!experience.location.country
			) {
				setShowValidation(true);
				return;
			}

			if (token) {
				try {
					await axios
						.post(`${config.API_ENDPOINT}/resume/experience`, experience, {
							headers: { Authorization: token },
							withCredentials: true,
						})
						.then((res) => {
							dispatch({
								type: "experienceAdd",
								payload: experience,
							});
						});

					// window.location.href = "/";
				} catch (err) {
					console.log(err);
					// window.location.href = "/";
				}
			} else {
				dispatch({
					type: "experienceAdd",
					payload: experience,
				});
			}
		} else {
			if (
				!experience.position ||
				!experience.company ||
				!experience.from ||
				!experience.location.city ||
				!experience.location.country
			) {
				setShowValidation(true);
				return;
			}
			if (token) {
				try {
					const id = resumeData.experience[editIndex]._id;
					await axios
						.put(`${config.API_ENDPOINT}/resume/edit-experience/${id}`, experience, {
							headers: { Authorization: token },
							withCredentials: true,
						})
						.then((res) => {
							dispatch({
								type: "addedExperienceChange",
								index: editIndex,
								payload: experience,
							});
						});
				} catch (err) {
					console.log(err);
				}
			} else {
				dispatch({
					type: "addedExperienceChange",
					index: editIndex,
					payload: experience,
				});
			}
		}

		setIsEditable(false);
		dispatch({
			type: "setIsShowAddExperience",
			payload: false,
		});

		dispatch({
			type: "experienceReset",
		});
	};

	const editHandle = (i) => {
		setEditIndex(i);
		dispatch({
			type: "experienceChange",
			payload: addedExperience[i],
		});
	};

	const deleteHandle = async (index) => {
		if (token) {
			try {
				const id = resumeData.experience[index]._id;
				await axios
					.delete(`${config.API_ENDPOINT}/resume/experience/${id}`, {
						headers: { Authorization: token },
						withCredentials: true,
					})
					.then((res) => {
						dispatch({
							type: "experienceRemove",
							payload: index,
						});
					});
			} catch (err) {
				console.log(err);
			}
		} else {
			dispatch({
				type: "experienceRemove",
				payload: index,
			});
		}
	};

	return (
		<>
			<h2>Work Experience</h2>
			<Box component="p" mb={2}>
				We recommend that you do not include work experiences older than 15 years ago unless
				absolutely necessary. Try to keep your resume between 1 or 2 pages.
			</Box>
			{isEditable ? (
				<form noValidate onSubmit={handleAdd}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								label="Title/Position"
								variant="standard"
								fullWidth
								value={experience.position}
								error={!experience.position && showValidation}
								helperText={
									!experience.position &&
									showValidation &&
									"Please enter job title."
								}
								onChange={(e) => {
									dispatch({
										type: "experiencePositionChange",
										payload: e.target.value,
									});
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								label="Workplace/Company"
								variant="standard"
								fullWidth
								value={experience.company}
								error={!experience.company && showValidation}
								helperText={
									!experience.company &&
									showValidation &&
									"Please enter company name."
								}
								onChange={(e) => {
									dispatch({
										type: "experienceCompanyChange",
										payload: e.target.value,
									});
								}}
							/>
						</Grid>
						<Grid item xs={6}>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker
									label="From"
									value={experience.from}
									views={["year", "month"]}
									onChange={(newValue) => {
										dispatch({
											type: "experienceFromChange",
											payload: newValue ? newValue.toString() : "",
										});
									}}
									renderInput={(params) => (
										<TextField
											variant="standard"
											{...params}
											fullWidth
											error={!experience.from && showValidation}
											helperText={
												!experience.from &&
												showValidation &&
												"Please enter joining date."
											}
										/>
									)}
								/>
							</LocalizationProvider>
						</Grid>
						{!experience.currentlyWorking && (
							<Grid item xs={6}>
								<LocalizationProvider dateAdapter={AdapterDayjs}>
									<DatePicker
										label="To"
										value={experience.to}
										views={["year", "month"]}
										onChange={(newValue) => {
											dispatch({
												type: "experienceToChange",
												payload: newValue ? newValue.toString() : "",
											});
										}}
										renderInput={(params) => (
											<TextField
												variant="standard"
												{...params}
												fullWidth
												error={!experience.to && showValidation}
												helperText={
													!experience.to &&
													showValidation &&
													"Please enter end date."
												}
											/>
										)}
									/>
								</LocalizationProvider>
							</Grid>
						)}
						<Grid item xs={12}>
							<FormControlLabel
								control={
									<Checkbox
										value={experience.currentlyWorking}
										checked={experience.currentlyWorking}
										onChange={(e) => {
											dispatch({
												type: "experienceCurrentlyWorkingChange",
												payload: !experience.currentlyWorking,
											});
										}}
									/>
								}
								label="Are you currently working here?"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								label="City"
								variant="standard"
								fullWidth
								value={experience.location.city}
								error={!experience.location.city && showValidation}
								helperText={
									!experience.location.city &&
									showValidation &&
									"Please enter city name."
								}
								onChange={(e) => {
									dispatch({
										type: "experienceCityChange",
										payload: e.target.value,
									});
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								label="Country"
								variant="standard"
								fullWidth
								value={experience.location.country}
								error={!experience.location.country && showValidation}
								helperText={
									!experience.location.country &&
									showValidation &&
									"Please enter country name."
								}
								onChange={(e) => {
									dispatch({
										type: "experienceCountryChange",
										payload: e.target.value,
									});
								}}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="standard"
								id="outlined-multiline-static"
								label="Description"
								multiline
								rows={4}
								fullWidth
								value={experience.description}
								onChange={(e) => {
									dispatch({
										type: "experienceDescriptionChange",
										payload: e.target.value,
									});
								}}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="standard"
								id="outlined-multiline-static"
								label="Achievements/Tasks"
								multiline
								rows={4}
								fullWidth
								helperText="Please enter one achievement/task per line."
								defaultValue={experience.tasks.join("\n")}
								onChange={(e) =>
									dispatch({
										type: "experienceTasksChange",
										payload: e.target.value.split(/\r?\n/),
									})
								}
							/>
						</Grid>
						<Grid item xs={12}>
							<Button
								variant="text"
								color="warning"
								startIcon={<ArrowBackIcon />}
								onClick={() => {
									setIsEditable(false);
									setEditIndex(null);
									dispatch({
										type: "experienceReset",
									});
									dispatch({
										type: "setIsShowAddExperience",
										payload: false,
									});
								}}
							>
								Cancel
							</Button>
							<LoadingButton
								type="submit"
								variant="contained"
								startIcon={editIndex == null && <AddIcon />}
								sx={{ float: "right" }}
							>
								{editIndex == null ? "Add" : "Update"}
							</LoadingButton>
						</Grid>
					</Grid>
				</form>
			) : (
				<>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Button
								color="secondary"
								startIcon={<AddIcon />}
								sx={{ float: "right" }}
								onClick={() => {
									setEditIndex(null);
									setIsEditable(true);
									dispatch({
										type: "setIsShowAddExperience",
										payload: true,
									});
								}}
							>
								Add Experience
							</Button>
						</Grid>
						<Grid item xs={12} className={styles.experiences}>
							{addedExperience.map((experience, index) => {
								const experienceFromDate = new Date(experience.from);
								const experienceToDate = new Date(experience.to);
								return (
									<Box className={styles.experience} key={index}>
										<Grid container>
											<Grid item xs={12}>
												<Box
													sx={{
														display: "flex",
														justifyContent: "space-between",
														alignItems: "center",
													}}
												>
													<p>
														<strong> {experience.company} | </strong>{" "}
														{experience.location.city},
														{experience.location.country}
													</p>
													<Box sx={{ display: "flex" }}>
														<IconButton
															color="secondary"
															aria-label="edit"
															onClick={() => {
																editHandle(index);
																setIsEditable(true);
															}}
														>
															<EditIcon />
														</IconButton>
														<IconButton
															color="error"
															aria-label="delete"
															onClick={() => {
																deleteHandle(index);
															}}
														>
															<DeleteForeverIcon />
														</IconButton>
													</Box>
												</Box>
												<h4>{experience.position}</h4>
											</Grid>
											<Grid item sx={12}>
												<p>
													{experienceFromDate.getMonth() +
														1 +
														"-" +
														experienceFromDate.getFullYear()}{" "}
													-{" "}
													{experience.currentlyWorking ? (
														<>Present</>
													) : (
														experienceToDate.getMonth() +
														1 +
														"-" +
														experienceToDate.getFullYear()
													)}
												</p>
											</Grid>
										</Grid>
									</Box>
								);
							})}
						</Grid>
						<Grid item xs={12}>
							<Button
								variant="text"
								color="warning"
								startIcon={<ArrowBackIcon />}
								onClick={handleBack}
							>
								Back
							</Button>

							<Box sx={{ float: "right" }}>
								<Box sx={{ float: "right" }}>
									{addedExperience.length < 1 && (
										<Button
											variant="text"
											color="warning"
											sx={{ mr: 2 }}
											onClick={handleNext}
										>
											Skip for Now
										</Button>
									)}

									<LoadingButton
										variant="contained"
										endIcon={<ArrowForwardIcon />}
										onClick={handleComplete}
									>
										Next
									</LoadingButton>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</>
			)}
		</>
	);
}

export default Experience;
