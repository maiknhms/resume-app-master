import React, { useEffect, useState } from "react";
import * as styles from "./personalProjects.module.scss";
import { Box, Button, Grid, IconButton, TextField } from "@mui/material";
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

function PersonalProjects({ resumeData, handleNext, handleComplete, handleBack }) {
	const token = useSelector((state) => state.token);
	const resumeTemplateReducer = useSelector((state) => state.resumeTemplateReducer);
	const { project, addedProject } = resumeTemplateReducer;
	const [isEditable, setIsEditable] = useState(false);
	const [editIndex, setEditIndex] = useState(null);
	const [showValidation, setShowValidation] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		!isEditable && showValidation && setShowValidation(!showValidation);
	}, [isEditable]);

	useEffect(() => {
		if (resumeData != null && resumeData.project.length > 0) {
			dispatch({
				type: "projectRemoveAll",
			});
			resumeData.project.map((project, index) => {
				dispatch({
					type: "projectAdd",
					payload: project,
				});
			});
		}
	}, [resumeData]);

	const handleAdd = async (e) => {
		e.preventDefault();

		if (!project.projectName || !project.from || !project.to) {
			setShowValidation(true);
			return;
		}

		if (editIndex == null) {
			if (token) {
				try {
					await axios
						.post(`${config.API_ENDPOINT}/resume/project`, project, {
							headers: { Authorization: token },
							withCredentials: true,
						})
						.then((res) => {
							dispatch({
								type: "projectAdd",
								payload: project,
							});
						});
				} catch (err) {
					console.log(err);
				}
			} else {
				dispatch({
					type: "projectAdd",
					payload: project,
				});
			}
		} else {
			if (token) {
				try {
					const id = resumeData.project[editIndex]._id;
					await axios
						.put(`${config.API_ENDPOINT}/resume/edit-project/${id}`, project, {
							headers: { Authorization: token },
							withCredentials: true,
						})
						.then((res) => {
							dispatch({
								type: "addedProjectChange",
								index: editIndex,
								payload: project,
							});
						});
				} catch (err) {
					console.log(err);
				}
			} else {
				dispatch({
					type: "addedProjectChange",
					index: editIndex,
					payload: project,
				});
			}
		}

		setIsEditable(false);
		dispatch({
			type: "setIsShowAddProject",
			payload: false,
		});

		dispatch({
			type: "projectReset",
		});
	};

	const editHandle = (i) => {
		setEditIndex(i);
		dispatch({
			type: "projectChange",
			payload: addedProject[i],
		});
	};

	const deleteHandle = async (index) => {
		if (token) {
			try {
				const id = resumeData.project[index]._id;
				await axios
					.delete(`${config.API_ENDPOINT}/resume/project/${id}`, {
						headers: { Authorization: token },
						withCredentials: true,
					})
					.then((res) => {
						dispatch({
							type: "projectRemove",
							payload: index,
						});
					});
			} catch (err) {
				console.log(err);
			}
		} else {
			dispatch({
				type: "projectRemove",
				payload: index,
			});
		}
	};

	return (
		<>
			<h2>Personal Projects</h2>
			<Box component="p" mb={2}>
				Please add your personal projects.
			</Box>
			{isEditable ? (
				<form noValidate onSubmit={handleAdd}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								label="Project Name"
								variant="standard"
								fullWidth
								value={project.projectName}
								error={!project.projectName && showValidation}
								helperText={
									!project.projectName &&
									showValidation &&
									"Please enter project name."
								}
								onChange={(e) => {
									dispatch({
										type: "projectProjectNameChange",
										payload: e.target.value,
									});
								}}
							/>
						</Grid>
						<Grid item xs={6}>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker
									label="From"
									views={["year", "month"]}
									value={project.from}
									onChange={(newValue) => {
										dispatch({
											type: "projectFromChange",
											payload: newValue ? newValue.toString() : "",
										});
									}}
									renderInput={(params) => (
										<TextField
											variant="standard"
											{...params}
											fullWidth
											error={!project.from && showValidation}
											helperText={
												!project.from &&
												showValidation &&
												"Please enter project start date."
											}
										/>
									)}
								/>
							</LocalizationProvider>
						</Grid>
						<Grid item xs={6}>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker
									label="To"
									views={["year", "month"]}
									value={project.to}
									onChange={(newValue) => {
										dispatch({
											type: "projectToChange",
											payload: newValue ? newValue.toString() : "",
										});
									}}
									renderInput={(params) => (
										<TextField
											variant="standard"
											{...params}
											fullWidth
											error={!project.to && showValidation}
											helperText={
												!project.to &&
												showValidation &&
												"Please enter project end date."
											}
										/>
									)}
								/>
							</LocalizationProvider>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="standard"
								id="outlined-multiline-static"
								label="Description"
								multiline
								rows={4}
								value={project.description}
								onChange={(e) => {
									dispatch({
										type: "projectDescriptionChange",
										payload: e.target.value,
									});
								}}
								fullWidth
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
										type: "projectReset",
									});
									dispatch({
										type: "setIsShowAddProject",
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
									setIsEditable(true);
									dispatch({
										type: "setIsShowAddProject",
										payload: true,
									});
								}}
							>
								Add Project
							</Button>
						</Grid>
						<Grid item xs={12} className={styles.personalProjects}>
							{addedProject.map((project, index) => {
								const projectFromDate = new Date(project.from);
								const projectToDate = new Date(project.to);
								return (
									<Box className={styles.personalProject} key={index}>
										<Grid container>
											<Grid item xs={12}>
												<Box
													sx={{
														display: "flex",
														justifyContent: "space-between",
														alignItems: "center",
													}}
												>
													<h4>{project.projectName}</h4>
													<Box>
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
													{projectFromDate.getMonth() +
														1 +
														"-" +
														projectFromDate.getFullYear()}
													-{" "}
													{projectToDate.getMonth() +
														1 +
														"-" +
														projectToDate.getFullYear()}
												</p>
												<Box sx={{ listStyle: "inside" }} component="p">
													{project.description}
												</Box>
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
								{addedProject.length < 1 && (
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
						</Grid>
					</Grid>
				</>
			)}
		</>
	);
}

export default PersonalProjects;
