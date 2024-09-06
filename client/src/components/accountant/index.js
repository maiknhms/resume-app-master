import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import * as styles from "./accountant.module.scss";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import Link from "next/link";
import { Scrollspy } from "@makotot/ghostui";
import React, { Component, useRef } from "react";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountantHeroBanner from "../../../public/images/accountantResumeExamples.png";
import AccountantFollowingTopic from "../../../public/images/AccountantFollowingTopic.png";
import TopPayingSector from "../../../public/images/TopPayingSector.png";
import AccountantAside from "../../../public/images/accountantResumeExamples.png";
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
		useRef(null),
		useRef(null),
	];
	return (
		<>
			<Box className={styles.teacherHeroSection}>
				<Grid container spacing={2}>
					<Grid item md={6} xs={12}>
						<Box className={styles.leftSideContent}>
							<Box component={"h1"}>Accountant Resume Example & Writing Guide</Box>
							<Box component={"p"}>
								Accountants are essential in any company, as they analyze budgets,
								taxes, file financial reports and assess accounting records.
								However, with digital tools becoming more commonplace, a great
								resume is vital for landing a job. This Accountant resume example &
								guide are here to boost your chances!
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
								<Image src={AccountantHeroBanner} alt="Teacher Resume Example" />
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
																				Accountant job role
																				and outlook
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
																				How to write an
																				accountant resume
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
																				Choosing the best
																				resume format for
																				accounting
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
																				Accountant CV
																				summary example:
																				professional
																				perfection
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
																				Certifications for a
																				strong accountant CV
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
																				Employment history
																				sample: format to
																				impress
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
																				Accountant resume
																				education example
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
																				Skills example
																				section: show off
																				your strengths
																			</a>
																			<a
																				href="#relatedResumeExamples"
																				className={
																					currentElementIndexInViewport ===
																					8
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Resume layout and
																				formatting
																			</a>
																			<a
																				href="#relatedResumeExamples"
																				className={
																					currentElementIndexInViewport ===
																					9
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Key takeaways
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
									Every business needs an accountant, and every accountant resume
									that’s worthy of a prospective employer’s attention needs to
									measure up on multiple counts.
								</Box>
								<Box component={"p"}>
									The competition in nearly every professional field is growing,
									including for accountants. Resume.io is here to help. Our
									recruitment expertise, field-tested accountant resume templates
									and builder tool can give you advantages to stay ahead in your
									pursuit of a dream accountant job.
								</Box>
								<Box component={"p"}>
									This accountant resume example and writing guide will cover the
									following topics:
								</Box>
								<Box className={styles.digitalNumbers}>
									<ol>
										<li>
											The job outlook for accountants and what today’s
											recruiting technology looks like, including automated
											resume screening software.
										</li>
										<li>How to create an accountant resume that stands out.</li>
										<li>
											The best format for structuring your accountant resume.
										</li>
										<li>
											The importance of keywords to ensure your resume passes
											through the Applicant Tracking Systems filter.
										</li>
										<li>
											Advice for each section of your resume: summary, work
											history, education and skills.
										</li>
										<li>
											Visual elements for a resume that presents your best
											professional image to recruiters.
										</li>
									</ol>
								</Box>
								<Box className={styles.mainTemplateImg}>
									<Image
										src={AccountantFollowingTopic}
										alt="Accountant - The following topics"
									/>
									<Box className={styles.imgCaption}>
										Accountant - The following topics
									</Box>
								</Box>
							</Box>

							<Box ref={sectionRefs[0]} id="teacherResume">
								<Box component={"h2"}>Accountant job role and outlook</Box>
								<Box component={"p"}>
									Accounting is a vitally important function that impacts
									businesses daily. Accountants have traditionally been viewed as
									keepers of financial records, caretakers of tax-related
									documents and — essentially — "the numbers people."
								</Box>
								<Box component={"p"}>
									But the core of most accounting roles is so much deeper and
									wider in today’s increasingly dynamic and complex economy. Ask
									anyone running a business, working in a large corporation or
									navigating government interactions how well they could manage
									without great accounting support.
								</Box>
								<Box component={"p"}>
									The U.S. Bureau of Labor Statistics (BLS), a leading source of
									occupation-specific market data, combines accountants and
									auditors in the same information category. This work is carried
									out in the following forms of employment: accounting, tax
									preparation, bookkeeping, and payroll services — 24%; finance
									and insurance — 9%; government — 8%; management of companies and
									enterprises — 7%; and self-employed — 6%.
								</Box>
								<Box component={"h2"}>Accounting job market</Box>
								<Box component={"p"}>
									The accounting job outlook, which is generally tied closely to
									the health of the overall economy, is on a stable growth path.
									The BLS projects 4% increase in jobs for accountants and
									auditors from 2019 to 2029, about as fast as the average for all
									occupations. Globalization, a growing economy, and a complex tax
									and regulatory environment are expected to continue to lead to
									strong demand for accountants and auditors.{" "}
								</Box>
								<Box component={"p"}>
									Higher-than-average income for financial professionals like
									accountants is another job competition factor. According to the
									BLS, the average annual salary for accountants and auditors in
									May 2020 was $81,660. The median was $73,560, with those in the
									top 10% earning $128,680. Accounting professionals in the
									highest-paying positions can earn more than $160,000, depending
									on industry and employer.
								</Box>
							</Box>

							<Box ref={sectionRefs[1]} id="correctFormat">
								<Box component={"h2"}>How to write an accountant resume</Box>
								<Box component={"p"}>
									Before you get started, you need to know what your accountant
									resume should include. Here are the sections your CV should
									contain:
								</Box>
								<ul className={styles.mainTemplatePoints}>
									<li>The resume header</li>
									<li>The resume summary (aka profile or personal statement)</li>
									<li>The employment history section</li>
									<li>The resume skills section</li>
									<li>The education section</li>
								</ul>
								<Box component={"p"}>
									The next fact you need to understand is how technology controls
									the recruitment and hiring entry point. The unfortunate reality
									is that an Applicant Tracking System (ATS) "bot" could
									disqualify even a seasoned accountant candidate whose resume
									text fails to score highly enough against screening criteria.
								</Box>
								<Box component={"p"}>
									Never fear, however. Resume.io is here to sidestep that obstacle
									and make sure your resume avoids that fate.
								</Box>
								<Box component={"p"}>
									According to the U.S. Bureau of Labor Statistics, the top-paying
									employment sectors for accountants and auditors are listed
									below.{" "}
								</Box>
								<Box className={styles.statInsights}>
									<Box className={styles.statInsightsLabel}>
										<InsightsIcon />
										Statistical Insight
									</Box>
									<Box component={"p"}>
										Job applicants could expect ATS to be widely used by such
										major employers.
									</Box>
									<figure className={styles.tableInsights}>
										<table>
											<tbody>
												<tr>
													<td>
														Computer and Peripheral Equipment
														Manufacturing
													</td>
													<td>$112,680</td>
												</tr>
												<tr>
													<td>Federal Executive Branch&nbsp;</td>
													<td>$105,980</td>
												</tr>
												<tr>
													<td>School and Employee Bus Transportation</td>
													<td>$105,060</td>
												</tr>
												<tr>
													<td>
														Securities, Commodity Contracts, and Other
														Financial Investments and Related Activities
													</td>
													<td>$102,020</td>
												</tr>
												<tr>
													<td>Other Information Services</td>
													<td>$ 99,810</td>
												</tr>
											</tbody>
										</table>
									</figure>
								</Box>
								<Box className={styles.mainTemplateImg}>
									<Image
										src={TopPayingSector}
										alt="Account - Top-paying sectors"
									/>
									<Box className={styles.imgCaption}>
										Account - Top-paying sectors
									</Box>
								</Box>
								<Box component={"h2"}>Acing the ATS challenge</Box>
								<Box component={"p"}>
									ATS software algorithms scan and analyze the text of every
									resume for certain keywords, rating and ranking them on that
									basis. Only the highest-scoring resumes make it through this
									electronic filter and are passed on for review by hiring
									managers.
								</Box>
								<Box component={"p"}>
									Keywords are terms that are relevant to the employer, hiring
									manager and listed job description. The trick to a great resume
									is to insert the necessary keywords in a way that flows
									naturally without making it all seem artificial.
								</Box>
								<Box className={styles.statInsights}>
									<Box className={styles.statInsightsLabel}>
										<InsightsIcon />
										Statistical Insight
									</Box>
									<Box component={"p"}>
										U.S. survey data shows that 75% of resumes submitted online
										are never seen by human eyes. Automated screening can become
										a resume black hole, so optimizing your resume for the ATS
										is very important.
									</Box>
								</Box>
							</Box>
							<Box ref={sectionRefs[2]} id="professionalStory">
								<Box component={"h2"}>
									Choosing the best resume format for accounting
								</Box>
								<Box component={"p"}>
									An overview of resume formats will help you decide how to
									structure your accounting resume, depending on several factors.
									The most commonly used reverse chronological format is likely
									suitable if your work history has followed a linear path in a
									series of employee positions. In that resume section,
									progressive job experience and accomplishments are organized by
									employer / workplace in reverse order from most recent to
									earliest dates.
								</Box>

								<Box component={"p"}>
									Alternatively, the more specific functional format focuses on
									skills, talents and career goals or special interests, rather
									than employers. It may be appropriate for self-employed
									professionals with an assignment or contract-based background.
									It’s sometimes a good choice for job candidates who are new to
									the workforce or changing careers. In other instances, a hybrid
									(combination) resume format makes sense in adapting
									chronological and functional elements.
								</Box>
							</Box>
							<Box ref={sectionRefs[3]} id="designedImpress">
								<Box component={"h2"}>
									Accountant CV summary example: professional perfection
								</Box>
								<Box component={"p"}>
									Accounting is typically characterized as a technical profession,
									but that should not stop you from infusing some personality in
									your accountant resume. In particular, the summary (sometimes
									called profile) of your accountant resume is the place for
									adding human dimension. It's also where certain stereotypes
									about financial professionals being dry or uncooperative by
									nature can be challenged.
								</Box>
								<Box component={"p"}>
									Think of your accountant resume summary as a story of expertise
									and character. In fact, this is really the only resume section
									where you can employ a bit of creativity because it is
									relatively freeform. While most other resume sections have
									standard formatting in bullet point lists and so on, the summary
									gives you some open space to work with.{" "}
								</Box>
								<Box component={"p"}>
									Make sure to use energetic language, action verbs and positive
									statements. and you want some character to shine through here.
									Even if not directly relevant to your accounting skills, some
									hints about what a great person you are to work with can go a
									long way.{" "}
								</Box>
								<Box className={styles.copyAble}>
									<Box className={styles.copyAbleLabel}>
										HERE IS AN ACCOUNTANT RESUME SUMMARY EXAMPLE YOU CAN ADAPT.
									</Box>
									<Box className={styles.copyAbleText}>
										<Box component={"p"}>
											Certified Public Accountant with five years of
											experience in account reconciliations, streamlining
											accounts, and financial planning. Highly motivated
											professional with a proven track record of delivering
											accurate reports and high-quality service. Possess a
											comprehensive understanding of all aspects of accounting
											and financial planning. A dedicated leader with the
											ability to lead effective teams in attaining profit
											improvement.
										</Box>{" "}
									</Box>
								</Box>
							</Box>
							<Box ref={sectionRefs[4]} id="validToolbox">
								<Box component={"h2"}>
									Certifications for a strong accountant CV
								</Box>
								<Box component={"p"}>
									Accounting, like other professions such as law and medicine, is
									a field in which formal certifications can be a requirement, or
									at the very least, a huge advantage.
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
								<Box component={"p"}>
									In many instances, we would suggest listing certifications in
									the education section of your resume, or at the end, space
									permitting. However, unless you're just starting out as an
									accountant, you likely already have an important certification
									or are aiming to achieve one. This can be the key to many
									professional doors, so we actually recommend placing your
									certification in the summary section, so it's prominently
									featured at the top of the page. Moreover, for some higher
									paying accounting positions, the job listing may require
									specific certifications. That means the ATS will be checking for
									those keywords as well.{" "}
								</Box>
								<Box component={"p"}>
									If you have more than one certification, consider creating a
									custom section for them using our resume builder tool. Our
									web-based interface with pre-filled sample sentences makes this
									incredibly easy to do.
								</Box>
								<Box component={"h2"}>
									The most valuable certifications and how to present them
								</Box>
								<Box component={"p"}>
									Accounting certifications often correlate directly with your
									salary, bonuses and options when choosing employers. Some are
									clearly more important on your accounting resume than others.
									Here's a sample selection of the most valued ones:
								</Box>
								<Box component={"p"}>
									Certified Public Accountant (CPA): this is probably the most
									well-known of all accounting certifications, at least in the
									U.S. CPAs can specialize in different fields. Different
									countries, states and regions have different examination
									procedures as well. The fields of expertise range from tax
									management, forensic accounting and risk management to
									compliance and many others.{" "}
								</Box>
								<Box component={"p"}>
									Certified Management Accountant (CMA) is considered by many to
									be the second most prestigious professional certification. It
									leans towards financial management more than the CPA, focusing
									on compliance, taxes and controls. Employers value the CMA
									highly, and may stipulate this as a requirement for appropriate
									positions in the accounting job listing.{" "}
								</Box>
								<Box component={"p"}>
									Other universally valuable certifications include: Association
									of Chartered Certified Accountants (ACCA) and Chartered
									Institute Management Accountant (CIMA). There are also
									industry-specific certifications such as Certified Bank Auditor
									(CBA), Certified Fraud Examiner (CFE), Certified Information
									Systems Auditor (CISA), Certified Internal Auditor (CIA) and
									Enrolled Agent (EA).{" "}
								</Box>
								<Box component={"p"}>
									All of these are important to highlight in your resume summary,
									or if you have numerous ones, create a dedicated section for
									certifications in the upper half of your resume.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"p"}>
										Accountants are among the professions prominent in companies
										like the Big Four. This means high salaries and high
										competition. To reach a good position and have a great
										career in such environments, certifications are important.
										Most top-level professionals in these corporations have
										CPAs. And if you do as well, make sure to highlight that in
										your application.
									</Box>
								</Box>
							</Box>
							<Box ref={sectionRefs[5]} id="validToolbox">
								<Box component={"h2"}>
									Employment history sample: format to impress
								</Box>
								<Box>
									<Box component={"p"}>
										Accountants help companies and professionals in the most
										fundamental aspect of staying in businesses: financials.
										This means that your work experience is an important part of
										your professional image.
									</Box>
								</Box>
								<Box className={styles.statInsights}>
									<Box className={styles.statInsightsLabel}>
										<InsightsIcon />
										Statistical Insight
									</Box>
									<Box component={"p"}>
										Eye-tracking tests have shown that recruiters take around
										six to seven seconds to decide if they should move on to the
										next resume. Conclusion: presenting your best achievements
										first is vital. Provide special attention and care when
										describing your duties and achievements on important
										positions.
									</Box>
								</Box>
								<Box component={"p"}>
									In the eyes of a hiring manager, accountants should be perceived
									as supporting a business so it's functional and stable. The
									employment history section of your resume should reflect that.
									Below each job listed, outline ways that you supported or
									contributed to high-quality financial management, growth and
									guidance. These descriptions should be accomplishment-focused
									and the wording should be positive and energetic. Illustrating
									quantifiable results with numbers and percentages can give you a
									serious advantage.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"p"}>
										The STAR method is effective for summarizing work experience
										highlights on your accounting resume. Simply describe: S —
										the situation; T — task(s); A — actions/strategy; and R —
										result achieved. Again, numbers and other outcome
										measurements are ideal
									</Box>
									<Box component={"p"}>
										This resume writing method is also useful to prepare for a
										job interview, as it helps keep your explanations logical
										and straightforward.
									</Box>
								</Box>
								<Box className={styles.copyAble}>
									<Box className={styles.copyAbleLabel}>
										HERE’S AN EMPLOYMENT HISTORY SECTION FROM AN ACCOUNTANT
										RESUME EXAMPLE.
									</Box>
									<Box component={"p"}>
										Accountant at Huntington Associates, Philadelphia July 2019
										- September 2021
									</Box>

									<ul className={styles.mainTemplatePoints}>
										<li>Oversaw the management of all company accounts.</li>
										<li>
											Processed staff payroll and other main aspects of
											financial transactions.
										</li>
										<li>
											Managed accounting teams and ensured that all accounting
											records were complete and accurate.
										</li>
										<li>
											Explained financial matters to people outside of the
											finance department in a comprehensive way.
										</li>
										<li>
											Remained professional and discreet when handling
											sensitive or private financial matters.
										</li>
										<li>
											Working closely with junior staff members while aiding
											them in the progression of their careers
										</li>
									</ul>
									<Box component={"p"}>
										Staff Accountant at Dubone Partnership, New York November
										2014 - September 2018
									</Box>
									<ul className={styles.mainTemplatePoints}>
										<li>Managed accounts by analyzing costs and revenues.</li>
										<li>Projected future trends based on analysis work.</li>
										<li>Managed complex expense reporting.</li>
										<li>Develop strategies for minimizing tax liability.</li>
										<li>
											Work closely with auditors during all audit processes.
										</li>
										<li>
											Performed financial risk assessments for all future
											business projects.
										</li>
										<li>Organized sales and profit reports.</li>
										<li>
											Prepare, review, and submit crucial budget plans for
											company goals.
										</li>
									</ul>
									<Box component={"p"}>
										Accounting Records Manager at Pepsico, New York October 2013
										- October 2014
									</Box>
									<ul className={styles.mainTemplatePoints}>
										<li>
											Worked as a supervisor to staff of twelve finance
											department members.
										</li>
										<li>
											Prepared budget and analyzed inventories, cost of goods,
											and general accounts.
										</li>
										<li>
											Served as a liaison between the accounting staff and the
											external audit staff.
										</li>
									</ul>
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
								<Box component={"h2"}>Accountant resume education example</Box>
								<Box component={"p"}>
									Formal education deserves adequate attention on an accountant
									resume, as this is not a profession that's predominantly
									self-taught. College degrees are a key consideration when
									employers are considering professional qualifications for
									financial positions. Business degrees are the most common among
									accountants, followed to a much lesser extent by social science
									degrees and education majors.
								</Box>
								<Box component={"p"}>
									If you're in an earlier accounting career stage, you can expand
									the education section with details of academic milestones,
									additional financial or accounting courses (online or
									otherwise), scholarships or awards. But only do this if space
									allows, as your entire resume should fit on a single page.{" "}
								</Box>
								<Box component={"p"}>
									Are you using the resume.io builder to create your accountant
									resume? It's easy to list any kind of academic accomplishments
									or credentials — not just degrees — in the "school" field of the
									education section. Just as you would normally identify the
									college or other learning institutions, indicate the relevant
									jurisdiction/organization that issued your credentials.{" "}
								</Box>
								<Box className={styles.copyAble}>
									<Box className={styles.copyAbleLabel}>
										HERE’S AN EDUCATION SECTION FROM AN ACCOUNTANT RESUME
										EXAMPLE.
									</Box>
									<ul className={styles.mainTemplatePoints}>
										<li>
											St. Joseph College, Master of Business Administration
											and Accounting, New York Jul 2018 - Jul 2020 - Graduated
											with high honors
										</li>
										<li>
											University of Pennsylvania, Bachelor of Finance,
											Philadelphia Sep 2008 - May 2012 - Graduated summa cum
											laude - President of Student Counsel
										</li>
									</ul>
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
							<Box ref={sectionRefs[7]} id="relatedResumeExamples">
								<Box component={"h2"}>
									Skills example section: show off your strengths
								</Box>
								<Box component={"p"}>
									Accounting focuses on hard skills, and an accounting resume
									typically reflects that in about 90% of the content. Keep in
									mind that your accounting resume should be concise and it should
									be tailored to the specific accounting position you are seeking.
									One of the best tools for being selective about each specific
									resume skills section is your own master list. Create a separate
									document with just a bullet point list of your competencies that
									come to mind. Keep it handy for updating constantly. Then, for
									each new version of your accountant resume, analyze the job
									requirements and choose the most appropriate skills for your
									resume.
								</Box>
								<Box component={"p"}>
									It's vitally important to analyze each listed job description
									for keywords that will likely achieve a satisfactory ATS score,
									and to match the accounting terminology on your resume skills
									list. Use the exact wording provided by the employer or hiring
									manager.
								</Box>
								<Box className={styles.statInsights}>
									<Box className={styles.statInsightsLabel}>
										<InsightsIcon />
										Statistical Insight
									</Box>
									<Box component={"p"}>
										According to leading occupational data sources, "financial
										resource management" and "financial document analysis (based
										on visual comprehension)" are among the most important
										technical skills for accountants in revealed comparative
										advantage (RCA) ratings.
									</Box>
									<Box component={"p"}>
										Many people will ignore soft skills completely in an
										accounting resume but we believe they are worth including.
										If you don’t have room to list directly in the skills
										section, try integrating into the more free-form summary
										text, as suggested earlier.{" "}
									</Box>
									<Box component={"p"}>
										Dependability, discipline, friendly co-worker interactions
										and complex problem solving are good soft skills to mention.
									</Box>
								</Box>
								<Box className={styles.copyAble}>
									<Box className={styles.copyAbleLabel}>
										HERE IS AN ACCOUNTING RESUME SKILLS SECTION SAMPLE.
									</Box>
									<ul className={styles.mainTemplatePoints}>
										<li>Interpersonal Skills</li>
										<li>Management</li>
										<li>Recruiting</li>
										<li>Leadership</li>
									</ul>
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
							<Box ref={sectionRefs[8]} id="relatedResumeExamples">
								<Box component={"h2"}>Resume layout and formatting</Box>
								<Box component={"p"}>
									Appropriate layout, design and formatting are the foundation for
									attracting and focusing the recruiter’s attention on your
									accountant resume. Together they create the first impression
									hiring managers will have. Appearance is important as your
									foremost ambassador here, since your personality can’t shine
									through to the same extent as in an interview.unlike those of
									the competing accounting applicants.{" "}
								</Box>
								<Box component={"h2"}>
									Best visual templates for an accountant resume, with examples
								</Box>
								<Box component={"p"}>
									To convey character and a professional image on your accounting
									resume, a clean and classical look is your best choice. We
									already noted that discussed before that discipline, support,
									dependability and expertise are the key associations with the
									accountant role. Let's visualize that in your resume template .
								</Box>
								<Box component={"p"}>
									Before choosing a CV template, it's a good idea to reflect on
									what that resume format says about you as a candidate. For most
									formal accounting positions, you'll want to keep your template
									fairly simple . However for certain employers, a more creative
									or modern touch might be effective.
								</Box>
								<Box component={"p"}>
									Luckily, Resume.io's template collection has dozens of resume
									formats suitable for virtually any employer. Check out the
									Professional category to find some great options for an
									impressive senior accountant or view more similar resume
									examples by clicking on the accounting & finance field.
								</Box>

								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"p"}>
										Use field-tested templates backed by metrics. They are
										beautifully designed and attention-grabbing.
									</Box>
								</Box>
							</Box>
							<Box ref={sectionRefs[9]} id="relatedResumeExamples">
								<Box component={"h2"}>Key takeaways</Box>
								<Box className={styles.digitalNumbers}>
									<ol>
										<li>
											Steady growth in the accountant job market means
											competition for the best jobs is likely to increase. You
											need all the best tools to create an outstanding resume
											that gives you every advantage over other candidates.
										</li>
										<li>
											Optimize your accountant resume to pass the ATS keyword
											analysis.
										</li>
										<li>
											The summary of your accounting resume is the place to
											incorporate some soft skills, while adding a personal
											dimension to catch the recruiter's attention.
										</li>
										<li>Give prominence to your accountant certifications.</li>
										<li>
											Certifications are very important for accountants and
											should appear in a prominent resume location.
										</li>
										<li>
											Provide context to the employment history highlights by
											elaborating with facts and figures.
										</li>
										<li>
											Make your education section clean, concise and easy to
											read.
										</li>
										<li>
											Tailor your resume skills list to each accounting
											position you apply for, emphasizing hard skills and
											technical competencies.
										</li>
										<li>
											Choose a visually attractive template to impress hiring
											managers and bug-free to ensure ATS compatibility.
										</li>
									</ol>
								</Box>
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
								<Image src={AccountantAside} alt="Accountant Service Aside" />
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
