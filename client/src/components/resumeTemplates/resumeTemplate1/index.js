import React, { useEffect } from "react";
import * as styles from "./resumeTemplate1.module.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";
// import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";

const index = React.forwardRef((props, ref) => {
	const resumeTemplateReducer = useSelector((state) => state.resumeTemplateReducer);

	const {
		picture,
		firstName,
		lastName,
		positionTitle,
		bio,
		email,
		contactNumber,
		address,
		skills,
		interests,
		languages,
		isShowAddEducation,
		education,
		addedEducation,
		isShowAddExperience,
		experience,
		addedExperience,
		isShowAddProject,
		project,
		isShowAddCertificate,
		certificate,
	} = resumeTemplateReducer;

	const educationDate = new Date(education.graduationDate);
	const experienceFromDateRaw = new Date(experience.from);
	const experienceToDateRaw = new Date(experience.to);
	const ProjectFromDateRaw = new Date(project.from);
	const ProjectToDateRaw = new Date(project.to);
	const certificationDateRaw = new Date(certificate.certificationDate);

	if (educationDate.getMonth() && educationDate.getFullYear()) {
		var graduationDate = educationDate.getMonth() + 1 + "/" + educationDate.getFullYear();
	}
	if (experienceFromDateRaw.getMonth() && experienceFromDateRaw.getFullYear()) {
		var experienceFromDate =
			experienceFromDateRaw.getMonth() + 1 + "/" + experienceFromDateRaw.getFullYear();
	}
	if (experienceToDateRaw.getMonth() && experienceToDateRaw.getFullYear()) {
		var experienceToDate =
			experienceToDateRaw.getMonth() + 1 + "/" + experienceToDateRaw.getFullYear();
	}
	if (ProjectFromDateRaw.getMonth() && ProjectFromDateRaw.getFullYear()) {
		var ProjectFromDate =
			ProjectFromDateRaw.getMonth() + 1 + "/" + ProjectFromDateRaw.getFullYear();
	}
	if (ProjectToDateRaw.getMonth() && ProjectToDateRaw.getFullYear()) {
		var ProjectToDate = ProjectToDateRaw.getMonth() + 1 + "/" + ProjectToDateRaw.getFullYear();
	}
	if (certificationDateRaw.getMonth() && certificationDateRaw.getFullYear()) {
		var certificationDate =
			certificationDateRaw.getMonth() + 1 + "/" + certificationDateRaw.getFullYear();
	}
	return (
		<>
			<Box
				className="resumeTemplatePreviewWrapper"
				sx={{
					overflowX: "auto",
					width: "796.8px",
					minHeight: "1123px",
					margin: "30px auto",
				}}
			>
				<Box ref={ref} p={4} className="resumeTemplatePreview">
					<Container maxWidth="md" sx={{ p: "0px !important" }}>
						<Box className={styles.leftSideDesign}>
							<Box>
								<Box className={styles.heading}>
									<Box component={"h2"}>
										{firstName} {lastName}
									</Box>
									<Box component={"p"}>{positionTitle}</Box>
								</Box>
								<Grid container spacing={2}>
									<Grid sx={{ position: "relative" }} item xs={4}>
										{/* <Box className={styles.horizentalLine}></Box> */}
										<Box className={styles.subHeading}>
											<Box component={"h3"}>Details</Box>
											<Box className={styles.underLine}></Box>
										</Box>
										<Box className={styles.subHeadingInner}>
											<Box component={"h4"}>ADDRESS</Box>
											<Box component={"p"}>{address}</Box>
										</Box>
										<Box className={styles.subHeadingInner}>
											<Box component={"h4"}>Phone</Box>
											<Box component={"p"}>{contactNumber}</Box>
										</Box>
										<Box className={styles.subHeadingInner}>
											<Box component={"h4"}>Email</Box>
											<Box component={"p"} className={styles.email}>
												{email}
											</Box>
										</Box>
										{/* <Box className={styles.subHeading}>
										<Box component={"h3"}>Links</Box>
										<Box className={styles.underLine}></Box>
									</Box>
									<Box className={styles.subHeadingInner}>
										<Box component={"p"}>Linkedin</Box>
										<Box component={"p"}>Facebook</Box>
										<Box component={"p"}>Instagram</Box>
									</Box> */}
										<Box className={styles.subHeading}>
											<Box component={"h3"}>Skills</Box>
											<Box className={styles.underLine}></Box>
										</Box>
										{/* <Box>
										<Box component={"p"}>Problem Solving Skills</Box>
										<Box className={styles.skillUnderLine}></Box>
									</Box> */}
										{skills.map((skill, index) => (
											<Box key={index}>
												<Box component={"p"}>{skill}</Box>
												<Box className={styles.skillUnderLine}></Box>
											</Box>
										))}

										<Box className={styles.subHeading}>
											<Box component={"h3"}>Languages</Box>
											<Box className={styles.underLine}></Box>
										</Box>
										{/* <Box>
										<Box component={"p"}>English</Box>
										<Box className={styles.skillUnderLine}></Box>
									</Box> */}
										{languages.map((language, index) => (
											<Box key={index}>
												<Box component={"p"}>{language}</Box>
												<Box className={styles.skillUnderLine}></Box>
											</Box>
										))}
									</Grid>
									<Grid className={styles.rightSection} item xs={8}>
										<Box className={styles.rightSectionBorder}></Box>
										<Box className={styles.rightSectionBox}>
											<Box className={styles.rightSectionJobHistory}>
												<Box className={styles.subHeading}>
													<Box component={"h3"}>Profile</Box>
													<Box className={styles.underLine}></Box>
												</Box>
												<Box component={"p"}>{bio}</Box>

												<Box className={styles.subHeading}>
													<Box component={"h3"}>Employment History</Box>
													<Box className={styles.underLine}></Box>
												</Box>
												{addedExperience.map((experience, index) => {
													const experienceFrom = new Date(
														experience.from
													);
													const experienceTo = new Date(experience.to);
													return (
														<Box key={index} sx={{ mb: 2 }}>
															<Box
																className={
																	styles.rightSideSubHeadingInner
																}
															>
																<Box component={"h4"}>
																	{experience.position}
																	,<br />
																	{experience.company}
																</Box>
																<Box component={"p"}>
																	{experience.location.city},
																	{experience.location.country}
																</Box>
															</Box>
															<Box component={"h5"}>
																{experienceFrom.getMonth() +
																	1 +
																	"/" +
																	experienceFrom.getFullYear()}{" "}
																-{" "}
																{experience.currentlyWorking ? (
																	<>Present</>
																) : (
																	experienceTo.getMonth() +
																	1 +
																	"/" +
																	experienceTo.getFullYear()
																)}
															</Box>
															<Box component={"p"}>
																{experience.description}
															</Box>
														</Box>
													);
												})}
												{isShowAddExperience && (
													<Box>
														<Box
															className={
																styles.rightSideSubHeadingInner
															}
														>
															<Box component={"h4"}>
																{experience.position}, <br />
																{experience.company}
															</Box>
															<Box component={"p"}>
																{experience.location.city},
																{experience.location.country}
															</Box>
														</Box>
														<Box component={"h5"}>
															From: {experienceFromDate} To:{" "}
															{experienceToDate}
														</Box>
														<Box component={"p"}>
															{experience.description}
														</Box>
													</Box>
												)}
											</Box>
											<Box>
												<Box className={styles.subHeading}>
													<Box component={"h3"}>EDUCATION</Box>
													<Box className={styles.underLine}></Box>
												</Box>
												{addedEducation.map((education, index) => {
													const educationDate = new Date(
														education.graduationDate
													);
													return (
														<Box key={index}>
															<Box
																className={
																	styles.rightSideSubHeadingInner
																}
															>
																<Box component={"h4"}>
																	{education.studyProgram}
																	,<br />
																	{education.institute}
																</Box>
																<Box component={"p"}>
																	{education.location.city},{" "}
																	{education.location.country}
																</Box>
															</Box>
															<Box component={"h5"}>
																{educationDate.getMonth() +
																	1 +
																	"/" +
																	educationDate.getFullYear()}
															</Box>
														</Box>
													);
												})}

												{isShowAddEducation && (
													<Box>
														<Box
															className={
																styles.rightSideSubHeadingInner
															}
														>
															<Box component={"h4"}>
																{education.studyProgram},
																<br />
																{education.institute}
															</Box>
															<Box component={"p"}>
																{education.location.city},
																{education.location.country}
															</Box>
														</Box>
														<Box component={"h5"}>{graduationDate}</Box>
													</Box>
												)}
											</Box>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</Box>
					</Container>
				</Box>
			</Box>
		</>
	);
});

export default index;
