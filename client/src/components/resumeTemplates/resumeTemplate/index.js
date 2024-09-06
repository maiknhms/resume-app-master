import * as styles from "./resumeTemplate1.module.scss";
import { Avatar, Button, Chip, Grid, IconButton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { createRef, useReducer, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import EmailIcon from "@mui/icons-material/Email";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import ReactToPdf from "react-to-pdf";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

function ResumeTemplate1() {
	const resumeTemplateReducer = useSelector((state) => state.resumeTemplateReducer);
	const {
		picture,
		firstName,
		lastName,
		positionTitle,
		bio,
		email,
		contactNumber,
		skills,
		interests,
		languages,
		isShowAddEducation,
		education,
		isShowAddExperience,
		experience,
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
		var graduationDate = educationDate.getMonth() + 1 + "-" + educationDate.getFullYear();
	}
	if (experienceFromDateRaw.getMonth() && experienceFromDateRaw.getFullYear()) {
		var experienceFromDate =
			experienceFromDateRaw.getMonth() + 1 + "-" + experienceFromDateRaw.getFullYear();
	}
	if (experienceToDateRaw.getMonth() && experienceToDateRaw.getFullYear()) {
		var experienceToDate =
			experienceToDateRaw.getMonth() + 1 + "-" + experienceToDateRaw.getFullYear();
	}
	if (ProjectFromDateRaw.getMonth() && ProjectFromDateRaw.getFullYear()) {
		var ProjectFromDate =
			ProjectFromDateRaw.getMonth() + 1 + "-" + ProjectFromDateRaw.getFullYear();
	}
	if (ProjectToDateRaw.getMonth() && ProjectToDateRaw.getFullYear()) {
		var ProjectToDate = ProjectToDateRaw.getMonth() + 1 + "-" + ProjectToDateRaw.getFullYear();
	}
	if (certificationDateRaw.getMonth() && certificationDateRaw.getFullYear()) {
		var certificationDate =
			certificationDateRaw.getMonth() + 1 + "-" + certificationDateRaw.getFullYear();
	}

	return (
		<>
			<Box p={2} sx={{ overflowX: "auto" }} className="resumeTemplatePreview">
				<Box textAlign="right">
					{/* <ReactToPdf targetRef={ref} filename="resume.pdf">
						{({ toPdf }) => (
							<Button
								onClick={toPdf}
								variant="outlined"
								sx={{
									position: "fixed",
									bottom: "15px",
									right: "15px",
								}}
							>
								Download PDF
							</Button>
						)}
					</ReactToPdf> */}
				</Box>
				<Box
					px={2}
					sx={{
						width: "796.8px",
						margin: "auto",
					}}
				>
					<Grid container spacing={2} sx={{ p: "25px" }}>
						<Grid item>
							<Box sx={{ display: "flex" }}>
								<Avatar
									sx={{
										width: "130px",
										height: "130px",
									}}
									alt="Avatar"
									src={picture}
								/>
								<Box sx={{ pt: "10px", pl: "15px" }}>
									<Box className={styles.name} component={"h1"}>
										{firstName} {lastName}
									</Box>

									<Box component={"p"}>{positionTitle}</Box>
									<Box component={"p"}>{bio}</Box>
								</Box>
							</Box>
						</Grid>
					</Grid>

					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							p: "5px",
							borderTop: "2px solid",
							borderBottom: "2px solid",
						}}
					>
						<Box sx={{ display: "flex" }}>
							<EmailIcon />
							<Box component={"p"}>{email}</Box>
						</Box>
						<Box sx={{ display: "flex", marginLeft: "30px" }}>
							<SmartphoneIcon />
							<Box component={"p"}>{contactNumber}</Box>
						</Box>
					</Box>
					<Grid container spacing={2}>
						<Grid item md={6} sm={6} xs={6}>
							<Box sx={{ py: "20px" }}>
								<Box sx={{ py: "5px" }} component={"h2"}>
									Education
								</Box>
								{/* <Box>
									<Box sx={{ py: "5px" }} component={"h3"}>
										Study Program
									</Box>
									<Box component={"p"}>Institution/Place of Education</Box>
									<Box
										sx={{
											display: "flex",
											justifyContent: "space-between",
										}}
									>
										<Box component={"p"}>mm/yyyy</Box>
										<Box component={"p"}>city/country/gpa</Box>
									</Box>
									<Box component={"p"}>Courses</Box>
									<Box component={"p"}>- Computer Science</Box>
								</Box> */}
							</Box>

							{isShowAddEducation && (
								<Box sx={{ py: "20px" }}>
									<Box component={"p"}>
										{education.studyProgram}/{education.institute}
									</Box>
									<Box
										sx={{
											display: "flex",
											justifyContent: "space-between",
										}}
									>
										<Box component={"p"}>Graduation Date: {graduationDate}</Box>
										<Box component={"p"}>
											{education.location.city}/{education.location.country}/
											{education.marks}
										</Box>
									</Box>
									<Box component={"p"}>Courses</Box>
									{education.courses.map((course, index) => (
										<Box component="p" key={index}>
											- {course}
										</Box>
									))}
								</Box>
							)}
							<Box sx={{ py: "20px" }}>
								<Box sx={{ py: "5px" }} component={"h2"}>
									Work Experience
								</Box>
								{/* <Box>
									<Box sx={{ py: "5px" }} component={"h3"}>
										Position
									</Box>
									<Box component={"p"}>Workplace/Company</Box>
									<Box
										sx={{
											display: "flex",
											justifyContent: "space-between",
										}}
									>
										<Box component={"p"}>mm/yyyy</Box>
										<Box component={"p"}>City, Country (optional)</Box>
									</Box>
									<Box component={"p"}>description</Box>
									<Box component={"p"}>Achievements/Tasks</Box>
									<Box component={"p"}>- Accomplishment/Responsibility/Task</Box>
								</Box> */}
								{isShowAddExperience && (
									<Box>
										<Box sx={{ py: "5px" }} component={"h3"}>
											{experience.position}
										</Box>
										<Box component={"p"}>{experience.company}</Box>
										<Box
											sx={{
												display: "flex",
												justifyContent: "space-between",
											}}
										>
											<Box component={"p"}>
												From: {experienceFromDate} To:{experienceToDate}
											</Box>
											<Box component={"p"}>
												{experience.location.city},
												{experience.location.country}
												(optional)
											</Box>
										</Box>
										<Box component={"p"}>{experience.description}</Box>
										<Box component={"p"}>Achievements/Tasks</Box>
										{experience.tasks.map((task, index) => (
											<Box component={"p"} key={index}>
												- {task}
											</Box>
										))}
									</Box>
								)}
							</Box>
						</Grid>
						<Grid item xs={6} sm={6}>
							<Box sx={{ py: "20px" }}>
								<Box sx={{ py: "5px" }} component={"h2"}>
									Skills
								</Box>
								<Box sx={{ py: "5px" }} component={"p"}>
									{skills.map((skill, index) => (
										<Chip label={skill} variant="outlined" key={index} />
									))}
								</Box>
							</Box>
							<Box sx={{ py: "20px" }}>
								<Box sx={{ py: "5px" }} component={"h2"}>
									Personal Projects
								</Box>
								{/* <Box>
									<Box sx={{ display: "flex" }}>
										<Box sx={{ py: "5px" }} component={"p"}>
											Project Name
										</Box>
										<Box sx={{ py: "5px" }} component={"p"}>
											(02/2012 - 02/2021)
										</Box>
									</Box>
									<Box sx={{ py: "5px" }} component={"p"}>
										- DESCRIPYION /RESPONSIBILITY
									</Box>
								</Box> */}
								{isShowAddProject && (
									<Box>
										<Box sx={{ display: "flex" }}>
											<Box sx={{ py: "5px" }} component={"p"}>
												{project.projectName}
											</Box>
											<Box sx={{ py: "5px" }} component={"p"}>
												({ProjectFromDate} - {ProjectToDate})
											</Box>
										</Box>
										<Box sx={{ py: "5px" }} component={"p"}>
											{project.description}
										</Box>
									</Box>
								)}
							</Box>
							<Box sx={{ py: "20px" }}>
								<Box sx={{ py: "5px" }} component={"h2"}>
									Certificates
								</Box>
								{isShowAddCertificate && (
									<Box>
										<Box sx={{ display: "flex" }}>
											<Box sx={{ py: "5px" }} component={"p"}>
												{certificate.certificateName}
											</Box>
											<Box sx={{ py: "5px" }} component={"p"}>
												({certificationDate})
											</Box>
										</Box>
										<Box sx={{ py: "5px" }} component={"p"}>
											Certification Number: {certificate.certificationNumber}
										</Box>
										<Box sx={{ py: "5px" }} component={"p"}>
											{certificate.description}
										</Box>
									</Box>
								)}
							</Box>

							<Box sx={{ py: "20px" }}>
								<Box sx={{ py: "5px" }} component={"h2"}>
									Languages
								</Box>
								{languages.map((language, index) => (
									<Box sx={{ py: "5px" }} component={"p"} key={index}>
										{language}
									</Box>
								))}
							</Box>
							<Box sx={{ py: "20px" }}>
								<Box sx={{ py: "5px" }} component={"h2"}>
									Interests
								</Box>
								<Box sx={{ py: "5px" }} component={"p"}>
									{interests.map((interest, index) => (
										<Chip label={interest} variant="outlined" key={index} />
									))}
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	);
}

export default ResumeTemplate1;
