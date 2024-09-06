import {
	Backdrop,
	Box,
	Button,
	ClickAwayListener,
	Divider,
	Drawer,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Step,
	StepButton,
	StepLabel,
	Stepper,
	styled,
	SwipeableDrawer,
	Typography,
} from "@mui/material";
import * as styles from "./resumeBuilderStepper.module.scss";
import PropTypes from "prop-types";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import React, { useEffect, useState } from "react";
import Contact from "./contact";
import ResumeTemplate1 from "../resumeTemplates/resumeTemplate1";
import ResumeTemplate2 from "../resumeTemplates/resumeTemplate2";
import Education from "./education";
import Experience from "./experience";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import LanguageIcon from "@mui/icons-material/Language";
import InterestsIcon from "@mui/icons-material/Interests";
import Skills from "./skills";
import PersonalProjects from "./personalProjects";
import Certificates from "./certificates";
import Languages from "./languages";
import Interests from "./interests";
import LoadingButton from "@mui/lab/LoadingButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import config from "../../config.json";
import { dispatchGetAllResumes, fetchUserResume } from "../../redux/actions/usersAction";

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

// const AppBar = styled(MuiAppBar, {
// 	shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
// 	zIndex: theme.zIndex.drawer + 1,
// 	transition: theme.transitions.create(["width", "margin"], {
// 		easing: theme.transitions.easing.sharp,
// 		duration: theme.transitions.duration.leavingScreen,
// 	}),
// 	...(open && {
// 		marginLeft: drawerWidth,
// 		width: `calc(100% - ${drawerWidth}px)`,
// 		transition: theme.transitions.create(["width", "margin"], {
// 			easing: theme.transitions.easing.sharp,
// 			duration: theme.transitions.duration.enteringScreen,
// 		}),
// 	}),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
// 	({ theme, open }) => ({
// 		width: drawerWidth,
// 		flexShrink: 0,
// 		whiteSpace: "nowrap",
// 		boxSizing: "border-box",
// 		...(open && {
// 			...openedMixin(theme),
// 			"& .MuiDrawer-paper": openedMixin(theme),
// 		}),
// 		...(!open && {
// 			...closedMixin(theme),
// 			"& .MuiDrawer-paper": closedMixin(theme),
// 		}),
// 	})
// );

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
	backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
	zIndex: 1,
	color: "#fff",
	width: 50,
	height: 50,
	display: "flex",
	borderRadius: "50%",
	justifyContent: "center",
	alignItems: "center",
	...(ownerState.active && {
		backgroundImage:
			"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
		boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
	}),
	...(ownerState.completed && {
		backgroundImage:
			"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
	}),
}));

function ColorlibStepIcon(props) {
	const { active, completed, className } = props;

	const icons = {
		1: <ContactMailIcon />,
		2: <SchoolIcon />,
		3: <WorkIcon />,
		4: <AutoFixHighIcon />,
		5: <PsychologyIcon />,
		6: <CardMembershipIcon />,
		7: <LanguageIcon />,
		8: <InterestsIcon />,
		9: <VisibilityIcon />,
	};

	return (
		<ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
			{icons[String(props.icon)]}
		</ColorlibStepIconRoot>
	);
}

ColorlibStepIcon.propTypes = {
	/**
	 * Whether this step is active.
	 * @default false
	 */
	active: PropTypes.bool,
	className: PropTypes.string,
	/**
	 * Mark the step as completed. Is passed to child components.
	 * @default false
	 */
	completed: PropTypes.bool,
	/**
	 * The label displayed in the step icon.
	 */
	icon: PropTypes.node,
};

const steps = [
	"Contact",
	"Education",
	"Experience",
	"Skills",
	"Personal Projects",
	"Certifications",
	"Languages",
	"Interests",
];

