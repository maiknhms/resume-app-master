import { Button, Grid, Rating, TextField } from "@mui/material";
import * as styles from "../writeResume/writeResume.module.scss";
import { Box, Container } from "@mui/system";
import Slider from "react-slick";
import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HeroImage from "../../../public/images/how-to-write-a-resume.png";
import ImpSteps from "../../../public/images/importantSteps.png";
import WTRCV from "../../../public/images/wtrcv.png";
import BasicEdit from "../../../public/images/basicTextEdit.png";
import ResumeBuild from "../../../public/images/w_1440.png";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import Letter6 from "../../../public/images/letter6.jpg";
import Letter7 from "../../../public/images/letter7.png";
import Letter8 from "../../../public/images/letter8.png";
import Letter1 from "../../../public/images/letter1.png";
import Letter10 from "../../../public/images/letter10.png";
import Letter3 from "../../../public/images/letter3.png";
import TwoResumeImg from "../../../public/images/TwoPageImg.png";
import Component from "../../../public/images/Component.png";
import ResumeActionVerb from "../../../public/images/resumeActionVerb.png";
import BuilderTool from "../../../public/images/builderTool.jpg";
import ElonMusksResume from "../../../public/images/Elon-Musks-Resume.png";
import TikTokImg from "../../../public/images/tiktokImg.png";
import WorkExperienceKatya from "../../../public/images/WorkExperienceKatya.png";
import AmazingSkills from "../../../public/images/AmazingSkills.png";
import HowLongResume from "../../../public/images/How_long_should_my_resume_be.png";
import InsightsIcon from "@mui/icons-material/Insights";
import NurseResume from "../../../public/images/NurseResume.png";
import AtsFriendlyResume from "../../../public/images/AtsFriendlyResume.png";
import CriticalThinkingSkills from "../../../public/images/Critical-thinking-skills.png";
import AddressOnMyCv from "../../../public/images/put-my-address-on-my-resume.png";
import BestResumeWriting from "../../../public/images/Best_Resume_writing_services.png";
import StrenghWeakness from "../../../public/images/Strengths-and-weaknesses.png";
import HobbiesExamples from "../../../public/images/Hobbies-examples.png";
import LinkedInResume from "../../../public/images/Should_you_include_LinkedIn_on_a_resume_opt.png";
import BottomBanner from "../../../public/images/bottomBanner.png";
import ReverseFormat from "../../../public/images/reverseFormat.png";
import FunctionalFormat from "../../../public/images/functionalFormat.png";
import CombinationFormat from "../../../public/images/combinationFormat.png";
import ChronologicalOrder from "../../../public/images/chronologicalOrder.png";
import BestResume from "../../../public/images/bestResume.png";
import ChronologicalResumeEx from "../../../public/images/chronologicalResumeEx.png";
import BestChronologicalResume from "../../../public/images/bestChronologicalResume.png";
import ResumeImportantPoints from "../../../public/images/resumeImportantPoints.png";
import ResumeSkills from "../../../public/images/resumeSkills.png";
import HardSoftSkills from "../../../public/images/hardSoftSkills.png";
import KeyRulesSkills from "../../../public/images/keyRulesSkills.png";
import ResumeExWithOutReference from "../../../public/images/resumeExWithOutReference.png";
import ResumeExWithReference from "../../../public/images/resumeExWithReference.png";
import { Scrollspy } from "@makotot/ghostui";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function index() {
	const sectionRefs = [
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
	];
	return (
		<>
			<Box sx={{ backgroundColor: "#edbd3a", p: "40px 0 60px" }}>
				<Container>
					<Box sx={{ maxWidth: "1400px", m: "0 auto" }}>
						<Grid className={styles.heroSection} container spacing={2}>
							<Grid className={styles.heroLeftSection} item sm={6}>
								<Box>
									<Box component={"h1"}>How to write a resume</Box>
								</Box>
							</Grid>
							<Grid item sm={6}>
								<Box>
									<Image src={HeroImage} alt="How to Write Resume" />
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</Box>
			<Box className={styles.writeMainSection}>
				<Grid container spacing={2}>
					<Grid className={styles.leftSideBarSection} item xs={3}>
						<Box className={styles.leftSideBar}>
							<Scrollspy sectionRefs={sectionRefs}>
								{({ currentElementIndexInViewport }) => (
									<>
										<Accordion className={styles.leftSideBarItem}>
											<AccordionSummary
												className={styles.leftSideBarSummary}
												expandIcon={<ExpandMoreIcon />}
												aria-controls="panel1a-content"
												id="panel1a-header"
											>
												<Box component={"h5"}>Fundamentals</Box>
											</AccordionSummary>
											<AccordionDetails className={styles.leftSideBarContent}>
												<Box>
													<a
														href="#howToWriteResume"
														className={
															currentElementIndexInViewport === 0
																? `${styles.active}`
																: ""
														}
													>
														How to write a resume
													</a>
													<a
														href="#resumeFormats"
														className={
															currentElementIndexInViewport === 1
																? `${styles.active}`
																: ""
														}
													>
														Resume formats
													</a>
													<a
														href="#chronologicalResume"
														className={
															currentElementIndexInViewport === 2
																? `${styles.active}`
																: ""
														}
													>
														Chronological resume
													</a>
													<a
														href="#functionalResume"
														className={
															currentElementIndexInViewport === 3
																? `${styles.active}`
																: ""
														}
													>
														Functional resume
													</a>
												</Box>
											</AccordionDetails>
										</Accordion>
										<Accordion className={styles.leftSideBarItem}>
											<AccordionSummary
												className={styles.leftSideBarSummary}
												expandIcon={<ExpandMoreIcon />}
												aria-controls="panel2a-content"
												id="panel2a-header"
											>
												<Box component={"h5"}>Resume elements</Box>
											</AccordionSummary>
											<AccordionDetails className={styles.leftSideBarContent}>
												<Box>
													<a
														href="#summaryObjective"
														className={
															currentElementIndexInViewport === 4
																? `${styles.active}`
																: ""
														}
													>
														Summary, objective
													</a>
													<a
														href="#employmentHistory"
														className={
															currentElementIndexInViewport === 5
																? `${styles.active}`
																: ""
														}
													>
														Employment history
													</a>
													<a
														href="#skills"
														className={
															currentElementIndexInViewport === 6
																? `${styles.active}`
																: ""
														}
													>
														Skills
													</a>
													<a
														href="#education"
														className={
															currentElementIndexInViewport === 7
																? `${styles.active}`
																: ""
														}
													>
														Education
													</a>
													<a
														href="#hobbies"
														className={
															currentElementIndexInViewport === 8
																? `${styles.active}`
																: ""
														}
													>
														Hobbies
													</a>
												</Box>
											</AccordionDetails>
										</Accordion>
										<Accordion className={styles.leftSideBarItem}>
											<AccordionSummary
												className={styles.leftSideBarSummary}
												expandIcon={<ExpandMoreIcon />}
												aria-controls="panel3a-content"
												id="panel3a-header"
											>
												<Box component={"h5"}>Additional improvements</Box>
											</AccordionSummary>
											<AccordionDetails className={styles.leftSideBarContent}>
												<Box>
													<a
														href="#references"
														className={
															currentElementIndexInViewport === 9
																? `${styles.active}`
																: ""
														}
													>
														References
													</a>
													<a
														href="#languages"
														className={
															currentElementIndexInViewport === 10
																? `${styles.active}`
																: ""
														}
													>
														Languages
													</a>
													<a
														href="#proofreading"
														className={
															currentElementIndexInViewport === 11
																? `${styles.active}`
																: ""
														}
													>
														Proofreading
													</a>
													<a
														href="#international"
														className={
															currentElementIndexInViewport === 12
																? `${styles.active}`
																: ""
														}
													>
														International resumes
													</a>
												</Box>
											</AccordionDetails>
										</Accordion>
									</>
								)}
							</Scrollspy>
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box className={styles.mainSection}>
							<Box ref={sectionRefs[0]} id="howToWriteResume">
								<Box
									sx={{
										fontSize: "20px",
										lineHeight: "22px",
										mb: "40px",
									}}
								>
									All the tips, tools, templates, and examples you need to learn
									how to write a resume in 2022
								</Box>
								<Box component={"p"}>
									Having a perfectly honed and well-written resume is like having
									a superpower during your job search.
								</Box>
								<Box component={"p"}>
									While most people walk up the hiring ladder, you put on your
									crimson cape and soar upwards at supersonic speed. This how to
									write a resume guide outlines the most important building blocks
									for creating exactly this type of amazing resume.
								</Box>
								<Box component={"p"}>
									There are the 10 important resume writing steps we will cover in
									this blog:
								</Box>

								<Box className={styles.importantSteps}>
									<Image src={ImpSteps} alt="How to Write Resume" />
									<Box className={styles.imgCaption}>
										How to write a resume - Resume writing 10 important steps
									</Box>
								</Box>
								<Box
									sx={{
										width: "100%",
										backgroundColor: "#eff2f9",
										padding: "24px 32px",
										borderRadius: "6px",
										m: "40px 0",
									}}
								>
									<Box component={"p"}>
										<strong> A note about the authors: </strong>
										Resume.io's job-winning resume templates have helped 5
										million job seekers around the world write a great cv . Our
										team is dedicated to empowering you in your quest for an
										amazing career... as well making this journey easy and
										enjoyable!
									</Box>
								</Box>
								<Box component={"p"}>
									Imagine two great professionals with awesome credentials,
									talents and expertise. Except that one gets ignored by potential
									employers and stumped by automated application systems. While
									the other gets several interview calls each week from industry
									leaders.
								</Box>
								<Box component={"p"}>
									What’s the difference between the two people? It could be
									connections or circumstance. But often, the difference is a
									great resume that “hacks” hiring situations. Marketing is just
									as important for professionals as it is for businesses. Present
									yourself as the obvious choice for the role.
								</Box>
								<Box component={"p"}>
									It’s often the little things in life that matter the most.
								</Box>
								<Box component={"h2"}>
									The vital starting point: where to write your resume?
								</Box>
								<Box component={"p"}>
									We’ll go straight to the golden rule, no beating around the
									bush.
								</Box>
								{/* <Box>
                                <Image src={WTRCV} alt="Where to write Cv" />
                                </Box> */}
								<Box component={"p"}>
									Do not use basic text editors to write the final version of your
									resume. You can use them to craft your initial thoughts if you
									feel comfortable with them, but MS Word, Excel and similar
									programs have a host of potential problems that may hinder you.
								</Box>
								<Box component={"p"}>These may include:</Box>
								<ul className={styles.whereToWriteCv}>
									<li>A difficult and time-consuming formatting process</li>
									<li>Header/footer information not readable by other systems</li>
									<li>
										Poor and bland visual designs that get lost among other
										resumes
									</li>
									<li>Formatting that looks different in other programs</li>
									<li>Lost or corrupted files and so on</li>
								</ul>
								<Box className={styles.basicEdit}>
									<Image src={BasicEdit} alt="Where to write Cv" />
									<Box className={styles.imgCaption}>
										How to write a resume - Potential problems basic text
										editors
									</Box>
								</Box>
								<Box component={"p"}>So, what’s the solution? </Box>
								<Box component={"p"}>
									The accepted standard for submitting most resumes is the PDF
									file format. The benefits are clear in most cases: universal
									formatting that doesn’t change regardless of where you view it
									and readability by most software systems.
								</Box>
								<Box className={styles.comparisonSection}>
									<Box className={styles.comparisonBlock}>
										<Box sx={{ display: "flex" }}>
											<Box className={styles.comparisonBlockTitleIcon}></Box>
											<Box className={styles.comparisonBlockTitle}>DO</Box>
										</Box>
										<Box className={styles.comparisonBlockContent}>
											Use professionally designed layouts and tools that have
											been tested with hiring managers and applicant systems.
										</Box>
									</Box>
									<Box
										className={`${styles.comparisonBlock} ${styles.comparisonBlockTwo}`}
									>
										<Box sx={{ display: "flex" }}>
											<Box
												className={`${styles.comparisonBlockTitleIconTwo} ${styles.comparisonBlockTitleIcon}`}
											></Box>
											<Box className={styles.comparisonBlockTitle}>Don't</Box>
										</Box>
										<Box className={styles.comparisonBlockContent}>
											Use old-school text editors that take hours of work and
											are often incompatible with the employer's software.
										</Box>
									</Box>
								</Box>
								<Box component={"p"}>
									The ideal tools to produce clean, concise and beautiful resumes
									in PDF format are online builders. These web and/or software
									solutions are specifically made to be the perfect instrument for
									visually striking, technically functional and content-optimized
									resumes.{" "}
								</Box>
								<Box component={"p"}>
									By using a service/platform that is designed specifically for
									resumes, you save lots of time and avoid hidden problems. With
									an online resume builder , what you see is what the hiring
									manager will see.
								</Box>
								<Box className={styles.resumeBuild}>
									<Image src={ResumeBuild} alt="Resume Build" />
								</Box>
							</Box>
							<Box
								ref={sectionRefs[1]}
								id="resumeFormats"
								className={styles.resumeFormatsSection}
							>
								<Box className={styles.pageMainHeading} component={"p"}>
									There are 3 common resume formats: chronological, functional,
									and a combination. Here's how to choose the right one for you.
								</Box>
								<Box component={"h2"}>What is a resume format?</Box>
								<Box component={"p"}>
									The phrase “resume format” is often a confusing one, since
									different sources use this term to refer to different/multiple
									things.
								</Box>
								<Box component={"p"}>
									In the most basic sense, a resume format is the type of
									structure your resume has depending on the order in which resume
									sections are presented, how the employment history section is
									written and which sections are given the most emphasis.
								</Box>
								<Box component={"p"}>
									For example, in one type of resume format, the skills section
									may be overly emphasized, while in another, your work history
									will take center stage.
								</Box>

								<Box component={"h2"}>3 main types of resume formats</Box>
								<Box component={"p"}>
									Luckily when it comes to choosing a resume format, your choices
									are already narrowed down to three main types:
								</Box>
								<Box className={styles.digitalNumbers}>
									<ol>
										<li>
											Reverse
											<a href="/"> chronological</a>
										</li>
										<li>
											<a href="/"> Functional</a>
										</li>
										<li>Combination</li>
									</ol>
								</Box>
								<Box component={"p"}>
									Each one offers unique advantages and there are no best resume
									templates. You may even want to create a version of your resume
									in each format depending on the job title, the company or even
									the country in which you are applying. An online resume builder
									can make it much easier to quickly switch around sections and go
									from one format to another without much fuss.{" "}
								</Box>
								<Box component={"h2"}>Reverse chronological format</Box>
								<Box component={"p"}>
									The old standard, the reverse chronological format has probably
									been around nearly as long as resumes. And it’s not without good
									reason. A chronological format is still the best way to showcase
									employment history , especially in traditional industries where
									climbing the corporate ladder is the most commonly accepted
									route. All the best resume templates will focus on this logical
									approach.
								</Box>
								<Box component={"p"}>
									The old standard, the reverse chronological format has probably
									been around nearly as long as resumes. And it’s not without good
									reason. A chronological format is still the best way to showcase
									employment history , especially in traditional industries where
									climbing the corporate ladder is the most commonly accepted
									route. All the best resume templates will focus on this logical
									approach.
								</Box>
								<Box className={styles.comparisonSection}>
									<Box className={styles.comparisonBlock}>
										<Box sx={{ display: "flex" }}>
											<Box className={styles.comparisonBlockTitleIcon}></Box>
											<Box className={styles.comparisonBlockTitle}>DO</Box>
										</Box>
										<Box className={styles.comparisonBlockContent}>
											Use a chronological format if your work experience is
											your key selling point.
										</Box>
									</Box>
									<Box
										className={`${styles.comparisonBlock} ${styles.comparisonBlockTwo}`}
									>
										<Box sx={{ display: "flex" }}>
											<Box
												className={`${styles.comparisonBlockTitleIconTwo} ${styles.comparisonBlockTitleIcon}`}
											></Box>
											<Box className={styles.comparisonBlockTitle}>Don't</Box>
										</Box>
										<Box className={styles.comparisonBlockContent}>
											Pick a chronological format just because you think you
											have to even if it doesn’t match your experience.
										</Box>
									</Box>
								</Box>
								<Box className={styles.reverseFormat}>
									<Image src={ReverseFormat} alt="Reverse Chronological Format" />
									<Box className={styles.imgCaption}>Reverse Resume Example</Box>
								</Box>
								<Box component={"h2"}>Functional resume format</Box>
								<Box component={"p"}>
									For jobs where specialized skills count for more than employment
									history, the functional resume can be a lifesaver. This format
									allows you to highlight your expertise right from the top of
									your resume in a section often called “Experience.” Whereas a
									chronological resume format shows an employer what you’ve
									accomplished in the past, a functional resume format is more
									focused on the skills and specialized knowledge you can offer
									right now.
								</Box>
								<Box component={"p"}>
									Since a functional resume format is more flexible than a
									chronological one, it’s a great choice for a variety of job
									situations. Skilled tradespeople, freelancers, gig workers,
									students and even recent grads can all benefit from highlighting
									their strengths without having to categorically organize them
									under previous positions which may be too numerous or
									repetitive.
								</Box>
								<Box className={styles.comparisonSection}>
									<Box className={styles.comparisonBlock}>
										<Box sx={{ display: "flex" }}>
											<Box className={styles.comparisonBlockTitleIcon}></Box>
											<Box className={styles.comparisonBlockTitle}>DO</Box>
										</Box>
										<Box className={styles.comparisonBlockContent}>
											Choose a functional format if your skills are the most
											important aspect of your job.
										</Box>
									</Box>
									<Box
										className={`${styles.comparisonBlock} ${styles.comparisonBlockTwo}`}
									>
										<Box sx={{ display: "flex" }}>
											<Box
												className={`${styles.comparisonBlockTitleIconTwo} ${styles.comparisonBlockTitleIcon}`}
											></Box>
											<Box className={styles.comparisonBlockTitle}>Don't</Box>
										</Box>
										<Box className={styles.comparisonBlockContent}>
											Create a functional resume just because you lack work
											experience in a field that traditionally requires a
											chronological resume.
										</Box>
									</Box>
								</Box>
								<Box className={styles.functionalFormat}>
									<Image src={FunctionalFormat} alt="Functional Format" />
									<Box className={styles.imgCaption}>
										Functional Resume Example
									</Box>
								</Box>
								<Box component={"h2"}>Combination resume format</Box>
								<Box component={"p"}>
									A combined format, sometimes called a combination format, is
									exactly what it sounds like: the perfect fusion of the
									chronological and functional formats. The need for a combined
									resume format is often dictated by the candidate’s job search.
									For example, a freelancer looking to apply to a full time
									position may want to begin the resume with top skills before
									following up with an Employment History section to show their
									ability to work in environments similar to the prospective
									employer’s.
								</Box>
								<Box component={"p"}>
									Many professional resume writers will write in a combination
									style while still calling it reverse chronological. Highlighting
									your key skills at the top is a genuinely smart move for many
									roles. The work experience section isn't so far behind and you
									can normally still fit the two most recent roles on page one.
								</Box>
								<Box component={"p"}>
									The advantage of the combined resume is that it allows the job
									seeker to first draw the hiring manager’s attention to their
									strengths, while also providing the employment history
									information that many traditional companies still expect. For
									candidates whose experience best fits a functional resume but
									aren’t sure how well it will be received, a combined resume is
									the right choice.
								</Box>
								<Box component={"p"}>
									Here's a video that can help you choose between a combination or
									chronological resume format.
								</Box>
								<Box className={styles.comparisonSection}>
									<Box className={styles.comparisonBlock}>
										<Box sx={{ display: "flex" }}>
											<Box className={styles.comparisonBlockTitleIcon}></Box>
											<Box className={styles.comparisonBlockTitle}>DO</Box>
										</Box>
										<Box className={styles.comparisonBlockContent}>
											Create a combined resume if you want to take an
											innovative approach, highlight key abilities or you are
											making a career transition.
										</Box>
									</Box>
									<Box
										className={`${styles.comparisonBlock} ${styles.comparisonBlockTwo}`}
									>
										<Box sx={{ display: "flex" }}>
											<Box
												className={`${styles.comparisonBlockTitleIconTwo} ${styles.comparisonBlockTitleIcon}`}
											></Box>
											<Box className={styles.comparisonBlockTitle}>Don't</Box>
										</Box>
										<Box className={styles.comparisonBlockContent}>
											Confuse a hiring manager by burying or hiding certain
											sections that you know they will expect.
										</Box>
									</Box>
								</Box>
								<Box className={styles.combinationFormat}>
									<Image src={CombinationFormat} alt="Combination Format" />
									<Box className={styles.imgCaption}>
										Combination Resume Example
									</Box>
								</Box>
							</Box>
							<Box
								ref={sectionRefs[2]}
								id="chronologicalResume"
								className={styles.chronologicalResumeSection}
							>
								<Box className={styles.pageMainHeading}>
									The chronological resume format is the most common style used in
									resumes, and there are good reasons for that. See if it’s the
									best choice for you, and learn how to use it.
								</Box>
								<Box component={"h2"}>
									Using a chronological resume to find a job
								</Box>
								<Box component={"p"}>
									The term <b> chronological resume </b> is a bit of a misnomer,
									as this format actually puts employment history and education in
									reverse chronological order. That means you list your last or
									current job first, and your first job last.
								</Box>
								<Box component={"p"}>
									Likewise, when using chronological order in reverse, you list
									your highest educational achievement first and earlier
									milestones below that.
								</Box>
								<Box component={"p"}>
									The reverse chronological resume format is the one most commonly
									used, as it generally showcases a candidate’s most impressive
									experience first. If you’re a brain surgeon looking for a new
									position, it wouldn’t make much sense to start off your
									employment history with your first job at McDonald’s.
								</Box>

								<Box className={styles.chronologicalOrder}>
									<Image src={ChronologicalOrder} alt="Chronological Order" />
									<Box className={styles.imgCaption}>
										What is chronological order?
									</Box>
								</Box>
								<Box component={"h2"}>
									What's the difference between chronological resumes and other
									resume formats?
								</Box>
								<Box component={"p"}>
									The primary alternative to the chronological/reverse
									chronological resume is the functional resume format , which
									focuses on your experience and skills rather than a time-based
									narrative of how you acquired them. The
									<b> hybrid resume format</b> uses a combination of these two
									approaches.
								</Box>
								<Box component={"p"}>
									For example, you may be a professional accountant who is looking
									for an “exit strategy” to pursue your longtime passion for
									photography. If you’re preparing a resume to promote your
									experience doing wedding, event and real estate photography, it
									would make little sense to provide a detailed chronological list
									of your past jobs as an accountant. In this case, a functional
									resume emphasizing your photography experience would be a better
									choice.
								</Box>
								<Box component={"p"}>
									Let’s dig a little deeper into the chronological resume to see
									if it’s the best choice for you. What this guide will cover:
								</Box>

								<ul className={styles.chronologicalOrderPoints}>
									<li>When to use a chronological resume</li>
									<li>Advantages and disadvantages of a chronological resume</li>
									<li>
										The format and structure of&nbsp;a chronological&nbsp;resume
									</li>
									<li>Writing the employment history and education sections</li>
								</ul>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h2"}>Do resumes have to be chronological?</Box>
									<Box component={"p"}>
										Most resumes are chronological, but you can also use a
										functional resume or hybrid. It depends on your experience
										and what would suit best based on whether your career has
										been seamless (chronological) or you have embarked on a
										career rollercoaster (function/hybrid)
									</Box>
								</Box>
								<Link href="/">
									<a className={styles.twoPageResume}>
										<Box className={styles.twoPageResumeImg}>
											<Image src={BestResume} alt="Best Resume" />
										</Box>
										<Box className={styles.twoPageResumeDetails}>
											<Box className={styles.twoPageResumeCaption}>
												Related article
											</Box>
											<Box className={styles.twoPageResumeTitle}>
												Best resume format 2022 (+free examples)
											</Box>
											<Box className={styles.twoPageResumeDescription}>
												There are 3 common resume formats: chronological,
												functional, and a combination. Here's how to choose
												the right one for you.
											</Box>
										</Box>
									</a>
								</Link>
								<Box component={"h2"}>When to use a chronological resume</Box>
								<Box component={"p"}>
									The chronological resume format is usually the best one to use
									if you have years of continuous experience in the field in which
									you’re seeking a job. This is especially true if you followed a
									more or less “normal” career path in which you progressed from
									an entry-level position to progressively more senior posts.
								</Box>
								<Box component={"p"}>
									This format is usually used by people with a proven track record
									in their field, especially those who can demonstrate
									contributions they’ve made to their previous employers’
									business. The emphasis is on experience, which is the main thing
									that employers are usually looking for in a job candidate.
								</Box>
								<Box component={"p"}>
									There are several <b> advantages </b> to this resume format,
									including:
								</Box>
								<ul className={styles.chronologicalResumeAdv}>
									<li>
										It’s&nbsp;familiar to recruiters, so&nbsp;it’s&nbsp;easy for
										them to&nbsp;process.
									</li>
									<li>
										It’s&nbsp;easy to write, and&nbsp;there are lots of&nbsp;
										<a href="/">examples</a>
										&nbsp;and <a href="/resume-templates">templates</a>
										to guide you.
									</li>
									<li>
										It demonstrates contributions made&nbsp;at previous jobs,
										which may be&nbsp;similar to what&nbsp;what the prospective
										employer is looking for.
									</li>
									<li>
										It shows experience with other companies in&nbsp;your
										field,&nbsp;demonstrating&nbsp;your connections and
										familiarity with the business needs and challenges.
									</li>
									<li>
										It tells&nbsp;a&nbsp;story of career progression, with
										growing experience, responsibilities and contributions.
									</li>
								</ul>
								<Box component={"p"}>
									Every coin has two sides. There are some potential{" "}
									<b>disadvantages</b> to using a chronological resume format as
									well, including:
								</Box>
								<ul className={styles.chronologicalResumeDisAdv}>
									<li>
										It may&nbsp;reveal gaps in your&nbsp;employment&nbsp;history
										that could raise questions for a recruiter.
									</li>
									<li>
										It may demonstrate “job hopping,”&nbsp;or having worked many
										jobs for a short amount of time, making potential employers
										wonder how long you might last at their company.
									</li>
									<li>
										If you’re changing careers, a long career in one field may
										do little to demonstrate your qualifications to begin a new
										one.
									</li>
								</ul>
								<Box component={"p"}>
									If these disadvantages outweigh the advantages, you may want to
									consider using a functional or hybrid resume format.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h2"}>
										Is a chronological or functional resume better?
									</Box>
									<Box component={"p"}>
										The answer is that it depends on your experience. If you
										have a clear career path without lots of gaps and you have
										been with employers for 1 or more years, a chronological is
										the best option. However, if you've had a lot of temporary
										roles or gaps on your resume, you may want to consider a
										functional resume.
									</Box>
								</Box>
								<Box component={"h2"}>
									The structure and format of a chronological CV
								</Box>
								<Box component={"p"}>
									A chronological resume (or CV, as this document is known outside
									the U.S. and Canada) should follow this basic structure and
									format:
								</Box>
								<Box component={"p"}>
									<b>• Header: </b>Contains your name, occupation, address, email
									and phone number.{" "}
								</Box>
								<Box component={"p"}>
									<b>• Summary/profile: </b>Contains your name, occupation,
									address, email and phone number.
								</Box>
								<Box component={"p"}>
									<b>• Employment history:</b>A listing of your past jobs (last
									job first, first job last), with bullet points on what you
									achieved at each one.
								</Box>
								<Box component={"p"}>
									<b>• Education: </b> Your formal educational experience (highest
									degree first) and any certifications in your field.
								</Box>
								<Box component={"p"}>
									<b>• Skills: </b> A short list of the hard and soft skills that
									make you good at your job.
								</Box>
								<Box component={"p"}>
									<b>• Optional sections: </b> Membership in professional
									organizations; hobbies and interests; references
								</Box>
								<Box component={"p"}>
									Here is how a chronological resume should look .
								</Box>
								<Box className={styles.chronologicalResumeEx}>
									<Image
										src={ChronologicalResumeEx}
										alt="Chronological Resume Example"
									/>
									<Box className={styles.imgCaption}>Resume Example Google</Box>
								</Box>
							</Box>
							<Box
								ref={sectionRefs[3]}
								id="functionalResume"
								className={styles.functionalResumeSection}
							>
								<Box className={styles.pageMainHeading}>
									What is a functional resume format and who should use one? Plus
									tips, examples, and free resume templates.
								</Box>

								<Box component={"p"}>
									Choosing the right format is one of the first and most important
									decisions you have to make when writing a resume. This guide
									will discuss the nuances of the functional format and the
									circumstances for using it. We'll also provide you with
									adaptable examples and plenty of other resources to help you
									choose the right type of resume.
								</Box>
								<Box component={"p"}>
									A <b>functional resume </b>focuses on your skills and talents.
									It shows the reader how you can contribute to their
									organizational objectives from day one. It also helps to mask
									any issues with your employment history which a chronological
									resume may expose, such as limited experience or job gaps. We
									will discuss the pros and cons.
								</Box>
								<Box component={"p"}>
									This guide will help you to confirm that a
									<b> functional resume </b> is the best choice for you, by
									teaching you the following:
								</Box>

								<ul className={styles.functionalResumeInfo}>
									<li>Introduce the functional resume as an option</li>
									<li>Show you how to create a layout for this type of resume</li>
									<li>What information to include in a functional resume</li>
									<li>How to organize each section</li>
								</ul>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h2"}>
										Why do many recruiters hate functional resumes?
									</Box>
									<Box component={"p"}>
										While a functional resume will be suitable for certain job
										seekers, as we will explore, we cannot escape the fact that
										recruiters dislike them. Functional resumes make it hard to
										understand when you accomplished specific things, there is
										little opportunity to understand the context of
										accomplishments and they automatically assume that the
										applicant is hiding something. If you have any career of
										note (3+ years) - think very carefully whether you want a
										recruiter to be feeling this way.
									</Box>
								</Box>
								<Box component={"h2"}>The functional resume: An introduction</Box>
								<Box component={"p"}>
									The <b>functional </b> resume format is applicable for
									individuals with a great deal of education and training and/or a
									strong set of job-related skills. This includes new graduates or
									experienced workers transferring to a new industry where their
									skills and education will apply. It is also good for people who
									have worked for a limited number of organizations and whose
									skills are more important than the employers they have worked
									for.
								</Box>
								<Box component={"p"}>
									<b> A functional resume </b>highlights your skills and talents
									and how they relate to the job you’re applying for. Often, the
									skills you have are the same ones described in the job posting.
									This type of resume is best for people working in technical or
									skill base professions, or who are transitioning into a new
									career.
								</Box>
								<Link href="/">
									<a className={styles.twoPageResume}>
										<Box className={styles.twoPageResumeImg}>
											<Image src={BestResume} alt="Best Resume" />
										</Box>
										<Box className={styles.twoPageResumeDetails}>
											<Box className={styles.twoPageResumeCaption}>
												Related article
											</Box>
											<Box className={styles.twoPageResumeTitle}>
												Best resume format 2022 (+free examples)
											</Box>
											<Box className={styles.twoPageResumeDescription}>
												There are 3 common resume formats: chronological,
												functional, and a combination. Here's how to choose
												the right one for you.
											</Box>
										</Box>
									</a>
								</Link>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h2"}>
										My career path hasn't been smooth. Should I hide it with a
										functional resume?
									</Box>
									<Box component={"p"}>
										Being open and honest about your career is the only choice.
										If you attempt to hide job hopping and career gaps with a
										functional resume, you guarantee an awkward barrage of
										probing questions in an interview (where you will have to
										tell the truth). Career gaps happen, mistakes happen and
										people get fired for no reason. Interviewers understand this
										- a bumpy career history doesn't mean that you won't do a
										fantastic job.
									</Box>
								</Box>
								<Box component={"h2"}>Format of a functional resume</Box>
								<Box component={"p"}>
									The format of a <b>functional resume </b> is very specific. It
									is structured to enable recruiters to quickly determine your
									qualifications for the job and to encourage them to read the
									complete resume to learn more about you. An easy way to create
									your resume is to select a functional resume template which you
									can find online and simply insert your details into the
									appropriate sections, following the prompts provided by the
									functional resume template. However, you still need to know what
									the structure of a <b>functional resume </b> looks like.
								</Box>
								<Box component={"p"}>
									The basic structure for a functional resume is:
								</Box>
								<ul className={styles.functionalResumePoint}>
									<li>
										Name and contact information (email, phone and possibly the
										location, but never an address)
									</li>
									<li>
										Title – This should match the job title you are applying for
									</li>
									<li>
										Summary of applicable skills and any experience relevant to
										those listed in the job posting.
									</li>
									<li>
										Hard Skills – The emphasis is here. These are the skills
										directly related to the job
									</li>
									<li>
										Additional Skills – Soft skills which complement the job
									</li>
									<li>
										Education – Formal, vocational and subsequent training in
										specific skills (note – this may precede the Skills section
										if you are a recent graduate or have received recent
										training which would qualify you for the position)
									</li>
									<li>
										Experience – Brief listing of employers, dates, and title
									</li>
									<li>Industry related certifications</li>
									<li>Industry organizations</li>
									<li>Volunteer experience</li>
								</ul>
								<Link href="/">
									<a className={styles.twoPageResume}>
										<Box className={styles.twoPageResumeImg}>
											<Image
												src={BestChronologicalResume}
												alt="Best Chronological Resume"
											/>
										</Box>
										<Box className={styles.twoPageResumeDetails}>
											<Box className={styles.twoPageResumeCaption}>
												Related article
											</Box>
											<Box className={styles.twoPageResumeTitle}>
												Using the chronological resume format
											</Box>
											<Box className={styles.twoPageResumeDescription}>
												The chronological resume format is the most common
												style used in resumes, and there are good reasons
												for that. See if it’s the best choice for you, and
												learn how to use it.
											</Box>
										</Box>
									</a>
								</Link>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h2"}>
										Career change is a valid reason for a functional resume
										format.
									</Box>
									<Box component={"p"}>
										Having said that recruiters don't like functional resumes,
										when you are changing careers and wish to emphasize that you
										have the necessary skills to do your new job, a spotlight on
										functional skills and competencies is exactly what you need.
									</Box>
								</Box>
								<Box component={"h2"}>
									Sections to include on your functional resume
								</Box>
								<Box component={"p"}>
									The basic content you include in your resume is similar for any
									resume format you choose to use. However, how it is organized
									and how much detail you provide for each section differs
									depending on the type of resume you are writing. Here are the
									content and organization recommendations for the
									<b> functional resume.</b>
								</Box>
								<Box component={"h2"}>Contact information</Box>
								<Box component={"p"}>
									The resume starts with your contact information. This will allow
									the employer to reach out to you to invite you to an interview,
									which is the purpose of a resume. Your contact details should
									include:
								</Box>
								<ul className={styles.contactInformationPoints}>
									<li>Name</li>
									<li>Phone number</li>
									<li>e-mail address</li>
									<li>LinkedIn profile URL</li>
								</ul>
								<Box component={"p"}>
									Each of these items could be at the top of each page of the
									resume so the employer will know whose resume they are reading.
									Your name should be slightly larger than your contact
									information. Your email address and LinkedIn URL can contain
									links which the employer can click on. Anything you can do to
									make it easier for the employer will help you land the
									interview.
								</Box>
							</Box>
							<Box
								ref={sectionRefs[4]}
								id="summaryObjective"
								className={styles.summaryObjective}
							>
								<Box className={styles.pageMainHeading}>
									Learn how to write a resume personal statement. We also provide
									personal statement tips and examples, plus free templates.
								</Box>
								<Box component={"h2"}>What is a resume personal statement?</Box>
								<Box component={"p"}>
									A resume personal statement expresses who you are, where you’ve
									been, and sometimes where you plan to go next right at the top
									of your resume.
								</Box>
								<Box component={"p"}>
									The resume personal statement hooks in a reader, influencing
									them to read more. So, how do you write a resume personal
									statement that is both natural and grabs an employer’s
									attention? Offer them a brief insight into who you are and why
									you would be a fantastic hire. So what do you write in a
									personal statement for a job?
								</Box>
								<Box component={"p"}>This guide will cover:</Box>

								<ul className={styles.personalStatementPoints}>
									<li>
										The basic formatting of a personal statement: How to tailor
										your personal statement to give you a competitive advantage
									</li>
									<li>
										Personal statement examples you should (and shouldn’t) use
									</li>
									<li>
										Practical steps for getting started on your resume personal
										statement
									</li>
								</ul>
								<Box component={"h2"}>The personal statement format</Box>
								<Box component={"p"}>
									The personal statement is a short paragraph that sits right
									below your contact information at the top of a resume. It sums
									up your experience, goals and skills with confidence. Think of
									your resume’s personal statement like an extended tagline for
									your career. A resume personal statement should include:
								</Box>
								<ul className={styles.personalStateFormat}>
									<li>Between 50 and 200 words in 3 - 4 sentences</li>
									<li>
										Your title or function, for example “Junior developer” or
										“Passionate hospitality manager”
									</li>
									<li>An opening hook</li>
									<li>Soft skills and hard skills</li>
									<li>Impressive facts and stats</li>
									<li>Your short and/or long-term goals</li>
									<li>Job-specific slant for the position you’re applying to</li>
								</ul>
								<Box component={"p"}>
									This may seem like a lot to cram into 200 words but perfecting
									your elevator pitch shows that you have a firm grasp of why your
									experience, goals, and skills make you the perfect fit for the
									job.
								</Box>
								<Box component={"p"}>
									This brief introduction is only a short piece of text, it is not
									disruptive and in many cases even serves as a welcome addition
									to what is otherwise a dry and impersonal document. It should be
									clear to you by now how we feel about the personal statement:
									Include it, especially because it allows you that bit of
									creativity that may make all the difference.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h2"}>
										How do I start my personal statement? How do you not start a
										personal statement?
									</Box>
									<Box component={"p"}>
										Even with a personal statement of 3-4 lines, sometimes the
										first sentence is the hardest. Even the first few words can
										have a disproportionate effect on how your personal
										statement is viewed. Your starting "hook" should make your
										fit with the role clear and specific. Use an example that is
										as unique to you as possible - you have to make your future
										employer sit up and pay attention. The first word of your
										personal statement should never be "I" - a great resume
										explores the potential of a common partnership and should
										not be a uni-directional monologue.
									</Box>
								</Box>
								<Box component={"h2"}>
									Align your resume’s personal statement with the job description
								</Box>
								<Box component={"p"}>
									The hiring manager delicately chose every word in their job
									description. Gather clues from its tone, which skills they
									highlight, and any hints that point toward their dream employee.
									One of the top resume tips from HR managers is to include
									relevant keywords specific to the job posting itself as well as
									the actual wording of the job title.
								</Box>
								<Box component={"p"}>
									What would this job description look like in 3 - 4 sentences?
									What keywords, skills, and tone would the job description have?
								</Box>
								<Box component={"p"}>
									While still sticking to the facts about who you are and your
									experiences, your resume personal statement should highlight as
									many similarities with the job description as possible. When the
									hiring manager reads the first few sentences in your resume,
									they feel like you are exactly the person they were describing
									when they wrote the job description.
								</Box>
								<Box component={"h2"}>Position of the personal statement</Box>
								<Box component={"p"}>
									Recruiters still prefer to see a candidate's personal details at
									the top (or running along a column on either side) of the
									resumes that cross their desk. This allows them to quickly
									search through the resumes that Applicant Tracking Systems have
									sorted into their virtual “yes” pile. You do not want your
									(relatively modern) personal statement to get in the way of this
									tradition.
								</Box>
								<Box component={"p"}>
									The best place to put your statement is after your personal
									details (if they are at the top) and before your employment
									history section. Remember that the length of your resume is
									important. If you have already been very selective and cannot
									possibly leave out any more information and if adding your
									personal statement means your resume spills over onto a third
									page, you may consider not including your statement for the
									position in question. This ensures you comply with the unwritten
									rule that a resume should not be longer than two pages.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h2"}>
										What is a good personal statement length?
									</Box>
									<Box component={"p"}>
										200 words is the maximum suggested length, but if you go
										with one powerful sentence that you want the hiring manager
										to remember for the rest of the interview process, then why
										not? Less is more, but you have to be confident in your
										application to go with this option.
									</Box>
								</Box>
							</Box>
							<Box
								ref={sectionRefs[5]}
								id="employmentHistory"
								className={styles.employmentHistorySection}
							>
								<Box className={styles.pageMainHeading}>
									Learn exactly how to describe work experience on a resume. There
									are specific formats that hiring managers and recruiters prefer,
									here they are!
								</Box>
								<Box component={"h2"}>Writing the work experience section</Box>
								<Box component={"p"}>
									Writing the resume work experience section is one of the most
									influential and often trickiest resume sections to get right.
								</Box>
								<Box component={"p"}>
									The work experience/job history on a resume is where past job
									descriptions and professional experiences give credibility to an
									application or interview. All the other information and sections
									on a resume, from hobbies to the personal statement , frame the
									list of relevant work experience over the last 10 - 15 years.
									So, how do I describe my work experience on a resume?
								</Box>
								<Box component={"p"}>
									This guide will show you everything you need to know about
									including work experience on a resume, including:
								</Box>

								<ul className={styles.workExperiencePoints}>
									<li>Why the work experience in cv matters</li>
									<li>
										What to include (and not include) in work experience on a
										resume
									</li>
									<li>
										The best format to follow for describing your work history
									</li>
									<li>Examples of work experience in cv across industries</li>
									<li>Practical tips for resume work experience</li>
									<li>
										How to list your{" "}
										<a href="/">current job and previous positions</a>
									</li>
								</ul>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>

									<Box component={"p"}>
										<b>The five-word rule. </b>Think about five words that would
										be sum up your career. How would you describe your
										experience? Those five words should then come across
										incredibly strongly in the work experience on a resume. A
										hiring manager is not going to remember the sentences that
										you write, but if they stop reading with those five words
										(or more) in their minds, your resume will have done its
										job.
									</Box>
								</Box>
								<Box component={"h2"}>
									Why is work experience on your resume so important?
								</Box>
								<Box component={"p"}>
									Before we jump in to the ins and outs of writing work experience
									on a resume, here is why it matters. A hiring manager or
									employer looks at a resume to answer one question:
								</Box>
								<Box component={"h2"}>
									Does this person’s work experience qualify them for this job?
								</Box>
								<Box component={"p"}>
									The work experience section of your resume is the foundation
									that either qualifies you or disqualifies you for an interview
									or the next step in the hiring process. This resume section uses
									the last 10 - 15 years of relevant career history to tell a
									prospective employer whether you have the work experience in
									your cv that will fit the requirements of the role. The work
									experience section gives credibility to your application and
									should compliment every other aspect of your application
									materials (other sections in the resume, cover letter,
									portfolio, etc).
								</Box>
								<Box component={"h2"}>
									How do I add experience to my resume: What to include
								</Box>
								<Box component={"p"}>
									In most cases, choosing which jobs to include on your resume
									should depend on your work history and the type of job you’re
									applying for. In general, work in a backward chronological order
									(in a resume format often known as reverse chronological format
									) starting with your most recent position at the top of the page
									and include the last 10-15 years of employment history. The
									backward chronological order works best for most job seekers.
								</Box>
								<Box component={"p"}>
									If you have a scattered work history, don’t stress. Job hopping
									is both more common and more widely accepted today, especially
									among the younger workforce. Including short part-time stints
									and side projects is good if those professional experiences
									directly relate to the job or feature skills that overlap with
									the position. Be prepared to answer questions about your career
									choices while considering work experience in cv, have a
									confident answer about your career path, and be forthcoming
									about the level of commitment you’re looking for. Once you’ve
									chosen the positions, let’s dive into the specific bullet points
									about work experience in a cv. Each one should include:
								</Box>
								<ul className={styles.resumeImportantPoints}>
									<li>
										<strong>Results-focused facts:</strong> The hiring manager
										already knows the basics. These bullet points should focus
										on how you specifically managed the position with
										innovation.
									</li>
									<li>
										<strong>Action Verbs:</strong> Strong{" "}
										<a href="/">action verbs</a>
										hook in the reader. Negotiated! Pioneered! Transformed! This
										also keeps you away from falling down the adjective rabbit
										hole.
									</li>
									<li>
										<strong>Quantitative information:</strong>
										Numbers stand out to a hiring manager. They are specific and
										tangible. You grew a client’s reader base by 300% or managed
										200 silent auction items. Let your.
										<a href="/">accomplishments</a>
										shine!
									</li>
									<li>
										<strong>On-Site Training:</strong> Weave skills and
										certifications gained on the job. This shows initiative and
										otherwise <a href="/">overlooked abilities</a>.
									</li>
									<li>
										<strong>Awards and honors: </strong>
										If you were called out on the job for great work, go ahead
										and brag. Your work experience resume examples should be
										designed to impress.
									</li>
								</ul>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h2"}>How do I write a student CV?</Box>
									<Box component={"p"}>
										A student CV for a first job should contain full details on
										your education (as that will testify to your ability to
										focus and achieve) and ideally also contain details on any
										student jobs or volunteer work that you have done while you
										were studying. It doesn't matter how menial this work was,
										the most important thing is that you understand the
										responsibility of doing a paid day's work.
									</Box>
								</Box>
								<Link href="/">
									<a className={styles.twoPageResume}>
										<Box className={styles.twoPageResumeImg}>
											<Image
												src={ResumeImportantPoints}
												alt="Resume Important Points"
											/>
										</Box>
										<Box className={styles.twoPageResumeDetails}>
											<Box className={styles.twoPageResumeCaption}>
												Related article
											</Box>
											<Box className={styles.twoPageResumeTitle}>
												How to list volunteer work on your resume
											</Box>
											<Box className={styles.twoPageResumeDescription}>
												Volunteer work can be a wonderful way to feature a
												variety of valuable skills, Here's a list of how to
												add volunteer work to your resume.
											</Box>
										</Box>
									</a>
								</Link>
								<Box component={"h2"}>
									Work experience on a resume: what to avoid
								</Box>
								<Box component={"p"}>
									Always assume that your reader — in this case, the hiring
									manager — doesn’t need anything explained. You also have very
									little room to ramble on your resume.
								</Box>
								<Box component={"p"}>Free up some space by not including:</Box>
								<ul className={styles.avoidExperiencePoints}>
									<li>
										<strong>What the organization does:</strong> your resume is
										about you. The hiring manager doesn’t need to hear about the
										company.
									</li>
									<li>
										<strong>The basic requirements of your position:</strong>{" "}
										this is implied in your job title and will shine through
										your result-focused bullet points.
									</li>
									<li>
										<strong>Filler words:</strong> For the most part, save space
										by cutting out words like “I” and “the.”
									</li>
									<li>
										<strong>Anything irrelevant:</strong> If you have smaller
										responsibilities in a position that do not relate to the new
										job, leave them out. Every bullet point and every word takes
										up precious real estate on your resume - make them count.
									</li>
								</ul>
							</Box>
							<Box ref={sectionRefs[6]} id="skills" className={styles.skillSection}>
								<Box className={styles.pageMainHeading}>
									Tips, formatting examples, and keywords to list special skills
									on your resume that the hiring manager will love.
								</Box>
								<Box component={"p"}>
									When you are making your case for a new job, it is your blend of
									resume skills that will show a hiring manager whether you are
									qualified for the role.
								</Box>
								<Box component={"p"}>
									These resume skills might be listed in a specific section,
									described within your work experience , or even subtly implied
									in the summary, and they are an essential ingredient in your job
									search story. They are the foundation of your achievements.
								</Box>
								<Box component={"p"}>
									The thing is, once you have listed a skill in your resume you
									have to be able to back it up with the career story that lies
									behind it. Resume skills are the strengths , talents, traits and
									wisdom that you have acquired throughout your education and
									career. The skills are your badges of honour, but it is the
									achievements that those skills support that are the hero content
									of any job search. This guide will cover how to go about
									showcasing your resume skills to the best effect, including:s
								</Box>

								<ul className={styles.skillsPoints}>
									<li>
										<strong>Why skills are your job search currency</strong>
									</li>
									<li>
										<strong>
											The difference between hard skills and soft skills
										</strong>
									</li>
									<li>
										<strong>How do you list special skills on a resume?</strong>
									</li>
									<li>
										<strong>
											Tips to match your skills to the job requirements
										</strong>
									</li>
									<li>
										<strong>How to convey your level of proficiency</strong>
									</li>
									<li>
										<strong>Top ten skills for ten common job functions</strong>
									</li>
									<li>
										<strong>Top ten skills for ten common professions</strong>
									</li>
								</ul>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h2"}>Do resumes have to be chronological?</Box>
									<Box component={"p"}>
										It is of utmost importance that your resume is easy to read,
										so if you leave out some of your more obscure skills, you
										will still have the chance to mention them during an
										interview. You never quite know what the hiring manager is
										looking for, so describing a particularly specific skill
										when you are not sure whether it is required is a little
										risky. Make sure that the key skills for the role are all
										included. Then you can sprinkle some of the minor skill
										fairy dust.
									</Box>
								</Box>
								<Box className={styles.resumeSkills}>
									<Image src={ResumeSkills} alt="Resume Skills" />
									<Box className={styles.imgCaption}>
										How to list special skills on your resume - Showcasing your
										resume skills
									</Box>
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h2"}>
										Why skills are your job search currency
									</Box>
									<Box component={"p"}>
										When you sit down to consider your next career move, you
										could do a lot worse than sitting down and listing all the
										things that you are good at. Then have a think about how
										these skills have contributed to your achievements and you
										will be able to sense how you will go about convincing your
										next boss to give you a job.
									</Box>
									<Box component={"p"}>
										Your resume skills are your job search currency because they
										show a hiring manager whether you have what it takes to do a
										job. If you can share examples of your skills in action,
										they are the ultimate objective measure of your ability. But
										what counts as a special talent or skill? Well, put simply,
										any ability that helps you to do your job better than anyone
										else.
									</Box>
								</Box>
								<Box component={"h2"}>
									The difference between hard and soft skills
								</Box>
								<Box component={"p"}>
									<b>Hard (or technical) resume skills</b> are all the practical,
									industry-specific tools and know-how needed for a job. Hard
									skills are quantifiable and usually learned in school, on the
									job, or training. Hard resume skills can usually be tested and
									are sometimes verified during the hiring process.
								</Box>
								<Box component={"p"}>
									A modern trend we see across the millions of resumes created
									with Resume.io is that more job seekers use hard skills to
									optimize the keywords on their resume. This strategy is an
									especially important step for candidates applying to larger
									companies who are likely to use Applicant Tracking Software (an
									ATS) to automatically filter and score resumes based on a list
									of keywords in the job description.
								</Box>
								<Box component={"p"}>
									<b>Soft resume skills </b>are usually aspects of your
									personality, work style, or effectiveness that are harder to
									measure or quantify. Soft skills are especially important for
									positions of leadership or positions where you are interacting
									with customers. When you have two candidates of similar
									backgrounds and professional qualities, it is often the soft
									skills that can be the deciding factor in who is hired.
								</Box>
								<Box component={"p"}>
									Once hiring managers assess your hard skills to know you can get
									the job done, they look to your soft skills to know if you can
									get the job done well. For many modern offices and creative
									start-ups, a company culture fit could be the edge over someone
									with the same hard skills. Soft skills speak louder in some
									situations.
								</Box>
								<Box className={styles.statInsights}>
									<Box className={styles.statInsightsLabel}>
										<InsightsIcon />
										Statistical Insight
									</Box>
									<Box component={"p"}>
										Many recent studies have demonstrated the importance of soft
										skills in today’s job market. According to LinkedIn’s 2019
										Global Talent Trends report, 92 percent of hiring managers
										agree that strong soft skills are increasingly important. A
										study reported by SHRM, an organization for HR
										professionals, found that almost half of executives thought
										a lack of soft skills was the biggest proficiency gap in the
										U.S. workforce.
									</Box>
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h2"}>
										Profession-specific examples of hard and soft skills
									</Box>
									<Box component={"p"}>
										<b>Hard skills ( Doctor ):</b> Surgery, Post-Operative Care,
										Emergency Medicine, Diagnosis.
									</Box>
									<Box component={"p"}>
										<b>Soft skills (Doctor):</b> Team Management, Leadership,
										Compassion, Empathy.
									</Box>
									<Box component={"p"}>
										<b>Hard skills (Sales Rep):</b> Salesforce, Sales
										Development, Lead Qualification, Pipeline Management.
									</Box>
									<Box component={"p"}>
										<b>Soft skills ( Sales Rep ):</b> Communication,
										Decision-Making, Focus, Integrity, Influencing.
									</Box>
									<Box component={"p"}>
										<b>Hard skills (Waitress):</b> Aloha POS, Customer Service ,
										Inventory Management, Bartending, and Food Prep.
									</Box>
									<Box component={"p"}>
										<b>Soft skills ( Waitress ):</b>
										Positive Attitude, Reliable, Communication, Hard Working,
										and Responsible.
									</Box>
								</Box>
								<Box className={styles.hardSoftSkills}>
									<Image src={HardSoftSkills} alt="Hard and Soft Skills" />
									<Box className={styles.imgCaption}>
										Blog - How to list special skills on your resume -
										Profession-specific hard and soft skills
									</Box>
								</Box>
								<Box component={"h2"}>Key rules for including resume skills</Box>
								<Box component={"p"}>
									How do you describe skills on a resume? There is much more to
									describing your skills on your resume than a few afterthoughts
									in the skills section. Rare skills may need some explanation,
									certain skills may crop up over and over again and how do you
									ensure that your very top skills are most visible?
								</Box>
								<Box component={"h2"}>
									1. Demonstrate an impressively rare skill set
								</Box>
								<Box component={"p"}>
									One of the best ways to send a hiring manager to sleep is to
									include the same resume skills as every other candidate. When
									they read the words communication skills for the tenth time,
									they will mentally pigeon-hole you with all the rest of the
									average candidates.
								</Box>
								<Box component={"p"}>
									If they think that you are average because you have included the
									same average skills as everyone else, it will be incredibly hard
									to shift that perception if you are lucky enough to be invited
									to an interview.
								</Box>
								<Box component={"h2"}>
									2. Avoid excessive resume skill repetition
								</Box>
								<Box component={"p"}>
									When you have multiple places to share your skills, it is easy
									to think that repetition is a powerful way of getting your
									message across. Believe me, it isn’t. Even if you use different
									words to describe the same resume skill, you need to realize
									that your resume real estate is far too valuable to be doing
									this.
								</Box>
								<Box component={"p"}>
									In order to come across as a rounded professional, you should
									seek to highlight as many different skills as possible in the
									skills section, employment history and summary. By all means,
									repeat a couple of the really core resume skills, but variety is
									definitely your friend.
								</Box>
								<Box component={"p"}>
									The more skills that a hiring manager can read on a resume, the
									more interesting the potential interview with you might prove.
								</Box>
								<Box component={"h2"}>
									3. Ensure your top resume skills are the most visible
								</Box>
								<Box component={"p"}>
									In the table below you can find the three places to list your
									resume skills. There are different ways to describe your skill
									set to a potential employer, but if there are skills that you
									want to shout about from the rooftops, you should absolutely put
									them (or describe them) in your summary or skills section.
								</Box>
								<Box component={"p"}>
									You might think that a potential employer might read every
									detail of your work experience, but that may not be the case for
									many reasons. You can’t afford for critical skills to be lost in
									your general work experience, so put them at the top of your
									resume in the summary or in the specific skills section (where
									they are most visible but have the least context).
								</Box>
								<Box className={styles.keyRulesSkills}>
									<Image src={KeyRulesSkills} alt="Key Rules Skills" />
									<Box className={styles.imgCaption}>
										Blog - How to list special skills on your resume - Key rules
										for including resume skills
									</Box>
								</Box>
							</Box>
							<Box
								ref={sectionRefs[7]}
								id="education"
								className={styles.educationSection}
							>
								<Box component={"p"} className={styles.pageMainHeading}>
									Learn about best practices for listing education on your resume,
									plus tips for special circumstances.
								</Box>
								<Box component={"p"}>
									When contemplating how to list education on a resume, you need
									to realize that it is an essential component of your job search
									story. In today’s knowledge-hungry world, it’s common to have
									diverse educational experiences that could include things like
									high school, college, graduate school, online certificates,
									bootcamps, licenses, and beyond.
								</Box>
								<Box component={"p"}>
									If you are curious and ambitious, education carries on long
									after your graduation day.
								</Box>
								<Box component={"p"}>This guide will teach you:</Box>

								<ul className={styles.educationTips}>
									<li>The basics of how to add education on resume</li>
									<li>
										Special circumstances such as incomplete or in-progress
										programs, certifications, courses, and more
									</li>
									<li>
										How longevity of career affects the type of education that
										you should list
									</li>
									<li>What about writing a resume with no education included?</li>
									<li>How you list different kinds of education?</li>
									<li>
										Expert tips and examples of how to put education on your
										resume
									</li>
								</ul>
								<Box component={"h2"}>
									Let’s start with basics of how to list education on resume
								</Box>
								<Box component={"p"}>
									In terms of a layout, a resume's education section includes:
								</Box>
								<Box className={styles.digitalNumbers}>
									<ol>
										<li>Name of the institution</li>
										<li>Degree</li>
										<li>School location</li>
										<li>Date of graduation</li>
										<li>GPA (only when over 3.0)</li>
									</ol>
								</Box>
								<Box component={"p"}>
									When wondering how to list education on resume:
								</Box>
								<ul className={styles.howEducationList}>
									<li>
										Start with your highest qualification and work your way back
										in reverse-chronological order
									</li>
									<li>
										Only include high school if you did not attend college,
										attended a prestigious private academy or recently
										graduated.
									</li>
									<li>
										The placement of the education section of your resume
										depends on your graduation date, if you’re a recent graduate
										education on your resume is more important and should be
										added closer to the top of your resume.
									</li>
								</ul>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h2"}>Do employers verify education?</Box>
									<Box component={"p"}>
										You might think that no employer has time to check
										references or verify education, but no matter what the level
										of hire, it is actually incredibly easy to do a basic check.
										A quick 5-minute phone call will suffice and every
										university will have easy access to previous graduate
										results. While this isn't industry standard, if there is any
										hint at all that you are bending the truth with your
										educational claims, it is not hard to verify what you have
										listed. It is a sackable offence if you lie in such a way on
										your resume.
									</Box>
								</Box>
								<Box component={"h2"}>
									How to put education on a resume in unique educational
									situations?
								</Box>
								<Box component={"p"}>
									<b>Unfinished programs </b>- if you started a degree or some
									other type of program but didn’t finish, only put it if the
									experience gained is relevant to the position. For example, if
									you’re applying for a sales position and you have 40 credits
									toward a Geology degree, it’s probably not worth mentioning
									unless it was at a prestigious institution.
								</Box>

								<Box component={"p"}>
									How do you add your education on your resume if you are applying
									to work in a museum, with an unfinished art history program?
									Include it as you can always discuss the circumstances at
									interview. Keep in mind anything you add, including education on
									your resume, is fair game for discussion.
								</Box>
								<Box component={"p"}>
									If you’re in high school and you’re creating a resume for a
									part-time job , first good for you - great job, and second
									you’re likely not getting this job because of your work
									experience so use this section to highlight the type of student
									you are, your work ethic, and passions.
								</Box>
								<Box component={"p"}>
									<b>Certifications </b>- if you started a degree or some other
									type of program but didn’t finish, only put it if the experience
									gained is relevant to the position. For example, if you’re
									applying for a sales position and you have 40 credits toward a
									Geology degree, it’s probably not worth mentioning unless it was
									at a prestigious institution.
								</Box>
								<Box component={"p"}>
									<b>Bootcamps & Workshops </b>- recent participation in education
									outside an academic institution like a code camp, yoga workshop,
									healthcare certification, or trade school should be considered
									when wondering how to list education on a resume.
								</Box>
								<Box component={"p"}>
									Keep any descriptions short and to the point, or skip
									elaborating altogether. Adding a hyperlink to the program or
									organization can help give context if a program is uncommon
								</Box>
								<Box component={"p"}>
									<b>Internships </b>- if you were an intern, even while in
									school, instead of adding the internship under education on your
									resume, consider adding these details under work experience or
									even a dedicated Internships section. The education section is
									usually glanced over on a quick skim to cover the requirements.
									The bullet descriptions outlining your internship experience are
									a lot more likely to be read in the work history or a custom
									section closer to the top of your resume.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h2"}>
										What is your highest education level?
									</Box>
									<Box component={"p"}>
										Your most recent educational qualification may not have been
										your "highest" level, so put your most significant education
										first in the list. It does not matter if it is not the most
										recent. Make sure you list the education on your resume that
										is most relevant and impressive. This includes industry
										certifications. A recent industry qualification is more
										relevant than a degree from a decade ago.
									</Box>
								</Box>
								<Box component={"h2"}>
									Tips around how to include your education
								</Box>
								<Box component={"p"}>
									Even though content will differ across people, industries,
									experience levels, there are a few general rules of thumb when
									buttoning down how to include your education on your resume.
								</Box>
								<Box component={"p"}>
									<b> Always be honest.</b> No matter what, never stretch the
									truth about education on your resume. It’s a small world, and
									it’s extremely easy for someone to verify your education when
									necessary.
								</Box>
								<Box component={"p"}>
									If formal education isn’t the focus of your resume achievements,
									there are better ways than lying to demonstrate how education
									(and more importantly learning!) is woven into your professional
									life. If you have no education to add, beef up the special
									skills section to focus on soft and hard skills learned outside
									of the classroom.
								</Box>
								<Box component={"p"}>
									Don’t lose confidence about skipping education on your resume
									all together. If you are qualified for the job, it should come
									across in your experience, skills, and the overall presentation
									of your resume. Education only plays a supporting actor role. It
									is your work experience and potential for career growth that is
									of interest.
								</Box>
								<Box component={"p"}>
									<b> Keep it clean and consistent.</b> We’ll jump into this a bit
									more below. When wondering how to put education on your resume,
									keep it short and sweet and pay close attention to the format
									and consistency. The right resume template can guide toward a
									clean design or you can use the examples below for inspiration.
								</Box>
								<Box component={"p"}>
									<b>Tailor your info.</b> Always customize your resume for each
									job application — from the hobbies section to work description
									to the education on your resume. Though college degrees always
									make the cut, you don’t want to list that you’re trained as a
									chef if you’re applying for an office job. If any kind of
									education is not relevant (apart from your main degree),
									consider cutting it from the resume. Every line in a resume has
									to earn its spot.
								</Box>
								<Box component={"p"}>
									<b>Note honors and awards.</b> Education on a resume rarely
									includes long bullet points or descriptions like work
									experience, but you can include important honors societies, high
									GPAs, notable mentors, scholarships, or awards in this section.
									The early-career resume will likely have more - senior
									professionals will have more important recent achievements that
									they will want to highlight.
								</Box>
								<Box component={"p"}>
									<b>Relevant professional development. </b>
									Certain industries, such as education and the arts, put a lot of
									weight on who you’ve studied with and on gaining specific
									training. If you have a large number of classes and workshops,
									pick out those that could catch the hiring manager’s eye for
									that specific job.
								</Box>
								<Box component={"p"}>
									If you have a high level of academic experiences such as
									publications, lectures, and studies it’s best to dedicate each
									of these their own category or section rather than trying to fit
									everything inside the section for education on your resume.
								</Box>
								<Box component={"p"}>
									<b>Listing education where it counts.</b>
									You’ve just graduated from college and are hitting the
									intern/job scene for the very first time. In this case, how to
									include education on a resume is the most critical question. We
									recommend to list the education section above the work
									experience section. Don’t stress — hiring managers are thrilled
									to get people fresh out of college. In this scenario, list it
									right at the top below your personal statement . Hopefully, you
									then have some interning or part-time work experience to round
									off the resume.
								</Box>
								<Box component={"p"}>
									In all other cases, write the education section at the bottom of
									your resume, often below work experience and special skills .
								</Box>
								<Box className={styles.comparisonSection}>
									<Box className={styles.comparisonBlock}>
										<Box sx={{ display: "flex" }}>
											<Box className={styles.comparisonBlockTitleIcon}></Box>
											<Box className={styles.comparisonBlockTitle}>DO</Box>
										</Box>
										<Box className={styles.comparisonBlockContent}>
											<ul className={styles.comparisonBlockText}>
												<li>Be 100% factual with timings</li>
												<li>Only include relevant education</li>
												<li>Put education at the end of the resume</li>
											</ul>
										</Box>
									</Box>
									<Box
										className={`${styles.comparisonBlock} ${styles.comparisonBlockTwo}`}
									>
										<Box sx={{ display: "flex" }}>
											<Box
												className={`${styles.comparisonBlockTitleIconTwo} ${styles.comparisonBlockTitleIcon}`}
											></Box>
											<Box className={styles.comparisonBlockTitle}>Don't</Box>
										</Box>
										<Box className={styles.comparisonBlockContent}>
											<ul className={styles.comparisonBlockText}>
												<li>Gloss over any time out</li>
												<li>Pad your resume with "courses"</li>
												<li>
													Focus on education instead of work experience
												</li>
											</ul>
										</Box>
									</Box>
								</Box>
								<Box component={"h2"}>Writing a resume with no education?</Box>
								<Box component={"p"}>
									Listen, you might think that you do not have an education
									because you did not attend college or university, but even if
									you did not finish high school there are many roles that are
									looking for other aspects of life learning than grades and
									certifications. Adding "education" on your resume might not be
									as hard as you think:
								</Box>
								<ul className={styles.noEducationPoints}>
									<li>
										List incomplete educational qualifications and even mediocre
										high school results
									</li>
									<li>
										What online learning have you been able to take on board?
									</li>
									<li>
										What lessons have you learned in your non-working life that
										might help?
									</li>
								</ul>
								<Box component={"p"}>
									Education comes at you every minute of every day. If you have
									not been a hit in the classroom, think hard about what skills
									you will need on the job and where you may have picked up those
									skills before. Don't be embarrassed - it won't seem desperate
									and you are simply demonstrating creativity. It will give you an
									advantage over those (many) people who leave the education
									section empty.
								</Box>
								<Box component={"p"}>
									Take a good look at the sorts of jobs that you are applying to.
									More of them than you think will be open to employing someone
									who doesn't have a stellar education but does have the right
									attitude. If they do not demand certain educational
									qualifications in the job description, then you are likely to
									have some wiggle room.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h2"}>Does LinkedIn confirm education?</Box>
									<Box component={"p"}>
										It is not out of the question that the LinkedIn algorithm
										may possess a capability to verify educational claims at
										some future point, but currently there is no such
										capability. However, as with anything online, taking a
										screenshot is incredibly easy to do, so be careful with what
										changes you make. You never know who might be watching.
									</Box>
									<Box component={"h2"}>
										Should you put PhD or MBA after your name on LinkedIn?
									</Box>
									<Box component={"p"}>
										This is a tough one. If the job that you are applying for
										places a large emphasis on academia, then certainly consider
										adding PhD after your title. MBA is a far more common
										qualification and many people consider it pretentious. By
										all means, add it in your LinkedIn profile and talk about it
										prominently in your summary, but including it in your title
										hints at a certain arrogance.
									</Box>
								</Box>
							</Box>
							<Box
								ref={sectionRefs[8]}
								id="hobbies"
								className={styles.hobbiesSection}
							>
								<Box className={styles.pageMainHeading}>
									You need to humanize your job application and connect with
									hiring managers. That’s why it’s so important to know how and
									when to include hobbies on your resume.
								</Box>
								<Box component={"p"}>
									Some might consider that listing hobbies on your resume is
									unprofessional, but if those hobbies are genuine and contribute
									to the human element of your application, then they can be a
									potent job search weapon.
								</Box>
								<Box component={"p"}>
									Having said that, don't go overboard. Carelessly listing hobbies
									in resume takes up valuable space and could put a hiring manager
									off, rather than intriguing them. They have to be relevant for
									the role.
								</Box>
								<Box component={"p"}>What this article will cover:</Box>

								<ul className={styles.includeHobbiesPoints}>
									<li>How (and when) to list hobbies in resume sections</li>
									<li>
										Choosing attractive hobbies that overlap with your skillset
									</li>
									<li>
										How to align your hobbies section with a particular job or
										company
									</li>
									<li>
										Examples of hobbies you should (and shouldn’t) include on
										your resume
									</li>
								</ul>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h2"}>Should you add hobbies to a resume?</Box>
									<Box component={"p"}>
										There are many aspects of a resume that are compulsory, but
										the hobbies section is not one of them. The blog will
										explore the somewhat complicated issues of the matter, but
										the bottom line is that you should only include your hobbies
										if they are somehow relevant for the role.
									</Box>
								</Box>
								<Box component={"h2"}>
									How and when to list hobbies on your resume
								</Box>
								<Box component={"p"}>
									How and when to list hobbies in a resume comes down to thinking
									like a hiring manager.
								</Box>
								<Box component={"p"}>
									Employers seek candidates who have soft skills — like attention
									to detail, willingness to take on new challenges, communicating
									well with a team — in addition to specific hands-on experience
									or training.
								</Box>
								<Box component={"p"}>
									If your leisure activities indirectly check these boxes, they
									could have a place on your resume. Hobbies in resume can also
									paint a picture of your personality and energy, giving you that
									precious edge above the rest of the resume pile.
								</Box>
								<Box component={"p"}>
									Your resume is your ticket to an in-person interview. It should
									reflect who you are and why you’re the person to come chat about
									the open role. Check out these tips for listing hobbies in
									resume in a way that makes you sound like someone an employer
									would want to have on its team.
								</Box>
								<Box component={"p"}>
									Here is a step-by-step approach to listing hobbies:
								</Box>
								<ul className={styles.includeHobbiesPoints}>
									<li>
										Customize your resume with hobbies and skills that relate to
										the position
									</li>
									<li>
										Write in a compact list similar to the{" "}
										<a href="/">skills section</a>
									</li>
									<li>Vary your hobbies to show balance but don’t overshare</li>
									<li>
										Avoid listing hobbies that are too personal or politically
										polarizing
									</li>
									<li>List hobbies on your resume toward the bottom</li>
									<li>List 2-3 hobbies at most</li>
								</ul>
								<Box component={"p"}>
									Is it good to mention hobbies in a resume? Yes, for sure, if you
									feel like it.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h2"}>
										How do you represent hobbies on a resume?
									</Box>
									<Box component={"p"}>
										Some may choose to simply put a list of 2-3 hobbies on one
										line of text, but if you have more to say for each hobby
										(and it may be beneficial to do so), then you can write
										something like this:
									</Box>
									<ul className={styles.includeHobbiesPoints}>
										<li>
											Chess - won state championship three years in a row from
											2011-2014
										</li>
										<li>
											Sailing - led a team that sailed non-stop to Hawaii and
											raised $90k for charity
										</li>
										<li>
											Programming - helped create a number of websites for
											various youth sports clubs
										</li>
									</ul>
								</Box>
								<Box component={"h2"}>
									How to choose attractive hobbies that overlap with your skillset
								</Box>
								<Box component={"p"}>
									The best hobbies in a resume are those that shine a light on
									your best traits while staying honest and relevant. Each hobby
									should reflect skills that could come in handy on the job. Start
									by understanding the soft skills woven throughout the job
									posting. Examples might include:
								</Box>
								<ul className="styles.includeHobbiesPoints">
									<li>
										<strong>Focus under pressure</strong> - downhill skiing,
										yoga, darts,
									</li>
									<li>
										<strong>Ability to meet tight deadlines</strong> - baking,
										computer games, crosswords
									</li>
									<li>
										<strong>Delegating tasks to a team</strong> - paintball,
										football, youth sports
									</li>
									<li>
										<strong>Budget and finance</strong> - travel, volunteering,
										antique collecting
									</li>
								</ul>
								<Box component={"p"}>
									Downhill skiing suggests focus under pressure, for example,
									while team sports and volunteer work highlight your strengths at
									teamwork. If you can’t link your hobby to a conversation that
									may arise in an interview — such as your button-collecting
									enthusiasm — leave it off.
								</Box>
								<Box
									sx={{
										width: "100%",
										backgroundColor: "#eff2f9",
										padding: "24px 32px",
										borderRadius: "6px",
										m: "40px 0",
									}}
								>
									<Box component={"p"}>
										<strong>Note: </strong>
										There’s always the chance that this list may spark a
										conversation during your interview. If your interviewer also
										loves downhill skiing, you’ll want to be able to hold your
										own in a conversation. Only choose hobbies in a resume that
										you’re truly passionate about. Hobbies are optional, so if
										you don't have a genuine or relevant hobby, you're better
										off skipping hobbies in resume.
									</Box>
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h2"}>
										How many hobbies should you put on a resume?
									</Box>
									<Box component={"p"}>
										Just because you list one hobby doesn't mean that you have
										to add a couple more to make yourself look more rounded.
										There is always a risk that your future employer asks about
										the one that you are less interested in, and then you are in
										trouble. If you only have one main hobby (and that is one
										more than many of us), simply share a little bit more detail
										about it.
									</Box>
								</Box>
								<Box component={"h2"}>Where do you list your hobbies?</Box>
								<Box component={"p"}>
									Hobbies in a resume could give you an edge over the other
									candidates in the pile. At the same time, your work history and
									education take precedence over your activities outside the
									office. Place your hobbies toward the end of your resume or on a
									sidebar that includes extra info, depending on the resume
									template you use.
								</Box>
								<Box component={"p"}>
									List hobbies on your resume in a dedicated section with bullet
									points only if your resume is light on relevant experience.
									Previous work experience, even if it’s outside your career path,
									as well as internships and education, will carry more weight
									than hobbies.
								</Box>
								<Box component={"p"}>
									Keep your bullet points clean and succinct, while including
									interesting information that directly reflects how it relates to
									you are as a person and an employee.
								</Box>
								<Box component={"p"}>
									If your hobbies include things like volunteer work or a side
									gig, consider incorporating those experiences in a
									“Volunteering” section or within your work experience , as
									they’re likely to get more attention there than in a hobbies
									section.
								</Box>
								<Box component={"h2"}>
									Examples of hobbies in resume that impress the most
								</Box>
								<Box component={"p"}>
									<b>Volunteering / board membership.</b>
									Specificity is key when listing the experience on your resume —
									but volunteering in general can give you a leg up. A recent
									study found that 82% of hiring managers prefer applicants with
									volunteer experience. It speaks to your dedication toward a
									team, community and reaching long-term goals for the greater
									good.
								</Box>
								<Box component={"p"}>
									<b>Photography.</b> Photographers use both the left and right
									sides of their brain, composing creatively balanced images while
									understanding the intricate workings of a camera. Include
									photography under hobbies only if it’s a personal passion. If
									photography and training is part of your work experience or the
									job requirements, then you should elaborate more on photography
									in the work experience section.
								</Box>
								<Box component={"p"}>
									<b>Team sports.</b> Dedication to team sports shows strong
									communication skills, an ability to work well under pressure,
									teamwork ability, and a focus on work-life balance. Business
									Insider reported that members of team sports teams tend to
									thrive in corporate offices. If you are involved in several
									sports teams throughout the year, try to find a way to summarize
									the activity in a few words without oversharing.
								</Box>
								<Box component={"p"}>
									<b>Writing and blogging.</b> Blogging or writing within your
									industry is an excellent way to demonstrate your writing,
									editing and marketing skills via hobbies on your resume.
									Maintaining a well-researched and proofread blog proves critical
									thinking, connection to the industry and self-driven career
									actions.
								</Box>
								<Box component={"p"}>
									It’s not essential to go into significant detail about any of
									your hobbies unless you have something really amazing to share.
									For example, “Running marathons” is impressive enough, but ”Have
									run 100 marathons” is much more so. You could mention “Chess” if
									you’re a weekend patzer, but if you’re an “International Chess
									Master,” you might want to mention it.
								</Box>
							</Box>
							<Box
								ref={sectionRefs[9]}
								id="references"
								className={styles.referencesSection}
							>
								<Box className={styles.pageMainHeading}>
									Should a resume include references? If you’re wondering about
									the rules that apply to including references on a resume, the
									standard rule today is — don’t! References may have their place
									in any job search, but unless you’ve taken a time machine back
									to the 1970s, your resume should almost never include them.
								</Box>
								<Box component={"p"}>
									It used to be considered essential to include references on a
									resume — back when your dad thought a polyester leisure suit
									with a 3-inch-wide tie was the height of fashion. But times
									change, and today a resume that includes references is
									considered old-fashioned and undesirable — in all but a few
									limited circumstances.{" "}
								</Box>
								<Box component={"p"}>
									What happened? Did it suddenly become irrelevant if a job seeker
									had former employers who could vouch for her amazing talents?
									Did new employers lose interest in hearing from college
									professors who affirmed that this new grad was the most
									promising student they ever had?
								</Box>
								<Box component={"p"}>
									We’ll get into the reasons in a bit. But first, just so you know
									we’re not crazy, allow us to quote from the first five responses
									we got to the Google search “Should I include references on a
									resume?”
								</Box>

								<ul className={styles.referencesPoints}>
									<li>
										<i>
											“Job&nbsp;references should&nbsp;never&nbsp;be included
											on a resume.”
										</i>
									</li>
									<li>
										<i>
											“[I]t is a best practice to leave references off your
											resume.”
										</i>
									</li>
									<li>
										<i>
											“Unless specifically requested, references do not belong
											on a resume. It is almost never a good idea to include
											them….”
										</i>
									</li>
									<li>
										<i>
											“As a rule of thumb,&nbsp;you don’t need to include
											references in your resume.”
										</i>
									</li>
									<li>
										<i>
											“Do not put ‘Reference available upon request’, or the
											names and contact points of the references
											themselves.”&nbsp;
										</i>
									</li>
								</ul>
								<Box component={"p"}>And those were just the first five hits!</Box>
								<Box component={"p"}>
									If you prefer to get your career advice in a video, check out
									Career Coaching’s “Should You Include References on Your
									Resume?” We would quibble with this career coach on whether a
									resume should be two pages instead of one, but otherwise his
									advice lines up with ours 100%.
								</Box>
								<Box component={"p"}>
									This article will explore the whys and wherefores of the
									now-dead references list on modern resumes — and the very few
									exceptions where they can be included. Buckle up, references
									fans, because it’s going to be a rough ride!{" "}
								</Box>
								<Box component={"h2"}>
									Why are references on a resume no longer used?
								</Box>
								<Box component={"p"}>
									Sort of like video killed the radio star, we can thank the
									internet for killing the idea of references on a resume. The
									short answer is: references on a resume are usually sensitive
									information and should not be widely distributed due to privacy
									concerns. There’s also the idea of digital etiquette, which
									dictates you shouldn’t mention people willy-nilly, opening them
									up to unexpected calls and messages.
								</Box>
								<Box component={"p"}>
									Before the 1990s, when you couldn’t send mail without licking a
									stamp, resumes were relatively private documents that were
									printed on paper, enclosed in an envelope and dropped in a
									mailbox. Sure, a resume might be passed around an office, hand
									to hand, but this didn’t make the references’ names, addresses
									or phone numbers accessible to millions.
								</Box>
								<Box component={"p"}>
									That all changed with the electronic revolution, which turned
									resumes into digital documents that actually could be accessible
									to millions. Today you can (and probably should) post your
									resume on LinkedIn or any number of other totally public
									job-search websites. So do you think your old boss would be
									thrilled to know that you’ve put his name, title, employer,
									phone number and email address in front of potentially billions
									of people? Probably not.
								</Box>
								<Box component={"p"}>
									Identity theft, spoofing and hacking are real-world dangers that
									we all face today. “Privacy” has become one of the watchwords of
									the information age, a shrinking commodity to be guarded as
									closely as possible. Even if you want to sell your car on
									Facebook or Craigslist, you might not want to publish your phone
									number or email address for all the world to see — you want
									people to approach you through a private channel.
								</Box>
								<Box component={"p"}>
									So that’s the primary reason that references on a resume have
									fallen out of vogue, to avoid publicizing people’s private
									contact information. But other reasons abound. If hiring
									managers are looking for references, they don’t need to have
									their secretaries fire up their IBM Selectric and type a letter
									to your last employer inquiring about your job performance.
								</Box>
								<Box component={"p"}>
									People today are far easier to find and much easier to contact —
									no Pony Express needed. And if employers DO want references, you
									can send them in a personal email, which unlike a resume does
									entail a certain expectation of privacy.
								</Box>
								<Box component={"h2"}>
									When is it OK to include references on a resume?
								</Box>
								<Box component={"p"}>
									If an employer specifically asks you to include references on a
									resume, forget everything we’ve said and do it! But you will
									rarely receive this request, so this issue will not come up very
									often.
								</Box>
								<Box component={"p"}>
									If an employer is seeking references, be sure that the employer
									wants the references to be listed “on your resume.” It might be
									a better idea to include references in a separate attachment
									that is not actually part of your resume.
								</Box>
								<Box component={"p"}>
									Every resume needs to have five components:
								</Box>
								<Box className={styles.digitalNumbers}>
									<ol>
										<li>
											<strong>Header</strong>: Your contact info
										</li>
										<li>
											<strong>Summary/profile</strong>: Your “elevator pitch”
										</li>
										<li>
											<strong>Employment</strong> <strong>history</strong>:
											Your professional track record
										</li>
										<li>
											<strong>Education</strong>: Where did you go to school?
										</li>
										<li>
											<strong>Skills</strong>: What are you really good at?
										</li>
									</ol>
								</Box>
								<Box component={"p"}>
									That’s a lot of information to include in a one-page document,
									and most experts agree that a resume should be only one page.
									Two pages are sometimes considered OK, especially if your job
									history is so stellar that you were both an astronaut and a
									brain surgeon. But for ordinary mortals, no hiring manager has
									ever complained that a one-page resume is too short.
								</Box>
								<Box component={"p"}>
									So references almost always present two problems: 1) Nobody was
									expecting them, and 2) References will usually make your resume
									spill over onto a second page.
								</Box>
								<Box component={"p"}>
									Even worse, this second reference page in a resume might be
									totally blank at the bottom, containing nothing but references,
									in just a few lines at the top. This kind of spill-over is never
									a good idea, and it suggests that you need to trim your text to
									hold your resume to one page.
								</Box>
								<Box component={"p"}>Resume without references</Box>
								<Box component={"p"}>
									This resume has everything it needs and fits perfectly onto one
									page.
								</Box>
								<Box className={styles.resumeExWithOutReference}>
									<Image
										src={ResumeExWithOutReference}
										alt="Resume Example Without Reference"
									/>
									<Box className={styles.imgCaption}>
										Resume example without references.
									</Box>
								</Box>
								<Box component={"h2"}>Resume with references</Box>
								<Box component={"p"}>
									Including references often adds an unnecessary second page.
								</Box>
								<Box className={styles.resumeExWithReference}>
									<Image
										src={ResumeExWithReference}
										alt="Resume Example With Reference"
									/>
									<Box className={styles.imgCaption}>Resume with references.</Box>
								</Box>
							</Box>
							<Box
								ref={sectionRefs[10]}
								id="languages"
								className={styles.languagesSection}
							>
								<Box className={styles.pageMainHeading}>
									Your language skills can take your resume to new heights. Learn
									exactly how to list and format your multilingual abilities with
									these tips, tools, templates, and examples.
								</Box>
								<Box component={"p"}>
									If you’re part of the more than 50% of the world’s population
									who speaks more than one language, you’ve probably wondered how
									to list languages on your resume . Your language skills could
									well be the missing link for your next boss.
								</Box>
								<Box component={"p"}>This guide will go over:</Box>
								<ul className={styles.languagesTips}>
									<li>
										Whether or not you should include languages on your resume
									</li>
									<li>
										Understanding and writing about language fluency on a resume
									</li>
									<li>
										Examples showing various ways to include language skills on
										a resume
									</li>
								</ul>
								<Box component={"h2"}>
									Should You List Languages on Your Resume?
								</Box>
								<Box component={"p"}>The short answer depends on two things:</Box>
								<Box component={"p"}>1. Your level of proficiency</Box>
								<Box component={"p"}>
									2. How the language relates to the position
								</Box>
								<Box component={"p"}>
									Make room for languages on your resume when it is a requirement
									for the position or feature it in a secondary area when it
									supports your professional skills . Employers like to know if
									you have a working capacity in other languages and it can be an
									added bonus in your application even if it’s not a requirement.
								</Box>
								<Box component={"p"}>
									If your language proficiency ranges from professionally
									conversational to native (essentially, intermediate to
									advanced), it has a place on your resume. Whether you’re
									applying to be a barista or a senior marketing manager, a second
									language can help you communicate with customers, clients, and
									foreign offices.
								</Box>
								<Box component={"p"}>
									Tailor your resume to the position, highlighting your language
									skills more or less depending on how much language lends to the
									role and is mentioned in the job posting.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>

									<Box component={"p"}>
										Demand for bilingual employees spreads across the job
										market, from service positions to C-Level directors. That
										demand is growing quickly. In fact, 9 of 10 employers
										responding to a recent survey said they rely on
										English-speaking employees who also speak another language.
										That same survey (by Ipsos Public Affairs for the American
										Council on the Teaching of Foreign Languages or ACTFL) found
										that employers expect their need for multilingual employers
										to continue to grow.
									</Box>
								</Box>
								<Box component={"h2"}>
									How to assess your skill: language levels resume
								</Box>
								<Box component={"p"}>
									You took Spanish in high school or maybe even in college. Does
									that qualify you to list Spanish as a second language on your
									resume? It depends
								</Box>
								<Box component={"p"}>
									While you can prove soft skills like communication and
									organization over time, you can’t exactly skirt around being
									fluent in French. Before you find a home for languages on your
									resume, honestly assess your up-to-date comfort level with each
									language you’ve studied.
								</Box>
								<Box component={"p"}>
									Language proficiency generally follows a 0-5 system:
								</Box>
								<Box component={"p"}>
									<b>0 – No proficiency.</b>You’ve never studied the language
								</Box>
								<Box component={"p"}>
									<b>1 – Elementary. </b>You can hold your own in very basic
									exchanges, such as greetings, asking for directions, etc. This
									level is typical for visiting another country and feeling
									confident getting around.
								</Box>
								<Box component={"p"}>
									<b>2 – Limited Working. </b>Personal conversations come a bit
									more naturally, but your vocabulary is not necessarily extended
									to professional or complex topics.
								</Box>
								<Box component={"p"}>
									<b>3 – Working Professional. </b>You can confidently chat with
									clients on the phone or make presentations in that language. It
									may still be clear that the language is not your native tongue,
									and you need assistance with certain phrases or vocabulary.
								</Box>
								<Box component={"p"}>
									<b>4 – Full Professional. </b>At this level, you can weave
									between professional and personal topics with ease. You no
									longer need assistance translating complex ideas or terms and
									managers can trust you to hold your own in independent exchanges
									with clients.
								</Box>
								<Box component={"p"}>
									<b>5 – Native. </b>The language is such a large part of your
									daily life that you barely have an accent and can assist others
									with translation. This level is typical of those raised on the
									language or have spoken it regularly for a large portion of
									their lives.
								</Box>
								<Box component={"p"}>
									Although levels 1 and 2 are a step in the right direction, they
									rarely have practical application in an office setting—at least
									enough to mention on your resume. If the question were to come
									up in an interview specifically, it’s fine to show your
									dedication to learning and improving your language skills.
								</Box>
								<Box component={"p"}>
									Overall, only list languages on your resume if your proficiency
									falls between levels 3 and 5.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h2"}>How do you describe language skills?</Box>
									<Box component={"p"}>
										Rather than rely on a list of your various linguistic
										qualifications, use language that a hiring manager would
										understand. Phrases such as "working professional" and "full
										professional" are much more useful than an IELTS or TOEFL
										qualification that they many may not understand. Alongside a
										widely understood language framework, this will offer the
										fairest assessment of your level. Equally, although you may
										have studied a language five years ago at university, be
										honest about your current level.
									</Box>
								</Box>
								<Box component={"h2"}>How to list languages on your resume</Box>
								<Box component={"p"}>
									So how do you list languages in your CV? There are several ways
									to include your language skills. Some of them depend on which of
									the three formats of resumes you choose.
								</Box>
								<Box component={"p"}>
									<b> 1. Language Sidebar.</b> Information on a resume sidebar
									catches the eye, making the reader feel like it’s in a special
									spot for a reason. If the position specifically calls for
									language proficiency—and you meet the mentioned proficiency
									level—consider listing your languages in the sidebar.
								</Box>
								<Box component={"p"}>
									In many of our resume templates, you can list skills and
									languages above the level of proficiency through the use of
									icons or bars. Either choose to create a full list of
									languages—if you speak multiple ones—or meld skills and language
									list into one sidebar display.
								</Box>
								<Box component={"p"}>
									In this case, it may look something like this:
								</Box>
								<Box
									sx={{
										width: "100%",
										backgroundColor: "#eff2f9",
										padding: "24px 32px",
										borderRadius: "6px",
										m: "40px 0",
									}}
								>
									<ul className={styles.languagesRating}>
										<li>
											Spanish
											<Rating
												sx={{ float: "right" }}
												name="size-small"
												defaultValue={2}
												size="small"
											/>
										</li>
										<li>
											French
											<Rating
												sx={{ float: "right" }}
												name="size-small"
												defaultValue={2}
												size="small"
											/>
										</li>
										<li>
											German
											<Rating
												sx={{ float: "right" }}
												name="size-small"
												defaultValue={2}
												size="small"
											/>
										</li>
									</ul>
								</Box>
								<Box component={"p"}>
									<b>2. Within work experience. </b> As you detail your skills and
									responsibilities underneath each job title, include a bullet
									point about your language use throughout the position. As
									always, stay honest—if a past employer ends up as a reference ,
									language use could come up.
								</Box>
								<Box component={"p"}>
									If language is a large part of the job requirements, place it
									toward the top of your responsibility list. Hiring managers may
									be looking for keywords as they make their initial pass over
									your resume, and including these phrases prove you understand
									the level of language proficiency they’re looking for.
								</Box>
								<Box component={"p"}>For example:</Box>
								<Box
									sx={{
										width: "100%",
										backgroundColor: "#eff2f9",
										padding: "24px 32px",
										borderRadius: "6px",
										m: "40px 0",
									}}
								>
									<Box component={"p"}>
										<strong>Product Manager, Super Solutions</strong>
										January 2014-January 2018
									</Box>
									<Box component={"p"}>
										Managed online and in-person correspondence with clients in
										France, acting as office point-person for French translation
										and negotiations.
									</Box>
								</Box>
								<Box component={"p"}>
									<b> 3. Education.</b> If studying a second or third language was
									a large part of your formal education—especially if it was a
									major or minor—note your language training in your education
									section as well. This could also expand your resume if you
									recently graduated and are looking to include unique information
									that speaks to your passions. In this case, you may consider
									including language honor’s societies, clubs or trips abroad
									where you stretched your language muscles in a practical
									setting.
								</Box>
								<Box component={"p"}>
									In resume templates with a large focus on educational
									information, you may even detail your language studies and
									applications below the school name if you believe the hiring
									manager will benefit from learning more about this experience.
								</Box>
								<Box component={"p"}>For example:</Box>
								<Box
									sx={{
										width: "100%",
										backgroundColor: "#eff2f9",
										padding: "24px 32px",
										borderRadius: "6px",
										m: "40px 0",
									}}
								>
									<Box component={"h2"}>University of Southern Florida</Box>
									<Box component={"p"}>Bachelor's in Finance January</Box>
									<ul className={styles.flordiaPoints}>
										<li>Minor in Spanish and International Relations</li>
										<li>President of Spanish Society</li>
										<li>
											Studied abroad with student organization in Argentina
										</li>
									</ul>
								</Box>
							</Box>
							<Box
								ref={sectionRefs[11]}
								id="proofreading"
								className={styles.proofreadingSection}
							>
								<Box className={styles.pageMainHeading}>
									Proofreading your resume is a mission-critical step to ensuring
									that it contains no mistakes. These 12 tips will help ensure an
									error-free resume that will impress recruiters.
								</Box>
								<Box component={"p"}>
									So, you’ve got your resume all tuned up to apply for your next
									job as a “certified pubic accountant”? Um … you might have
									overlooked the importance of proofreading your resume.
								</Box>
								<Box component={"p"}>
									A careful proofreading of your resume before sending it to an
									employer is absolutely mission-critical. Typos, misspellings,
									bad grammar or incorrect punctuation can all sink your chances
									of landing your next job.
								</Box>
								<Box component={"p"}>
									A resume should usually be one page only — so exactly how many
									mistakes do you expect a hiring manager to tolerate in a single
									page? One is too many!
								</Box>
								<Box component={"h2"}>Why should you proofread your resume?</Box>
								<Box component={"p"}>
									In the rush to send your application off, you might be tempted
									to give your resume a quick once over and leave it at that.
									However, given the amount of thought and effort that you have
									invested up to this point, why wouldn't you choose to be overly
									cautious about checking for mistakes?
								</Box>
								<Box component={"p"}>
									A mistake on a resume will stay with you for the entirety of the
									hiring process. Multiple people who will ultimately influence
									the hiring decision will read it. Maybe one of them is a
									stickler for correct grammar. It only takes one person to form
									an unfavorable impression due to a mistake and you have a black
									mark that you could have avoided.
								</Box>
								<Box component={"p"}>
									Why is it important to proofread your resume before sending it?
									This video should answer that question.
								</Box>
								<Box component={"p"}>
									Consider the multiple ways of resume proofreading in the chapter
									below and spend more time than you think is required on this
									vital last task. You will surely find a mistake or two if you
									do. Why wouldn't you?
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h2"}>
										Proofread your resume alongside your cover letter.
									</Box>
									<Box component={"p"}>
										While you might have employed a resume writer to craft your
										resume, make sure that your cover letter uses similar
										language. If the resume and cover letter sound different,
										alarm bells will ring for the hiring manager. Proofread and
										optimize both at the same time.
									</Box>
								</Box>
								<Box component={"h2"}>How do you proofread a resume?</Box>
								<Box component={"p"}>
									Here are our top 5 tips to proofreading your resume so that you
									don’t miss anything important. (And again, it’s ALL important).
								</Box>
								<Box component={"h2"}>
									1. Reread it very slowly, word for word and line by line.
								</Box>
								<Box component={"p"}>
									Resume proofreading, obviously, starts with rereading, but you
									need to do this slo-o-owly. Often when we read, our eyes absorb
									big chunks of text at once. You need to slow down the process to
									look at each word one by one, and each punctuation mark as well.
									In this phase of resume proofreading, you are not looking for
									context, simply focus on one word at a time.
								</Box>
								<Box component={"p"}>
									<b>Hint:</b> Pumping up the magnification on your computer
									screen may help you.
								</Box>
								<Box component={"h2"}>
									2. Use editing tools like spellcheck and Grammarly.
								</Box>
								<Box component={"p"}>
									Using spellcheck is a no-brainer, and you can also use programs
									like Grammarly that both spot errors and suggest improvements in
									syntax. But neither of these is foolproof — you could write
									“lead” instead of the past tense “led,” and a spellcheck might
									never catch it.
								</Box>
								<Box component={"p"}>
									<b> Hint: </b> Avoid quickly accepting each suggestion. Really
									look at them and decide whether the suggestion is a good one.
									Spellcheck and Grammarly are not foolproof.
								</Box>
								<Box component={"h2"}>3. Eliminate repeated words.</Box>
								<Box component={"p"}>
									Many resumes are rife with repeated words that should be
									deleted. You don’t want to say you’re a “passionate”
									schoolteacher and then say you have a “passion” for early
									childhood education. You don’t need to use the word “skills”
									three times in your skills section. Many writers have certain
									go-to phrases that they tend to repeat unconsciously. Try doing
									a search for some of the major words in your resume, and you
									might be surprised how often you repeat them.
								</Box>
								<Box component={"p"}>
									Hint: Try running your resume and cover letter through a word
									art program like Wordle to see if you have too much repetition.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h2"}>
										How long should you wait before proofreading?
									</Box>
									<Box component={"p"}>
										Once you have finished writing your first draft of the
										resume, it is worth switching off and going to do something
										else. Ideally for quite some time. (Did you see the mistake
										in this paragraph? If you did, you’re well on your way to
										being a great proofreader. If not, go back and reread.)
									</Box>
									<Box component={"p"}>
										Giving your brain time to reset will let it mull over its
										resume activity in the background, so when you come back to
										the document it will be as if you are reading it with fresh
										eyes. One or two mistakes will likely jump off the page and
										you will feel a desire to rewrite certain sections. Patience
										pays off with job search content.
									</Box>
								</Box>
								<Box component={"h2"}>4. Eliminate clichés.</Box>
								<Box component={"p"}>
									Resumes are often a minefield of clichés, in part because so
									many of us look at other people’s resumes as models for how to
									write our own. Phrases like “self-starter,” “team player,”
									“results-oriented” and “thinking outside the box” are a few
									tired examples — and how many resumes boast of “strong
									communication skills”? When writing a resume, the first words
									that come to mind may well be a cliché. Try to use original
									language that you’ve never read on any other resume.
								</Box>
								<Box component={"p"}>
									<b>Hint:</b> Use the tools at hand. Even the best writers employ
									a thesaurus to find interesting synonyms.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"p"}>
										Only include relevant information, that way your resume
										won't be too long .
									</Box>
								</Box>
								<Box component={"h2"}>5. Check for missing material.</Box>
								<Box component={"p"}>
									A comprehensive guide like Resume.io’s “ How to write a resume ”
									will provide you with a good list of all the elements your
									resume needs to include from the contact info in your header
									through the summary/profile, employment history , education and
									skills sections. As you carefully proofread all the text you
									already have, don’t forget to double-check for anything
									important you’re missing.
								</Box>
								<Box component={"p"}>
									<b>Hint:</b> Develop a checklist and keep it handy as you
									proofread your resume.
								</Box>
							</Box>
							<Box
								ref={sectionRefs[12]}
								id="international"
								className={styles.internationalSection}
							>
								<Box className={styles.pageMainHeading}>
									Introduction to international resume formats and how to
									customize your resume for new countries or cultures.
								</Box>
								<Box component={"p"}>
									If you are going for a job abroad and wonder whether
									international hiring managers have different expectations, you
									would be right to ask the question.
								</Box>
								<Box component={"p"}>
									While the recruitment process will ask many of the same
									questions and request the same information in every country,
									some of the terminology can be confusing.
								</Box>
								<Box component={"p"}>
									There are also a few subtle differences within certain
									countries, so let's explore some international resume writing
									tips in more detail.
								</Box>
								<Box component={"p"}>
									This blog discusses the most common types of international
									resume rules, challenges, and tips, including:
								</Box>
								<ul className={styles.interResumeRules}>
									<li>International resume introduction</li>
									<li>
										Why it matters to customize your resume for certain
										countries or cultures
									</li>
									<li>American resume</li>
									<li>the British CV</li>
									<li>Asian resume</li>
									<li>Spanish resume</li>
									<li>Russian resume</li>
									<li>Writing a CV when English is your second language</li>
								</ul>
								<Box component={"p"}>
									Depending on the location of the job you’re applying for, you
									may want to understand more about an international resume. For
									example, if you are applying to a job in the United Kingdom, the
									United States, or Asia there are specific rules to follow and
									customs that are expected of job applicants. The same is true
									for Russia or Spain.
								</Box>
								<Box component={"p"}>
									Another challenge is if languages like English or Spanish are
									your second language, then there are aspects of creating an
									international resume that should be followed in order to improve
									your chances of getting an interview.
								</Box>
								<Box component={"h2"}>
									International resume introduction & writing a resume for
									international jobs
								</Box>
								<Box component={"p"}>
									The first thing that you should do when applying internationally
									is to understand the expectations.
								</Box>
								<Box component={"p"}>
									An international resume isn't so much a format, but rather a
									strategy to follow for aligning your resume with the local
									expectations and resume standards. The key to writing for an
									international audience is understanding more about expectations
									— what format do they prefer, do they want it translated, do
									they require references, a professional photo, or a portfolio?
								</Box>
								<Box component={"p"}>
									There’s no one-size-fits-all strategy for an international
									resume, so be sure to check out the specifics below, do your
									research, and don't be afraid to ask locals for advice.
								</Box>
								<Box component={"p"}>
									Tone is also very important depending on which country you’re
									applying in. For instance, American-style resumes are expected
									to be more self-promoting, whereas other countries, like China,
									you’re expected to be more modest.
								</Box>
								<Box component={"p"}>
									<b>International resume tip</b> — More than any other resume, if
									you’re applying to a foreign country you need to be clear on
									your resume about your nationality, visa status, and language
									abilities. Whereas this isn’t important if you’re applying in
									your own country, this is critical information for international
									resumes.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h2"}>
										What are some tips for a good resume?
									</Box>
									<Box component={"p"}>
										The most important tip for a resume is to tailor it towards
										the role that you are applying for. Every sentence and
										achievement has to add to your case that you are the person
										for this specific job. The more irrelevant details there
										are, the less attention an employer will pay to what else is
										there.
									</Box>
								</Box>
								<Box component={"h2"}>The American resume</Box>
								<Box component={"p"}>
									Modern American resumes are now done digitally, typically found
									in PDF or Microsoft Word format in order to easily upload and
									email.
								</Box>
								<Box component={"p"}>
									Some people believe that an American style resume can only be
									one page, but that’s not necessarily true. If you have more than
									5-7 years of relevant experience or are in an executive
									function, your resume should be two pages.
								</Box>
								<Box component={"p"}>
									The most common form of American resume is the chronological
									resume , which follows along a structured style starting with
									your most recent position.
								</Box>
								<Box component={"p"}>
									An American resume typically follows the format of:
								</Box>
								<ul className={styles.americanFormat}>
									<li>Personal information</li>
									<li>Professional summary statement</li>
									<li>Work history (in reverse chronological order)</li>
									<li>Education</li>
									<li>
										<a href="/">Hobbies</a>
										(optional)
									</li>
									<li>Skills</li>
									<li>Certifications (optional)</li>
									<li>References (optional)</li>
								</ul>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>

									<Box component={"p"}>
										<b> American resume tip </b>— Make sure to understand the
										power of keywords. Many hiring processes and applications in
										the United States now involve the use of an Applicant
										Tracking System (ATS). An ATS helps employers organize and
										screen the hundreds of candidates who usually apply.
										Companies with high volumes of candidates use their ATS to
										automatically screen candidate resumes looking for certain
										keywords and phrases.
									</Box>
								</Box>
								<Box component={"h2"}>
									How to write an American resume and what to avoid
								</Box>
								<Box component={"p"}>
									Rules, examples, and tips for writing an American resume when
									applying for a job in the United States. Convert your CV to an
									American resume following these resume tips and templates for
									the USA.
								</Box>
								<Box component={"p"}>
									While most of the world uses a <b> CV </b>
									when looking for a job, in America the document most commonly
									used is a resume. An
									<b> American resume differs from a CV </b>
									in that it is a summary of a person’s work history, skills,
									education and other items an employer may be interested in. A
									<b> CV </b>, in the American sense, is very detailed and
									chronicles the person’s entire career with details about their
									achievements, publications, education and other items which are
									relevant to the job they are applying for. For the rest of the
									world, a CV is the same as an American Resume.
								</Box>
								<Box component={"p"}>
									The only exception to using a resume in America is if you are
									applying for a job that is in either a technical or academic
									field. In these cases, you would default to a longer American
									CV.
								</Box>
								<Box component={"p"}>
									In this guide, we will discuss the following critical components
									of writing an American resume:
								</Box>
								<ul className={styles.americanFormat}>
									<li>Differences between a resume and a CV</li>
									<li>The purpose of a resume</li>
									<li>How to organize</li>
									<li>Formatting an American resume</li>
									<li>What items you should and shouldn’t include.</li>
									<li>The individual components of an American resume</li>
									<li>How to optimize your resume</li>
								</ul>
								<Box component={"h2"}>The purpose of an American resume</Box>
								<Box component={"p"}>
									When creating a resume, keep in mind its purpose. A resume will
									not get you a job, rather it is intended to generate enough
									interest in you to
									<b> get you invited to an interview. </b>
									Surveys indicate that recruiters spend about 6 seconds reviewing
									a resume. Therefore, it is important that you capture the
									reader’s attention quickly and make the resume interesting
									enough so that they will want to continue reading it.
								</Box>
								<Box component={"p"}>
									A good way to determine how much of your resume a recruiter will
									read before they decide about you is to fold the first page in
									half. This is the most important real estate on your resume, and
									you need to use it to communicate your qualifications as
									concisely and clearly as possible.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h2"}>
										What are the 4 C's of resume writing?
									</Box>
									<ul className={styles.americanFormat}>
										<li>
											<strong>Creativity.</strong> Every job requires you to
											make something from nothing every now and again.
										</li>
										<li>
											<strong>Communication. </strong>
											Getting stuff done with others needs excellent oral and
											written communication.
										</li>
										<li>
											<strong>Collaboration.</strong> Knowing how to achieve
											results as a team is key to so many careers.
										</li>
										<li>
											<strong>Critical thinking. </strong>
											Every problem has multiple solutions - finding the right
											one is rarely simple.
										</li>
									</ul>
								</Box>
								<Box component={"h2"}>
									General guidelines for an American resume
								</Box>
								<Box component={"p"}>
									An <b> American resume </b> is constructed on Letter size,
									8.5”x11” paper, in the portrait orientation. Modern American
									resumes are now done digitally , and are typically found in PDF
									format in order to easily upload and email.
								</Box>
								<Box component={"p"}>
									Typically American resumes are either 1 to 2 pages, based on the
									length of your career. New graduates or people with limited
									experience can easily use just one page to describe their
									qualifications. People with more experience may need two or even
									three pages to cover their complete job history,
									accomplishments, education, skills and certifications.
								</Box>
								<Box component={"p"}>
									A CEO will have a much longer resume than an intern. Simple as
									that.
								</Box>
								<Box component={"p"}>
									When considering the content to include in your resume, a good
									guideline to follow is that if the information isn’t relevant to
									the job you are interested in then it should not be in your
									resume. Employers hire people for one of four reasons.
								</Box>
								<ul className={styles.americanFormat}>
									<li>You will make them money</li>
									<li>You will save them money</li>
									<li>You will save them time</li>
									<li>You will fix a problem</li>
								</ul>
								<Box component={"p"}>
									Keep these in mind when you are writing your resume. Another tip
									is to include
									<b> some type of metric </b> (i.e., $, #, %) in every 2-3
									sentences. This captures the reader's attention and helps them
									recognize your contributions, with the assumption that you can
									do the same for them. There’s nothing worse than a recruiter
									reading some generic statement, like “Contributed to overall
									department success and team collaboration.”
								</Box>
								<Box component={"p"}>
									What does that mean? What did you contribute and what were the
									results? What specifically did you do to promote teamwork? Be as
									specific as possible.
								</Box>
								<Box component={"p"}>
									You can find resources which will help you when writing your
									resume across the internet. These will provide you with examples
									of effective resumes and templates you can follow while
									constructing your resume.
								</Box>
							</Box>
							<Box ref={sectionRefs[13]} className={styles.blogBottomBanner}>
								<Box className={styles.blogBottomBannerImg}>
									<Image src={BottomBanner} alt="Resume Banner" />
								</Box>
								<Box className={styles.blogBottomcontent}>
									<Box className={styles.blogBottomTitle}>
										Build your resume in 15 minutes
									</Box>
									<Box className={styles.blogBottomCaption}>
										Use professional field-tested resume templates that follow
										the exact ‘resume rules’ employers look for.
									</Box>
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
									<Box className={styles.blogBottomBtn}>
										Create My Resume
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											className="post-banner-cta__chevron"
										>
											<path d="M9.43164 7.25696l1.35146-1.47431 5.8931 5.48015c.4324.3964.4324 1.078 0 1.4744l-5.8931 5.449-1.35146-1.4743L14.5206 12 9.43164 7.25696z"></path>
										</svg>
									</Box>
								</a>
							</Link>
							<Box className={styles.subscribeNewsLetter}>
								<Box className={styles.subscribeNewsTitle}>
									Elevator Pitch Newsletter
								</Box>
								<Box className={styles.subscribeNewsDescription}>
									Once every 2 weeks, our experts gather the best career & resume
									tips you can read in 15 minutes or less. Straight to your inbox!
								</Box>

								<Box className={styles.subscribeNewsForm}>
									<TextField
										id="outlined-Email-input"
										label="Email"
										type="email"
										autoComplete="current-password"
										variant="outlined"
									/>
									<Box
										sx={{
											ml: "15px",
										}}
									>
										<Button
											sx={{
												p: "14px 23px",
												border: "1px solid #1a91f0",
												color: "#1a91f0",
												backgroundColor: "transparent",
											}}
											variant="outlined"
										>
											Subscribe
										</Button>
									</Box>
								</Box>

								<Box className={styles.subscribeNewsPrivacy}>
									By signing up you agree with our Terms of Service and Privacy
									Policy.
								</Box>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={3}>
						<Box className={styles.rightSideSection}>
							<Box className={styles.rightSideMain}>
								<Box className={styles.rightSideImgAnimation}>
									<Box className={styles.animationFrame}>
										<Box className={styles.animationFrameInner}></Box>
									</Box>
									<Box className={styles.animationFrame}>
										<Box className={styles.animationFrameInner}></Box>
									</Box>
									<Box className={styles.animationFrame}>
										<Box className={styles.animationFrameInner}></Box>
									</Box>
								</Box>
								<Box className={styles.rightSideContent}>
									<Box component={"h2"}>Build your resume in 15 minutes</Box>
									<Box component={"p"}>
										Use professional field-tested resume templates that follow
										the exact ‘resume rules’ employers look for
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
										<Box className={styles.rightSideBtn}>
											Create My Resume
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												className="post-banner-cta__chevron"
											>
												<path d="M9.43164 7.25696l1.35146-1.47431 5.8931 5.48015c.4324.3964.4324 1.078 0 1.4744l-5.8931 5.449-1.35146-1.4743L14.5206 12 9.43164 7.25696z"></path>
											</svg>
										</Box>
									</a>
								</Link>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}

export default index;
