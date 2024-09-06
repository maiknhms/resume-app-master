import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import * as styles from "./teachers.module.scss";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import Link from "next/link";
import { Scrollspy } from "@makotot/ghostui";
import React, { useRef } from "react";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import teacherHeroBanner from "../../../public/images/teacherHeroBanner.png";
import includingTheFollowing from "../../../public/images/includingTheFollowing.png";
import teacherJobPerYear from "../../../public/images/teacherJobPerYear.png";
import TeacherSalary from "../../../public/images/teacherSalary.png";
import teacherAside from "../../../public/images/teacherHeroBanner.png";
import BottomBanner from "../../../public/images/bottomBanner.png";

import InsightsIcon from "@mui/icons-material/Insights";

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
	];
	return (
		<>
			<Box className={styles.teacherHeroSection}>
				<Grid container spacing={2}>
					<Grid item md={6} xs={12}>
						<Box className={styles.leftSideContent}>
							<Box component={"h1"}>Teacher Resume Example & Writing Guide</Box>
							<Box component={"p"}>
								Teachers are the foundation of the school system, educating children
								and young adults in a variety of subjects, organizing
								extracurricular activities and helping kids socialize. Having a
								stellar teacher resume is vital for getting a great job, so check
								out the example & guide below!
							</Box>
							<Box className={styles.heroPostRating}>
								<Box className={styles.heroPostScore}>4.9</Box>
								<Box className={styles.heroPostText}>
									<Box className={styles.ratingSubTitle}>Average rating</Box>
									<Box className={styles.ratingSubTitle}>
										21 people’ve already rated it
									</Box>
								</Box>
								<Box className={styles.heroRating}>
									<Rating
										sx={{ color: "#f68559" }}
										name="size-large"
										defaultValue={5}
										size="large"
									/>
								</Box>
							</Box>
						</Box>
					</Grid>
					<Grid className={styles.heroRightSideSection} item md={6} xs={12}>
						<Box className={styles.heroRightSectionContent}>
							<Box className={styles.heroRightSideImg}>
								<Image src={teacherHeroBanner} alt="Teacher Resume Example" />
							</Box>
							<Link href="/resumeBuilder">
								<a>
									<Button variant="contained">Edit This Resume</Button>
								</a>
							</Link>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Box className={styles.writeMainSection}>
				<Grid container spacing={2}>
					<Grid className={styles.leftSideBarSection} item xs={3}>
						<Box className={styles.leftSideBar}>
							<Scrollspy sectionRefs={sectionRefs}>
								{({ currentElementIndexInViewport }) => (
									<>
										<Box className={styles.leftSideBarItem}>
											<Box className={styles.leftSideBarContent}>
												<Box className={styles.leftSideBarTitle}>
													Table of Contents
												</Box>
												<Box className={styles.leftSideBarProgress}>
													<Box
														sx={{
															transform: "scaleX(0.000754143)",
														}}
														className={styles.leftSideBarProgressInner}
													></Box>
												</Box>
												<Box>
													<Scrollspy sectionRefs={sectionRefs}>
														{({ currentElementIndexInViewport }) => (
															<>
																<Box
																	className={
																		styles.leftSideBarItem
																	}
																>
																	<Box
																		className={
																			styles.leftSideBarContent
																		}
																	>
																		<Box>
																			<a
																				href="#teacherResume"
																				className={
																					currentElementIndexInViewport ===
																					0
																						? `${styles.active}`
																						: ""
																				}
																			>
																				How to write a
																				teacher resume
																			</a>
																			<a
																				href="#correctFormat"
																				className={
																					currentElementIndexInViewport ===
																					1
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Choosing the correct
																				CV format and resume
																				template
																			</a>
																			<a
																				href="#professionalStory"
																				className={
																					currentElementIndexInViewport ===
																					2
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Teacher summary
																				resume example: your
																				professional story
																			</a>
																			<a
																				href="#designedImpress"
																				className={
																					currentElementIndexInViewport ===
																					3
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Employment history
																				resume example:
																				designed to impress
																			</a>
																			<a
																				href="#validToolbox"
																				className={
																					currentElementIndexInViewport ===
																					4
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Teacher resume
																				skills section
																				example: a varied
																				toolbox
																			</a>
																			<a
																				href="#pointPride"
																				className={
																					currentElementIndexInViewport ===
																					5
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Education resume
																				example: a point of
																				pride
																			</a>
																			<a
																				href="#takeAways"
																				className={
																					currentElementIndexInViewport ===
																					6
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Key takeaways
																			</a>
																			<a
																				href="#relatedResumeExamples"
																				className={
																					currentElementIndexInViewport ===
																					7
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Other related
																				resumes examples:
																			</a>
																		</Box>
																	</Box>
																</Box>
															</>
														)}
													</Scrollspy>
												</Box>
											</Box>
										</Box>
									</>
								)}
							</Scrollspy>
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box className={styles.mainSection}>
							<Box>
								<Box component={"p"}>
									Teaching has always been an important and challenging career
									path. It can also be one of the most rewarding and financially
									stable professions. Working as a teacher has the potential to be
									satisfying, as well as emotionally and intellectually engaging.
									But with the changing landscape of educational practices and
									technologies, aspiring education professionals need to adapt to
									the modern world. With the right approach and a great resume,
									you can find a teacher position that is the perfect balance of
									job satisfaction and good pay. This teacher resume guide is
									designed to help you land one of those great fits.
								</Box>
								<Box component={"p"}>
									So how do you write an excellent teacher resume?
								</Box>
								<Box component={"p"}>
									The answer is simple: expert knowledge (provided by example and
									statistics), convenient and powerful digital tools and
									field-tested resume templates. The attached teacher resume
									example, along with the Resume.io builder tool and sample
									sentences for teacher resumes, are here to ensure you can craft
									the perfect pitch. This guide will cover how to:
								</Box>
								<ul className={styles.mainTemplatePoints}>
									<li>Craft an exceptional resume to stand out from the crowd</li>
									<li>Write in a way that’s both professional and engaging</li>
									<li>
										Showcase your skills and accomplishments in the best
										possible light
									</li>
									<li>Overcome technological obstacles and impress recruiters</li>
								</ul>
							</Box>

							<Box ref={sectionRefs[0]} id="teacherResume">
								<Box component={"h2"}>How to write a teacher resume</Box>
								<Box component={"p"}>
									The key to getting a great job in any profession, including as a
									teacher, is threefold:
								</Box>
								<ul className={styles.mainTemplatePoints}>
									<li>Understanding the industry and job market</li>
									<li>
										<a href="/">Tailoring your resume</a>
										for a specific position and purpose
									</li>
									<li>
										Using tested methods and expert advice to gain a competitive
										edge in job hunting
									</li>
								</ul>
								<Box component={"h2"}>Industry knowledge</Box>
								<Box component={"p"}>
									Let’s start at the beginning and take a look at some sample data
									from the teacher job market of recent years. Here’s what the
									ranking of different categories of teachers looks like based on
									job market growth (according to U.S. Labor Department
									statistics):
								</Box>
								<Box className={styles.digitalNumbers}>
									<ol>
										<li>Elementary school teachers (+2.23% jobs per year)</li>
										<li>Secondary school teachers (+1.46% jobs per year)</li>
										<li>Preschool teachers (-1.42% jobs per year)</li>
										<li>Special education teachers (-2.84% per year)</li>
										<li>Postsecondary teachers (-9.95% per year)</li>
									</ol>
								</Box>
								<Box className={styles.mainTemplateImg}>
									<Image
										src={teacherJobPerYear}
										alt="Teacher - Teacher jobs per year"
									/>
									<Box className={styles.imgCaption}>
										Teacher - Teacher jobs per year
									</Box>
								</Box>
								<Box component={"p"}>
									The ranking of teachers based on salary is as follows:
								</Box>
								<Box className={styles.digitalNumbers}>
									<ol>
										<li>Postsecondary teachers (average $66k per year)</li>
										<li>Secondary school teachers (average $55k per year)</li>
										<li>
											Elementary school teachers (average $49.7k per year)
										</li>
										<li>Special school teachers (average $46.6k per year)</li>
										<li>
											Preschool and kindergarten teachers (average $24.6k per
											year
										</li>
									</ol>
								</Box>
								<Box className={styles.mainTemplateImg}>
									<Image src={TeacherSalary} alt="ITeacher - Teacher salary" />
									<Box className={styles.imgCaption}>
										Teacher - Teacher salary
									</Box>
								</Box>
								<Box component={"h2"}>Honing your resume for the ATS</Box>
								<Box component={"p"}>
									Applicant Tracking Systems (ATS) are automated software
									applications used by most medium and large employers to process
									the hundreds or thousands of resumes before they reach their
									recruiters or hiring specialists. Most ATS systems work by
									scanning resumes and ranking them for keywords. They may be
									related to certifications/licenses, specific skills or
									qualities, job experience or other factors.
								</Box>
								<Box component={"p"}>
									ATS software is widely used by educational institutions, both in
									the general variety (services like RecruitCRM, TalentCube,
									JobItUs and others) and even the specialized variety (ATS
									specifically developed for schools like eTeach). In fact, many
									schools use school management software that helps with all
									operational aspect of education. These programs often have
									built-in ATS.
								</Box>
								<Box className={styles.statInsights}>
									<Box className={styles.statInsightsLabel}>
										<InsightsIcon />
										Statistical Insight
									</Box>
									<Box component={"p"}>
										HR surveys show that, in general, 75% of resumes (U.S. data)
										are never seen by human eyes because they fail the ATS test,
										falling into a resume black hole.
									</Box>
								</Box>

								<Box component={"p"}>
									What does this mean in practice, for you as a teacher seeking a
									job?
								</Box>
								<Box className={styles.digitalNumbers}>
									<ol>
										<li>
											Tailor your resume for each job application. Start with
											a general resume but make sure you research the employer
											and customize your resume to address its needs.
										</li>
										<li>
											Analyze the job application/listing for specific
											requirements that are emphasized or mentioned multiple
											times.
										</li>
									</ol>
								</Box>

								<Box component={"h2"}>Word clouds</Box>
								<Box component={"p"}>
									Word clouds services, for example Worditout or Wordclouds, are
									tools used to spot patterns in large chunks of text. If you’re
									hunting for keywords in a confusing job listing (one that’s
									vague or complicated), you can use these tools to visualize
									frequently used terms and add them to your teacher resume. This
									can not only help to guess the keywords more highly valued by
									the ATS, but also to understand the psychology and values of the
									employer when hiring a teacher (something that’s also achieved
									by researching the employer’s website and social media — a
									tactic we highly recommend).
								</Box>
							</Box>

							<Box ref={sectionRefs[1]} id="correctFormat">
								<Box component={"h2"}>
									Choosing the correct CV format and resume template
								</Box>
								<Box component={"p"}>
									Your resume format is vitally important. Not only does the
									resume or CV formatting impact ATS filtering of your teacher
									resume, but the template visuals will affect how much attention
									your teacher resume receives from recruiters. Similar to the use
									of keywords and your summary description, your resume format
									presents a dual challenge: pass the ATS filtering and win over
									the hiring manager. Let’s take a look at some rules for each of
									these goals.
								</Box>
								<Box component={"p"}>For the ATS:</Box>
								<ul className={styles.mainTemplatePoints}>
									<li>
										Save your resume in the PDF format, as our resume builder
										does.
									</li>
									<li>
										Use specialized tools, templates and builders that are built
										with modern technologies in mind and tested in HR systems.
									</li>
									<li>Spell out abbreviations or acronyms.</li>
								</ul>
								<Box component={"p"}>For recruiters and HR departments:</Box>
								<ul className={styles.mainTemplatePoints}>
									<li>
										Make sure to include some white space between your resume
										sections. A resume that is completely covered in text leaves
										no room for the brain or eyes to rest.
									</li>
									<li>
										Make sure the sections of your resume are clean, symmetrical
										and well-placed. An aesthetically pleasing format will make
										recruiters more likely to read your resume.
									</li>
									<li>
										Use{" "}
										<a href="/resume-templates/professional">
											professional resume templates
										</a>
										that have been tested and designed by experts. Make sure
										your template expresses your values and personality as a
										teacher.
									</li>
								</ul>
								<Box className={styles.comparisonSection}>
									<Box className={styles.comparisonBlock}>
										<Box sx={{ display: "flex" }}>
											<Box className={styles.comparisonBlockTitleIcon}></Box>
											<Box className={styles.comparisonBlockTitle}>DO</Box>
										</Box>
										<Box className={styles.comparisonBlockContent}>
											<Box component={"p"}>
												Keep it simple - there is no need for your resume to
												be creative. Clear and concise is all that is
												required.
											</Box>
											<Box component={"p"}>
												Ensure your resume is spaced out well and that it is
												clear and easy to read.
											</Box>
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
											<Box component={"p"}>
												Write a resume that is more than two pages long.
												Recruiters simply don't have the time to read pages
												and pages.
											</Box>
											<Box component={"p"}>
												Use tables and graphs, or any images on your resume.
												Text only is fine.
											</Box>
										</Box>
									</Box>
								</Box>
								<Box component={"h2"}>Picking the perfect resume template</Box>
								<Box>
									Because your resume format is so important in creating a great
									first impression as a teacher, you're going to want to place a
									lot of emphasis on its design and style. If you have graphic
									design experience, you might enjoy designing a CV yourself. If
									not, professional templates can make putting together your
									resume a much easier affair.{" "}
								</Box>
								<Box component={"p"}>
									Resume.io offers a variety of teacher resume templates for all
									types of positions: Professional for formal workplaces, simple
									for new teachers or teaching assistants and modern or creative
									templates for more forward-thinking employers.
								</Box>
								<Box component={"p"}>
									Choose the resume template that works for you and then edit the
									sample sentences inside of our convenient resume builder. Our
									resume templates are designed to provide a foundation – you make
									them your own!
								</Box>
							</Box>
							<Box ref={sectionRefs[2]} id="professionalStory">
								<Box component={"h2"}>
									Teacher summary resume example: your professional story
								</Box>
								<Box component={"p"}>
									The summary (or profile) section of your teacher resume is a
									snapshot of both your personality and your professional
									qualities. It’s your teaching story. Give it some energy.
								</Box>
								<Box component={"h2"}>The primary goals of the summary</Box>
								<Box component={"p"}>
									The summary (also known as the profile or the personal statement
									) is the only place on your teacher resume where you can
									realistically employ some creative writing skills, adding energy
									and personality to gain a competitive edge.
								</Box>
								<Box component={"p"}>
									Here are two goals for your teacher resume summary:
								</Box>

								<ul className={styles.mainTemplatePoints}>
									<li>
										Convey the most important hand-picked information about your
										past career, qualities and achievements.
									</li>
									<li>
										Tell your future employer how you can contribute to its
										school or business as an amazing teacher.
									</li>
								</ul>
								<Box component={"p"}>
									In most cases, the summary is going to be prominently featured
									at the top of your resume. It’s prime “real estate” on your
									single page of professional characteristics. Make it count. The
									idea is to have it describe an actual living person, avoid
									clichés and provide a window into your professional character as
									a teacher. Action verbs are great for this. Here are some sample
									sentences that you may be able to adapt to your own teacher
									resume summary:
								</Box>
								<ul className={styles.mainTemplatePoints}>
									<li>
										Established a warm, caring and friendly environment for kids
										to develop and learn in the classroom.
									</li>
									<li>
										Supported parents and children in my class in navigating
										through early childhood development.
									</li>
									<li>
										Employed advanced teaching techniques based on kids’
										neurobiology and <a href="/">childhood psychology</a>
										to make sure my pupils had the best learning environment
										possible.
									</li>
								</ul>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"p"}>
										Don’t include obvious phrases like “able to rise to the
										challenge” or “can adapt to stressful situations.” Phrases
										like these are either expected by the employer as a given or
										make it sound like you have nothing real to say about your
										professional qualities/achievements.
									</Box>
								</Box>
								<Box component={"p"}>
									If you’re feeling a bit lost when trying to come up with your 3-
									to 4-sentence summary, try looking at your experience, skills
									and certifications, and cherry-pick the most impressive ones.
									Additionally, try to evaluate what aspect of your career or
									professional personality is strongest. Is it your knowledge and
									education? Is it your skills and qualities? Is it your
									experience as a teacher? Based on this, you can determine
									whether your resume summary is one of the following examples:
								</Box>
								<ul className={styles.mainTemplatePoints}>
									<li>
										Knowledge-oriented: if your strongest professional features
										are your education, expertise in certain areas,
										certifications and so on, mention these first and make them
										prominent.
									</li>
									<li>
										Skills-oriented: If you’re a natural or acquired talent in
										some areas and tasks, proven by your former coworkers,
										students and students’ parents, highlight these aspects of
										your career.
									</li>
									<li>
										<a href="/">Experience</a>
										-oriented: If you’re a seasoned veteran, with a wealth of
										experience in numerous jobs and schools, underline this fact
										to show how valuable and reliable you would be.
									</li>
								</ul>
								<Box component={"h2"}>Optimizing for the ATS</Box>
								<Box component={"p"}>
									Like it or not, once again, we have to take into account the
									possibility of the ATS filtering out your teacher resume. If
									you’re not handing a printed resume directly to a hiring
									manager, you may be at the mercy of a software algorithm. The
									remedies here are simple: evaluate the teacher job listing just
									as we talked about before. Make sure your summary emphasizes the
									important requirements mentioned in that job description.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"p"}>
										Pay attention to the exact wording for the job
										qualifications described in the job listing. Terminology may
										vary from country to country, state to state and sometimes
										even city to city. It’s vitally important you use the same
										wording as your employer, as this may impact ATS ratings.
									</Box>
								</Box>
								<Box className={styles.copyAble}>
									<Box className={styles.copyAbleLabel}>
										ADAPTABLE RESUME SUMMARY EXAMPLE
									</Box>
									<Box component={"p"}>
										Dedicated and dynamic certified Childhood Educator with
										several years of experience working to facilitate the
										highest level of learning possible. Adept in differentiating
										curriculum to meet the needs of all students, while ensuring
										the mastery of specific learning standards.
									</Box>
									{/* <Box className={styles.copyAbleButton}>
                                        <Button
                                            sx={{
                                                border: "1px solid #1a91f0",
                                                color: "#1a91f0",
                                                backgroundColor: "transparent",
                                            }}
                                            variant="outlined"
                                        >
                                            Copy to clipboard
                                        </Button>
                                    </Box> */}
								</Box>
							</Box>
							<Box ref={sectionRefs[3]} id="designedImpress">
								<Box component={"h2"}>
									Employment history resume example: designed to impress
								</Box>
								<Box component={"p"}>
									The employment history section is the core of your teacher
									resume. It ties everything together. Make sure it’s the most
									robust and detailed resume section you have. Teachers are one of
									the most varied and flexible professions out there, both in
									terms of job experience and the varied backgrounds that teachers
									come from. According to U.S. Labor Department data, while the
									average age of elementary, middle and high school teachers is
									around 40, the age range is quite wide: from 19 all the way to
									86. If you’re just starting out or are making a career change to
									education from another field, it’s completely acceptable to list
									marginally related work experience.
								</Box>
								<Box className={styles.statInsights}>
									<Box className={styles.statInsightsLabel}>
										<InsightsIcon />
										Statistical Insight
									</Box>
									<Box component={"p"}>
										Remember that schools are not the only organizations that
										hire teachers. According to the U.S. Bureau of Labor
										Statistics, the three runner-up employer categories are:
										educational services (physical or digital), civic/social
										organizations and cultural institutions (museums, art
										galleries, historical sites, etc.). If you’re submitting a
										resume to one of these alternative categories, make sure to
										tailor it to your potential employer. Do your research.
									</Box>
								</Box>
								<Box component={"p"}>
									The golden standard for listing your employment history is in
									reverse chronological order, meaning you should mention your
									most recent (and hopefully most impressive and relevant)
									positions at the top of your teacher resume. Your past job
									description should ideally include the following:
								</Box>

								<ul className={styles.mainTemplatePoints}>
									<li>Position / job title</li>
									<li>Organization / workplace name</li>
									<li>Location</li>
									<li>Dates of employment</li>
									<li>
										Short descriptive examples of the most important duties,
										achievements, metrics, projects
									</li>
								</ul>
								<Box className={styles.mainTemplateImg}>
									<Image
										src={includingTheFollowing}
										alt="Teacher - Include the folowing"
									/>
									<Box className={styles.imgCaption}>
										Teacher - Include the folowing
									</Box>
								</Box>
								<Box component={"p"}>
									The best way to show how productive and industrious you are as a
									teacher is to offer facts, figures, numbers and project names
									wherever possible.{" "}
								</Box>

								<Box className={styles.copyAble}>
									<Box className={styles.copyAbleLabel}>
										ADAPTABLE RESUME EMPLOYMENT HISTORY EXAMPLE
									</Box>
									<Box className={styles.copyAbleText}>
										<Box component={"h4"}>
											Lead Teacher at The Roosevelt School, Greenwich August
											2016 — July 2021
										</Box>
										<ul className={styles.mainTemplatePoints}>
											<li>
												Served as a passionate and dynamic Lead Teacher for
												students ages 3-5.&nbsp;
											</li>
											<li>
												Created and implemented stimulating curriculum,
												aimed at supporting the appropriate learning
												standards.&nbsp;
											</li>
											<li>
												Supported the academic, emotional, and social growth
												of students.&nbsp;
											</li>
											<li>
												Maintained positive communication habits with
												parents and families.&nbsp;
											</li>
											<li>
												Collaborated with staff and administrators to
												enhance programs and remain united in our
												goals.&nbsp;
											</li>
										</ul>
										<Box component={"h4"}>
											2nd Grade Teacher at St. Ann School, Hartford September
											2012 — May 2016
										</Box>
										<ul className={styles.mainTemplatePoints}>
											<li>
												Worked to empower two classes of Second Grade
												Students by motivating them to become lovers of
												learning.&nbsp;
											</li>
											<li>
												Created and implemented lesson plans that supported
												second grade learning standards.&nbsp;
											</li>
											<li>
												Developed and implemented cross-curriculum lessons
												to support multiple academic disciplines
												simultaneously.
											</li>
											<li>
												Communicated with parents and families using an
												online portal, complete with documentation of class
												learning experiences, activities, and events.&nbsp;
											</li>
										</ul>
									</Box>
									{/* <Box className={styles.copyAbleButton}>
                                        <Button
                                            sx={{
                                                border: "1px solid #1a91f0",
                                                color: "#1a91f0",
                                                backgroundColor: "transparent",
                                            }}
                                            variant="outlined"
                                        >
                                            Copy to clipboard
                                        </Button>
                                    </Box> */}
								</Box>
							</Box>
							<Box ref={sectionRefs[4]} id="validToolbox">
								<Box component={"h2"}>
									Teacher resume skills section example: a varied toolbox
								</Box>
								<Box component={"p"}>
									The skills section is one of the shortest parts of your teacher
									resume. There isn’t much room to elaborate. Make each bullet
									point count towards your shining professional teacher toolbox.
									The skills section is used by recruiters (as well as ATS
									software) to evaluate how productive and versatile you will be
									as a teacher in both your day-to-day activities and in
									challenging situations. Unlike the summary, you don’t have much
									room to be creative in this resume section. There isn’t much
									“real estate” here to expand upon, so each skill needs to be
									carefully evaluated to determine whether it should take up
									precious space on your resume.
								</Box>
								<Box component={"p"}>
									The best method to choose your most winning skills is to have a
									master list. This is a list that you brainstorm in a separate
									document. Think of any and all possible qualities and practical
									or social tools you might have acquired over your life and
									career. Then, for each teacher job application, customize your
									resume to include the most appropriate and relevant skills. Once
									again, make sure to pay special attention to the job description
									to not miss out on skills that the employer is looking for in a
									new teacher.
								</Box>
								<Box className={styles.statInsights}>
									<Box className={styles.statInsightsLabel}>
										<InsightsIcon />
										Statistical Insight
									</Box>
									<Box component={"p"}>
										According to DATA USA, the most highly valued skills by
										employers of elementary and middle school teachers are
										related to these general categories:
									</Box>

									<ul className={styles.mainTemplatePoints}>
										<li>Learning Strategies</li>
										<li>Instructing</li>
										<li>Speaking</li>
										<li>Social Perceptiveness</li>
									</ul>
									<Box component={"p"}>
										For preschool teachers, the skill categories are similar but
										with an additional emphasis on Organizational and Monitoring
										skills, as young children require constant attention.
									</Box>
								</Box>
								<Box component={"p"}>
									You’re likely familiar with the concept of hard and soft skills,
									but to reiterate the general rule of thumb: hard skills relate
									to very specific and pragmatic activities, for example:
									knowledge sets, software, sciences or methodologies. Soft skills
									mostly relate to personal interaction – examples include
									emotional intellect and communication. Try to aim for a good
									balance of both categories in your teacher resume.
								</Box>
								<Box className={styles.copyAble}>
									<Box className={styles.copyAbleLabel}>
										ADAPTABLE RESUME SKILLS SECTION EXAMPLE
									</Box>
									<Box className={styles.copyAbleText}>
										<ul className={styles.mainTemplatePoints}>
											<li>Formal and Informal Assessments</li>
											<li>Differentiated Learning Teachniques</li>
											<li>Classroom Management Skills</li>
											<li>Curriculum and Instruction</li>
											<li>Excellent Communication Skills</li>
										</ul>
									</Box>
								</Box>
							</Box>
							<Box ref={sectionRefs[5]} id="pointPride">
								<Box component={"h2"}>
									Education resume example: a point of pride
								</Box>
								<Box component={"p"}>
									The education section of a teacher resume should be crafted with
									care, as this is your field, but keep it short. If you have a
									postsecondary degree, it’s generally considered unnecessary to
									mention your high school.
								</Box>
								<Box component={"p"}>
									Be meticulous in ensuring you have clean formatting in this
									resume section, clear and concise descriptions and any relevant
									licenses and educational awards that demonstrate your aptitude
									as a teacher. Teaching is a profession that places a certain
									amount of emphasis on certifications and licenses. The most
									prominent of these should be mentioned in your resume summary,
									and the rest should go here.
								</Box>

								<Box className={styles.copyAble}>
									<Box className={styles.copyAbleLabel}>
										ADAPTABLE RESUME EDUCATION EXAMPLE
									</Box>
									<Box className={styles.copyAbleText}>
										<Box component={"p"}>
											Master of Science in Teaching, Sacred Heart University,
											Fairfield September 2010 — May 2012
										</Box>
										<Box component={"p"}>
											Bachelor of Science in Biology, Fairfield University,
											Fairfiel September 2006 — May 2010
										</Box>
									</Box>
									{/* <Box className={styles.copyAbleButton}>
                                        <Button
                                            sx={{
                                                border: "1px solid #1a91f0",
                                                color: "#1a91f0",
                                                backgroundColor: "transparent",
                                            }}
                                            variant="outlined"
                                        >
                                            Copy to clipboard
                                        </Button>
                                    </Box> */}
								</Box>
							</Box>
							<Box ref={sectionRefs[6]} id="takeAways">
								<Box component={"h2"}>Key takeaways</Box>
								<Box className={styles.digitalNumbers}>
									<ol>
										<li>
											To
											<a href="#"> land an interview </a>
											and a great teaching position, tailor your teacher
											resume for each application. This will greatly increase
											your chances.
										</li>
										<li>
											Pay attention to your teacher resume format and choose
											the right resume template both for the sake of passing
											the ATS test and impressing hiring managers.
										</li>
										<li>
											Your summary/personal statement is there to convince
											your potential employer you are a productive,
											knowledgeable and reliable teacher.
										</li>
										<li>
											Craft a robust employment history section by using
											reverse chronological order and supplying examples of
											results, facts and achievements.
										</li>
										<li>
											In your skills section, try to organically use sample
											keywords found in the job description.
										</li>
										<li>
											Show some love to your education section, as this is
											your own field as a teacher.
										</li>
									</ol>
									<Box component={"p"}>
										If you’re looking for the right tool to quickly finish your
										teacher resume, check out our easy-to-use resume builder and
										stylish templates with pre-filled sample sentences. And when
										you’re ready to write your cover letter, review our
										education examples and teacher cover letters, plus free
										templates and useful tips.
									</Box>
								</Box>
							</Box>
							<Box ref={sectionRefs[7]} id="relatedResumeExamples">
								<Box component={"h2"}>Other related resumes examples:</Box>
								<ul className={styles.mainTemplatePoints}>
									<li>
										{" "}
										<a href="#">Early Childhood Educator</a>
									</li>
									<li>
										{" "}
										<a href="#">College Student&nbsp;</a>
									</li>
									<li>
										{" "}
										<a href="#">High School Student&nbsp;</a>
									</li>
									<li>
										{" "}
										<a href="#">Academic Librarian</a>
									</li>
									<li>
										{" "}
										<a href="#">Health Educator&nbsp;</a>
									</li>
									<li>
										{" "}
										<a href="#">ESL Teacher&nbsp;</a>
									</li>
									<li>
										{" "}
										<a href="#">Tutor&nbsp;</a>
									</li>
									<li>
										{" "}
										<a href="#">Teacher Assistant&nbsp;</a>
									</li>
									<li>
										{" "}
										<a href="#">Substitute Teacher&nbsp;</a>
									</li>
									<li>
										{" "}
										<a href="#">Student&nbsp;</a>
									</li>
									<li>
										{" "}
										<a href="#">Middle School Teacher&nbsp;</a>
									</li>
									<li>
										{" "}
										<a href="#">Elementary School Teacher&nbsp;</a>
									</li>
									<li>
										{" "}
										<a href="#">College Professor</a>
									</li>
									<li>
										{" "}
										<a href="#">Internship</a>
									</li>
									<li>
										{" "}
										<a href="#">High School Teacher &nbsp;</a>
									</li>
									<li>
										{" "}
										<a href="#">Academic Tutor&nbsp;</a>
									</li>
									<li>
										{" "}
										<a href="#">College Admissions&nbsp;</a>
									</li>
								</ul>
							</Box>
							<Box className={styles.blogBottomBanner}>
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

						<Box className={styles.rightSideSecondSection}>
							<Box
								sx={{
									mt: "20px",
									display: "flex",
									justifyContent: "center",
								}}
							>
								<Box
									sx={{
										fontSize: "22px",
										lineHeight: "28px",
										fontWeight: "600",
										color: "#f68559",
										mr: "5px",
									}}
								>
									4.9
								</Box>
								<Box>
									<Rating
										sx={{ color: "#f68559" }}
										name="size-large"
										defaultValue={5}
										size="large"
									/>
								</Box>
							</Box>
							<Box>
								<Image src={teacherAside} alt="Customer Service Aside" />
							</Box>
							<Box sx={{ m: "20px auto", textAlign: "Center" }}>
								<Link href="/resumeBuilder">
									<a>
										<Button variant="contained">Edit This Resume</Button>
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