function ResumeBuilderStepper(props) {
	const token = useSelector((state) => state.token);
	const selectedTemplateReducer = useSelector((state) => state.selectedTemplateReducer);
	const { selectedTemplate } = selectedTemplateReducer;
	const [activeStep, setActiveStep] = useState(0);
	const [completed, setCompleted] = useState({});
	const [isPreviewOpen, setIsPreviewOpen] = useState(false);
	const auth = useSelector((state) => state.auth);
	const [resumeData, setResumeData] = useState(null);

	const dispatch = useDispatch();

	const { user, isLogged } = auth;

	// const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const totalSteps = () => {
		return steps.length;
	};

	const completedSteps = () => {
		return Object.keys(completed).length;
	};

	const isLastStep = () => {
		return activeStep === totalSteps() - 1;
	};

	const allStepsCompleted = () => {
		return completedSteps() === totalSteps();
	};

	const handleNext = () => {
		const newActiveStep =
			isLastStep() && !allStepsCompleted()
				? // It's the last step, but not all steps have been completed,
				  // find the first step that has been completed
				  steps.findIndex((step, i) => !(i in completed))
				: activeStep + 1;
		setActiveStep(newActiveStep);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStep = (step) => () => {
		setActiveStep(step);
		handleDrawerClose();
	};

	const handleComplete = () => {
		const newCompleted = completed;
		newCompleted[activeStep] = true;
		setCompleted(newCompleted);
		handleNext();
	};

	const handleReset = () => {
		setActiveStep(0);
		setCompleted({});
	};

	const { window } = props;

	const container = window !== undefined ? () => window().document.body : undefined;
	const iOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);

	const resumePreview = (
		<Box className={styles.resumeTemplate}>
			{selectedTemplate == 1 || selectedTemplate == undefined ? (
				<ResumeTemplate1 />
			) : (
				<ResumeTemplate2 />
			)}
		</Box>
	);

	useEffect(() => {
		if (token) {
			const getResume = async () => {
				return await fetchUserResume(token).then((res) => {
					// dispatch(dispatchGetAllResumes(res));
					setResumeData(res.data[0]);
				});
			};
			getResume();
		}
	}, [token, dispatch]);

	return (
		<>
			<Grid container sx={{ position: "relative", overflow: "hidden" }}>
				<Grid item lg={7} xs={12}>
					<Grid container position="relative" sx={{ height: "100%" }}>
						<Grid
							item
							xs="auto"
							sx={{
								position: {
									md: "static",
									xs: "absolute",
								},
								left: "0",
								top: "0",
								zIndex: "2",
								height: "100%",
							}}
						>
							<ClickAwayListener onClickAway={handleDrawerClose}>
								<Drawer
									variant="permanent"
									open={open}
									sx={{
										transition: "all .3s ease",
										width: {
											md: "auto",
											xs: open ? "100%" : "60px",
										},
										height: "100%",
										".MuiPaper-root": {
											position: "static",
											overflow: "hidden",
										},
									}}
								>
									<DrawerHeader
										sx={{
											display: {
												md: "none",
											},
											minHeight: {
												xs: "48px",
											},
										}}
									>
										<IconButton
											color="inherit"
											aria-label="open drawer"
											onClick={handleDrawerOpen}
											edge="start"
											sx={{
												float: {
													md: "right",
												},
												...(open && { display: "none" }),
											}}
										>
											<ChevronRightIcon />
										</IconButton>
										<IconButton
											onClick={handleDrawerClose}
											sx={{ ...(!open && { display: "none" }) }}
										>
											<ChevronLeftIcon />
										</IconButton>
									</DrawerHeader>
									<Divider
										sx={{
											display: {
												md: "none",
											},
											minHeight: {
												xs: "48px",
											},
										}}
									/>
									<Stepper
										nonLinear
										activeStep={activeStep}
										sx={{
											flexDirection: "column",
											alignItems: "flex-start",
											padding: {
												md: "30px 0 0 15px",
												xs: "10px 0",
											},
										}}
									>
										{steps.map((label, index) => (
											<Step
												key={label}
												completed={completed[index]}
												sx={{ p: "5px 15px", width: "100%" }}
											>
												<StepButton
													color="inherit"
													// onClick={handleStep(index)}
													sx={{
														justifyContent: "flex-start",
														p: "5px 15px",
														m: "-5px -15px",
													}}
												>
													<StepLabel
														StepIconComponent={ColorlibStepIcon}
														sx={{
															".MuiStepLabel-labelContainer": {
																transition: "all .3s ease",
																opacity: {
																	md: 1,
																	xs: open ? "1" : "0",
																},
																paddingLeft: {
																	md: "8px",
																	xs: open ? "8px" : "0",
																},
																".MuiStepLabel-label": {
																	whiteSpace: "nowrap",
																},
															},
															".MuiStepLabel-iconContainer": {
																transition: "all 300ms ease",
																paddingRight: "0",
																">div": {
																	width: {
																		md: "50px",
																		xs: "30px",
																	},
																	height: {
																		md: "50px",
																		xs: "30px",
																	},
																},
																".MuiSvgIcon-root": {
																	fontSize: {
																		md: "1.5rem",
																		xs: "1rem",
																	},
																},
															},
														}}
													>
														{label}
													</StepLabel>
												</StepButton>
											</Step>
										))}
										<Step
											sx={{
												p: "5px 15px",
												width: "100%",
												display: {
													lg: "none",
												},
											}}
										>
											<StepButton
												color="inherit"
												sx={{
													justifyContent: "flex-start",
													p: "5px 15px",
													m: "-5px -15px",
												}}
												onClick={() => {
													setIsPreviewOpen(true);
												}}
											>
												<StepLabel
													StepIconComponent={ColorlibStepIcon}
													sx={{
														".MuiStepLabel-labelContainer": {
															transition: "all .3s ease",
															opacity: {
																md: 1,
																xs: open ? "1" : "0",
															},
															paddingLeft: {
																md: "8px",
																xs: open ? "8px" : "0",
															},
															".MuiStepLabel-label": {
																whiteSpace: "nowrap",
															},
														},
														".MuiStepLabel-iconContainer": {
															transition: "all 300ms ease",
															paddingRight: "0",
															">div": {
																backgroundColor: "#9c27b0",
																width: {
																	md: "50px",
																	xs: "30px",
																},
																height: {
																	md: "50px",
																	xs: "30px",
																},
															},
															".MuiSvgIcon-root": {
																fontSize: {
																	md: "1.5rem",
																	xs: "1rem",
																},
															},
														},
													}}
												>
													Preview
												</StepLabel>
											</StepButton>
											{/* <Button
												color="secondary"
												variant="contained"
												sx={{
													bottom: "15px",
													right: "15px",
													minWidth: "unset",
													borderRadius: "50%",
												}}
											>
												<VisibilityIcon />
											</Button> */}
										</Step>
									</Stepper>
								</Drawer>
							</ClickAwayListener>
							{/* <Stepper
							nonLinear
							activeStep={activeStep}
							sx={{
								flexDirection: "column",
								alignItems: "flex-start",
								padding: "30px 0 0 15px",
							}}
						>
							{steps.map((label, index) => (
								<Step
									key={label}
									completed={completed[index]}
									sx={{ p: "5px 15px", width: "100%" }}
								>
									<StepButton
										color="inherit"
										onClick={handleStep(index)}
										sx={{
											justifyContent: "flex-start",
											p: "5px 15px",
											m: "-5px -15px",
										}}
									>
										<StepLabel StepIconComponent={ColorlibStepIcon}>
											{label}
										</StepLabel>
									</StepButton>
								</Step>
							))}
						</Stepper> */}
						</Grid>
						<Grid item xs>
							<Backdrop
								open={open}
								onClick={handleDrawerClose}
								sx={{ zIndex: 1 }}
							></Backdrop>
							<Box
								sx={{
									backgroundColor: "#f9fbfa",
									width: "100%",
									height: "100%",
									minHeight: "100vh",
									py: 5,
									px: {
										xs: 3,
										md: 7,
										lg: 5,
									},
									pl: {
										xs: 10,
									},
								}}
							>
								{allStepsCompleted() ? (
									<React.Fragment>
										<Typography sx={{ mt: 2, mb: 1 }}>
											All steps completed - you&apos;re finished
										</Typography>
										<Box sx={{ mt: 2 }}>
											<Link href="/selectTemplate">
												<Button variant="contained" sx={{ float: "right" }}>
													Finish
												</Button>
											</Link>
										</Box>
									</React.Fragment>
								) : (
									<React.Fragment>
										{(() => {
											switch (activeStep) {
												case 0:
													return (
														<>
															<Contact
																resumeData={resumeData}
																handleComplete={handleComplete}
															/>
														</>
													);
												case 1:
													return (
														<Education
															resumeData={resumeData}
															handleComplete={handleComplete}
															handleNext={handleNext}
															handleBack={handleBack}
														/>
													);
												case 2:
													return (
														<Experience
															resumeData={resumeData}
															handleComplete={handleComplete}
															handleNext={handleNext}
															handleBack={handleBack}
														/>
													);
												case 3:
													return (
														<Skills
															resumeData={resumeData}
															handleComplete={handleComplete}
															handleNext={handleNext}
															handleBack={handleBack}
														/>
													);
												case 4:
													return (
														<PersonalProjects
															resumeData={resumeData}
															handleComplete={handleComplete}
															handleNext={handleNext}
															handleBack={handleBack}
														/>
													);
												case 5:
													return (
														<Certificates
															resumeData={resumeData}
															handleComplete={handleComplete}
															handleNext={handleNext}
															handleBack={handleBack}
														/>
													);
												case 6:
													return (
														<Languages
															resumeData={resumeData}
															handleComplete={handleComplete}
															handleNext={handleNext}
															handleBack={handleBack}
														/>
													);
												case 7:
													return (
														<Interests
															resumeData={resumeData}
															handleComplete={handleComplete}
															handleNext={handleNext}
															handleBack={handleBack}
														/>
													);
											}
										})()}

										{/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
										<Button
											color="inherit"
											disabled={activeStep === 0}
											onClick={handleBack}
											sx={{ mr: 1 }}
										>
											Back
										</Button>
										<Box sx={{ flex: "1 1 auto" }} />
										<Button onClick={handleNext} sx={{ mr: 1 }}>
											Next
										</Button>
										{activeStep !== steps.length &&
											(completed[activeStep] ? (
												<Typography
													variant="caption"
													sx={{ display: "inline-block" }}
												>
													Step {activeStep + 1} already completed
												</Typography>
											) : (
												<Button onClick={handleComplete}>
													{completedSteps() === totalSteps() - 1
														? "Finish"
														: "Complete Step"}
												</Button>
											))}
									</Box> */}
									</React.Fragment>
								)}
							</Box>
						</Grid>
					</Grid>
				</Grid>
				<Grid item lg={5}>
					<SwipeableDrawer
						disableBackdropTransition={!iOS}
						disableDiscovery={iOS}
						container={container}
						variant="temporary"
						open={isPreviewOpen}
						onOpen={() => setIsPreviewOpen(!isPreviewOpen)}
						onClose={() => setIsPreviewOpen(!isPreviewOpen)}
						anchor="right"
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							height: "100%",
							display: {
								lg: "none",
							},
						}}
					>
						{resumePreview}
					</SwipeableDrawer>
					<Box
						sx={{
							display: {
								xs: "none",
								lg: "block",
							},
						}}
					>
						{resumePreview}
					</Box>
				</Grid>
			</Grid>
		</>
	);
}

ResumeBuilderStepper.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default ResumeBuilderStepper;

export async function getServerSideProps(ctx) {
	const { id } = ctx.params;
	console.log("prams from props", ctx);
	return {
		props: {},
	};
}
