import React, { useEffect, useState } from "react";
import * as styles from "./certificates.module.scss";
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

function Certificates({ resumeData, handleNext, handleComplete, handleBack }) {
	const token = useSelector((state) => state.token);
	const resumeTemplateReducer = useSelector((state) => state.resumeTemplateReducer);
	const { certificate, addedCertificate } = resumeTemplateReducer;
	const [isEditable, setIsEditable] = useState(false);
	const [editIndex, setEditIndex] = useState(null);
	const [showValidation, setShowValidation] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		!isEditable && showValidation && setShowValidation(!showValidation);
	}, [isEditable]);

	useEffect(() => {
		if (resumeData != null && resumeData.certificate.length > 0) {
			dispatch({
				type: "certificateRemoveAll",
			});
			resumeData.certificate.map((certificate, index) => {
				dispatch({
					type: "certificateAdd",
					payload: certificate,
				});
			});
		}
	}, [resumeData]);

	const handleAdd = async (e) => {
		e.preventDefault();
		if (
			!certificate.certificateName ||
			!certificate.certificationDate ||
			!certificate.certificationNumber
		) {
			setShowValidation(true);
			return;
		}
		if (editIndex == null) {
			if (token) {
				try {
					await axios
						.post(`${config.API_ENDPOINT}/resume/certificate`, certificate, {
							headers: { Authorization: token },
							withCredentials: true,
						})
						.then((res) => {
							dispatch({
								type: "certificateAdd",
								payload: certificate,
							});
						});
				} catch (err) {
					console.log(err);
				}
			} else {
				if (token) {
					try {
						const id = resumeData.certificate[editIndex]._id;
						await axios
							.put(
								`${config.API_ENDPOINT}/resume/edit-certificate/${id}`,
								certificate,
								{
									headers: { Authorization: token },
									withCredentials: true,
								}
							)
							.then((res) => {
								dispatch({
									type: "addedCertificateChange",
									index: editIndex,
									payload: certificate,
								});
							});
					} catch (err) {
						console.log(err);
					}
				} else {
					dispatch({
						type: "addedCertificateChange",
						index: editIndex,
						payload: certificate,
					});
				}
			}
		} else {
			dispatch({
				type: "addedCertificateChange",
				index: editIndex,
				payload: certificate,
			});
		}
		setIsEditable(false);
		dispatch({
			type: "setIsShowAddCertificate",
			payload: false,
		});

		dispatch({
			type: "certificateReset",
		});
	};

	const editHandle = (i) => {
		setEditIndex(i);
		dispatch({
			type: "certificateChange",
			payload: addedCertificate[i],
		});
	};

	const deleteHandle = async (index) => {
		if (token) {
			try {
				const id = resumeData.certificate[index]._id;
				await axios
					.delete(`${config.API_ENDPOINT}/resume/certificate/${id}`, {
						headers: { Authorization: token },
						withCredentials: true,
					})
					.then((res) => {
						dispatch({
							type: "certificateRemove",
							payload: index,
						});
					});
			} catch (err) {
				console.log(err);
			}
		} else {
			dispatch({
				type: "certificateRemove",
				payload: index,
			});
		}
	};

	return (
		<>
			<h2>Certificates</h2>
			<Box component="p" mb={2}>
				Please add your Certifications.
			</Box>
			{isEditable ? (
				<form noValidate onSubmit={handleAdd}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								label="Certificate Name"
								variant="standard"
								fullWidth
								value={certificate.certificateName}
								error={!certificate.certificateName && showValidation}
								helperText={
									!certificate.certificateName &&
									showValidation &&
									"Please enter certificate name."
								}
								onChange={(e) => {
									dispatch({
										type: "certificateCertificateNameChange",
										payload: e.target.value,
									});
								}}
							/>
						</Grid>
						<Grid item xs={6}>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker
									label="Certification Date"
									views={["year", "month"]}
									value={certificate.certificationDate}
									onChange={(newValue) => {
										dispatch({
											type: "certificateCertificationDateChange",
											payload: newValue ? newValue.toString() : "",
										});
									}}
									renderInput={(params) => (
										<TextField
											variant="standard"
											{...params}
											fullWidth
											error={!certificate.certificationDate && showValidation}
											helperText={
												!certificate.certificationDate &&
												showValidation &&
												"Please enter certification date."
											}
										/>
									)}
								/>
							</LocalizationProvider>
						</Grid>
						<Grid item xs={6}>
							<TextField
								variant="standard"
								label="Certification Number"
								fullWidth
								value={certificate.certificationNumber}
								error={!certificate.certificationNumber && showValidation}
								helperText={
									!certificate.certificationNumber &&
									showValidation &&
									"Please enter certification number."
								}
								onChange={(e) => {
									dispatch({
										type: "certificateCertificationNumberChange",
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
								value={certificate.description}
								onChange={(e) => {
									dispatch({
										type: "certificateDescriptionChange",
										payload: e.target.value,
									});
								}}
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
										type: "certificateReset",
									});
									dispatch({
										type: "setIsShowAddCertificate",
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
										type: "setIsShowAddCertificate",
										payload: true,
									});
								}}
							>
								Add Certification
							</Button>
						</Grid>
						<Grid item xs={12} className={styles.certificates}>
							{addedCertificate.map((certificate, index) => {
								const certificationDate = new Date(certificate.certificationDate);
								return (
									<Box className={styles.certificates} key={index}>
										<Grid container>
											<Grid item xs={12}>
												<Box
													sx={{
														display: "flex",
														justifyContent: "space-between",
														alignItems: "center",
													}}
												>
													<h4>
														{certificate.certificateName}(
														{certificate.certificationNumber})
													</h4>
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
													{certificationDate.getMonth() +
														1 +
														"/" +
														certificationDate.getFullYear()}
												</p>
												<Box component="p" sx={{ listStyle: "inside" }}>
													{certificate.description}
												</Box>
											</Grid>
										</Grid>
									</Box>
								);
							})}
						</Grid>
						<Grid item xs={12}>
							<Button
								color="warning"
								startIcon={<ArrowBackIcon />}
								onClick={handleBack}
							>
								Back
							</Button>
							<Box sx={{ float: "right" }}>
								{addedCertificate.length < 1 && (
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

export default Certificates;
