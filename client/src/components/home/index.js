import {
	Accordion,
	AccordionSummary,
	CardMedia,
	Container,
	Grid,
	Rating,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as styles from "./home.module.scss";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Trophy from "../../../public/images/Trophy.svg";
import Writting from "../../../public/images/writting.svg";
import Recruiter from "../../../public/images/recruiter.svg";
import CV1 from "../../../public/images/cv-1.png";
import CV2 from "../../../public/images/cv-2.png";
import CV3 from "../../../public/images/cv-3.png";
import DreamJobImg from "../../../public/images/dreamJobImg.svg";
import coverLetterImg from "../../../public/images/coverLetterImg.svg";
import modernImage from "../../../public/images/moderJob.svg";
import signUp from "../../../public/images/signUp.svg";
import create from "../../../public/images/create.svg";
import download from "../../../public/images/download.svg";
import Resume1 from "../../../public/images/resume-1.png";
import Resume2 from "../../../public/images/resume-2.png";
import Resume3 from "../../../public/images/resume-3.png";
import TrustPilot from "../../../public/images/TrustPilot.svg";
import Linkdin from "../../../public/images/linkdin.svg";
import Pinterest from "../../../public/images/pinterest.svg";
import Insta from "../../../public/images/insta.svg";
import Facebook from "../../../public/images/facebook.svg";
import Letter6 from "../../../public/images/letter6.jpg";
import Letter7 from "../../../public/images/letter7.png";
import Letter8 from "../../../public/images/letter8.png";
import Letter1 from "../../../public/images/letter1.png";
import Letter10 from "../../../public/images/letter10.png";
import Letter3 from "../../../public/images/letter3.png";
import Btemplate1 from "../../../public/images/resumeBuilder.png";
import Btemplate2 from "../../../public/images/designIt.png";
import Btemplate3 from "../../../public/images/resumeDesign.png";
import Btemplate4 from "../../../public/images/btemplate4.png";
import Btemplate5 from "../../../public/images/btemplate5.png";
import Btemplate6 from "../../../public/images/btemplate6.png";
import Arrow from "../../../public/images/arrow.png";
import heroBanner from "../../../public/images/heroBanner1.png";
import HeroImg from "../../../public/images/heroImg2.png";
import HeroImage3 from "../../../public/images/heroImage3.png";

import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/system";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import comoanyLogos from "../../../public/images/comoanyLogos.svg";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import resumeTemplates from "../../templates/resumes.json";
import { useDispatch } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}
TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};
function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => <ArrowBackIosIcon {...props} />;
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
	<ArrowForwardIosIcon {...props} />
);

