import React, { useState } from "react";
import * as styles from "./resumesList.module.scss";

import { Box, Button, Grid } from "@mui/material";
import { Container, Stack } from "@mui/system";
import Add from "@mui/icons-material/Add";
import noResumes from "../../../public/images/no-resumes.svg";
import Image from "next/image";
import EditIcon from "@mui/icons-material/Edit";
import IosShareIcon from "@mui/icons-material/IosShare";
import DownloadIcon from "@mui/icons-material/Download";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

const options = ["None", "Atria", "Callisto", "Dione", "Ganymede"];
const ITEM_HEIGHT = 48;

function ResumesList() {
	const [haveResume, setHaveResume] = useState(true);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<Container>
				<Box
					className={styles.resumeHeader}
					sx={{ display: "flex", justifyContent: "space-between", padding: "50px 0" }}
				>
					<Box>
						<h1>Resmues</h1>
					</Box>
					<Link href="/resumeTemplates">
						<Button
							variant="contained"
							startIcon={<Add />}
							sx={{ textTransform: "capitalize" }}
						>
							Create New
						</Button>
					</Link>
				</Box>
				<Box
					className={styles.resumeBottomLine}
					sx={{ borderBottom: "1px solid rgb(217, 222, 235)" }}
				></Box>
			</Container>
			{haveResume ? (
				<>
					<Container>
						<Box
							className={styles.resumeContent}
							sx={{ textAlign: "center", padding: "50px 0" }}
						>
							<Box>
								<Image src={noResumes} alt="No Resumes" />
							</Box>
							<Box>
								<Box
									component={"h2"}
									sx={{
										fontSize: "22px",
										lineHeight: "28px",
										fontWeight: "600",
										marginBottom: "8px",
									}}
								>
									Your shining professional image
								</Box>
								<Box component={"p"} sx={{ maxWwidth: "428px", margin: "auto" }}>
									Custom-built, amazing resumes. Empower your job search in just a
									few clicks!
								</Box>
							</Box>
							<Link href="/resumeTemplates">
								<Button
									className={styles.newResumebtn}
									sx={{
										textTransform: "capitalize",
										marginTop: "32px",
										paddingLeft: "10px",
										width: {
											xs: "100%",
											sm: "initial",
										},
									}}
									variant="contained"
									startIcon={<Add />}
								>
									New Resume
								</Button>
							</Link>
						</Box>
					</Container>
				</>
			) : (
				<Container sx={{ padding: "50px 15px" }} className={styles.resumeNew}>
					<Grid
						className={styles.mainResume}
						container
						spacing={2}
						sx={{
							flexDirection: {
								xs: "column",
								md: "initial",
							},
						}}
					>
						<Grid item md={6}>
							<Grid container>
								<Grid item md={12} xs={12} sm={6}>
									<Grid container>
										<Grid item xs={4}>
											<Box
												className={styles.mainResumeLeft}
												sx={{
													border: "1px solid rgb(217, 222, 235)",
													width: "100%",
													height: {
														xs: "170px",
														md: "300px",
													},
												}}
											></Box>
										</Grid>
										<Grid item xs={8}>
											<Box
												className={styles.mainResumeContent}
												sx={{
													marginLeft: "30px",
												}}
											>
												<Box component={"h2"}>Untitled</Box>
												<Box component={"p"} sx={{ fontSize: "14px" }}>
													Updated 24 August, 14:44
												</Box>
												<Box
													sx={{
														display: "flex",
														flexDirection: "column",
													}}
												>
													<Button
														style={{
															border: "none",
															marginTop: "20px",
															justifyContent: "normal",
														}}
														variant="outlined"
														startIcon={<EditIcon />}
													>
														Edit
													</Button>
													<Button
														style={{
															border: "none",
															justifyContent: "normal",
														}}
														variant="outlined"
														startIcon={<IosShareIcon />}
													>
														Share a Link
													</Button>
													<Button
														style={{
															border: "none",
															justifyContent: "normal",
														}}
														variant="outlined"
														startIcon={<DownloadIcon />}
													>
														Download PDF
													</Button>
													<Button
														style={{
															marginLeft: "10px",
															justifyContent: "normal",
														}}
														aria-label="more"
														id="long-button"
														aria-controls={
															open ? "long-menu" : undefined
														}
														aria-expanded={open ? "true" : undefined}
														aria-haspopup="true"
														onClick={handleClick}
														startIcon={<MoreHorizIcon />}
													>
														More
													</Button>
													<Menu
														id="long-menu"
														MenuListProps={{
															"aria-labelledby": "long-button",
														}}
														anchorEl={anchorEl}
														open={open}
														onClose={handleClose}
														PaperProps={{
															style: {
																maxHeight: ITEM_HEIGHT * 4.5,
																width: "20ch",
															},
														}}
													>
														{options.map((option, index) => (
															<MenuItem
																key={index}
																selected={option === "Pyxis"}
																onClick={handleClose}
															>
																{option}
															</MenuItem>
														))}
													</Menu>
												</Box>
											</Box>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
						<Grid item md={6}>
							<Box
								className={styles.resumeRightSide}
								sx={{
									display: "flex",
									display: {
										xs: "none",
										md: "flex",
									},
								}}
							>
								<Grid container>
									<Grid item md={6}>
										<Box
											className={styles.addResumeBox}
											sx={{
												border: "1px solid rgb(217, 222, 235)",
												width: "100%",
												display: "flex",
												justifyContent: "center",
												"& :hover .addResumeBtn": {
													backgroundColor: "rgb(26, 145, 240)",
													color: "#fff",
												},
												height: {
													xs: "250px",
													md: "300px",
												},
											}}
										>
											<IconButton
												className={styles.addResumeBg}
												color="primary"
												aria-label="upload picture"
												component="label"
												size="large"
												sx={{ width: "100%", borderRadius: "0" }}
											>
												<input
													style={{
														"&:hover": {
															paddingTop: "10px",
														},
													}}
													hidden
													multiple
													type="file"
												/>
												<Box
													className={styles.addResumeBtn}
													sx={{
														fontSize: "40px",
														transition: "0.2s ease-out",
														borderRadius: "50%",
														width: "80px",
														height: "80px",
														backgroundColor: "rgb(239, 242, 249)",
														color: "rgb(190, 196, 213)",
													}}
												>
													<AddIcon
														fontSize="inherit"
														sx={{ marginTop: "20px" }}
													/>
												</Box>
											</IconButton>
										</Box>
									</Grid>
									<Grid item md={6}>
										<Box
											className={styles.addResumeContent}
											sx={{ marginLeft: "30px" }}
										>
											<Box component={"h2"}>New Resume</Box>
											<Box
												sx={{ maxWidth: "230px", fontSize: "14px" }}
												component={"p"}
											>
												Create a tailored resume for each job application.
												Double your chances of getting hired!
											</Box>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</Grid>
					</Grid>
				</Container>
			)}
		</>
	);
}

export default ResumesList;
