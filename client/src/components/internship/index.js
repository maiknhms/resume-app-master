import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import * as styles from "./internship.module.scss";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import Link from "next/link";
import { Scrollspy } from "@makotot/ghostui";
import React, { useRef } from "react";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InternshipHeroBanner from "../../../public/images/internshipHeroBanner.png";
import InternshipResumeGuidelines from "../../../public/images/internshipResumeGuidlines.png";
import KeyComponentWriting from "../../../public/images/keyComponentWriting.png";
import DoDont from "../../../public/images/doDont.png";
import internshipAside from "../../../public/images/internshipHeroBanner.png";
import BottomBanner from "../../../public/images/bottomBanner.png";
import KeyTakesAwayImg from "../../../public/images/keyTakesAwayImg.png";

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
			<Box className={styles.internHeroSection}>
				<Grid container spacing={2}>
					<Grid item md={6} xs={12}>
						<Box className={styles.leftSideContent}>
							<Box component={"h1"}>Internship Resume Example & Writing Guide</Box>
							<Box component={"p"}>
								Internships are the most common way of getting into any industry or
								profession by training on the job, getting mentorship and new
								skills. However, with little or no job experience, your resume needs
								to really shine to land an interview. Luckily, our Internship resume
								example & guide are here to help!
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
								<Image src={InternshipHeroBanner} alt="internship Hero Banner" />
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
																				href="#interDo"
																				className={
																					currentElementIndexInViewport ===
																					0
																						? `${styles.active}`
																						: ""
																				}
																			>
																				What does an intern
																				do?
																			</a>
																			<a
																				href="#writeInternshipResume"
																				className={
																					currentElementIndexInViewport ===
																					1
																						? `${styles.active}`
																						: ""
																				}
																			>
																				How to write an
																				internship resume
																			</a>
																			<a
																				href="#bestResumeFormat"
																				className={
																					currentElementIndexInViewport ===
																					2
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Choosing the best
																				resume format for an
																				intern
																			</a>
																			<a
																				href="#resumeHeader"
																				className={
																					currentElementIndexInViewport ===
																					3
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Resume header
																			</a>
																			<a
																				href="#resumeSummaryExample"
																				className={
																					currentElementIndexInViewport ===
																					4
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Internship resume
																				summary example:
																				Start with a bang
																			</a>
																			<a
																				href="#employmentHistory"
																				className={
																					currentElementIndexInViewport ===
																					5
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Employment history:
																				You’ve got more than
																				you realize
																			</a>
																			<a
																				href="#resumeEducationExample"
																				className={
																					currentElementIndexInViewport ===
																					6
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Internship resume
																				education example:
																				Mine your classes
																			</a>
																			<a
																				href="#cvSkillsExample"
																				className={
																					currentElementIndexInViewport ===
																					7
																						? `${styles.active}`
																						: ""
																				}
																			>
																				CV skills example:
																				Give employers what
																				they seek
																			</a>
																			<a
																				href="#resumeLayoutDesign"
																				className={
																					currentElementIndexInViewport ===
																					8
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Resume layout,
																				design and
																				formatting: Look
																				like a pro
																			</a>
																			<a
																				href="#takeAwaysInternship"
																				className={
																					currentElementIndexInViewport ===
																					9
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Key takeaways for an
																				internship resume
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
									If you’re thinking about an internship, that already says you’re
									a go-getter. Whether you’re in high school or college, an
									internship is a great way to give you a leg up in your choice of
									profession. But to get an internship, you need to make an
									approach like a seasoned pro, and that starts with an excellent
									internship resume.
								</Box>
								<Box component={"p"}>
									Resume.io is here to help with job-winning resources for
									success. That includes more than 300 occupation-specific writing
									guides and corresponding resume examples , plus field-tested
									templates and builder tools to help you create both resumes and
									cover letters.
								</Box>
								<Box className={styles.statInsights}>
									<Box className={styles.statInsightsLabel}>
										<InsightsIcon />
										Statistical Insight
									</Box>
									<Box component={"p"}>
										A 2019 study by the National Association of Colleges and
										Employers found that college graduates who had completed an
										internship received more job offers than those who had not.
									</Box>
								</Box>
								<Box component={"p"}>
									Securing an internship, just like getting a job, requires a
									focused search. And snagging that internship can lead you to the
									first job of your dreams.It all starts with the process of
									developing your resume, planning what to include and how best to
									present it.
								</Box>
								<Box component={"p"}>
									This resume writing guide, along with sample resume sentences
									specifically for internship candidates, will set your candidacy
									apart from the pack. You'll learn how to:
								</Box>
								<ul className={styles.mainTemplatePoints}>
									<li>
										Create an engaging, easy-to-read resume that highlights the
										qualities you'll need to &nbsp;succeed in an internship
									</li>
									<li>Choose the best resume format for an intern</li>
									<li>
										Optimize each resume section with customized content
										reflecting your background and goals: summary, education,
										experience and skills
									</li>
									<li>
										Follow layout, design and formatting tips for eye-catching
										impact, readability and technical compatibility.
									</li>
									<li>
										Capitalize on the experience you already have to get you in
										the door with an internship at the{" "}
										<a href="/">best companies</a>.
									</li>
								</ul>
								<Box className={styles.mainTemplateImg}>
									<Image
										src={InternshipResumeGuidelines}
										alt="Internship Resume Guidelines"
									/>
									<Box className={styles.imgCaption}>
										Internship - Internship resume guide
									</Box>
								</Box>
							</Box>

							<Box ref={sectionRefs[0]} id="internDo">
								<Box component={"h2"}>What does an intern do?</Box>
								<Box component={"p"}>
									Multiple professions offer internships, some of them paid and
									some unpaid. Interns gain valuable, real-world job experience to
									enhance their future resumes, which in turn will lead to better
									job opportunities down the road.
								</Box>
								<Box component={"p"}>
									For employers, interns represent a low-cost, short-term
									alternative to full-time hires. Sometimes an internship can also
									serve as a tryout, an extended test of a potential hire. For
									example, a law firm may give an internship to a promising law
									student, and if that person excels in this role, the reward may
									be a permanent job.
								</Box>
							</Box>

							<Box ref={sectionRefs[1]} id="writeInternshipResume">
								<Box component={"h2"}>How to write an internship resume</Box>
								<Box component={"p"}>
									Although you are still in school, you have the material to
									create a strong resume that will plant you firmly on your career
									path. Resume formats contain standard sections, but they also
									contain some that are optional, depending on the career you seek
									and your achievements and skills.{" "}
								</Box>
								<Box component={"p"}>
									Let’s take a look at which resume sections are musts when it
									comes to an internship.
								</Box>
								<ul className={styles.mainTemplatePoints}>
									<li>The resume header (or your contact information)</li>
									<li>
										The resume summary (also known as the profile or personal
										statement)
									</li>
									<li>The employment history section</li>
									<li>The education section</li>
									<li>The resume skills section</li>
								</ul>
								<Box className={styles.mainTemplateImg}>
									<Image
										src={KeyComponentWriting}
										alt="key Component Writing Examples"
									/>
									<Box className={styles.imgCaption}>
										Internship - Key components writing examples
									</Box>
								</Box>
								<Box className={styles.comparisonSection}>
									<Box className={styles.comparisonBlock}>
										<Box sx={{ display: "flex" }}>
											<Box className={styles.comparisonBlockTitleIcon}></Box>
											<Box className={styles.comparisonBlockTitle}>DO</Box>
										</Box>
										<Box className={styles.comparisonBlockContent}>
											<ul className={styles.mainTemplatePoints}>
												<li>
													Remember your summary will be seen first, so let
													your uniqueness shine through.
												</li>
												<li>
													Think carefully about the order of your
													sections. Place priority on those that best
													match the skills the internship requires.
												</li>
												<li>
													Choose a clean, professional design that ensures
													your resume won’t be ignored.
												</li>
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
											<ul className={styles.mainTemplatePoints}>
												<li>
													Try to cram every job, class and skill into your
													resume.
												</li>
												<li>
													Ignore the specifics of the job requirements.
												</li>
												<li>
													Write overly long descriptions for every entry.
												</li>
											</ul>
										</Box>
									</Box>
								</Box>
								<Box className={styles.mainTemplateImg}>
									<Image src={DoDont} alt="Internship - Do and Don't" />
									<Box className={styles.imgCaption}>
										Internship - Do and Don't
									</Box>
								</Box>
								<Box component={"p"}>
									Now, let’s focus on optional resume information you should
									consider.
								</Box>
								<Box component={"p"}>
									<b>Languages:</b> If you speak more than one language , that can
									be a big advantage. Many companies are multinational and can use
									employees who can communicate with others around the globe.
								</Box>
								<Box component={"p"}>
									<b>Extracurricular activities:</b> Carefully consider whether
									you can point to an achievement in these activities , or link it
									to a skill your potential employer would appreciate in an
									internship candidate.
								</Box>
								<Box component={"p"}>
									<b> Hobbies:</b> This section can add a little personality to
									your resume, but it can seem as though you are merely trying to
									fill space. If your hobby is related to your chosen field,
									consider adding that information in the skills section of your
									resume.
								</Box>
								<Box component={"h2"}>
									At the front of your brain: keywords and ATS
								</Box>
								<Box component={"p"}>
									Your first hurdle is passing the test of the applicant tracking
									systems (ATS). These computerized systems scan your resume for
									keywords employers have highlighted as most important. Because
									of the ease of applying for jobs and internships by simply
									uploading your resume, companies have found ways to narrow the
									applicant pool.
								</Box>
								<Box component={"p"}>
									Most companies of large or medium size use ATS as a first line
									of defense in the hiring process, even for internships. You must
									make it past ATS if you want an actual human recruiter to see
									your internship resume. ATS software uses an algorithm to give
									your resume a score and rank it compared to other internship
									applicants.
								</Box>
								<Box component={"p"}>
									Make sure to use keywords that you find by analyzing the job
									description. Use them liberally (though make sure you don’t
									start sounding like a robot yourself). Most keywords will be
									directly related to a “ hard skill ,” which is a specific
									quantifiable skill such as accounting, that is necessary for a
									job or internship. And remember to use technology to your
									advantage by grammar- and spell-checking your resume. There's no
									excuse for typos – even as an internship candidate.
								</Box>
								<Box className={styles.statInsights}>
									<Box className={styles.statInsightsLabel}>
										<InsightsIcon />
										Statistical Insight
									</Box>
									<Box component={"p"}>
										According to Capterra data, more than 75% of large corporate
										employers use ATS. Some other sources indicate even higher
										percentages (of up to 90%). The industries that turn to this
										software most frequently are: health care, education,
										technical services, scientific services, retail
										manufacturing and professional services.
									</Box>
								</Box>
							</Box>
							<Box ref={sectionRefs[2]} id="bestResumeFormat">
								<Box component={"h2"}>
									Choosing the best resume format for an intern
								</Box>
								<Box component={"p"}>
									The most commonly used chronological resume format is designed
									as a straightforward way for job candidates to organize their
									experience and qualifications below employer headings and dates,
									in order from most recent to earliest. But for an internship job
									application, a different resume format may be more suitable,
									depending on the nature and relative importance of your
									employment history.
								</Box>
								<Box component={"p"}>
									In cases where specialized knowledge and skills are just as
									important as where you have worked until now — if not more so —
									a functional resume may be your best bet. It offers greater
									flexibility to emphasize your most relevant strengths up front
									in a section labelled “Experience.”
								</Box>
								<Box component={"p"}>
									A hybrid, or combination, resume format offers even more
									versatility. Job seekers can integrate chronological and
									functional elements in the most applicable manner, and perhaps
									even put their education section higher up on the page.
								</Box>
								<Box component={"p"}>
									Like every consideration when preparing your resume, the format
									you choose should depend on the type of job and industry, and
									how best to present yourself as an ideal match. Also take into
									account what we touched on earlier regarding optional resume
									information you may wish to include, and the order you choose to
									arrange resume sections.
								</Box>
								<Box className={styles.statInsights}>
									<Box component={"p"}>
										For more ideas and inspiration, check out these writing
										guides and resume examples from the related education
										category:
									</Box>
									<ul className={styles.mainTemplatePoints}>
										<li>
											{" "}
											<a href="/">Early Childhood Educator</a>
										</li>
										<li>
											{" "}
											<a href="/">College Student&nbsp;</a>
										</li>
										<li>
											{" "}
											<a href="/">High School Student&nbsp;</a>
										</li>
										<li>
											{" "}
											<a href="/">Academic Librarian</a>
										</li>
										<li>
											{" "}
											<a href="/">Health Educator&nbsp;</a>
										</li>
										<li>
											{" "}
											<a href="/">ESL Teacher&nbsp;</a>
										</li>
										<li>
											{" "}
											<a href="/">Tutor&nbsp;</a>
										</li>
										<li>
											{" "}
											<a href="/">Teacher Assistant&nbsp;</a>
										</li>
										<li>
											{" "}
											<a href="/">Substitute Teacher&nbsp;</a>
										</li>
										<li>
											{" "}
											<a href="/">Student&nbsp;</a>
										</li>
										<li>
											{" "}
											<a href="/">Middle School Teacher&nbsp;</a>
										</li>
										<li>
											{" "}
											<a href="/">Elementary School Teacher&nbsp;</a>
										</li>
										<li>
											{" "}
											<a href="/">College Professor</a>
										</li>
										<li>
											{" "}
											<a href="/">High School Teacher &nbsp;</a>
										</li>
										<li>
											{" "}
											<a href="/">Academic Tutor&nbsp;</a>
										</li>
										<li>
											{" "}
											<a href="/">College Admissions&nbsp;</a>
										</li>
										<li>
											{" "}
											<a href="/">Teacher</a>
										</li>
										<li>
											{" "}
											<a href="/">Academic</a>
										</li>
									</ul>
								</Box>
							</Box>
							<Box ref={sectionRefs[3]} id="resumeHeader">
								<Box component={"h2"}>Resume header</Box>
								<Box component={"p"}>
									A distinctive resume header can visually set yourself apart from
									other intern candidates off the top. It enhances the
									reader-friendliness of your document while also readily
									identifying who it belongs to. It also displays your contact
									information prominently so recruiters can readily get in touch
									to arrange an interview.
								</Box>
							</Box>
							<Box ref={sectionRefs[4]} id="resumeSummaryExample">
								<Box component={"h2"}>
									Internship resume summary example: Start with a bang
								</Box>
								<Box component={"p"}>
									Your summary is the perfect opportunity to show you have the
									right combination of knowledge, drive and personality to succeed
									in the internship. Your resume may look similar to many other
									internship applicants, but its summary is yours alone. This is
									your chance to get a little creative and give potential
									employers insight into who you are and why you’re the best
									candidate for the internship. This isn’t easy; you have two or
									three sentences to differentiate yourself and show your
									knowledge of your chosen field, but never fear, the following
									strategies will get you there.
								</Box>
								<Box component={"p"}>
									Also known as a profile or personal statement , your summary
									allows your resume to stand out from the crowd of other
									internship candidates. The top of your resume is prime real
									estate. Here’s how to grab recruiters’ attention:
								</Box>
								<ul className={styles.mainTemplatePoints}>
									<li>
										Research the key qualities necessary for your chosen
										internship and career. Craft your first sentence to
										illustrate how you embody those qualities.
									</li>
									<li>
										Analyze the internship job description. Once you have a firm
										grasp of exactly what skills the employer wants, use this
										resume section to explain your expertise or positive
										qualities using action verbs.
									</li>
									<li>
										Use <span>action verbs</span>
										that tell what you have done or are able to accomplish. Here
										are a few examples: coordinated, envisioned, launched,
										diagnosed.
									</li>
									<li>
										Show your grit. Talk about a success you’ve had or a problem
										you solved. This shows you understand what it means to apply
										yourself to a job. Alternatively, discuss in a sentence a
										position you have held — even if it’s not directly related
										to your field. This shows employers that you are a
										responsible internship candidate and can handle a
										challenging work environment.
									</li>
								</ul>
								<Box component={"p"}>
									OK, so now you know what a resume profile is, but what does one
									look like for an internship candidate with little or no
									experience in the field? Check out the sample below for an
									example of how to write your own resume summary.
								</Box>
								<Box className={styles.copyAble}>
									<Box className={styles.copyAbleLabel}>
										ADAPTABLE RESUME SUMMARY EXAMPLE
									</Box>
									<Box className={styles.copyAbleText}>
										<Box component={"p"}>
											Hardworking and enthusiastic college student working
											towards a B.S. in Marketing. Seeking to use my superior
											knowledge of social media marketing and my advanced
											communication skills to effectively serve your company
											in an internship position. Dedicated and committed to
											becoming a dependable and valuable team member.
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
							<Box ref={sectionRefs[5]} id="employmentHistory">
								<Box component={"h2"}>
									Employment history: You’ve got more than you realize
								</Box>
								<Box component={"p"}>
									Experience means more than just jobs in your field. You can
									describe work that points out your relevant skills. Don’t forget
									those resume keywords! The focus of your life so far has been
									your education.
								</Box>
								<Box component={""}>
									As you make the leap into the workforce, this resume section
									will fill out. In fact, although it is hard to believe now, one
									day you will be trying to pare this down instead of beef it up.
									But even as an intern, you probably have more experience than
									you realize. Recruiters looking to hire you for an internship
									understand that you will not have vast experience. They do want
									to know, however, that you are responsible, serious about your
									work, and have interpersonal or technical skills.
								</Box>
								<Box component={"p"}>
									Here are some sample experience categories you may want to list
									on your resume for an internship:
								</Box>
								<ul className={styles.mainTemplatePoints}>
									<li>
										A previous internship, even if it’s not in the same field as
										the one you are seeking.
									</li>
									<li>
										High school / summer jobs you have had, whether babysitting,
										retail, or working at a fast food restaurant, tell an
										employer something about yourself as a worker. Describe the
										skills you used, the duties you performed or a problem you
										solved.
									</li>
									<li>
										Volunteer work, even if it was required by your high school
										for graduation. If you used skills relevant to your career,
										list them on your resume.
									</li>
									<li>
										Personal projects such as: a blog that highlights your
										thinking or writing; a programming challenge or hackathon;
										an amateur theater project; or a website you developed with
										friends. These are perfect ways to show alternative
										experience on an internship resume.
									</li>
								</ul>
								<Box component={"p"}>
									One important thing to remember: DO NOT fluff up this section in
									an attempt to fill space on your resume. Human resources
									professionals and recruiters can easily spot drastic
									exaggerations or overplayed achievements.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"p"}>
										Review your contact info. If you have email addresses or
										messenger tags that were created back in high school and
										look unprofessional, create new ones, specifically for
										resume or professional purposes. Survey data shows that 35%
										of employers have a problem with unprofessional email
										addresses. A good bet is to get an email address with your
										first name (or initial) and last name.
									</Box>
								</Box>
								<Box component={"p"}>
									Below is a resume employment history example for an intern.
								</Box>
								<Box className={styles.copyAble}>
									<Box className={styles.copyAbleLabel}>
										ADAPTABLE RESUME EMPLOYMENT HISTORY EXAMPLE
									</Box>
									<Box className={styles.copyAbleText}>
										<Box component={"h4"}>
											Sales Associate, Gary's Department Store, Bellevue Sep
											2018 - May 2021
										</Box>
										<ul className={styles.mainTemplatePoints}>
											<li>Maintained positive consumer relationships.</li>
											<li>
												Provided excellent customer assistance at all times.
											</li>
											<li>
												Ensured all communications were consistent with the
												store brand.
											</li>
											<li>
												Used superior information technology skills on a
												daily basis.
											</li>
										</ul>
										<Box component={"h4"}>
											Office Assistant, The Harkins Group, Seattle Jun 2017 -
											Aug 2018
										</Box>
										<ul className={styles.mainTemplatePoints}>
											<li>
												Worked to increase office productivity by
												maintaining an organized environment.
											</li>
											<li>
												Used advanced software programs and helped to
												maintain strong communication among colleagues.
											</li>
											<li>
												Maintained the office schedule and prioritized
												tasks.
											</li>
											<li>
												Effectively used my management skills to complete
												all front desk operations in a timely manner.
											</li>
										</ul>
										<Box component={"h4"}>
											Assistant Dog Trainer, Gracelane Kennels, Norwalk Nov
											2016 - May 2017
										</Box>
										<ul className={styles.mainTemplatePoints}>
											<li>
												Helped dogs to assimilate in their new environments.
											</li>
											<li>
												Maintained a proper environment, conducive to the
												health and happiness of each and every dog.
											</li>
											<li>
												Cared for each dog, ensuring proper medications and
												procedures were administered.
											</li>
											<li>
												Prepared new kennels for incoming dogs and
												thoroughly cleaned vacant kennels.
											</li>
										</ul>
									</Box>
								</Box>
							</Box>
							<Box ref={sectionRefs[6]} id="resumeEducationExample">
								<Box component={"h2"}>
									Internship resume education example: Mine your classes
								</Box>
								<Box component={"p"}>
									Classes in your chosen field have already given you both
									theoretical knowledge and hands-on experience. In this section ,
									you have the opportunity to explain how your education makes you
									a great candidate for an internship.
								</Box>
								<Box component={"p"}>
									College classes in your major are the perfect preparation for
									internships. Look through your course descriptions and syllabi
									for examples of transferable lessons or skills. Then, highlight
									keywords and projects you have completed that are directly
									related to the internship you seek. Your academics are your
									current career, so treat them as such. Analyze the internship
									description for skills and highlight keywords you will strive to
									include on your resume.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h2"}>
										Focus on tangible results of your education
									</Box>
									<Box component={"p"}>
										Here are two tips for enhancing the education content of
										your internship resume by describing, including a sample
										sentence you can adapt.
									</Box>
									<ul className={styles.mainTemplatePoints}>
										<li>
											Use <strong>active verbs and details</strong>.
											<ul>
												<li>
													Say this: “Wrote research paper that involved
													surveying 50 students and analyzing data to test
													my hypothesis that too much outside work drives
													down student grades.”
												</li>
												<li>
													Instead of: “Did a research project on how work
													affects student grades.”
												</li>
											</ul>
										</li>
										<li>
											Use <strong>specific language</strong> and spell out
											acronyms the first time you use them. For example,
											remember that ATS may be searching for the words “search
											engine optimization” and not the acronym SEO.
										</li>
									</ul>
								</Box>
								<Box component={"p"}>
									Here’s a basic education example you can use as a starting point
									for your internship resume.
								</Box>
								<Box className={styles.copyAble}>
									<Box className={styles.copyAbleLabel}>
										ADAPTABLE RESUME EDUCATION EXAMPLE
									</Box>
									<Box className={styles.copyAbleText}>
										<Box component={"h4"}>
											University of Washington, Seattle Aug 2017 Bachelor of
											Marketing
										</Box>
										<Box component={"p"}>
											- Passionately pursuing a marketing degree, while
											working to enhance my skill set and industry experience.{" "}
										</Box>
										<Box component={"h4"}>
											Franklin Academy, Bellevue Sep 2013 - Jun 2017 High
											School Diploma
										</Box>
										<Box component={"p"}>
											- Earned my high school diploma and graduated at the top
											of my class.{" "}
										</Box>
										<Box component={"p"}>
											- Worked to maintain my Honor Society membership for all
											four years.
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
							<Box ref={sectionRefs[7]} id="cvSkillsExample">
								<Box component={"h2"}>
									CV skills example: Give employers what they seek
								</Box>
								<Box component={"p"}>
									You will tailor this section to the internship you want. Each
									employer wants something a little different, so make sure your
									resume reflects that. You’ve already tackled experience and
									education. Now, make a list of all the skills you have. Put them
									down even if they seem irrelevant. This will be your master list
									and brainstorming it will give you a baseline from which to
									choose the most important qualities as you adjust your resume
									for each internship application.
								</Box>
								<Box component={"p"}>
									Some skills require explanation. Saying you’re a good
									communicator is not very informative. Instead, give an example
									on your resume of a time you had to communicate and the result
									of the communication. A 2017 study of employers found that the
									top skills they look for in interns are:
								</Box>
								<ul className={styles.mainTemplatePoints}>
									<li>Information processing</li>
									<li>Teamwork</li>
									<li>Planning/prioritizing</li>
									<li>Decision-making/problem-solving</li>
									<li>Verbal communication</li>
								</ul>
								<Box component={"p"}>
									If you are struggling to develop this section, consider placing
									it below the education section, where you may be able to
									showcase your industry knowledge and skills more readily.
									Analyze each internship description. Choose the top five to 10
									skills listed to personalize your resume. Use exact words from
									the description to help you get past the ATS.
								</Box>
								<Box className={styles.statInsights}>
									<Box className={styles.statInsightsLabel}>
										<InsightsIcon />
										Statistical Insight
									</Box>
									<Box component={"p"}>
										According to Glassdoor, 250 people apply to the average job
										listing. Make sure to use every advantage possible to
										outpace the competition. This includes honing your skills,
										summary and every other resume section, as well as making
										sure the design of your resume is clean and visually
										appealing.
									</Box>
								</Box>
								<Box component={"p"}>
									Check out an internship resume sample for the skills section
									below.
								</Box>
								<Box className={styles.copyAble}>
									<Box className={styles.copyAbleLabel}>
										RESUME EXAMPLE: SKILLS SECTION
									</Box>
									<Box className={styles.copyAbleText}>
										<ul className={styles.mainTemplatePoints}>
											<li>Interpersonal Communication Skills</li>
											<li>Excellent Work Ethic</li>
											<li>Advanced Technology Skills</li>
											<li>Teamwork Skills</li>
											<li>Honesty and Integrity</li>
											<li>Motivated Attitude</li>
										</ul>
									</Box>
								</Box>
							</Box>
							<Box ref={sectionRefs[8]} id="resumeLayoutDesign">
								<Box component={"h2"}>
									Resume layout, design and formatting: Look like a pro
								</Box>
								<Box component={"p"}>
									Some internship candidates believe that employers will overlook
									a poorly designed and formatted resume document from applicants
									with little or no professional experience. This is usually not
									the case. In fact, a well-designed resume can actually put you
									miles ahead of others seeking the same position.{" "}
								</Box>
								<Box component={"p"}>
									When it comes to layout, design and formatting choices, you’ll
									want to keep your resume looking clean and simple, without
									sacrificing visual appeal. After putting time and effort into
									crafting your resume text, it's important to ensure the document
									is easy to read.{" "}
								</Box>
								<Box component={"p"}>
									Here are some tips for creating a CV layout and formatting
									that's artistic, yet legible and inviting to read.{" "}
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"h4"}>
										Here are some tips for creating a CV layout and formatting
										that's artistic, yet legible and inviting to read.
									</Box>
									<ul className={styles.mainTemplatePoints}>
										<li>
											Try the quadrant test to make sure the text is
											well-balanced. Split your resume into four quadrants, by
											dividing it horizontally and vertically. Text should be
											almost evenly spread among the quadrants (more important
											sections can be a bit larger).
										</li>
										<li>
											Separate text. Instead of putting your title, dates of
											employment, and employer’s name one right after the
											other, divide them into columns on your resume.
										</li>
										<li>
											Choose <a href="/">fonts</a>
											wisely. Use boldface, type size, and fonts to draw
											recruiters’ eyes to the most important information on
											the resume.
										</li>
										<li>
											Use color sparingly. A splash of color is fine, but too
											much is distracting and looks unprofessional.
										</li>
									</ul>
								</Box>
								<Box component={"p"}>
									Resume.io's field-tested resume templates can make it easier to
									quickly create a job-winning CV. Choose one from our four resume
									design categories — modern , professional , simple , or creative
									. Or, personalize the internship resume example at the top of
									this guide.
								</Box>
								<Box component={"p"}>
									But before you settle on a template, make sure to consider what
									the presentation says about you as a candidate. Is the
									internship for a serious company in a traditional field with a
									formal image? Or do you think your potential employer would
									appreciate a more modern, resume with youthful appeal?
								</Box>
								<Box className={styles.statInsights}>
									<Box className={styles.statInsightsLabel}>
										<InsightsIcon />
										Statistical Insight
									</Box>
									<Box component={"p"}>
										According to Purdue Owl, HR personnel take at most 35
										seconds for a first look at a resume. Make the most of that
										time.
									</Box>
								</Box>
							</Box>
							<Box ref={sectionRefs[9]} id="takeAwaysInternship">
								<Box component={"h2"}>Key takeaways for an internship resume</Box>
								<Box className={styles.digitalNumbers}>
									<ol>
										<li>
											You have more experience than you realize, and that can
											lead to a great resume.
										</li>
										<li>
											Internships are the first step to the career of your
											dreams, and a great resume will help you get there.
										</li>
										<li>
											Resume.io will help you craft a great resume that gets
											you past ATS software.
										</li>
										<li>
											Think carefully about the order of your resume sections
											and put your most impressive or important ones first.
										</li>
										<li>
											Some sample experiences for a student or intern can
											include volunteer work and personal projects.
										</li>
										<li>
											If you're a college student, highlight your outstanding
											classwork and achievements in the education resume
											section.
										</li>
										<li>
											Tailor the skills section to each internship and give
											examples for vague skills like “great communication.”
										</li>
										<li>
											Use templates and design principles to create a clean,
											professional-looking resume format.
										</li>
									</ol>
								</Box>
								<Box className={styles.mainTemplateImg}>
									<Image src={KeyTakesAwayImg} alt="Key takeaways" />
									<Box className={styles.imgCaption}>
										Internship - Key takeaways
									</Box>
								</Box>
								<Box component={"p"}>
									Save yourself time and take the margin of error out of your
									resume creation with the resume.io builder tool and expertly
									designed resume templates.
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
								<Image src={internshipAside} alt="Customer Service Aside" />
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