const settings = {
	dots: true,
	infinite: true,
	speed: 900,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: <SlickArrowLeft />,
	nextArrow: <SlickArrowRight />,
	responsive: [
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
			},
		},
	],
};
const setting = {
	className: "center",
	centerMode: true,
	infinite: true,
	centerPadding: "60px",
	slidesToShow: 3,
	speed: 900,
	prevArrow: <SlickArrowLeft />,
	nextArrow: <SlickArrowRight />,
	responsive: [
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};

const HeroSettings = {
	dots: true,
	infinite: true,
	speed: 900,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: <SlickArrowLeft />,
	nextArrow: <SlickArrowRight />,
};
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};
function Home() {
	const [value, setValue] = React.useState(0);
	const [isSliderShow, setIsSliderShow] = useState(false);
	const dispatch = useDispatch();

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const Bsettings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "0",
		slidesToShow: 3,
		speed: 900,
		prevArrow: <SlickArrowLeft />,
		nextArrow: <SlickArrowRight />,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
				},
			},
		],
	};
	const [open, setOpen] = React.useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	function handleBeautySlider() {
		setIsSliderShow(true);
	}

	return (
		<>
			<Box className={`${styles.heroSlider} heroSlide`}>
				<Box>
					<Slider {...HeroSettings}>
						<Box className={styles.heroImg1}>
							<Grid className={styles.leftSideBanner} container spacing={2}>
								<Grid sx={{ position: "relative" }} item md={6}>
									<Box className={styles.heroImgTitle} component={"h1"}>
										Discover the Best Resume Maker
									</Box>
									<Box className={styles.arrowImg}>
										<Image src={Arrow} alt="Arrow" />
									</Box>
									<Box className={styles.heroImgText}>
										Easy to start. Free to try.
										<Box component={"p"}>
											Follow a few easy prompts and build your resume in one,
											two, click.
										</Box>
									</Box>
									<Link href="/resumeBuilder">
										<a
											onClick={() => {
												dispatch({
													type: "selectedTemplateChange",
													payload: 1,
												});
											}}
										>
											<Button
												className={styles.heroButton}
												variant="contained"
												endIcon={<TrendingFlatIcon />}
											>
												Make My Resume
											</Button>
										</a>
									</Link>
								</Grid>
								<Grid className={styles.heroBanner} item md={6}>
									<Box>
										<Image src={HeroImg} alt="Hero Banner" />
									</Box>
									<Link href="/resumeBuilder">
										<a
											onClick={() => {
												dispatch({
													type: "selectedTemplateChange",
													payload: 1,
												});
											}}
										>
											<Button
												className={styles.heroImgButton}
												variant="contained"
												endIcon={<TrendingFlatIcon />}
											>
												Make My Resume
											</Button>
										</a>
									</Link>
								</Grid>
							</Grid>
						</Box>
						<Box className={styles.heroImg1}>
							<Grid className={styles.leftSideBanner} container spacing={2}>
								<Grid sx={{ position: "relative" }} item md={6}>
									<Box className={styles.heroImgTitle} component={"h1"}>
										Easy Online Resume Creator
									</Box>
									<Box className={styles.arrowImg}>
										<Image src={Arrow} alt="Arrow" />
									</Box>
									<Box className={styles.heroImgText} component={"p"}>
										The best resume maker on the market – featuring proven and
										professional templates, career-specific tips, and
										job-tailored phrases for every role.
									</Box>
									<Link href="/resumeBuilder">
										<a
											onClick={() => {
												dispatch({
													type: "selectedTemplateChange",
													payload: 1,
												});
											}}
										>
											<Button
												className={styles.heroButton}
												variant="contained"
												endIcon={<TrendingFlatIcon />}
											>
												Make My Resume
											</Button>
										</a>
									</Link>
								</Grid>
								<Grid className={styles.heroBanner} item md={6}>
									<Box>
										<Image src={heroBanner} alt="Hero Banner" />
									</Box>
									<Link href="/resumeBuilder">
										<a
											onClick={() => {
												dispatch({
													type: "selectedTemplateChange",
													payload: 1,
												});
											}}
										>
											<Button
												className={styles.heroImgButton}
												variant="contained"
												endIcon={<TrendingFlatIcon />}
											>
												Make My Resume
											</Button>
										</a>
									</Link>
								</Grid>
							</Grid>
						</Box>
						<Box className={styles.heroImg1}>
							<Grid className={styles.leftSideBanner} container spacing={2}>
								<Grid sx={{ position: "relative" }} item md={6}>
									<Box className={styles.heroImgTitle} component={"h1"}>
										Pick Your Favorite Resume Template
									</Box>
									<Box className={styles.arrowImg}>
										<Image src={Arrow} alt="Arrow" />
									</Box>
									<Box className={styles.heroImgText} component={"p"}>
										Follow a few easy prompts and build your resume in one, two,
										click.
									</Box>
									<Link href="/resumeBuilder">
										<a
											onClick={() => {
												dispatch({
													type: "selectedTemplateChange",
													payload: 1,
												});
											}}
										>
											<Button
												className={styles.heroButton}
												variant="contained"
												endIcon={<TrendingFlatIcon />}
											>
												Make My Resume
											</Button>
										</a>
									</Link>
								</Grid>
								<Grid className={styles.heroBanner} item md={6}>
									<Box>
										<Image src={HeroImage3} alt="Hero Banner" />
									</Box>
									<Link href="/resumeBuilder">
										<a
											onClick={() => {
												dispatch({
													type: "selectedTemplateChange",
													payload: 1,
												});
											}}
										>
											<Button
												className={styles.heroImgButton}
												variant="contained"
												endIcon={<TrendingFlatIcon />}
											>
												Make My Resume
											</Button>
										</a>
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Slider>
				</Box>
			</Box>
			<Container>
				<div className={styles.jobSection}>
					<Typography className={styles.jobWorthy} variant="h4">
						Effortlessly make a job-worthy resume and cover letter that gets you hired
						faster
					</Typography>
					<Grid container spacing={2}>
						<Grid item md={8}>
							<img
								className={styles.sideImage}
								src={"/images/dublin-resume-templates.jpg"}
								alt="Dublin resume"
							/>
						</Grid>

						<Grid item md={4}>
							<div className={styles.rightSide}>
								<div className={styles.featureBar}>
									<div className={styles.featureBarProgress}></div>
								</div>
								<div className={styles.featureTitle}>Easily edit online</div>
								<div className={styles.featureSubtitle}>
									<div className={styles.featureSubtitleContent}>
										Creating the perfectly formatted, custom tailored resume has
										never been easier.
									</div>
								</div>
							</div>
							<div className={styles.rightSide}>
								<div className={styles.featureBar}></div>
								<div className={styles.featureTitle}>Add pre-written phrases</div>
								<div className={styles.featureSubtitle}>
									<div className={styles.featureSubtitleContent}>
										Beat writer’s block with pre-written and tested phrases that
										successfully communicate your experience and skills.
									</div>
								</div>
							</div>
							<div className={styles.rightSide}>
								<div className={styles.featureBar}></div>
								<div className={styles.featureTitle}>Automatic spell-checker</div>
								<div className={styles.featureSubtitle}>
									<div className={styles.featureSubtitleContent}>
										Our built-in spell-checker will protect you from mistakes
										and typos. Remove all the grammar anxiety from resume
										writing!
									</div>
								</div>
							</div>
							<div className={styles.rightSide}>
								<div className={styles.featureBar}></div>
								<div className={styles.featureTitle}>Export to anything</div>
								<div className={styles.featureSubtitle}>
									<div className={styles.featureSubtitleContent}>
										You’re in control of your resume, our exports work perfectly
										with Word or any other app.
									</div>
								</div>
							</div>
						</Grid>
					</Grid>
				</div>
			</Container>

			<div className={styles.makerSection}>
				<Container>
					<Grid className={styles.makerResponsive} container spacing={2}>
						<Grid item md={7}>
							<Box>
								<img
									className={styles.makerSideImage}
									src={"/images/GuideSideImage.svg"}
									alt="simple Image"
								/>
							</Box>
						</Grid>
						<Grid item md={5}>
							<div className={styles.resumerMakerContent}>
								<Typography variant="h1">
									Use the best resume maker as your guide
								</Typography>
								<Box variant="p" className={styles.resumerMakerDescription}>
									Getting that dream job can seem like an impossible task. We’re
									here to change that. Give yourself a real advantage with the
									best online resume maker: created by experts, improved by data,
									trusted by millions of professionals.
								</Box>
								<div className={styles.resumerMakerAction}></div>
							</div>
							<Box className={styles.resumerMakerButton} spacing={2} direction="row">
								<Link href="/resumeBuilder">
									<a
										onClick={() => {
											dispatch({
												type: "selectedTemplateChange",
												payload: 1,
											});
										}}
									>
										<Box>
											<Button variant="contained">Create My Resume</Button>
										</Box>
									</a>
								</Link>
								<div>
									<Box
										className={styles.makerWatchVideo}
										sx={{
											color: "#000",
										}}
									>
										<Button
											onClick={handleClickOpen}
											variant="outlined"
											startIcon={<PlayArrowIcon />}
										>
											Watch Video
										</Button>

										<Dialog
											sx={{
												width: {
													"& .MuiPaper-root": {
														width: "100% ",
													},
												},
											}}
											open={open}
											TransitionComponent={Transition}
											keepMounted
											onClose={handleClose}
											aria-describedby="alert-dialog-slide-description"
										>
											<DialogTitle>
												<IconButton
													aria-label="close"
													onClick={handleClose}
													sx={{ float: "right" }}
												>
													<CloseIcon />
												</IconButton>
											</DialogTitle>
											<DialogContent>
												<Box className={styles.videoIframe}>
													<iframe
														className={styles.iframeVideo}
														width="650"
														height="315"
														src="https://www.youtube.com/embed/5Peo-ivmupE"
														title="YouTube video player"
														frameBorder="0"
														allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
														allowFullScreen
													></iframe>
												</Box>
											</DialogContent>
										</Dialog>
									</Box>
								</div>
							</Box>
						</Grid>
					</Grid>
				</Container>
				<Container sx={{ py: "48px" }}>
					<Grid container spacing={2}>
						<Grid item md={4}>
							<Box className={styles.resumerMakerGuide}>
								<Box className={styles.resumerMakerImg}>
									<Image src={Trophy} alt="Trophy" />
								</Box>
								<Box className={styles.resumerMakerText}>
									<Box
										component={"h6"}
										sx={{
											display: "block",
											marginBottom: "4px",
											fontSize: "22px",
											lineHeight: "28px",
											fontWeight: "600",
											color: "#1A1C69",
										}}
									>
										Make a resume that wins interviews
									</Box>
									<Box component={"p"}>
										Use our resume maker with its advanced creation tools to
										tell a professional story that engages recruiters, hiring
										managers and even CEOs.
									</Box>
								</Box>
							</Box>
						</Grid>
						<Grid item md={4}>
							<Box className={styles.resumerMakerGuide}>
								<Box className={styles.resumerMakerImg}>
									<Image src={Writting} alt="Writting" />
								</Box>
								<Box className={styles.resumerMakerText}>
									<Box
										component={"h6"}
										sx={{
											display: "block",
											marginBottom: "4px",
											fontSize: "20px",
											lineHeight: "28px",
											fontWeight: "600",
											color: "#1A1C69",
										}}
									>
										Resume writing made easy
									</Box>
									<Box component={"p"}>
										Resume writing has never been this effortless. Pre-generated
										text, visual designs and more - all already integrated into
										the resume maker. Just fill in your details.
									</Box>
								</Box>
							</Box>
						</Grid>
						<Grid item md={4}>
							<Box className={styles.resumerMakerGuide}>
								<Box className={styles.resumerMakerImg}>
									<Image src={Recruiter} alt="Recruiter" />
								</Box>
								<Box className={styles.resumerMakerText}>
									<Box
										component={"h6"}
										sx={{
											display: "block",
											marginBottom: "4px",
											fontSize: "22px",
											lineHeight: "28px",
											fontWeight: "600",
											color: "#1A1C69",
										}}
									>
										A recruiter-tested CV maker tool
									</Box>
									<Box component={"p"}>
										<Link href="/">
											<a style={{ color: "#1a91f0" }}>Our resume builder</a>
										</Link>
										and its pre-generated content are tested by recruiters and
										IT experts. We help your CV become truly competitive in the
										hiring process.
									</Box>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</div>
			<Box className={styles.readyUseTemplate} sx={{ position: "relative" }}>
				<Box
					className={styles.readyUseInnerTemplate}
					sx={{
						padding: {
							md: "60px 0",
							xs: "0",
						},
						pt: {
							md: "0",
							xs: "30px",
						},
						backgroundColor: "#282b8f",
						overflow: "hidden",
						width: "100%",
						minHeight: {
							md: "800px",
							xs: "unset",
						},
					}}
				>
					<Container
						sx={{
							position: "relative",
						}}
					>
						<Box
							sx={{
								p: {
									md: "100px 50px 50px 0;",
								},
								color: "#fff",
								width: {
									md: "40%",
								},
								transition: "all .3s ease",
								opacity: isSliderShow ? "0" : "1",
								minHeight: isSliderShow ? "0" : "700px",
							}}
						>
							<Box
								sx={{
									fontSize: {
										md: "44px",
									},
									lineHeight: {
										md: "48px",
									},
									mb: {
										md: "24px",
									},
								}}
								component={"h1"}
							>
								Beautiful ready-to-use resume templates
							</Box>
							<Box sx={{ mb: "24px", fontSize: "18px" }}>
								Win over employers and recruiters by using one of our 18 elegant,
								professionally-designed resume templates. Download to word or PDF.
							</Box>

							<Link href="/resumeTemplates">
								<a>
									<Button sx={{ p: "14px 24px", mb: "30px" }} variant="contained">
										Select Template
									</Button>
								</a>
							</Link>
							<Box>
								<Rating
									sx={{ color: "#00B67A", mb: "16px" }}
									name="size-large"
									defaultValue={2}
									size="large"
								/>
							</Box>
							<Box>4.5 out of 5</Box>
							<Box>
								based on 41,918 reviews on{" "}
								<Link href="/about">
									<a className={styles.trustPilotLink}>Trustpilot</a>
								</Link>
							</Box>
						</Box>
						<Box
							className={`beautySectionSlider ${isSliderShow && "sliderShow"}`}
							sx={{
								width: {
									md: "100%",
								},
								mt: {
									md: "0",
									sm: "180px",
									xs: "250px",
								},
								position: "absolute",
								top: "0",
								left: "0",
								right: "0",
								transition: "all .3s ease",
								ml: {
									md: isSliderShow ? "0" : "40%",
								},
								pt: "60px",
							}}
						>
							<Box className={styles.arrowSlider}>
								<Button
									sx={{
										display: isSliderShow ? "none" : "block",
									}}
									onClick={handleBeautySlider}
									className={styles.arrowIcon}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										className="resume-templates__arrow"
									>
										<path d="M14.6 16.7l-1.4 1.5-5.9-5.5a1 1 0 010-1.4l6-5.5 1.3 1.5L9.5 12l5 4.7z"></path>
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										className="resume-templates__arrow"
									>
										<path d="M14.6 16.7l-1.4 1.5-5.9-5.5a1 1 0 010-1.4l6-5.5 1.3 1.5L9.5 12l5 4.7z"></path>
									</svg>
								</Button>
							</Box>
							<Box>
								<Slider {...Bsettings}>
									{resumeTemplates.map((resumeTemplate, index) => (
										<Box className="beautySectionItem" key={index}>
											<img
												width="100%"
												height="100%"
												src={resumeTemplate.path}
												alt="Resume Template"
											/>
											<Link href="/resumeBuilder">
												<a
													onClick={() => {
														dispatch({
															type: "selectedTemplateChange",
															payload: resumeTemplate.id,
														});
													}}
												>
													<Button
														className="bSliderBtn"
														sx={{
															position: "absolute",
															padding: "10px 15px",
															top: "50%",
															left: "50%",
															transform: "translate(-50%, -50%)",
															display: isSliderShow
																? "block"
																: "none",
														}}
														variant="contained"
													>
														Create Resume
													</Button>
												</a>
											</Link>
										</Box>
									))}
									{resumeTemplates.map((resumeTemplate, index) => (
										<Box className="beautySectionItem" key={index}>
											<img
												width="100%"
												height="100%"
												src={resumeTemplate.path}
												alt="Resume Template"
											/>
											<Link href="/resumeBuilder">
												<a
													onClick={() => {
														dispatch({
															type: "selectedTemplateChange",
															payload: resumeTemplate.id,
														});
													}}
												>
													<Button
														className="bSliderBtn"
														sx={{
															position: "absolute",
															padding: "10px 15px",
															top: "50%",
															left: "50%",
															transform: "translate(-50%, -50%)",
															display: isSliderShow
																? "block"
																: "none",
														}}
														variant="contained"
													>
														Create Resume
													</Button>
												</a>
											</Link>
										</Box>
									))}
									{/* <Box className="beautySectionItem">
										<Image src={Btemplate2} alt="Resume Template" />
										<Link href="/resumeBuilder">
											<a>
												<Button
													className="bSliderBtn"
													sx={{
														position: "absolute",
														padding: "10px 15px",
														top: "50%",
														left: "50%",
														transform: "translate(-50%, -50%)",
														display: isSliderShow ? "block" : "none",
													}}
													variant="contained"
												>
													Create Resume
												</Button>
											</a>
										</Link>
									</Box>
									<Box className="beautySectionItem">
										<Image src={Btemplate3} alt="Resume Template" />
										<Link href="/resumeBuilder">
											<a>
												<Button
													className="bSliderBtn"
													sx={{
														position: "absolute",
														padding: "10px 15px",
														top: "50%",
														left: "50%",
														transform: "translate(-50%, -50%)",
														display: isSliderShow ? "block" : "none",
													}}
													variant="contained"
												>
													Create Resume
												</Button>
											</a>
										</Link>
									</Box>
									<Box className="beautySectionItem">
										<Image src={Btemplate4} alt="Resume Template" />
										<Link href="/resumeBuilder">
											<a>
												<Button
													className="bSliderBtn"
													sx={{
														position: "absolute",
														padding: "10px 15px",
														top: "50%",
														left: "50%",
														transform: "translate(-50%, -50%)",
														display: isSliderShow ? "block" : "none",
													}}
													variant="contained"
												>
													Create Resume
												</Button>
											</a>
										</Link>
									</Box>
									<Box className="beautySectionItem">
										<Image src={Btemplate5} alt="Resume Template" />
										<Link href="/resumeBuilder">
											<a>
												<Button
													className="bSliderBtn"
													sx={{
														position: "absolute",
														padding: "10px 15px",
														top: "50%",
														left: "50%",
														transform: "translate(-50%, -50%)",
														display: isSliderShow ? "block" : "none",
													}}
													variant="contained"
												>
													Create Resume
												</Button>
											</a>
										</Link>
									</Box>
									<Box className="beautySectionItem">
										<Image src={Btemplate6} alt="Resume Template" />
										<Link href="/resumeBuilder">
											<a>
												<Button
													className="bSliderBtn"
													sx={{
														position: "absolute",
														padding: "10px 15px",
														top: "50%",
														left: "50%",
														transform: "translate(-50%, -50%)",
														display: isSliderShow ? "block" : "none",
													}}
													variant="contained"
												>
													Create Resume
												</Button>
											</a>
										</Link>
									</Box> */}
								</Slider>
							</Box>
						</Box>
					</Container>
				</Box>
			</Box>
			<Box className={styles.professionalResumeBuilder}>
				<Grid
					sx={{
						position: "relative",
					}}
					container
					spacing={2}
				>
					<Grid sx={{ width: "100%" }} item sm={6}>
						<Box
							className={styles.professionalResumeLeftBuilder}
							sx={{
								position: "relative",
								m: "auto",
							}}
						>
							<Box
								className={styles.professionalResumeLeftCv1}
								sx={{
									transform: "rotate(-25deg)",
									transformOrigin: "bottom center",
								}}
							>
								<Image src={CV1} alt="CV1" />
							</Box>
							<Box
								className={styles.professionalResumeLeftCv2}
								sx={{
									position: "absolute",
									top: "0",
									left: "0",
								}}
							>
								<Image src={CV2} alt="CV2" />
							</Box>

							<Box
								className={styles.professionalResumeLeftCv3}
								sx={{
									position: "absolute",
									top: "0",
									left: "0",
									transform: "rotate(25deg)",
									transformOrigin: "bottom center",
								}}
							>
								<Image src={CV3} alt="CV3" />
							</Box>
						</Box>
					</Grid>
					<Grid className={styles.professionalRightSide} item sm={6}>
						<Box>
							<Box
								sx={{
									fontSize: "44px",
									lineHeight: "48px",
									mb: "24px",
								}}
								component={"h1"}
							>
								Try our professional Resume builder now!
							</Box>
							<Box
								sx={{
									p: {
										md: "0",
										xs: "0 30px",
									},
									mb: "24px",
									fontSize: "18px",
								}}
							>
								Save time with our easy 3-step resume builder. No more writer’s
								block or formatting difficulties in Word. Rapidly make a perfect
								resume employers love.
							</Box>

							<Box
								className={styles.professionalRightBtn}
								sx={{
									display: {
										sm: "flex",
										xs: "block",
									},
								}}
							>
								<Box>
									<Link href="/resumeBuilder">
										<a
											onClick={() => {
												dispatch({
													type: "selectedTemplateChange",
													payload: 1,
												});
											}}
										>
											<Button
												sx={{
													p: "14px 24px",
												}}
												variant="contained"
											>
												Create My Resume
											</Button>
										</a>
									</Link>
								</Box>
								<Box>
									<Link href="/resumeTemplates">
										<Button
											sx={{
												p: "14px 24px",
												ml: {
													sm: "10px",
													xs: "0",
												},
												color: "#000",
												mt: {
													sm: "0",
													xs: "10px",
												},
											}}
											variant="outlined"
										>
											Resume Examples
										</Button>
									</Link>
								</Box>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
			{/* <Box
                className={styles.provenTemplate}
                sx={{
                    backgroundColor: "#0F141E",
                }}
            >
                <Box
                    sx={{
                        maxWidth: "460px",
                        m: "auto",
                        textAlign: "center",
                        alignItems: "center",
                    }}
                >
                    <Box>
                        <Box>
                            <Image
                                src={coverLetterImg}
                                alt="Cover Letter Image"
                            />
                        </Box>
                        <Box
                            sx={{
                                color: "#fff",
                                m: "16px auto",
                                fontSize: {
                                    md: "46px",
                                },
                                lineHeight: "48px",
                            }}
                            component={"h1"}
                        >
                            Proven cover letter templates
                        </Box>
                        <Box
                            sx={{
                                color: "#828ba2",
                                fontSize: "19px",
                                m: "16px auto",
                            }}
                            component={"p"}
                        >
                            Win over employers and recruiters by using one of
                            our 27 professionally-designed cover letter
                            templates. Download to Word or PDF.
                        </Box>
                        <Box>
                            <Box
                                sx={{ color: "#fff", mt: "50px" }}
                                component={"h3"}
                            >
                                Toronto
                            </Box>
                            <Box sx={{ color: "#828ba2" }} component={"p"}>
                                10,000+ users choose this template
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ position: "relative" }}>
                    <Box className="templatesSlider">
                        <Slider {...setting}>
                            <Box className="tempSliderItem">
                                <Image src={Letter6} alt="Template 6" />
                                <Link href="/resumeBuilder">
                                    <a>
                                        <Button
                                            className="templatesSliderBtn"
                                            variant="contained"
                                        >
                                            Create Cover Letter
                                        </Button>
                                    </a>
                                </Link>
                            </Box>
                            <Box className="tempSliderItem">
                                <Image src={Letter7} alt="Template 7" />
                                <Link href="/resumeBuilder">
                                    <a>
                                        <Button
                                            className="templatesSliderBtn"
                                            variant="contained"
                                        >
                                            Create Cover Letter
                                        </Button>
                                    </a>
                                </Link>
                            </Box>
                            <Box className="tempSliderItem">
                                <Image src={Letter8} alt="Template 8" />
                                <Link href="/resumeBuilder">
                                    <a>
                                        <Button
                                            className="templatesSliderBtn"
                                            variant="contained"
                                        >
                                            Create Cover Letter
                                        </Button>
                                    </a>
                                </Link>
                            </Box>
                            <Box className="tempSliderItem">
                                <Image src={Letter1} alt="Template 9" />
                                <Link href="/resumeBuilder">
                                    <a>
                                        <Button
                                            className="templatesSliderBtn"
                                            variant="contained"
                                        >
                                            Create Cover Letter
                                        </Button>
                                    </a>
                                </Link>
                            </Box>
                            <Box className="tempSliderItem">
                                <Image src={Letter10} alt="Template 10" />
                                <Link href="/resumeBuilder">
                                    <a>
                                        <Button
                                            className="templatesSliderBtn"
                                            variant="contained"
                                        >
                                            Create Cover Letter
                                        </Button>
                                    </a>
                                </Link>
                            </Box>
                            <Box className="tempSliderItem">
                                <Image src={Letter3} alt="Template 11" />
                                <Link href="/resumeBuilder">
                                    <a>
                                        <Button
                                            className="templatesSliderBtn"
                                            variant="contained"
                                        >
                                            Create Cover Letter
                                        </Button>
                                    </a>
                                </Link>
                            </Box>
                        </Slider>
                    </Box>
                </Box>
            </Box>
            <Container>
                <Grid
                    className={styles.professionalStory}
                    container
                    spacing={2}
                >
                    <Grid item md={6}>
                        <Box>
                            <Box
                                className={styles.secureJob}
                                sx={{
                                    textTransform: "uppercase",
                                    my: "8px",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    letterSpacing: "1.8px",
                                    lineHeight: "20px",
                                    fontweight: "600",
                                    color: "#343ecc",
                                }}
                                component={"p"}
                            >
                                secure your dream job
                            </Box>
                            <Box
                                sx={{
                                    fontWeight: "700",
                                    fontSize: "46px",
                                    lineHeight: "48px",
                                    my: "15px",
                                    maxWidth: "500px",
                                }}
                                component={"h1"}
                            >
                                Create a professional story in minutes. Use our
                                cover letter maker.
                            </Box>
                            <Box
                                sx={{
                                    mb: "24px",
                                    maxWidth: "510px",
                                }}
                                component={"p"}
                            >
                                Our cover letter maker allows you to write
                                amazing professional pitches in minutes rather
                                than hours. No more writer’s block, no more
                                searching for the convincing phrases or
                                agonizing over formatting. Be persuasive without
                                effort!
                            </Box>
                            <Link href="/resumeBuilder">
                                <a>
                                    <Button
                                        sx={{
                                            p: "14px 24px",
                                        }}
                                        variant="contained"
                                    >
                                        Create Cover Letter
                                    </Button>
                                </a>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box className={styles.dreamJob}>
                            <Image src={DreamJobImg} alt="Dream Job Image" />
                        </Box>
                    </Grid>
                </Grid>
            </Container> */}

			{/* <Box className={styles.letterBuilder} sx={{ bgcolor: "#eff2f9" }}>
                <Container>
                    <Box
                        sx={{
                            py: {
                                md: "250px",
                                xs: "100px",
                            },
                            maxWidth: "610px",
                            m: "auto",
                            textAlign: "center",
                        }}
                    >
                        <Box
                            sx={{
                                m: "0 auto 24px",
                                fontWeight: "700",
                                fontSize: "46px",
                                lineHeight: "48px",
                            }}
                            component={"h1"}
                        >
                            User-friendly. Professional. Effective. Try our
                            cover letter builder today!
                        </Box>
                        <Box
                            sx={{
                                m: "0 auto 24px",
                                fontSize: "19px",
                            }}
                            component={"p"}
                        >
                            How long does it take to write a cover letter?
                            Hours? Days? With our cover letter maker you can be
                            done in minutes. Create a convincing and effective
                            application letter in several clicks. Use our
                            pre-generated phrases, choose a design, fill in your
                            details and ideas. Fast and simple.
                        </Box>
                        <Box className={styles.letterBuilderBtn}>
                            <Box className={styles.letterBuilderBtn1}>
                                <Link href="/resumeBuilder">
                                    <a>
                                        <Button
                                            sx={{
                                                p: "14px 24px",
                                            }}
                                            variant="contained"
                                        >
                                            Try It Now
                                        </Button>
                                    </a>
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/resumeTemplates">
                                    <Button
                                        sx={{
                                            p: "14px 24px",

                                            color: "#000",
                                            border: "$00085",
                                        }}
                                        variant="outlined"
                                    >
                                        Cover Letter Examples
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box> */}
			<Container className={styles.featureDesigned}>
				<Box
					sx={{
						textAlign: "center",
						margin: "0 auto",
						maxWidth: "750px",
						fontWeight: "700",
						fontSize: "46px",
						lineHeight: "48px",
					}}
					component={"h1"}
				>
					Features designed to help you win your dream job
				</Box>
				<Grid sx={{ pt: "50px" }} container spacing={2}>
					<Grid sx={{ py: "30px" }} item md={4} sm={6}>
						<Box className={styles.featureDesignedItem}>
							<Box
								sx={{ backgroundPosition: "0 0" }}
								className={styles.featuresImg}
							></Box>
							<Box>
								<Box
									sx={{
										fontSize: "22px",
										lineHeight: "28px",
										color: "#282b8f",
										fontWeight: "600",
										marginBottom: "4px",
									}}
									component={"h5"}
								>
									Easy online resume builder
								</Box>
								<Box component={"p"}>
									Create an awesome resume, cover letter or online profile without
									leaving your web browser.
								</Box>
							</Box>
						</Box>
					</Grid>
					<Grid sx={{ py: "30px" }} item md={4} sm={6}>
						<Box className={styles.featureDesignedItem}>
							<Box
								sx={{ backgroundPosition: "-448px 0" }}
								className={styles.featuresImg}
							></Box>
							<Box>
								<Box
									sx={{
										fontSize: "22px",
										lineHeight: "28px",
										color: "#282b8f",
										fontWeight: "600",
										marginBottom: "4px",
									}}
									component={"h5"}
								>
									Automatic spell-checker
								</Box>
								<Box component={"p"}>
									Our built-in spell-checker takes care of the grammar for you.
									Create a resume with zero typos or errors.
								</Box>
							</Box>
						</Box>
					</Grid>
					<Grid sx={{ py: "30px" }} item md={4} sm={6}>
						<Box className={styles.featureDesignedItem}>
							<Box
								sx={{ backgroundPosition: "-224px 0" }}
								className={styles.featuresImg}
							></Box>
							<Box>
								<Box
									sx={{
										fontSize: "22px",
										lineHeight: "28px",
										color: "#282b8f",
										fontWeight: "600",
										marginBottom: "4px",
									}}
									component={"h5"}
								>
									Your data is safe
								</Box>
								<Box component={"p"}>
									Your data is kept private and protected by strong 256-bit
									encryption.
								</Box>
							</Box>
						</Box>
					</Grid>

					<Grid sx={{ py: "30px" }} item md={4} sm={6}>
						<Box className={styles.featureDesignedItem}>
							<Box
								sx={{ backgroundPosition: "-112px 0" }}
								className={styles.featuresImg}
							></Box>
							<Box>
								<Box
									sx={{
										fontSize: "22px",
										lineHeight: "28px",
										color: "#282b8f",
										fontWeight: "600",
										marginBottom: "4px",
									}}
									component={"h5"}
								>
									Automatic summary generator
								</Box>
								<Box component={"p"}>
									Create a powerful resume profile or cover letter in one click.
									Writer’s block is no longer an obstacle. Try for free!
								</Box>
							</Box>
						</Box>
					</Grid>
					<Grid sx={{ py: "30px" }} item md={4} sm={6}>
						<Box className={styles.featureDesignedItem}>
							<Box
								sx={{ backgroundPosition: "-336px 0" }}
								className={styles.featuresImg}
							></Box>
							<Box>
								<Box
									sx={{
										fontSize: "22px",
										lineHeight: "28px",
										color: "#282b8f",
										fontWeight: "600",
										marginBottom: "4px",
									}}
									component={"h5"}
								>
									Approved templates
								</Box>
								<Box component={"p"}>
									Professionally-designed resume templates and examples (+guides).
									Just edit and download in 5 minutes.
								</Box>
							</Box>
						</Box>
					</Grid>
					<Grid sx={{ py: "30px" }} item md={4} sm={6}>
						<Box className={styles.featureDesignedItem}>
							<Box
								sx={{ backgroundPosition: "-168px 0" }}
								className={styles.featuresImg}
							></Box>
							<Box>
								<Box
									sx={{
										fontSize: "22px",
										lineHeight: "28px",
										color: "#282b8f",
										fontWeight: "600",
										marginBottom: "4px",
									}}
									component={"h5"}
								>
									Job tracking
								</Box>
								<Box component={"p"}>
									We’ll keep you ahead of the competition by tracking the
									employers and jobs you apply to.
								</Box>
							</Box>
						</Box>
					</Grid>
				</Grid>
				<Grid sx={{ pt: "16px" }} container spacing={2}>
					<Grid sx={{ py: "30px" }} item md={4} sm={6}>
						<Box className={styles.featureDesignedItem}>
							<Box
								sx={{ backgroundPosition: "-280px 0" }}
								className={styles.featuresImg}
							></Box>
							<Box>
								<Box
									sx={{
										fontSize: "22px",
										lineHeight: "28px",
										color: "#282b8f",
										fontWeight: "600",
										marginBottom: "4px",
									}}
									component={"h5"}
								>
									Interview school
								</Box>
								<Box component={"p"}>
									Our unique digital tool will help you win jobs! Receive
									feedback, tips and improve your interview skills.
								</Box>
							</Box>
						</Box>
					</Grid>
					<Grid sx={{ py: "30px" }} item md={4} sm={6}>
						<Box className={styles.featureDesignedItem}>
							<Box
								sx={{ backgroundPosition: "-392px 0" }}
								className={styles.featuresImg}
							></Box>
							<Box>
								<Box
									sx={{
										fontSize: "22px",
										lineHeight: "28px",
										color: "#282b8f",
										fontWeight: "600",
										marginBottom: "4px",
									}}
									component={"h5"}
								>
									Multi-format resume options
								</Box>
								<Box component={"p"}>
									Save your perfect resume in any common format, including
									Microsoft Word and PDF in a single click.
								</Box>
							</Box>
						</Box>
					</Grid>
					<Grid sx={{ py: "30px" }} item md={4} sm={6}>
						<Box className={styles.featureDesignedItem}>
							<Box
								sx={{ backgroundPosition: "-56px 0" }}
								className={styles.featuresImg}
							></Box>
							<Box>
								<Box
									sx={{
										fontSize: "22px",
										lineHeight: "28px",
										color: "#282b8f",
										fontWeight: "600",
										marginBottom: "4px",
									}}
									component={"h5"}
								>
									Cover letters
								</Box>
								<Box component={"p"}>
									Our cover letter builder works with the same ease and use of
									elegant templates as the resume creator.
								</Box>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
			<Box className={styles.modernJobMarket} sx={{ bgcolor: "#EFF2F9" }}>
				<Container>
					<Box
						sx={{
							textAlign: "center",
							maxWidth: "600px",
							m: "auto",
						}}
					>
						<Box>
							<Image src={modernImage} alt="Modern Image" />
						</Box>
						<Box
							sx={{
								fontWeight: "700",
								fontSize: "46px",
								lineHeight: "48px",
								marginBottom: "20px",
							}}
							component={"h1"}
						>
							Create perfect resumes for the modern job market
						</Box>
						<Box component={"p"}>
							Creating a resume or cover letter has never been this easy! In three
							simple steps, create the perfect document to impress hiring managers and
							employers. Minimum time, maximum professional quality.
						</Box>
						<Link href="/resumeBuilder">
							<a
								onClick={() => {
									dispatch({
										type: "selectedTemplateChange",
										payload: 1,
									});
								}}
							>
								<Button
									sx={{
										p: "14px 24px",
										mt: "30px",
									}}
									variant="contained"
								>
									Create My Resume
								</Button>
							</a>
						</Link>
					</Box>
					<Box sx={{ maxWidth: "950px", m: "auto", pt: "50px" }}>
						<Box>
							<Box>
								<Tabs
									value={value}
									onChange={handleChange}
									aria-label="basic tabs example"
								>
									<Tab
										className={styles.tabsDesign}
										label="1. Sign Up"
										{...a11yProps(0)}
									/>

									<Tab
										className={styles.tabsDesign}
										label="2. Create"
										{...a11yProps(1)}
									/>
									<Tab
										className={styles.tabsDesign}
										label="3. Download"
										{...a11yProps(2)}
									/>
								</Tabs>
							</Box>
							<TabPanel value={value} index={0} className={styles.tabContent}>
								<Grid container spacing={2}>
									<Grid item sm={6}>
										<Box
											sx={{
												p: {
													md: "40px 0 0 40px",
													xs: "0",
												},
											}}
										>
											<Box component={"h2"} className={styles.tabsHeading}>
												Your First Steps
											</Box>
											<Box component={"p"}>
												We’ve made sure that signing up to our resume maker
												tools is even more convenient than usual. Use one of
												the most common networks used by professionals
												(LinkedIn, Facebook or your Google account) or
												simply skip this step and enter your name and email
												address. We keep your data strictly confidential.
											</Box>
										</Box>
									</Grid>
									<Grid item sm={6}>
										<Box className={styles.tabImg}>
											<Image src={signUp} alt="Sign up Image" />
										</Box>
									</Grid>
								</Grid>
							</TabPanel>
							<TabPanel value={value} index={1} className={styles.tabContent}>
								<Grid container spacing={2}>
									<Grid item sm={6}>
										<Box sx={{ p: "40px 0 0 40px" }}>
											<Box component={"h2"} className={styles.tabsHeading}>
												Achieve Beauty With Ease
											</Box>
											<Box component={"p"}>
												We’ve made sure that signing up to our resume maker
												tools is even more convenient than usual. Use one of
												the most common networks used by professionals
												(LinkedIn, Facebook or your Google account) or
												simply skip this step and enter your name and email
												address. We keep your data strictly confidential.
											</Box>
										</Box>
									</Grid>
									<Grid item sm={6}>
										<Box className={styles.tabImg}>
											<Image src={create} alt="Create Image" />
										</Box>
									</Grid>
								</Grid>
							</TabPanel>
							<TabPanel value={value} index={2} className={styles.tabContent}>
								<Grid container sx={{ p: "0 16px" }} spacing={2}>
									<Grid item sm={6}>
										<Box sx={{ p: "40px 0 0 40px" }}>
											<Box component={"h2"} className={styles.tabsHeading}>
												Now It's Tours!
											</Box>
											<Box component={"p"}>
												We’ve made sure that signing up to our resume maker
												tools is even more convenient than usual. Use one of
												the most common networks used by professionals
												(LinkedIn, Facebook or your Google account) or
												simply skip this step and enter your name and email
												address. We keep your data strictly confidential.
											</Box>
										</Box>
									</Grid>
									<Grid item sm={6}>
										<Box className={styles.tabImg}>
											<Image src={download} alt="Download Image" />
										</Box>
									</Grid>
								</Grid>
							</TabPanel>
						</Box>
					</Box>
				</Container>
			</Box>
			<Box className={styles.effectiveJob}>
				<Grid
					className={styles.effectiveJobContent}
					sx={{
						padding: "120px 60px 120px 60px",
						backgroundColor: "#282b8f",
						overflow: "hidden",
						width: "100%",
						m: "auto",
					}}
					container
					spacing={2}
				>
					<Grid item md={6}>
						<Box className={styles.effectiveLeftContent} sx={{ color: "#fff" }}>
							<Box
								sx={{
									textTransform: "uppercase",
									my: "8px",
									fontSize: "14px",
									fontWeight: "bold",
									letterSpacing: "1.8px",
									lineHeight: "20px",
									fontweight: "600",
									color: "#f9ba44",
								}}
								component={"p"}
							>
								START BUILDING YOUR CAREER
							</Box>

							<Box
								sx={{
									fontSize: "46px",
									lineHeight: "48px",
									mb: "24px",
								}}
								component={"h1"}
							>
								Professional resumes for effective job interviews
							</Box>
							<Box
								className={styles.jobInterviewText}
								sx={{ mb: "24px", maxWidth: "430px" }}
							>
								A great job application leads to a good interview. An amazing resume
								is what makes it all possible. Start off strong with the hiring
								manager by creating a positive professional image. A job interview
								can be much easier if they have a favorable view of your CV and
								cover letter.
							</Box>

							<Box className={styles.jobInterviewBtn}>
								<Box>
									<Link href="/resumeBuilder">
										<a
											onClick={() => {
												dispatch({
													type: "selectedTemplateChange",
													payload: 1,
												});
											}}
										>
											<Button
												className={styles.jobInterviewBtn1}
												sx={{ p: "14px 24px" }}
												variant="contained"
											>
												Get Started Now
											</Button>
										</a>
									</Link>
								</Box>
								<Box>
									<Link href="/resumeTemplates">
										<Button
											sx={{
												p: "14px 24px",
												color: "#fff",
												border: "1px solid #fff",
											}}
											variant="outlined"
										>
											Resume Examples
										</Button>
									</Link>
								</Box>
							</Box>
						</Box>
					</Grid>
					<Grid className={styles.effectiveRightContent} item md={6}>
						<Box sx={{ position: "relative" }}>
							<Box>
								<Image src={Resume1} alt="Resume Template" />
							</Box>
							<Box
								sx={{
									position: "absolute",
									left: "22.3%",
									top: "15.5%",
								}}
							>
								<Image src={Resume2} alt="Resume Template" />
							</Box>

							<Box
								sx={{
									position: "absolute",
									left: "44.9%",
									top: "42.9%",
								}}
							>
								<Image src={Resume3} alt="Resume Template" />
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Box className={styles.tipsResumeSection}>
				<Box component={"h1"}>5 tips for making a resume</Box>
				<Box className={styles.tipsResumeContent}>
					<Box className={styles.tipsResumeItems}>
						<Box component={"h3"}>Tailor your resume for the job application.</Box>
						<Box component={"p"}>
							Before you write (or update) your resume, look through the job
							description. Note the skills required for the role and its
							responsibilities. Match your own experiences and skills up with these
							requirements and feature them in your resume.
						</Box>
						<Box component={"p"}>
							For more tips on how to tailor your resume for the job, see our article
							How to Create a Targeted Resume.
						</Box>
					</Box>
					<Box className={styles.tipsResumeItems}>
						<Box component={"h3"}>Nail your professional resume summary.</Box>
						<Box component={"p"}>
							Remember, the resume summary is your first opportunity to make the right
							impression with your resume, so emphasize your best qualities up front.
							Explain who you are as a professional, and the top abilities and
							accomplishments that show why you’re the right person for the job.
						</Box>
					</Box>
					<Box className={styles.tipsResumeItems}>
						<Box component={"h3"}>
							Create a resume that shows how you use your skills.
						</Box>
						<Box component={"p"}>
							Listing major skills such as “loan application management” is important
							on any professional resume, but for more impact, show them how good you
							are at what you do. Explain how you put your skills into action in your
							work achievements or responsibilities. For example: “Managed loan
							applications for 50+ clients a week for the credit union.”
						</Box>
						<Box component={"p"}>
							For more tips on how to tailor your resume for the job, see our article
							How to Create a Targeted Resume.
						</Box>
					</Box>
					<Box className={styles.tipsResumeItems}>
						<Box component={"h3"}>
							Create an impactful professional resume with action verbs and numbers.
						</Box>
						<Box component={"p"}>
							Your word choice can help you better present your skills and experience.
							Use active verbs (e.g., “managed” or “led”) and numbers in your resume
							(e.g., “Improved company efficiency by 50%” or “managed team of 15
							junior employees”) to give your accomplishments more context.
						</Box>
					</Box>
					<Box className={styles.tipsResumeItems}>
						<Box component={"h3"}>Give your resume the right look.</Box>
						<Box component={"p"}>
							All the right content in your resume can mean little if it has a sloppy
							or confusing layout. Use a professional resume template as a foundation
							and avoid unusual fonts or design flourishes that might throw off
							recruiters (or the tracking systems they use to scan job resumes).
						</Box>
					</Box>
				</Box>
			</Box>

			<Container className={styles.frequentlySection}>
				<Box
					className={styles.frequentlyContent}
					sx={{
						p: "120px 32px",
						maxWidth: "926px",
						margin: "0 auto",
					}}
				>
					<Box
						component={"h1"}
						sx={{
							fontSize: "46px",
							lineHeight: "48px",
							maxWidth: "496px",
							margin: "auto",
							fontWeight: "700",
							textAlign: "center",
							pb: "40px",
						}}
					>
						Frequently Asked Questions
					</Box>
					<div className={styles.accordianContent}>
						<Accordion sx={{ boxShadow: "none" }}>
							<AccordionSummary
								className={styles.accordianSummary}
								expandIcon={<ExpandMoreIcon className={styles.moreIcon} />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography className={styles.accordianTitle}>
									How can I use Resumer for free?
								</Typography>
							</AccordionSummary>
							<AccordionDetails className={styles.accordionDetails}>
								<Typography>
									Resume.io has a few different tools you can use 100% for free
									without entering any credit card details.
									<Link href="/">
										<a className={styles.typographyLink}>
											Learn more in this article.
										</a>
									</Link>
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion sx={{ boxShadow: "none" }}>
							<AccordionSummary
								className={styles.accordianSummary}
								expandIcon={<ExpandMoreIcon className={styles.moreIcon} />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography className={styles.accordianTitle}>
									How can I customize my resume?
								</Typography>
							</AccordionSummary>
							<AccordionDetails className={styles.accordionDetails}>
								<Typography>
									Our resume templates are designed to adapt to your content and
									look great across all of our designs.
									<Link href="/">
										<a className={styles.typographyLink}>
											Learn more in this article.
										</a>
									</Link>
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion sx={{ boxShadow: "none" }}>
							<AccordionSummary
								className={styles.accordianSummary}
								expandIcon={<ExpandMoreIcon className={styles.moreIcon} />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography className={styles.accordianTitle}>
									Can I download my resume to Word or PDF?
								</Typography>
							</AccordionSummary>
							<AccordionDetails className={styles.accordionDetails}>
								<Typography>
									Once your resume is ready there are a number of ways you can
									export your resumes or cover letters to start applying for jobs.
									You can download a PDF, DOCX(Word), or TXT file of your resume
									either directly from your Dashboard or from the Resume Editor.
									<Link href="/">
										<a className={styles.typographyLink}>
											Learn more in this article.
										</a>
									</Link>
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion sx={{ boxShadow: "none" }}>
							<AccordionSummary
								className={styles.accordianSummary}
								expandIcon={<ExpandMoreIcon className={styles.moreIcon} />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography>
									How do I cancel, downgrade or delete my account?
								</Typography>
							</AccordionSummary>
							<AccordionDetails className={styles.accordionDetails}>
								<Typography>
									You can cancel a Resume.io subscription right from our website
									without even logging into the app. To do that visit our Contact
									Us page.
									<Link href="/">
										<a className={styles.typographyLink}>
											Learn more in this article.
										</a>
									</Link>
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Box className={styles.homeFaqNote}>
							Didn't find what you're looking for? —
							<Link href="/">
								<a className={styles.typographyLink}>Use our FAQ</a>
							</Link>
						</Box>
					</div>
				</Box>
			</Container>
			<Box className={styles.geniusHelpUser}>
				<Box component={"h1"}>Resume Genius helps users get jobs at top companies</Box>
				<Box component={"p"}>
					Build your resume and follow in the footsteps of over 10 million job seekers
					today!
				</Box>

				<Box className={styles.logoCarousel}>
					<Box className={styles.logoCarouselContent}>
						<Box className={styles.logoCarouselItem} sx={{ minWidth: "2104px" }}>
							<Image
								src={comoanyLogos}
								alt="Company Logo's"
								width={"2104px"}
								height="184px"
							/>
						</Box>
						<Box className={styles.logoCarouselItem} sx={{ minWidth: "2104px" }}>
							<Image
								src={comoanyLogos}
								alt="Company Logo's"
								width={"2104px"}
								height="184px"
							/>
						</Box>
					</Box>
				</Box>
			</Box>
			{/* <Box
                className={styles.reviewSection}
                sx={{
                    padding: "120px 32px",
                    backgroundColor: "#f7f9fc",
                    overflow: "hidden",
                }}
            >
                <Container>
                    <Box>
                        <Box
                            sx={{
                                fontSize: "46px",
                                lineHeight: "48px",
                                fontWeight: "700",
                                textAlign: "center",
                                maxWidth: "736px",
                                margin: "auto",
                                paddingBottom: "50px",
                            }}
                            component={"h1"}
                        >
                            Reviewed by the community. Trusted by professionals
                        </Box>
                        <Grid
                            className={styles.reviewContent}
                            container
                            spacing={2}
                        >
                            <Grid
                                className={styles.reviewLeftContent}
                                sx={{
                                    textAlign: "center",
                                }}
                                item
                                sm={3}
                            >
                                <Box
                                    sx={{
                                        fontSize: "28px",
                                        lineHeight: "30px",
                                        marginBottom: "8px",
                                    }}
                                >
                                    4.5 out of 5
                                </Box>
                                <Box sx={{ mb: "22px" }}>
                                    <Rating
                                        sx={{ color: "#00B67A" }}
                                        name="half-rating"
                                        defaultValue={2.5}
                                        precision={0.5}
                                        size="large"
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        width: "98px",
                                        height: "24px",
                                        m: "auto",
                                    }}
                                >
                                    <Image src={TrustPilot} alt="Trust Pilot" />
                                </Box>
                                <Box sx={{ mt: "8px" }}>
                                    based on 42,053 reviews
                                </Box>
                            </Grid>
                            <Grid item sm={9}>
                                <Box className="sliderSection">
                                    <Slider {...settings}>
                                        <Box
                                            sx={{
                                                position: "relative",
                                                minWidth: "180px",
                                                maxWidth: "200px",
                                                height: "188px",
                                                marginRight: "48px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <Box>
                                                <Rating
                                                    sx={{ color: "#00B67A" }}
                                                    name="size-medium"
                                                    defaultValue={2}
                                                />
                                            </Box>
                                            <Box
                                                className={styles.slideTitle}
                                                component={"h3"}
                                            >
                                                Very Helpful and eye opening
                                            </Box>
                                            <Box
                                                className={styles.slideContent}
                                                component={"p"}
                                            >
                                                It was really nice receiving the
                                                review and having all the
                                                feedback from an expert, it made
                                                me realize all the mistakes I
                                                did and how to improve my resume
                                                to have a much better chance in
                                                getting the job I'm looking for.
                                                It also helped me notice that I
                                                needed to do much better, push
                                                harder and go out of my own
                                                limits so it was really really
                                                helpful. Thanks so much for your
                                                help!
                                            </Box>
                                            <Box className={styles.slideReview}>
                                                Nancy Ambe • 3 days ago
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                position: "relative",
                                                minWidth: "180px",
                                                maxWidth: "230px",
                                                height: "188px",
                                                marginRight: "48px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <Box>
                                                <Rating
                                                    sx={{ color: "#00B67A" }}
                                                    name="size-medium"
                                                    defaultValue={2}
                                                />
                                            </Box>
                                            <Box
                                                className={styles.slideTitle}
                                                component={"h3"}
                                            >
                                                I was dreading making my resume
                                                and…
                                            </Box>
                                            <Box
                                                className={styles.slideContent}
                                                component={"p"}
                                            >
                                                I was dreading making my resume
                                                and stumbled upon this site
                                                which ended up being the easiest
                                                way EVER to create a resume!
                                                Definitely recommend. Thank you!
                                            </Box>
                                            <Box className={styles.slideReview}>
                                                Kim B. • about 6 hours ago
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                position: "relative",
                                                minWidth: "180px",
                                                maxWidth: "230px",
                                                height: "188px",
                                                marginRight: "48px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <Box>
                                                <Rating
                                                    sx={{ color: "#00B67A" }}
                                                    name="size-medium"
                                                    defaultValue={2}
                                                />
                                            </Box>
                                            <Box
                                                className={styles.slideTitle}
                                                component={"h3"}
                                            >
                                                Amazing
                                            </Box>
                                            <Box
                                                className={styles.slideContent}
                                                component={"p"}
                                            >
                                                Amazing, I love the way I edit
                                                my files and this is very
                                                affordable.
                                            </Box>
                                            <Box className={styles.slideReview}>
                                                Vanessa Calumpang • 1 day ago
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                position: "relative",
                                                minWidth: "180px",
                                                maxWidth: "230px",
                                                height: "188px",
                                                marginRight: "48px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <Box>
                                                <Rating
                                                    sx={{ color: "#00B67A" }}
                                                    name="size-medium"
                                                    defaultValue={2}
                                                />
                                            </Box>
                                            <Box
                                                className={styles.slideTitle}
                                                component={"h3"}
                                            >
                                                I liked the simplicity of this
                                                site
                                            </Box>
                                            <Box
                                                className={styles.slideContent}
                                                component={"p"}
                                            >
                                                I liked the simplicity of this
                                                site. Thanks for making such a
                                                user friendly site.
                                            </Box>
                                            <Box className={styles.slideReview}>
                                                himanshu shukla • 1 day ago
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                position: "relative",
                                                minWidth: "180px",
                                                maxWidth: "230px",
                                                height: "188px",
                                                marginRight: "48px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <Box>
                                                <Rating
                                                    sx={{ color: "#00B67A" }}
                                                    name="size-medium"
                                                    defaultValue={2}
                                                />
                                            </Box>
                                            <Box
                                                className={styles.slideTitle}
                                                component={"h3"}
                                            >
                                                Pretty streamlined and
                                                intuitive…
                                            </Box>
                                            <Box
                                                className={styles.slideContent}
                                                component={"p"}
                                            >
                                                Pretty streamlined and intuitive
                                                experience. Template options and
                                                tips/explanations are also
                                                great.
                                            </Box>
                                            <Box className={styles.slideReview}>
                                                Joy M. • 2 days ago
                                            </Box>
                                        </Box>
                                    </Slider>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box> */}
			{/* <Container
                className={styles.userWorldWide}
                sx={{ textAlign: "center" }}
            >
                <Box>
                    <Box
                        sx={{
                            fontSize: "66px",
                            lineHeight: "75px",
                            fontWeight: "700",
                            maxWidth: "710px",
                            margin: "0 auto 16px",
                            color: "#1a91f0",
                        }}
                        component={"h1"}
                    >
                        Join over
                        <mark className={styles.amountLine}> 19,423,000 </mark>
                        users worldwide
                    </Box>
                    <Box sx={{ mb: "24px" }} component={"p"}>
                        Start for free — try our resume builder now
                    </Box>
                    <Link href="/resumeBuilder">
                        <a>
                            <Button sx={{ p: "14px 24px" }} variant="contained">
                                Create My Resume
                            </Button>
                        </a>
                    </Link>
                </Box>
            </Container> */}
		</>
	);
}

export default Home;
