import React, { useEffect, useState } from "react";
import * as styles from "./education.module.scss";
import axios from "axios";
import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	IconButton,
	TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import LoadingButton from "@mui/lab/LoadingButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch, useSelector } from "react-redux";
import config from "../../../config.json";

function Education({ resumeData, handleNext, handleComplete, handleBack }) {
	const token = useSelector((state) => state.token);
	const resumeTemplateReducer = useSelector((state) => state.resumeTemplateReducer);
	const { education, addedEducation } = resumeTemplateReducer;
	const [isEditable, setIsEditable] = useState(false);
	const [editIndex, setEditIndex] = useState(null);
	const [showValidation, setShowValidation] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		!isEditable && showValidation && setShowValidation(!showValidation);
	}, [isEditable]);

	useEffect(() => {
		if (resumeData != null && resumeData.education.length > 0) {
			dispatch({
				type: "educationRemoveAll",
			});
			resumeData.education.map((education, index) => {
				dispatch({
					type: "educationAdd",
					payload: {
						studyProgram: education.studyProgram,
						institute: education.institute,
						graduationDate: education.graduationDate,
						location: education.location,
						marks: education.marks,
						courses: education.courses,
					},
				});
			});
		}
	}, [resumeData]);

	const handleAdd = async (e) => {
		e.preventDefault();

		if (editIndex == null) {
			if (
				!education.studyProgram ||
				!education.institute ||
				!education.graduationDate ||
				!education.location.city
			) {
				setShowValidation(true);
				return;
			}

			if (token) {
				try {
					await axios
						.post(`${config.API_ENDPOINT}/resume/education`, education, {
							headers: { Authorization: token },
							withCredentials: true,
						})
						.then((res) => {
							dispatch({
								type: "educationAdd",
								payload: education,
							});
						});
				} catch (err) {
					console.log(err);
				}
			} else {
				dispatch({
					type: "educationAdd",
					payload: education,
				});
			}
		} else {
			if (
				!education.studyProgram ||
				!education.institute ||
				!education.graduationDate ||
				!education.location.city
			) {
				setShowValidation(true);
				return;
			}

			if (token) {
				try {
					const id = resumeData.education[editIndex]._id;
					await axios
						.put(`${config.API_ENDPOINT}/resume/edit-education/${id}`, education, {
							headers: { Authorization: token },
							withCredentials: true,
						})
						.then((res) => {
							dispatch({
								type: "addedEducationChange",
								index: editIndex,
								payload: education,
							});
						});
				} catch (err) {
					console.log(err);
				}
			} else {
				dispatch({
					type: "addedEducationChange",
					index: editIndex,
					payload: education,
				});
			}
		}

		setIsEditable(false);
		dispatch({
			type: "setIsShowAddEducation",
			payload: false,
		});

		dispatch({
			type: "educationReset",
		});
	};

	const editHandle = (i) => {
		setEditIndex(i);
		dispatch({
			type: "educationChange",
			payload: addedEducation[i],
		});
	};

	const deleteHandle = async (index) => {
		if (token) {
			try {
				const id = resumeData.education[index]._id;
				await axios
					.delete(`${config.API_ENDPOINT}/resume/education/${id}`, {
						headers: { Authorization: token },
						withCredentials: true,
					})
					.then((res) => {
						dispatch({
							type: "educationRemove",
							payload: index,
						});
					});
			} catch (err) {
				console.log(err);
			}
		} else {
			dispatch({
				type: "educationRemove",
				payload: index,
			});
		}
	};

	return (
		<>
			<h2>What's your most recent education?</h2>
			<Box component="p" mb={2}>
				If you've graduated from, or are currently enrolled in a college or university, you
				should NOT include your high school.
			</Box>
			{isEditable ? (
				<form noValidate onSubmit={handleAdd}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								label="Study Program"
								value={education.studyProgram}
								error={!education.studyProgram && showValidation}
								helperText={
									!education.studyProgram &&
									showValidation &&
									"Please enter study program."
								}
								onChange={(e) =>
									dispatch({
										type: "educationStudyProgramChange",
										payload: e.target.value,
									})
								}
								variant="standard"
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								label="Institute"
								variant="standard"
								fullWidth
								defaultValue={education.institute}
								error={!education.institute && showValidation}
								helperText={
									!education.institute &&
									showValidation &&
									"Please enter institute name."
								}
								onChange={(e) =>
									dispatch({
										type: "educationInstituteChange",
										payload: e.target.value,
									})
								}
							/>
						</Grid>
						<Grid item xs={12}>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker
									label="Graduation Date"
									views={["year", "month"]}
									disableFuture
									value={education.graduationDate}
									onChange={(newValue) => {
										dispatch({
											type: "educationGraduationDateChange",
											payload: newValue ? newValue.toString() : "",
										});
									}}
									renderInput={(params) => (
										<TextField
											variant="standard"
											{...params}
											fullWidth
											error={!education.graduationDate && showValidation}
											helperText={
												!education.graduationDate &&
												showValidation &&
												"Please enter graduation date."
											}
										/>
									)}
								/>
							</LocalizationProvider>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								label="City"
								variant="standard"
								fullWidth
								defaultValue={education.location.city}
								error={!education.location.city && showValidation}
								helperText={
									!education.location.city &&
									showValidation &&
									"Please enter city."
								}
								onChange={(e) =>
									dispatch({
										type: "educationCityChange",
										payload: e.target.value,
									})
								}
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								label="Country"
								variant="standard"
								fullWidth
								defaultValue={education.location.country}
								error={!education.location.country && showValidation}
								helperText={
									!education.location.country &&
									showValidation &&
									"Please enter country."
								}
								onChange={(e) =>
									dispatch({
										type: "educationCountryChange",
										payload: e.target.value,
									})
								}
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								label="Marks/CGPA"
								variant="standard"
								fullWidth
								value={education.marks}
								onChange={(e) =>
									dispatch({
										type: "educationMarksChange",
										payload: e.target.value,
									})
								}
							/>
						</Grid>
						<Grid item xs={12} sm={12}>
							<TextField
								id="outlined-multiline-static"
								label="Courses"
								fullWidth
								helperText="Please enter comma(,) to enter new course."
								variant="standard"
								defaultValue={education.courses}
								onChange={(e) =>
									dispatch({
										type: "educationCoursesChange",
										payload: e.target.value.split(/\r?,/),
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
										type: "educationReset",
									});
									dispatch({
										type: "setIsShowAddEducation",
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
										type: "setIsShowAddEducation",
										payload: true,
									});
								}}
							>
								Add Education
							</Button>
						</Grid>
						<Grid item xs={12} className={styles.educations}>
							{addedEducation.map((education, index) => {
								const educationDate = new Date(education.graduationDate);
								return (
									<Box className={styles.education} key={index}>
										<Grid container>
											<Grid item xs={12}>
												<Box
													sx={{
														display: "flex",
														justifyContent: "space-between",
														alignItems: "center",
													}}
												>
													<h4>{education.institute}</h4>
													<Box sx={{ display: "flex" }}>
														<IconButton
															color="secondary"
															aria-label="edit"
															onClick={() => {
																setIsEditable(true);
																editHandle(index);
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
											</Grid>
											<Grid item sx={12}>
												<p>
													{education.studyProgram} (
													{educationDate.getMonth() +
														1 +
														"-" +
														educationDate.getFullYear()}
													)
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
								{addedEducation.length < 1 && (
									<Button
										variant="text"
										color="warning"
										onClick={handleNext}
										sx={{ mr: 2 }}
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
						</Grid>
					</Grid>
				</>
			)}
		</>
	);
}

export default Education;
