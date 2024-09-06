import { Avatar, Box, Checkbox, Chip, Container, FormControlLabel, Grid } from "@mui/material";
import React from "react";
import styles from "./resumeTemplate2.module.scss";
import EmailIcon from "@mui/icons-material/Email";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import Image from "next/image";
import educationIcon from "../../../../public/images/education.svg";
import SmallBoxIcon from "../../../../public/images/small-box.svg";
import bagIcon from "../../../../public/images/bag.svg";
import skillsIcon from "../../../../public/images/skills.svg";
import projectIcon from "../../../../public/images/pp.svg";
import organizationIcon from "../../../../public/images/organization.svg";
import certificateIcon from "../../../../public/images/certificate.svg";
import languagesIcon from "../../../../public/images/languages.svg";
import interestIcon from "../../../../public/images/interest.svg";
import { useSelector } from "react-redux";

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
		addedProject,
		isShowAddCertificate,
		certificate,
		addedCertificate,
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
			<Box
				className="resumeTemplatePreviewWrapper"
				sx={{
					width: "796.8px",
					minHeight: "1123px",
					margin: "30px auto",
				}}
			>
				<Box ref={ref} className="resumeTemplatePreview">
					<Grid container spacing={2} sx={{ mb: "30px" }}>
						<Grid item xs={12}>
							<Box sx={{ display: "flex" }}>
								<Box
									sx={{
										mr: 2,
									}}
								>
									<Avatar
										sx={{
											width: "90px",
											height: "90px",
											border: "1px solid",
										}}
										alt=""
										src={picture}
									/>
								</Box>
								<Box>
									<Box component={"h1"}>
										{firstName} {lastName}
									</Box>
									<Box
										className={`${styles.genalColor}`}
										sx={{
											fontSize: "16px",
										}}
										component={"p"}
									>
										{positionTitle}
									</Box>
									<Box component={"p"}>{bio}</Box>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={4}></Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={8}>
							<Box sx={{ display: "flex", alignItems: "center" }}>
								<Box
									sx={{
										position: "relative",
									}}
								>
									<Box
										sx={{
											right: "12px",
											height: "30px",
											zIndex: "2",
											width: "8px",
											position: "absolute",
											top: "50%",
											transform: "translateY(-50%)",
											borderTopLeftRadius: "10px",
											borderBottomLeftRadius: "10px",
											backgroundColor: "#449399",
										}}
									></Box>
									<Box
										sx={{
											right: "1px",
											height: "35px",
											zIndex: "3",
											width: "9px",
											position: "absolute",
											top: "50%",
											transform: "translateY(-50%)",
											borderTopLeftRadius: "10px",
											borderBottomLeftRadius: "10px",
											backgroundColor: "#449399",
										}}
									></Box>
								</Box>
								<Box
									sx={{
										width: "40px",
										height: "40px",
										zIndex: "10",
										backgroundColor: "#313c4e",
										borderRadius: "10px",
										position: "relative",
									}}
								>
									<Box
										sx={{
											position: "absolute",
											left: "50%",
											top: "50%",
											transform: "translate(-50%, -50%)",
											width: "20px",
											height: "20px",
										}}
									>
										<Image src={educationIcon} alt="eduction" layout="fill" />
									</Box>
								</Box>
								<Box className={`${styles.headingStyle}`} component={"h3"}>
									Education
								</Box>
							</Box>
							{addedEducation.map((education, index) => {
								const educationDate = new Date(education.graduationDate);
								return (
									<Box
										key={index}
										sx={{
											marginBottom: "20px",
										}}
									>
										<Box
											className={`${styles.subHeadingStyle}`}
											component={"h3"}
										>
											{education.studyProgram}
										</Box>
										<Box
											className={`${styles.subHeadingStyle}`}
											component={"p"}
											sx={{
												mt: "0px !important",
											}}
										>
											{education.institute}
										</Box>
										<Box
											className={`${styles.genalColor} ${styles.subInnerHeading}`}
											sx={{
												display: "flex",
												justifyContent: "space-between",
											}}
										>
											<Box component={"p"} sx={{ fontSize: "12px" }}>
												{educationDate.getMonth() +
													1 +
													"/" +
													educationDate.getFullYear()}
												{/* <FormControlLabel
												control={<Checkbox defaultChecked />}
												label="Present"
											/> */}
											</Box>
											<Box
												sx={{ mr: "40px", fontSize: "12px" }}
												component={"p"}
											>
												{education.location.city}/
												{education.location.country}
												{education.marks && "/"}
												{education.marks}
											</Box>
										</Box>
										{education.courses.length > 0 &&
											education.courses[0] != "" && (
												<Box
													className={`${styles.genalColor} ${styles.subInnerHeading}`}
													component={"p"}
												>
													Courses
												</Box>
											)}
										{education.courses.map((course, index) => (
											<Box sx={{ display: "flex" }} key={index}>
												{course != "" && (
													<Box
														sx={{
															mt: "2px",
															width: "12px",
														}}
													>
														<Image src={SmallBoxIcon} alt="SmallBox" />
													</Box>
												)}
												<Box
													className={`${styles.subInnerHeading}`}
													sx={{
														ml: "5px",
														alignSelf: "center",
														fontSize: "12px !important",
													}}
													component={"p"}
												>
													{course}
												</Box>
											</Box>
										))}
									</Box>
								);
							})}
							{isShowAddEducation && (
								<Box>
									<Box className={`${styles.subHeadingStyle}`} component={"h3"}>
										{education.studyProgram}
									</Box>
									<Box className={`${styles.subHeadingStyle}`} component={"p"}>
										{education.institute}
									</Box>
									<Box
										className={`${styles.genalColor} ${styles.subInnerHeading}`}
										sx={{
											display: "flex",
											justifyContent: "space-between",
										}}
									>
										<Box component={"p"}>
											{graduationDate}
											{/* <FormControlLabel
												control={<Checkbox defaultChecked />}
												label="Present"
											/> */}
										</Box>
										<Box sx={{ mr: "40px" }} component={"p"}>
											{education.location.city}/{education.location.country}
											{education.marks && "/"}
											{education.marks}
										</Box>
									</Box>
									<Box
										className={`${styles.genalColor} ${styles.subInnerHeading}`}
										sx={{ fontSize: "18px" }}
										component={"p"}
									>
										Courses
									</Box>
									{education.courses.map((course, index) => (
										<Box sx={{ display: "flex" }} key={index}>
											<Box
												sx={{
													mt: "5px",
												}}
											>
												<Image
													sx={{
														width: "12px",
														height: "12px",
													}}
													src={SmallBoxIcon}
													alt="SmallBox"
												/>
											</Box>
											<Box
												className={`${styles.subInnerHeading}`}
												sx={{
													ml: "5px",
													alignSelf: "center",
												}}
												component={"p"}
											>
												{course}
											</Box>
										</Box>
									))}
								</Box>
							)}
							<Box sx={{ display: "flex", mt: "25px" }}>
								<Box
									sx={{
										position: "relative",
									}}
								>
									<Box
										sx={{
											right: "12px",
											height: "30px",
											zIndex: "2",
											width: "8px",
											position: "absolute",
											top: "50%",
											transform: "translateY(-50%)",
											borderTopLeftRadius: "10px",
											borderBottomLeftRadius: "10px",
											backgroundColor: "#449399",
										}}
									></Box>
									<Box
										sx={{
											right: "1px",
											height: "35px",
											zIndex: "3",
											width: "9px",
											position: "absolute",
											top: "50%",
											transform: "translateY(-50%)",
											borderTopLeftRadius: "10px",
											borderBottomLeftRadius: "10px",
											backgroundColor: "#449399",
										}}
									></Box>
								</Box>
								<Box
									sx={{
										width: "40px",
										height: "40px",
										zIndex: "10",
										backgroundColor: "#313c4e",
										borderRadius: "10px",
										position: "relative",
									}}
								>
									<Box
										sx={{
											position: "absolute",
											left: "50%",
											top: "50%",
											transform: "translate(-50%, -50%)",
											width: "20px",
											height: "20px",
										}}
									>
										<Image src={bagIcon} alt="bag" layout="fill" />
									</Box>
								</Box>
								<Box className={`${styles.headingStyle}`} component={"h3"}>
									Work Experience
								</Box>
							</Box>
							{addedExperience.map((experience, index) => {
								const experienceFrom = new Date(experience.from);
								const experienceTo = new Date(experience.to);
								return (
									<Box key={index}>
										<Box
											className={`${styles.subHeadingStyle}`}
											component={"h3"}
										>
											{experience.position}
										</Box>
										<Box
											className={`${styles.subHeadingStyle}`}
											component={"p"}
											sx={{ mt: "0 !important" }}
										>
											{experience.company}
										</Box>
										<Box
											className={`${styles.genalColor} ${styles.subInnerHeading}`}
											sx={{
												display: "flex",
												justifyContent: "space-between",
											}}
										>
											<Box component={"p"} sx={{ fontSize: "12px" }}>
												{experienceFrom.getMonth() +
													1 +
													"/" +
													experienceFrom.getFullYear()}{" "}
												to{" "}
												{experience.currentlyWorking ? (
													<>Present</>
												) : (
													experienceTo.getMonth() +
													1 +
													"/" +
													experienceTo.getFullYear()
												)}
											</Box>
											<Box
												sx={{ mr: "40px", fontSize: "12px" }}
												component={"p"}
											>
												{experience.location.city},
												{experience.location.country}
											</Box>
										</Box>
										<Box
											className={`${styles.subInnerHeading}`}
											component={"p"}
										>
											{experience.description}
										</Box>
										{experience.tasks.length > 0 && experience.tasks[0] != "" && (
											<Box
												className={`${styles.genalColor} ${styles.subInnerHeading}`}
												component={"p"}
												mb={1}
											>
												Achievements/Tasks
											</Box>
										)}
										{experience.tasks.map((task, index) => (
											<Box
												sx={{ display: "flex", marginBottom: "5px" }}
												key={index}
											>
												{task != "" && (
													<Box
														sx={{
															width: "12px",
															minWidth: "12px",
														}}
													>
														<Image src={SmallBoxIcon} alt="SmallBox" />
													</Box>
												)}
												<Box
													className={`${styles.subInnerHeading}`}
													sx={{
														ml: "5px",
														alignSelf: "center",
														fontSize: "12px !important",
														lineHeight: "1",
													}}
													component={"p"}
												>
													{task}
												</Box>
											</Box>
										))}

										{/* <Box
										sx={{ mt: "5px" }}
										className={`${styles.subInnerHeading} ${styles.genalColor}`}
										component={"p"}
									>
										Contact :
									</Box>
									<Box className={`${styles.subInnerHeading}`} component={"p"}>
										contact person
									</Box>
									<Box className={`${styles.subInnerHeading}`} component={"p"}>
										contact info
									</Box> */}
									</Box>
								);
							})}
							{isShowAddExperience && (
								<Box>
									<Box className={`${styles.subHeadingStyle}`} component={"h3"}>
										{experience.position}
									</Box>
									<Box
										className={`${styles.subHeadingStyle}`}
										component={"p"}
										mt="0px !important"
									>
										{experience.company}
									</Box>
									<Box
										className={`${styles.genalColor} ${styles.subInnerHeading}`}
										sx={{
											display: "flex",
											justifyContent: "space-between",
										}}
									>
										<Box component={"p"} sx={{ fontSize: "12px" }}>
											{experienceFromDate} to {experienceToDate}
										</Box>
										<Box sx={{ mr: "40px", fontSize: "12px" }} component={"p"}>
											{experience.location.city},{experience.location.country}
										</Box>
									</Box>
									<Box
										className={`${styles.subInnerHeading}`}
										component={"p"}
										sx={{ fontSize: "14px !important" }}
									>
										{experience.description}
									</Box>
									<Box
										className={`${styles.genalColor} ${styles.subInnerHeading}`}
										component={"p"}
									>
										Achievements/Tasks
									</Box>
									{experience.tasks.map((task, index) => (
										<Box sx={{ display: "flex" }} key={index}>
											<Box
												sx={{
													width: "12px",
													minWidth: "12px",
												}}
											>
												<Image src={SmallBoxIcon} alt="SmallBox" />
											</Box>
											<Box
												className={`${styles.subInnerHeading}`}
												sx={{
													ml: "5px",
													alignSelf: "center",
													mb: "5px",
													fontSize: "14px !important",
												}}
												component={"p"}
											>
												{task}
											</Box>
										</Box>
									))}

									{/* <Box
										sx={{ mt: "5px" }}
										className={`${styles.subInnerHeading} ${styles.genalColor}`}
										component={"p"}
									>
										Contact :
									</Box>
									<Box className={`${styles.subInnerHeading}`} component={"p"}>
										contact person
									</Box>
									<Box className={`${styles.subInnerHeading}`} component={"p"}>
										contact info
									</Box> */}
								</Box>
							)}
						</Grid>
						<Grid item xs={4} sx={{}}>
							<Box container>
								<Box item xs={12}>
									<Box
										sx={{
											position: "relative",
											backgroundColor: "#313C4E",
											height: "100%",
											width: "100%",
											borderRadius: "10px",
											p: 2,
											marginBottom: "25px",
										}}
									>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
											}}
										>
											<Box
												sx={{
													backgroundColor: "#fff",
													width: "30px",
													height: "30px",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													borderRadius: "25%",
													color: "#313c4e",
												}}
											>
												<EmailIcon sx={{ width: "15px", height: "15px" }} />
											</Box>

											<Box
												sx={{
													color: "#fff",
													marginLeft: "7px",
													fontSize: "12px",
													wordBreak: "break-all",
												}}
												component={"p"}
											>
												{email}
											</Box>
										</Box>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												marginTop: "18px",
											}}
										>
											<Box
												sx={{
													backgroundColor: "#fff",
													width: "30px",
													height: "30px",
													padding: "7px",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													borderRadius: "25%",
													color: "#313c4e",
												}}
											>
												<SmartphoneIcon
													sx={{ width: "15px", height: "15px" }}
												/>
											</Box>
											<Box
												sx={{
													color: "#fff",
													marginLeft: "7px",
													fontSize: "12px",
													wordBreak: "break-all",
												}}
												component={"p"}
											>
												{contactNumber}
											</Box>
										</Box>
									</Box>
								</Box>
								<Box item xs={12}>
									<Box
										sx={{
											marginBottom: "25px",
											backgroundColor: "#313C4E",
											color: "#fff",
											borderRadius: "10px",
											p: 2,
										}}
									>
										<Box sx={{ marginBottom: "20px" }}>
											<Box sx={{ display: "flex", marginBottom: "5px" }}>
												<Box
													sx={{
														backgroundColor: "#fff",
														width: "30px",
														height: "30px",
														display: "flex",
														padding: "6px",
														justifyContent: "center",
														alignItems: "center",
														borderRadius: "25%",
													}}
												>
													<Image src={skillsIcon} alt="skills" />
												</Box>
												<Box
													className={`${styles.rightsideHeading}`}
													component={"h2"}
													sx={{ ml: "10px" }}
												>
													Skills
												</Box>
											</Box>
											<Box>
												{/* <Chip
											className={`${styles.skillSize}`}
											label="HTML5"
											variant="outlined"
										/> */}
												{skills.map((skill, index) => (
													<Chip
														className={`${styles.skillSize}`}
														label={skill}
														variant="outlined"
														key={index}
													/>
												))}
											</Box>
										</Box>
										<Box sx={{ marginBottom: "20px" }}>
											<Box sx={{ display: "flex", mb: "5px" }}>
												<Box
													sx={{
														backgroundColor: "#fff",
														width: "30px",
														height: "30px",
														display: "flex",
														padding: "6px",
														justifyContent: "center",
														alignItems: "center",
														borderRadius: "25%",
													}}
												>
													<Image src={projectIcon} alt="project" />
												</Box>
												<Box
													className={`${styles.rightsideHeading}`}
													component={"h2"}
													sx={{ ml: "10px" }}
												>
													PERSONAL PROJECTS
												</Box>
											</Box>
											{addedProject.map((project, index) => {
												const projectFrom = new Date(project.from);
												const projectTo = new Date(project.to);
												return (
													<Box key={index} mb="5px">
														<Box
															className={`${styles.rightsideSubHeading}`}
															sx={{ display: "flex" }}
														>
															<Box
																sx={{ fontWeight: 600 }}
																component={"p"}
															>
																{project.projectName}
															</Box>
															<Box
																sx={{ fontSize: "12px" }}
																component={"p"}
															>
																(
																{projectFrom.getMonth() +
																	1 +
																	"/" +
																	projectFrom.getFullYear()}{" "}
																-{" "}
																{projectTo.getMonth() +
																	1 +
																	"/" +
																	projectTo.getFullYear()}
																)
															</Box>
														</Box>
														<Box sx={{ display: "flex" }}>
															{/* <Box
														sx={{
															mt: "5px",
														}}
													>
														<Image
															sx={{
																width: "12px",
																height: "12px",
															}}
															src={SmallBoxIcon}
															alt="SmallBox"
														/>
													</Box> */}
															<Box
																sx={{
																	fontSize: "12px",
																	ml: "5px",
																	alignSelf: "center",
																}}
																component={"p"}
															>
																{project.description}
															</Box>
														</Box>
													</Box>
												);
											})}
											{isShowAddProject && (
												<Box>
													<Box
														className={`${styles.rightsideSubHeading}`}
														sx={{ display: "flex" }}
													>
														<Box sx={{ py: "5px" }} component={"p"}>
															{project.projectName}
														</Box>
														<Box sx={{ py: "5px" }} component={"p"}>
															({ProjectFromDate} - {ProjectToDate})
														</Box>
													</Box>
													<Box sx={{ display: "flex" }}>
														{/* <Box
													sx={{
														mt: "5px",
													}}
												>
													<Image
														sx={{
															width: "12px",
															height: "12px",
														}}
														src={SmallBoxIcon}
														alt="SmallBox"
													/>
												</Box> */}
														<Box
															sx={{
																fontSize: "12px",
																ml: "5px",
																alignSelf: "center",
															}}
															component={"p"}
														>
															{project.description}
														</Box>
													</Box>
												</Box>
											)}
										</Box>
										{/* <Box sx={{ marginBottom: "46px" }}>
									<Box sx={{ display: "flex" }}>
										<Box
											sx={{
												backgroundColor: "#fff",
												width: "46px",
												height: "46px",
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												borderRadius: "25%",
											}}
										>
											<Image src={organizationIcon} alt="organization" />
										</Box>
										<Box
											className={`${styles.rightsideHeading}`}
											component={"h2"}
											sx={{ ml: "10px" }}
										>
											ORGANIZATIONS
										</Box>
									</Box>
									<Box
										className={`${styles.rightsideSubHeading}`}
										sx={{ display: "flex" }}
									>
										<Box sx={{ py: "5px" }} component={"p"}>
											Organization Name
										</Box>
										<Box sx={{ py: "5px" }} component={"p"}>
											(02/2012 - 02/2021)
										</Box>
									</Box>
									<Box component={"p"}>Role</Box>
								</Box> */}
										<Box sx={{ marginBottom: "20px" }}>
											<Box sx={{ display: "flex" }}>
												<Box
													sx={{
														backgroundColor: "#fff",
														width: "30px",
														height: "30px",
														display: "flex",
														padding: "6px",
														justifyContent: "center",
														alignItems: "center",
														borderRadius: "25%",
													}}
												>
													<Image
														src={certificateIcon}
														alt="certificate"
													/>
												</Box>
												<Box
													className={`${styles.rightsideHeading}`}
													component={"h2"}
													sx={{ ml: "10px" }}
												>
													CERTIFICATES
												</Box>
											</Box>
											{addedCertificate.map((certificate, index) => {
												const projectFrom = new Date(project.from);
												const projectTo = new Date(project.to);
												return (
													<Box key={index}>
														<Box
															className={`${styles.rightsideSubHeading}`}
															sx={{ display: "flex" }}
														>
															<Box sx={{ py: "5px" }} component={"p"}>
																{certificate.certificateName}
															</Box>
															<Box sx={{ py: "5px" }} component={"p"}>
																((
																{projectFrom.getMonth() +
																	1 +
																	projectFrom.getFullYear()}{" "}
																-{" "}
																{projectTo.getMonth() +
																	1 +
																	projectTo.getFullYear()}
																))
															</Box>
														</Box>
														<Box component={"p"}>
															{certificate.description}
														</Box>
													</Box>
												);
											})}
											{isShowAddCertificate && (
												<Box>
													<Box
														className={`${styles.rightsideSubHeading}`}
														sx={{ display: "flex" }}
													>
														<Box sx={{ py: "5px" }} component={"p"}>
															{certificate.certificateName}
														</Box>
														<Box sx={{ py: "5px" }} component={"p"}>
															({certificationDate})
														</Box>
													</Box>
													<Box component={"p"}>
														{certificate.description}
													</Box>
												</Box>
											)}
										</Box>

										<Box sx={{ marginBottom: "20px" }}>
											<Box sx={{ display: "flex", mb: "5px" }}>
												<Box
													sx={{
														backgroundColor: "#fff",
														width: "30px",
														height: "30px",
														display: "flex",
														padding: "6px",
														justifyContent: "center",
														alignItems: "center",
														borderRadius: "25%",
													}}
												>
													<Image src={languagesIcon} alt="languages" />
												</Box>
												<Box
													className={`${styles.rightsideHeading}`}
													component={"h2"}
													sx={{ ml: "10px" }}
												>
													LANGUAGES
												</Box>
											</Box>
											{/* <Box
										className={`${styles.rightsideSubHeading}`}
										sx={{ py: "5px" }}
										component={"p"}
									>
										Urdu
									</Box> */}
											{languages.map((language, index) => (
												<Box
													className={`${styles.rightsideSubHeading}`}
													component={"p"}
													key={index}
												>
													{language}
												</Box>
											))}
										</Box>
										<Box>
											<Box sx={{ display: "flex", mb: "5px" }}>
												<Box
													sx={{
														backgroundColor: "#fff",
														width: "30px",
														height: "30px",
														display: "flex",
														padding: "6px",
														justifyContent: "center",
														alignItems: "center",
														borderRadius: "25%",
													}}
												>
													<Image src={interestIcon} alt="interest" />
												</Box>
												<Box
													className={`${styles.rightsideHeading}`}
													component={"h2"}
													sx={{ ml: "10px" }}
												>
													INTERESTS
												</Box>
											</Box>
											{/* <Chip
											className={`${styles.interestStyle}`}
											label="Reading Books"
											variant="outlined"
										/> */}
											{interests.map((interest, index) => (
												<Chip
													className={`${styles.interestStyle}`}
													label={interest}
													variant="outlined"
													key={index}
												/>
											))}
										</Box>
									</Box>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	);
});

export default index;
