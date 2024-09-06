import { Box, Button, Grid, TextField } from "@mui/material";
import * as styles from "./nurse.module.scss";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import Link from "next/link";
import { Scrollspy } from "@makotot/ghostui";
import React, { useRef } from "react";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import NurseHeroSection from "../../../public/images/nurseHeroSection.png";
import CoveredArticle from "../../../public/images/coveredArticle.png";
import WagesRegisteredNurse from "../../../public/images/wagesRegisteredNurse.png";
import HowToWriteNurseResume from "../../../public/images/howToWriteNurseResume.png";
import BasicSkillDes from "../../../public/images/basicSkillDes.png";
import keysTakeAways from "../../../public/images/keysTakeAways.png";
import BottomBanner from "../../../public/images/bottomBanner.png";
import AsideTemplate from "../../../public/images/asideTemplate.png";

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
		useRef(null),
		useRef(null),
		useRef(null),
	];
	return (
		<>
			<Box className={styles.nurseHeroSection}>
				<Grid container spacing={2}>
					<Grid item md={6} xs={12}>
						<Box className={styles.leftSideContent}>
							<Box component={"h1"}>Nurse Resume Example & Writing Guide</Box>
							<Box component={"p"}>
								Nurses are the backbone of the medical system, helping doctors treat
								& communicate with patients, conduct medical procedures and much
								more. The profession is often a stepping stone to a fulfilling
								career, so make sure your Nurse resume is up to scratch - use our
								example & guide!
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
								<Image src={NurseHeroSection} alt="Nurse Hero Section" />
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
																				href="#nurseDo"
																				className={
																					currentElementIndexInViewport ===
																					0
																						? `${styles.active}`
																						: ""
																				}
																			>
																				What do nurses do?
																			</a>
																			<a
																				href="#nurseJobMarket"
																				className={
																					currentElementIndexInViewport ===
																					1
																						? `${styles.active}`
																						: ""
																				}
																			>
																				The nurse job market
																			</a>
																			<a
																				href="#howToWriteResume"
																				className={
																					currentElementIndexInViewport ===
																					2
																						? `${styles.active}`
																						: ""
																				}
																			>
																				How to write a nurse
																				resume
																			</a>
																			<a
																				href="#bestResumeFormat"
																				className={
																					currentElementIndexInViewport ===
																					3
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Choosing the best
																				resume format for
																				nurses
																			</a>
																			<a
																				href="#summaryExample"
																				className={
																					currentElementIndexInViewport ===
																					4
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Nurse CV summary
																				example:
																				Professionalism and
																				empathy
																			</a>
																			<a
																				href="#historySample"
																				className={
																					currentElementIndexInViewport ===
																					5
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Employment history
																				sample: Diverse
																				experience
																			</a>
																			<a
																				href="#resumeEducationSample"
																				className={
																					currentElementIndexInViewport ===
																					6
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Nurse resume
																				education example
																			</a>
																			<a
																				href="#necessaryValued"
																				className={
																					currentElementIndexInViewport ===
																					7
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Skills section
																				example: Necessary
																				and valued
																			</a>
																			<a
																				href="#layoutFormatting"
																				className={
																					currentElementIndexInViewport ===
																					8
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Resume layout and
																				formatting: First
																				impressions
																			</a>
																			<a
																				href="#keyTakeAways"
																				className={
																					currentElementIndexInViewport ===
																					9
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Key takeaways for a
																				nurse resume
																			</a>
																			<a
																				href="#medicalIndustry"
																				className={
																					currentElementIndexInViewport ===
																					10
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Other related
																				resumes from the
																				same medical
																				industry
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
								<Box>
									The job market for healthcare professionals has changed. Decades
									ago, it was seen as an exclusive field with limited "space under
									the sun." But today's unprecedented pressures on the healthcare
									workforce are creating new opportunities and challenges alike
									for members of the nursing profession. The need for an
									exceptional nurse resume, customized to your background and
									goals, has never been more critical.
								</Box>
								<Box component={"p"}>
									There is no turning back from milestones like this one reached
									in 2018: healthcare positions in the U.S. surpassed
									manufacturing and retail, becoming the largest source of jobs in
									America.
								</Box>
								<Box component={"p"}>
									Simply put, nurses are in high demand. But this doesn't mean you
									should settle for the first nurse job listing you see,
									regardless of its quality. More than ever, it means you can aim
									for a dream job. And Resume.io is here to help.
								</Box>
								<Box component={"p"}>
									We're here to provide our HR research-based guidance, our resume
									samples and builder tool so you can get a nursing job
									opportunity that changes your life for the better. We hope it
									jumpstarts a career that is stable and fulfilling.
								</Box>
							</Box>
							<Box>
								<Box component={"p"}>
									There are 3 common resume formats: chronological, functional,
									and a combination. Here's how to choose the right one for you.
								</Box>

								<Box component={"h2"}>
									This nurse resume example and writing guide will cover:
								</Box>

								<Box className={styles.digitalNumbers}>
									<ol>
										<li>The role and job outlook for nurses</li>
										<li>
											How to write a nurse resume that shines through hundreds
											of applicants, first passing through the Applicant
											Tracking software filter
										</li>
										<li>
											Choosing the best format to structure your nurse resume
										</li>
										<li>
											How to showcase your most important{" "}
											<a href="/">skills</a>
										</li>
										<li>
											Ways to impress by custom-tailoring the content and tone
											of your nurse resume
										</li>
										<li>Optimizing each section of your nurse resume</li>
										<li>Professional resume layout and design hints.</li>
									</ol>
								</Box>
								<Box className={styles.mainTemplateImg}>
									<Image src={CoveredArticle} alt="Covered in this Article " />
									<Box className={styles.imgCaption}>
										Nurse - This guide will cover
									</Box>
								</Box>
							</Box>
							<Box ref={sectionRefs[0]} id="nurseDo">
								<Box component={"h2"}>What do nurses do?</Box>
								<Box component={"p"}>
									Registered nurses (RNs) are typically involved in providing and
									coordinating patient care, while also playing an important role
									in educating patients and the public about diverse health
									conditions. They work in a wide variety of health care settings,
									including hospitals, physicians’ offices, home healthcare
									services, and nursing care facilities, as well as outpatient
									clinics and schools.
								</Box>
								<Box component={"p"}>
									According to the U.S. Bureau of Labor Statistics (BLS), the
									median annual wage for registered nurses was $75,330 in May
									2020. The lowest 10% earned less than $53,410, and the highest
									10% more than $116,230.
								</Box>
								<Box className={styles.mainTemplateImg}>
									<Image
										src={WagesRegisteredNurse}
										alt="Wages for Registered Nurse"
									/>
									<Box className={styles.imgCaption}>
										Nurse - Wage for registered nurses
									</Box>
								</Box>
							</Box>

							<Box ref={sectionRefs[1]} id="nurseJobMarket">
								<Box component={"h2"}>The nurse job market</Box>
								<Box component={"p"}>
									So, what is the nurse job market like nowadays? Simple answer:
									it's wide open for candidates.{" "}
								</Box>
								<Box className={styles.statInsights}>
									<Box className={styles.statInsightsLabel}>
										<InsightsIcon />
										Statistical Insight
									</Box>
									<Box component={"p"}>
										Developed countries have a high demand for nurses. In 2017,
										the American Nurses Association (ANA) projected that the
										U.S. will need one million more registered nurses by 2022 to
										fulfill the nation's needs. By 2022, when RN retirements
										will have opened up more than a half-million replacement
										positions, there will be far more registered nurse jobs
										available than any other profession, at more than 100,000
										per year.
									</Box>
									<Box component={"p"}>
										That nursing shortage has taken an added toll on the health
										and well-being of nurses during the pandemic crisis.
										According to a March 2021 survey report by the American
										Nurses Foundation, the ANA’s charitable and philanthropic
										arm, 41% of nurses stating they plan to leave the profession
										cited insufficient staffing as a reason. The number was
										higher — 48% — among nurses who treat COVID-19 patients
										directly.
									</Box>
									<Box component={"p"}>
										The BLS projects a 9% growth in the job market for nurses
										between 2020 and 2030, as fast as the average occupation.
									</Box>
								</Box>
							</Box>
							<Box ref={sectionRefs[2]} id="howToWriteResume">
								<Box component={"h2"}>How to write a nurse resume</Box>
								<Box component={"p"}>
									First, you need to know what sections comprise your nurse
									resume. Your CV should contain the following elements:
								</Box>
								<ul className={styles.mainTemplatePoints}>
									<li>The resume header</li>
									<li>The resume summary (aka profile or personal statement)</li>
									<li>The employment history section</li>
									<li>The resume skills section</li>
									<li>The education section</li>
								</ul>
								<Box className={styles.mainTemplateImg}>
									<Image
										src={HowToWriteNurseResume}
										alt="How To Write a Nurse Resume "
									/>
									<Box className={styles.imgCaption}>
										How to write a nurse resume
									</Box>
								</Box>
								<Box component={"p"}>
									Next, you need to know the technology you are up against.
								</Box>
								<Box component={"p"}>
									The job market has become so saturated with candidates that
									instead of hiring more recruiters, employers rely on electronic
									screening solutions. Hospital Applicant Tracking System (ATS)
									software analyzes your nurse resume for keywords and ranks it
									against other resumes on the same basis. Only the
									highest-ranking nurse resumes will get passed on to a human
									recruiter.
								</Box>
								<Box component={"p"}>
									Keyword matches are the most basic aspect of ATS . In specific
									sections of this nurse resume example and guide, we'll offer
									tips for choosing the correct keywords so your resume doesn't
									get filtered out by an ATS.
								</Box>
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
							</Box>
							<Box ref={sectionRefs[3]} id="bestResumeFormat">
								<Box component={"h2"}>
									Choosing the best resume format for nurses
								</Box>
								<Box component={"p"}>
									In most instances, the most suitable format for structuring a
									nurse resume will be reverse chronological. This generally works
									well for job seekers in any occupation whose work history
									follows a linear path in a series of employee positions.In that
									resume section, progressive job experience and accomplishments
									are organized by employer / workplace in reverse order from most
									recent to earliest dates.
								</Box>
								<Box component={"p"}>
									An alternative resume format may be appropriate for nurses who
									are new to the workforce or changing careers. Those with a more
									varied occupational background or especially impressive
									education might also look at the alternative “functional” resume
									format. It‘s also an option for some self-employed professionals
									with an assignment or contract-based background.
								</Box>
							</Box>
							<Box ref={sectionRefs[4]} id="summaryExample">
								<Box component={"h2"}>
									Nurse CV summary example: Professionalism and empathy
								</Box>
								<Box component={"p"}>
									The summary of your nurse resume should highlight your strongest
									professional qualifications. But nursing is also one of the most
									people-focused jobs in the world, so be sure to give your resume
									summary a touch of warmth and emotion.
								</Box>
								<Box component={"p"}>
									There are two equally important factors in writing an effective
									nurse resume summary. The first relates to perception: the
									resume summary is your first personal introduction to a human
									reader, not an automated filter. This is where you present
									yourself as a caring and warm nurse, not one who comes across as
									cold and detached.
								</Box>
								<Box component={"p"}>
									The second factor comes back to the ATS algorithm for scoring
									your resume based on keywords. Not every hospital will use
									scoring filters, but it's better to be on the safe side and not
									risk having your resume be overlooked on purely technical
									grounds.
								</Box>
								<Box component={"p"}>
									So, how do you know which keywords and professional details are
									the most important ones? Analyze the nurse job description with
									care. You'll often find certain qualities, ideas or technical
									requirements mentioned more than once, sometimes with different
									phrasing. This should be your signal that the employer values
									them more than others.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"p"}>
										A recent study from TalentNeutron shows that the second most
										requested keyword for nurses is "bilingual." In the U.S.,
										the most requested second language is Spanish.
									</Box>
									<Box component={"p"}>
										If you speak a second language, even imperfectly, make sure
										to include this in your summary and/or skills section. If
										either is too cluttered, put it in the one that has more
										space.
									</Box>
								</Box>
								<Box component={"p"}>
									Last, but definitely not least, is the human element of your
									resume summary. Nurses are the heart and soul of many hospitals.
									Many health facilities rely on nurses to not only perform
									medical duties but also support patients emotionally and create
									a warm, caring environment. So, that's exactly the image to
									project on your nursing resume, alongside your impressive formal
									qualifications.
								</Box>
								<Box component={"p"}>
									Strive for language that’s energetic and positive, using action
									verbs that describe your professional outlook and history.
								</Box>
								<Box className={styles.copyAble}>
									<Box className={styles.copyAbleLabel}>
										Adaptable summary resume example
									</Box>
									<Box className={styles.copyAbleText}>
										<Box component={"p"}>
											Passionate and dedicated nurse with over six years of
											healthcare experience in a variety of medical settings,
											including private family practices, emergency units,
											ICU, neonatal units, geriatric units, and rehabilitation
											centers. Vast experience dealing with a very broad range
											of medical conditions. Bringing forth the ability to
											thoroughly and accurately assess the health of patients
											and prescribe the proper treatment programs for optimal
											health moving forward. Adept in working as a
											collaborative team member to ensure that patients
											receive the highest level of care possible.
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
							<Box ref={sectionRefs[5]} id="historySample">
								<Box component={"h2"}>
									Employment history sample: Diverse experience
								</Box>
								<Box component={"p"}>
									Nurses comprise one of the most diverse professions in terms of
									background and age. While past nursing positions always take
									priority in the employment history section of your nurse resume,
									you can also highlight your varied life and job experience.
								</Box>
								<Box component={"p"}>
									There's plenty of good news to go around for anyone seeking to
									work as a nurse. For starters, top hospitals are happy to hire
									certified nurses even if they're not graduates in their 20s. In
									fact, nursing applicants 40 years and older who are
									transitioning from other careers and have rich life experience
									are becoming more common.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"p"}>
										Medical-administrative terms may vary from country to
										country, and even from state to state in the U.S. So look
										carefully at the job listing vocabulary, or even visit the
										employer's website, to make sure your resume wording is
										matches.
									</Box>
								</Box>
								<Box component={"p"}>
									Also remember there are differences between healthcare
									facilities in different locations. Include helpful details in
									your nurse resume about your previous workplaces to clarify.
									Here are some examples:
								</Box>
								<ul className={styles.mainTemplatePoints}>
									<li>
										Facility type: rehabilitation hospital, acute care,
										long-term care, teaching hospital, etc. If applicable,
										specify trauma center level (1 to 5).
									</li>
									<li>
										Type of hospital unit (ICU, MS, ER and so on) and any
										specifics such as dealing with patient overflows.
									</li>
									<li>
										Bed count (both facility and unit) and other indications of
										the scope of your responsibilities.
									</li>
								</ul>
								<Box component={"p"}>
									Refer to initiatives you were responsible for, milestones, team
									efforts and measurable results. For example, did you help
									develop new policies or procedures? Did you receive favorable
									patient review scores?
								</Box>
								<Box component={"p"}>
									Newly graduated nurses with little or no work experience should
									include their clinical rotations. Relevant past employment in
									other professions also belongs here.
								</Box>
								<Box className={styles.copyAble}>
									<Box className={styles.copyAbleLabel}>
										ADAPTABLE EMPLOYMENT HISTORY RESUME EXAMPLE
									</Box>
									<Box className={styles.copyAbleText}>
										<Box component={"h4"}>
											Nursing Assistant, St. Joseph's Medical Center, Dallas
											October 2019 - July 2021
										</Box>
										<ul className={styles.mainTemplatePoints}>
											<li>
												Worked to the best of my ability with an
												interdisciplinary team to provide optimum care to
												patients.
											</li>
											<li>Assisted patients with admittance and release.</li>
											<li>
												Assisted nurses and physicians in carrying out all
												treatments and day to day protocols.
											</li>
										</ul>
										<Box component={"h4"}>
											Float Nurse, University of Iowa Medical Center, Iowa
											City September 2017 - September 2019
										</Box>
										<ul className={styles.mainTemplatePoints}>
											<li>
												Provided high level patient care during heavy
												patient load periods needing additional personnel.
											</li>
											<li>
												Assisted hospital staff and other RNs in day-to-day
												tasks in accordance with patient care plans and
												physician's orders.
											</li>
											<li>
												Assisted with duties in the ER, Rehab, and Med-Surg
												units.
											</li>
											<li>
												Provided a level of care in accordance with the
												medical center's stellar reputation.
											</li>
										</ul>
										<Box component={"h4"}>
											Nurse Extern, Mayo Clinic of Austin, Austin August 2016
											- August 2017
										</Box>
										<ul className={styles.mainTemplatePoints}>
											<li>
												Assisted with obtaining personal information of
												patients and prepared paperwork in a timely and
												efficient manner.
											</li>
											<li>
												Worked to maintain a neat and functional admitting
												department, conducive to high quality care.
											</li>
											<li>
												Provided quick assessments and helped to determine
												treatment needed for patients requiring critical
												care.
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
							<Box ref={sectionRefs[6]} id="resumeEducationSample">
								<Box component={"h2"}>Nurse resume education example</Box>
								<Box component={"p"}>
									Some occupations don't put too much emphasis on formal
									credentials but the medical and other healthcare professions
									absolutely do. Not only is high-caliber training a vital
									requirement for nurses, but it could have a bearing on your
									resume. If you're applying for a nurse job in the U.S., the
									education section has a HIGHER- than-usual priority in your
									nurse resume.
								</Box>
								<Box component={"p"}>
									The American Nurses Credentialing Center (ANCC) has developed
									recommendations regarding the order of your formal credentials
									and where they are placed in relation to other sections.
								</Box>
								<ul className={styles.mainTemplatePoints}>
									<li>
										If you're an experienced nursing professional, the education
										section can go either above or below your employment
										history. This can be at your discretion, or according to
										local standards or employer preference.
									</li>
									<li>
										If you're a new nursing graduate with no work experience,
										place your education section first, right below the summary.
									</li>
								</ul>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"p"}>
										Are you using the resume.io builder to create your nurse
										resume? It's easy to list your licenses or similar
										credentials in the "school" field of the education section.
										Just as you would normally identify the college or other
										learning institutions, indicate the
										jurisdiction/organization that issued your nursing licenses
										or designations.
									</Box>
								</Box>
								<Box component={"p"}>
									Where does the information go, and in what order? The ANCC
									recommends the following priority for listing credentials nurse
									resumes:
								</Box>
								<ul className={styles.mainTemplatePoints}>
									<li>
										Highest earned degree — &nbsp;in your
										<a href="/">education section</a>.
									</li>
									<li>
										Licensure — in your summary and/or education section. For a
										considerable number of licenses, you can create a custom
										"Licenses" section below the section you use.
									</li>
									<li>
										State designations or requirements (such as APRN, NP, etc.)
										— once again, in your summary and/or education section.
									</li>
									<li>
										National certifications — in your education section or
										create a separate section for these.
									</li>
									<li>
										Awards and honors &nbsp;(from schools, professional
										organizations, past jobs, etc.) — placement as above.
									</li>
									<li>
										Other certifications (optional, ONLY if space allows) —
										&nbsp;in your education section or create a custom section.
									</li>
								</ul>
								<Box component={"p"}>
									Our resume builder tool really simplifies this whole process. It
									is very flexible for easily adjusting or adding to the template
									sample categories. You can rearrange sections up and down,
									easily fill in sample fields as you choose or create custom
									"Licenses" and "Certifications" sections.
								</Box>
								<Box className={styles.copyAble}>
									<Box className={styles.copyAbleLabel}>
										ADAPTABLE EDUCATION RESUME EXAMPLE
									</Box>
									<Box className={styles.copyAbleText}>
										<ul className={styles.mainTemplatePoints}>
											<li>
												Master of Nursing, Iowa State University, Iowa City
												January 2015 - August 2018 - Graduated with a 3.8
												GPA.
											</li>
											<li>
												Bachelor of Biology, University of Arizona, Phoenix
												August 2011 - May 2015 - Member of Student Nursing
												Association.
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
							<Box ref={sectionRefs[7]} id="necessaryValued">
								<Box component={"h2"}>
									Skills section example: Necessary and valued
								</Box>
								<Box component={"p"}>
									Nurses work at the intersection of practical knowledge,
									technology and softer human interaction. The nurse job is about
									versatility, and so is your skills section. It's important to
									show equal love to both your hard and soft skills categories.
								</Box>
								<Box component={"p"}>
									Hard skills enable your day-to-day productivity as a nurse, and
									your ability to solve most clinical and administrative problems.
									Specifically, they will vary depending on your past nurse
									education and experience.
								</Box>
								<Box component={"p"}>
									Pay close attention to the nurse skills listed in the job
									description and descriptive wording. Using the same terminology
									not only ensures you pass the ATS but also shows the recruiter
									that you're an attentive, detail-oriented nurse.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"p"}>
										Remember we mentioned an additional language as being the
										second-most requested nurse skill? Well, TalentNeutron
										studies reveal the MOST commonly requested are computer
										skills — especially electronic medical/hospital records
										software. Common program packages are Meditech and Epic
										software.
									</Box>
									<Box component={"p"}>
										In the U.S., knowing your way around billing codes (ICD10
										and ICD9) is also a common advantage.
									</Box>
								</Box>
								<Box component={"p"}>
									Soft skills are the more abstract, people-oriented attributes
									you have as a nurse. They reflect your ability to interact
									positively with patients, understand the people around you, feel
									subtle emotional shifts or just generally be a kind, warm
									individual.
								</Box>
								<Box className={styles.copyAble}>
									<Box className={styles.copyAbleLabel}>
										ADAPTABLE SKILLS SECTION RESUME EXAMPLE
									</Box>
									<Box className={styles.copyAbleText}>
										<ul className={styles.nurseTemplatePoints}>
											<li>Patient advocacy</li>
											<li>Strong interpersonal communication skills</li>
											<li>Teamwork skills</li>
											<li>Trauma and ER experience</li>
											<li>
												Knowledgeable in medical terminology and
												&nbsp;procedures
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
								<Box className={styles.mainTemplateImg}>
									<Image src={BasicSkillDes} alt="Basic Skills Description" />
									<Box className={styles.imgCaption}>
										Nurse - Basic skill descriptions
									</Box>
								</Box>
							</Box>
							<Box ref={sectionRefs[8]} id="layoutFormatting">
								<Box component={"h2"}>
									Resume layout and formatting: First impressions
								</Box>
								<Box component={"p"}>
									The visual appearance of your nurse resume is what employers
									will notice first about your job application. That makes it the
									first impression they will have about you. A messy, cluttered
									resume format, or a poorly organized CV layout that lacks
									clearly defined sections may hurt your chances of being
									considered for an amazing professional nurse opportunity.
								</Box>
								<Box component={"h2"}>
									What's the best resume format for a nurse?
								</Box>
								<Box component={"p"}>
									Visual structure conveys character on your CV. Consider how your
									resume layout, design and formatting could project
									attentiveness, a focus on details and a certain measure of
									discipline.
								</Box>
								<Box component={"p"}>
									A template can help you achieve this without looking too cold or
									rigidly formal (like the resume of a lawyer or auditor, for
									example). The Resume.io collection has a wide variety of resume
									styles to choose from, including those with the perfect balance
									of "disciplined" and "emotional." We suggest the Paris, New
									York, Stockholm, and Santiago templates as a great fit for a
									nurse resume.
								</Box>
								<Box component={"p"}>
									These templates can also protect you from being unwittingly
									sabotaged by formatting that may not translate well to
									electronic systems, or is not readable at all.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>

									<Box component={"p"}>
										Use field-tested templates backed by metrics. These samples
										are beautifully designed and attention-grabbing. These
										templates will also help you avoid hidden technical
										pitfalls.
									</Box>
								</Box>
							</Box>
							<Box ref={sectionRefs[9]} id="keyTakeAways">
								<Box component={"h2"}>Key takeaways for a nurse resume</Box>
								<Box className={styles.digitalNumbers}>
									<ol>
										<li>
											To get an amazing job instead of a mediocre one, your
											resume needs all the advantages available.
										</li>
										<li>
											Start the resume writing process armed with knowledge
											and the appropriate technological tools.
										</li>
										<li>
											Each resume section should be tailored to the job
											listing wherever appropriate.
										</li>
										<li>
											Whenever possible, provide details on your past work
											experience.
										</li>
										<li>
											Pay special attention to the way your nursing
											credentials are organized in the education section.
										</li>
										<li>
											Write out your skills based on research and the job
											listing.
										</li>
										<li>
											Your CV layout is incredibly important. Make sure your
											format is visually pleasing and conforms to the ATS.
											Resume templates can help.
										</li>
									</ol>
								</Box>
								<Box component={"p"}>
									And if you want the perfect tool to save yourself time and win
									your dream nurse position, use our helpful resume builder with
									field-tested resume templates!
								</Box>
								<Box className={styles.nurseMainTemplateImg}>
									<Image src={keysTakeAways} alt="keys Take Aways" />
									<Box className={styles.imgCaption}>Nurse - Key takeaways</Box>
								</Box>
							</Box>
							<Box ref={sectionRefs[10]} id="medicalIndustry">
								<Box component={"h2"}>
									Other related resumes from the same medical industry
								</Box>
								<ul className={styles.mainTemplatePoints}>
									<li>
										{" "}
										<a href="/">Healthcare</a>
									</li>
									<li>
										{" "}
										<a href="/">CNA</a>
									</li>
									<li>
										{" "}
										<a href="/">Lactation Consultant</a>
									</li>
									<li>
										{" "}
										<a href="/">Epidemiologist</a>
									</li>
									<li>
										{" "}
										<a href="/">Marriage and Family Therapist</a>
									</li>
									<li>
										{" "}
										<a href="/">Health Care Administration</a>
									</li>
									<li>
										{" "}
										<a href="/">Dental Receptionist</a>
									</li>
									<li>
										{" "}
										<a href="/">Endodontist</a>
									</li>
									<li>
										{" "}
										<a href="/">Nursing Home</a>
									</li>
									<li>
										{" "}
										<a href="/">Occupational Therapist</a>
									</li>
									<li>
										{" "}
										<a href="/">Behavioral Therapist</a>
									</li>
									<li>
										{" "}
										<a href="/">Psychologist</a>
									</li>
									<li>
										{" "}
										<a href="/">Art Therapist</a>
									</li>
									<li>
										{" "}
										<a href="/">Audiologist</a>
									</li>
									<li>
										{" "}
										<a href="/">Respiratory Therapist</a>
									</li>
									<li>
										{" "}
										<a href="/">Child Psychologist</a>
									</li>
									<li>
										{" "}
										<a href="/">Medical Support Assistant</a>
									</li>
									<li>
										{" "}
										<a href="/">Medical Social Worker</a>
									</li>
									<li>
										{" "}
										<a href="/">Pharmacy Technician</a>
									</li>
									<li>
										{" "}
										<a href="/">Physician Assistant</a>
									</li>
									<li>
										{" "}
										<a href="/">Clinic Coordinator</a>
									</li>
									<li>
										{" "}
										<a href="/">Medical Receptionist</a>
									</li>
									<li>
										{" "}
										<a href="/">Optometrist</a>
									</li>
									<li>
										{" "}
										<a href="/">Physical Therapist</a>
									</li>
									<li>
										{" "}
										<a href="/">Pharmaceutical Sales Representative</a>
									</li>
									<li>
										{" "}
										<a href="/">Pharmacist</a>
									</li>
									<li>
										{" "}
										<a href="/">Dentist</a>
									</li>
									<li>
										{" "}
										<a href="/">Sonographer</a>
									</li>
									<li>
										{" "}
										<a href="/">Psychotherapist</a>
									</li>
									<li>
										{" "}
										<a href="/">Medical Science Liaison</a>
									</li>
									<li>
										{" "}
										<a href="/">Dental Assistant</a>
									</li>
									<li>
										{" "}
										<a href="/">Paramedic</a>
									</li>
									<li>
										{" "}
										<a href="/">Doctor</a>
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
								<Image src={AsideTemplate} alt="Aside Template" />
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
