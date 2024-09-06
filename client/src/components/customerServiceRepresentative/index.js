import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import * as styles from "./customerServiceRepresentative.module.scss";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import Link from "next/link";
import { Scrollspy } from "@makotot/ghostui";
import React, { useRef } from "react";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomerServiceBanner from "../../../public/images/CustomerServiceBanner.png";
import workGuideLines from "../../../public/images/workGuideLines.png";
import WorkExperienceKatya from "../../../public/images/WorkExperienceKatya.png";
import HighestPaying from "../../../public/images/highestPaying.png";
import ListSpecialSkills from "../../../public/images/listSpecialSkills.png";
import SocialMediaknowledges from "../../../public/images/SocialMediaknowledge.png";
import FunctionalResumeFormat from "../../../public/images/FunctionalResumeFormat.png";
import CustomerServiceAside from "../../../public/images/CustomerServiceBanner.png";
import BottomBanner from "../../../public/images/bottomBanner.png";
import HowToWrite from "../../../public/images/how-to-write-a-resume.png";

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
			<Box className={styles.customerHeroSection}>
				<Grid container spacing={2}>
					<Grid item md={6} xs={12}>
						<Box className={styles.leftSideContent}>
							<Box component={"h1"}>
								Customer Service Representative Resume Example & Writing Guide
							</Box>
							<Box component={"p"}>
								Customer service representatives handle client requests, product
								issues and represent companies at the most basic level. Today’s job
								market is more technological and competitive than ever. Use our
								Customer Service resume example & guide to boost your chances of
								getting a great position!
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
								<Image
									src={CustomerServiceBanner}
									alt="Customer Service Representative Resume Examples"
								/>
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
																				href="#customerService"
																				className={
																					currentElementIndexInViewport ===
																					0
																						? `${styles.active}`
																						: ""
																				}
																			>
																				What does a customer
																				service
																				representative do?
																			</a>
																			<a
																				href="#theWinningFormula"
																				className={
																					currentElementIndexInViewport ===
																					1
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Resume summary
																				example: the winning
																				formula
																			</a>
																			<a
																				href="#focusedDescriptive"
																				className={
																					currentElementIndexInViewport ===
																					2
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Resume employment
																				history example:
																				focused and
																				descriptive
																			</a>
																			<a
																				href="#comprehensiveToolkit"
																				className={
																					currentElementIndexInViewport ===
																					3
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Skills example
																				section: a
																				comprehensive
																				toolkit
																			</a>
																			<a
																				href="#correctResume"
																				className={
																					currentElementIndexInViewport ===
																					4
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Choosing the correct
																				format and resume
																				template
																			</a>
																			<a
																				href="#basicImpressive"
																				className={
																					currentElementIndexInViewport ===
																					5
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Resume education
																				example: from basic
																				to impressive
																			</a>
																			<a
																				href="#keyTakeaways"
																				className={
																					currentElementIndexInViewport ===
																					6
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Key takeaways for a
																				customer service
																				resume
																			</a>
																			<a
																				href="#administrativeField"
																				className={
																					currentElementIndexInViewport ===
																					7
																						? `${styles.active}`
																						: ""
																				}
																			>
																				Other related resume
																				examples from the
																				same administrative
																				field:
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
									Good customer service representatives are an integral part of
									any business — defining a company’s image, customer loyalty,
									customer-business interactions and much more. And the aim of
									this customer service resume example and writing guide is to
									help you project an image that you are that very person, someone
									who will provide a great customer service experience for a
									company that needs precisely that.
								</Box>
								<Box component={"p"}>What we’ll cover in this guide:</Box>
								<Box className={styles.digitalNumbers}>
									<ol>
										<li>What does a customer service representative do?</li>
										<li>
											Helping your resume win the battle against hundreds of
											other applicants
										</li>
										<li>
											Resume writing that's not only informative but actually
											fun to read
										</li>
										<li>
											Showing your professionalism and skills on your resume
											without rich previous experience
										</li>
										<li>
											Creating a resume that leads you to great employers and
											jobs.
										</li>
									</ol>
								</Box>
								<Box className={styles.mainTemplateImg}>
									<Image src={workGuideLines} alt="Covered in this guide" />
									<Box className={styles.imgCaption}>
										Customer Service Representative - Covered in this guide
									</Box>
								</Box>
							</Box>

							<Box ref={sectionRefs[0]} id="customerService">
								<Box component={"h2"}>
									What does a customer service representative do?
								</Box>
								<Box component={"p"}>
									Customer service representatives typically work by phone
									addressing questions and resolving complaints raised by clients
									who have already purchased goods or services from a company.
								</Box>
								<Box component={"p"}>
									Some customer service reps also meet clients face to face, by
									email or via live online chat. The reason for the interaction is
									not always an existing problem, as sometimes it’s simply a
									matter of helping to process orders, assist with billing,
									provide more information or even sell new services.
								</Box>
								<Box component={"p"}>
									But customer service reps often deal with clients who are
									unsatisfied for one reason or another. Customer service reps
									typically need abundant reservoirs of patience and a demeanor
									that remains pleasant, helpful and informative.
								</Box>
								<Link href="/writeResume#howToWriteResume">
									<a className={styles.twoPageResume}>
										<Box className={styles.twoPageResumeImg}>
											<Image src={HowToWrite} alt="How to Write Resume" />
										</Box>
										<Box className={styles.twoPageResumeDetails}>
											<Box className={styles.twoPageResumeCaption}>
												Related article
											</Box>
											<Box className={styles.twoPageResumeTitle}>
												How to write a resume
											</Box>
											<Box className={styles.twoPageResumeDescription}>
												All the tips, tools, templates, and examples you
												need to learn how to write a resume in 2022
											</Box>
										</Box>
									</a>
								</Link>
								<Box component={"h2"}>
									Creating a CV for the modern customer service landscape
								</Box>
								<Box component={"p"}>
									There are a few facts about customer service that can help guide
									the CV and resume writing process.
								</Box>
								<Box component={"p"}>
									Fact #1: Customer service is one of the best areas for
									entry-level applicants. Customer service provides amazing
									opportunities for career growth for talented employees. Working
									in this position also develops a huge amount of soft skills. It
									allows for awesome networking in the professional world.
								</Box>
								<Box component={"p"}>
									Fact #2: Customer service is viewed by companies and brands as
									extremely important. Studies show that great customer service is
									the No. 1 reason that consumers trust brands (data from
									Dimensional Research) and that bad customer service is nearly
									guaranteed (at 89%) to make clients switch to their competitors
									(data from Harris Interactive).
								</Box>
								<Box component={"p"}>
									Fact #3: Technological solutions, CSR platforms and chat bots
									are changing how customer service is provided.
								</Box>
								<Box className={styles.statInsights}>
									<Box className={styles.statInsightsLabel}>
										<InsightsIcon />
										Statistical Insight
									</Box>
									<Box component={"p"}>
										Friendly customer service representatives and memorable CSR
										work history are what cause 73% of consumers to stay with a
										brand or company long-term (data from Harris Interactive).
									</Box>
								</Box>
								<Box component={"p"}>
									In addition, digital customer service experience is about apps,
									interfaces, digital requests, CSR platforms, etc. Along with an
									emphasis on social and communication skills, technological
									aptitude is becoming more important for customer service
									representatives. In this resume guide, we'll take a look at how
									this impacts your resume and CV in each section.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"p"}>
										Over 60% of consumers in the U.S. prefer automated solutions
										(websites, apps, etc.) for simple customer service requests
										(AE research). This means that the tasks that go to actual
										human employees in CSR have become more complicated and
										involve more communication.
									</Box>
								</Box>
							</Box>

							<Box ref={sectionRefs[1]} id="theWinningFormula">
								<Box component={"h2"}>
									Resume summary example: the winning formula
								</Box>
								<Box component={"p"}>
									For many people, a customer service representative position is
									one of the best entry-level opportunities. With all that
									competition, your resume summary should be a short but engaging
									story. For many recruiters and HR professionals, your summary
									may be the most important part of your resume. If your basic
									qualifications are in place, the summary is what makes you stand
									out. It’s your first introduction, and it’s often your only
									chance to be creative on your resume.
								</Box>
								<Box component={"p"}>
									Your customer service representative resume summary should be a
									description of yourself with a premium on interpersonal skills,
									but with a dash of technological aptitude. As for personal
									qualities, two are king: dependability and empathy. Customer
									service is time-sensitive, so it’s important to show you’ll be
									there when needed. Empathy ensures you connect with the clients
									on a human level.
								</Box>
								<Box className={styles.statInsights}>
									<Box className={styles.statInsightsLabel}>
										<InsightsIcon />
										Statistical Insight
									</Box>
									<Box component={"p"}>
										According to AE research, 68% of customers consider a polite
										representative to be the key to great customer service. This
										shows that soft skills and social impressions define the
										quality of your work. This is what your employer is likely
										to emphasize.
									</Box>
								</Box>
								<Box component={"p"}>
									In closing, what the employer and recruiter want to see in your
									resume summary is an image of a customer service representative
									who’ll make clients happy. A person who will promote trust in
									the brand and provide positive experiences. A person who will
									always reliably be there to take a customer request.
								</Box>
								<Box component={"h2"}>Accounting for the ATS</Box>
								<Box component={"p"}>
									The battle with the ATS starts at the very first section of your
									resume.
								</Box>
								<Box component={"p"}>
									Applicant Tracking Systems are based on keyword analysis. They
									automatically review and score resumes based on keywords that
									are important to the employer. Customer service resumes that
									don't make the cut are filtered out and never reach a recruiter.
									This means you can greatly increases your chances of passing the
									ATS test by using the correct keywords. To do so, analyze the
									job listing, which should have the necessary keywords already in
									it.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"p"}>
										If you find the job description to be confusing, too wordy
										or complicated, there are additional tools you can use to
										analyze it. Word clouds are a great way to understand which
										ideas and qualities are the most important to an employer.
										Services like Wordle or Worditout.com will help you make
										sense of listings that aren’t written in a clear way. Word
										clouds will also show you hidden patterns if there are any.
										This may become your secret weapon against automated ATS
										filtering.
									</Box>
								</Box>

								<Box component={"p"}>
									Take a look at our adaptable summary example for customer
									service representatives:
								</Box>
								<Box className={styles.copyAble}>
									<Box className={styles.copyAbleLabel}>
										RESUME EXAMPLE: CUSTOMER SERVICE SUMMARY
									</Box>
									<Box className={styles.copyAbleText}>
										<Box component={"p"}>
											Dedicated Customer Service Representative dedicated to
											providing quality care for ultimate customer
											satisfaction. Proven ability to establish and maintain
											excellent communication and relationships with clients.
											Adept in general accounting and finance transactions.
											Dedicated to identifying customer needs and delivering
											effective solutions to all problems. Excellent time
											management skills combined with a superior knowledge of
											the customer service industry. Bilingual, hardworking,
											and ready to join my next team.
										</Box>
									</Box>
								</Box>
								<Box component={"h2"}>Bonus tip for career-starters</Box>
								<Box component={"p"}>
									So what do you do if you just graduated from college or are
									transitioning to customer service from another profession? Be
									sure to highlight your rich work/life experience, your past jobs
									in other fields and your best qualities, and demonstrate some
									real passion about being productive in a customer service
									position.
								</Box>
								<Box className={styles.copyAble}>
									<Box className={styles.copyAbleLabel}>
										RESUME EXAMPLE: SUMMARY FOR NEW GRADUATE
									</Box>
									<Box className={styles.copyAbleText}>
										<Box component={"p"}>
											Young professional with great interpersonal skills,
											on-the-ground experience in service jobs and basic
											customer-business interactions. Freshly graduated, but
											with existing skills from part-time work, social
											projects, college initiatives and numerous
											extracurricular activities. Determined to be an asset to
											any customer service team by providing positive
											experiences and impressions for clients. Possess
											certificates from acting classes and conflict resolution
											seminars.
										</Box>
									</Box>
								</Box>
							</Box>
							<Box ref={sectionRefs[2]} id="focusedDescriptive">
								<Box component={"h2"}>
									Resume employment history example: focused and descriptive
								</Box>
								<Box component={"p"}>
									Customer service representative positions may be perceived as
									entry-level. But there’s room for growth. And there’s also room
									to demonstrate your life/professional experience in other fields
									. Craft a career history to impress employers. There’s some
									great news for people making a career change from other areas:
									this is one of the most universal professional fields, with a
									variety of industries requiring specialists in CS. When it comes
									to employment history, reverse chronological order is your best
									bet to make use of limited recruiter “eye time.” So showcase
									your most important past jobs first.
								</Box>
								<Link href="/">
									<a className={styles.twoPageResume}>
										<Box className={styles.twoPageResumeImg}>
											<Image
												src={WorkExperienceKatya}
												alt="Work Experience Katya"
											/>
										</Box>
										<Box className={styles.twoPageResumeDetails}>
											<Box className={styles.twoPageResumeCaption}>
												Related article
											</Box>
											<Box className={styles.twoPageResumeTitle}>
												How to write work experience on a resume
											</Box>
											<Box className={styles.twoPageResumeDescription}>
												Learn exactly how to describe work experience on a
												resume. There are specific formats that hiring
												managers and recruiters prefer, here they are!
											</Box>
										</Box>
									</a>
								</Link>
								<Box component={"p"}>
									U.S. Census Bureau data shows that the most common CS positions
									are in the business support, restaurant and food , retail ,
									banking and financial areas . If you have worked in similar
									fields before and are applying for related jobs, it makes sense
									to prioritize this relevant years of experience on your resume.
									The next thing you want to do to surpass your competition is to
									provide resume bullet points or notes on your achievements,
									milestones and noteworthy duties in previous jobs.
								</Box>
								<Box className={styles.statInsights}>
									<Box className={styles.statInsightsLabel}>
										<InsightsIcon />
										Statistical Insight
									</Box>
									<Box component={"p"}>
										According to U.S. government data, the highest paying CS
										positions are in these industries: railroad manufacturing ;
										engine and turbine manufacturing ; pharmaceutical and
										medicine production ; advertising and PR ; alcoholic
										beverages manufacturing. The yearly salaries here range from
										$78K to $100K.
									</Box>
								</Box>

								<Box className={styles.mainTemplateImg}>
									<Image src={HighestPaying} alt="Highest paying positions" />
									<Box className={styles.imgCaption}>
										Customer Service Representative - Highest paying positions
									</Box>
								</Box>
								<Box component={"p"}>
									Adapt this sample to your own experience for a highly effective
									work history section.
								</Box>
								<Box className={styles.copyAble}>
									<Box className={styles.copyAbleLabel}>
										RESUME EXAMPLE: EMPLOYMENT HISTORY
									</Box>
									<Box className={styles.copyAbleText}>
										<Box component={"h4"}>
											Branch Customer Service Representative, AT&T Inc.,
											Seattle August 2014 - September 2021
										</Box>
										<ul className={styles.mainTemplatePoints}>
											<li>
												Maintained up to date knowledge of products and
												services.
											</li>
											<li>
												Handled customer calls and responded to queries
												about services, product malfunctions, promotions,
												and billing.
											</li>
											<li>
												Worked to address all customer concerns in a timely
												and effective manner.
											</li>
											<li>
												Handled large volume of calls on a day-to-day basis
												with a sense of calm and good work ethic.
											</li>
											<li>
												Developed successful tactics to sell products and
												services to customers.
											</li>
											<li>
												Worked to understand the needs of each customer.
											</li>
										</ul>
										<Box component={"h4"}>
											Customer Service Representative, Gold Coast Hotel,
											Seattle August 2012 - August 2014
										</Box>
										<ul className={styles.mainTemplatePoints}>
											<li>
												Greeted customers with enthusiasm and a delightful
												and helpful attitude.
											</li>
											<li>
												Provided guests and potential guests with up-to-date
												information about hotel and promotional offerings.
											</li>
											<li>Effectively sold rooms to walk-in customers.</li>
											<li>
												Responded to guest complaints in a professional and
												effective way.
											</li>
											<li>
												Processed payments and informed hotel staff of room
												status and availability.
											</li>
											<li>
												Provided superiors with work logs, demonstrating
												accountability.
											</li>
										</ul>
										<Box component={"h4"}>
											Customer Sales Representative, Macy's, Bellevue October
											2010 - May 2012
										</Box>
										<ul className={styles.mainTemplatePoints}>
											<li>
												Greeted customers in a friendly and helpful manner.
											</li>
											<li>
												Provided high quality customer service to customers.
											</li>
											<li>
												Handled sales transactions and returns in a timely
												manner.
											</li>
											<li>
												Answered all questions regarding products and
												promotions.
											</li>
											<li>
												Aimed to keep customers satisfied and returning to
												Macy's.
											</li>
										</ul>
									</Box>
								</Box>
							</Box>
							<Box ref={sectionRefs[3]} id="comprehensiveToolkit">
								<Box component={"h2"}>
									Skills example section: a comprehensive toolkit
								</Box>
								<Box component={"p"}>
									Your skills section needs to be truthful and needs to reflect
									who you are as a valuable professional. Create a master list of
									your most noteworthy skills, where you brainstorm and write out
									every competency you possess that could go on your resume. Save
									that list and keep it for future resumes, and enrich it as you
									gain more experience.
								</Box>
								<Box component={"p"}>
									When using it for resume creation, filter out the "weakest"
									points and transfer to your resume only those that apply to the
									specific customer service job you’re aiming for.
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
													Ignore social skills (these are critical for CS
													specialists).
												</li>
												<li>
													Ignore the specifics of the industry and job
													application.
												</li>
												<li>
													Create a skills section in your resume without
													prior research (such as guides or statistics).
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
													Compose a Summary that is too dry or too
													rambling (in the form of a lengthy
													first-perspective narrative).
												</li>
												<li>
													Forget to mention important qualities and
													achievements right at the beginning, quantifying
													with numbers and context where appropriate.
												</li>
											</ul>
										</Box>
									</Box>
								</Box>
								<Box component={"h2"}>
									Soft skills and hard skills for customer service
								</Box>
								<Box component={"p"}>
									Most prospective customer support representatives have an
									intuitive understanding that soft skills are king for the
									profession. But guessing and knowing for sure are quite
									different. Statistics back up the fact that social qualities and
									competencies dominate this field. According to O-NET Online and
									PUMS Occupation statistics, the three most critical and
									necessary skills for these positions are: Active Listening,
									Service Orientation, and Social Perceptiveness. They are closely
									followed by: Speaking Skills, Visual and Reading Comprehension
									(quickly understanding text and image based info) and Complex
									Problem Solving. Mathematics, writing (including technical
									writing and general aptitude) and operation/process analysis can
									also be an advantage, especially for upper-level positions.
								</Box>
								<Link href="/">
									<a className={styles.twoPageResume}>
										<Box className={styles.twoPageResumeImg}>
											<Image
												src={ListSpecialSkills}
												alt="List Special Skills"
											/>
										</Box>
										<Box className={styles.twoPageResumeDetails}>
											<Box className={styles.twoPageResumeCaption}>
												Related article
											</Box>
											<Box className={styles.twoPageResumeTitle}>
												How to list special skills on your resume
											</Box>
											<Box className={styles.twoPageResumeDescription}>
												Tips, formatting examples, and keywords to list
												special skills on your resume that the hiring
												manager will love.
											</Box>
										</Box>
									</a>
								</Link>
								<Box component={"p"}>
									Soft skills are going to be the main focus of any recruiter or
									HR professional evaluating a customer service application.
									However, nearly every job market has been impacted by
									technological innovations. This means that hard skills have more
									importance than they did in previous years. Knowing how to use
									digital customer communication systems, CRMs, office software
									and so on can be a critical necessity, depending on the company.
									Social media knowledge has become vital for many businesses, as
									millions of consumers interact with brands there. Here's an
									example to illustrate how social media knowledge is important,
									according to Microsoft data:
								</Box>
								<ul className={styles.mainTemplatePoints}>
									<li>
										65% of consumers aged 18-34 consider social media a good
										channel to reach customer service
									</li>
									<li>
										35% of U.S. consumers have reached out to companies via
										social media at least once
									</li>
									<li>
										48% of consumers expect a response in this channel within 24
										hours.
									</li>
								</ul>
								<Box className={styles.mainTemplateImg}>
									<Image
										src={SocialMediaknowledges}
										alt="Social Media knowledge"
									/>
									<Box className={styles.imgCaption}>
										Customer Service Representative - Social Media knowledge
									</Box>
								</Box>
								<Box className={styles.copyAble}>
									<Box className={styles.copyAbleLabel}>
										ADAPTABLE EDUCATION RESUME EXAMPLE
									</Box>
									<Box className={styles.copyAbleText}>
										<ul className={styles.mainTemplatePoints}>
											<li>Excellent Communication Skills</li>
											<li>Troubleshooting Skills</li>
											<li>Multitasking Skills</li>
											<li>Mediation and Negotiation Skills</li>
											<li>Marketing Strategies</li>
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
							<Box ref={sectionRefs[4]} id="correctResume">
								<Box component={"h2"}>
									Choosing the correct format and resume template
								</Box>
								<Box component={"p"}>
									Resume templates, CV formats and layouts influence how you are
									perceived before any physical meeting. The two most important
									goals to pursue with a resume template or CV format are: number
									one, avoid a buggy resume format at all costs; number two, try
									to make the format symmetrical, clean and easy to read. Your
									resume and the corresponding template are going to be reviewed
									by someone with limited time and many other job applications in
									their inbox. You want to stand out in a good way: through a
									beautifully designed template and organized-looking document.
								</Box>

								<Box className={styles.statInsights}>
									<Box className={styles.statInsightsLabel}>
										<InsightsIcon />
										Statistical Insight
									</Box>
									<Box component={"p"}>
										21% of all resumes in the U.S. run into problems or don’t
										pass the ATS due to having confusing layouts, charts or
										images. Avoid resume format problems with our tested
										templates!
									</Box>
								</Box>
								<Box component={"h2"}>
									The best layout or template types for a customer service resume
								</Box>
								<Box component={"p"}>
									Customer service is about human interaction, problem solving,
									patience and reliability. Logically, your template and visual
									layout should reflect some combination of accessible (clean and
									friendly) design with a certain amount of structure to
									demonstrate an organized approach to your work. Our template
									collection has a wide variety of CV formats to choose from,
									perfect for customer service positions. You can highlight some
									human character and organized reliability through the template
									visuals. Choose one template example and tailor it to each
									customer service position through our editor tool.
								</Box>
								<Link href="/">
									<a className={styles.twoPageResume}>
										<Box className={styles.twoPageResumeImg}>
											<Image
												src={FunctionalResumeFormat}
												alt="Functional Resume Format"
											/>
										</Box>
										<Box className={styles.twoPageResumeDetails}>
											<Box className={styles.twoPageResumeCaption}>
												Related article
											</Box>
											<Box className={styles.twoPageResumeTitle}>
												Functional resume format: Examples, tips, & free
												templates
											</Box>
											<Box className={styles.twoPageResumeDescription}>
												What is a functional resume format and who should
												use one? Plus tips, examples, and free resume
												templates.
											</Box>
										</Box>
									</a>
								</Link>
								<Box component={"p"}>
									Our templates come in four categories: Modern , Professional ,
									Simple and Creative . Nearly all the layouts in the first three
									categories can be an excellent fit for a customer service job.
									You’ll just need to select a format based on your personal taste
									and the size of your relevant sections.
								</Box>
							</Box>
							<Box ref={sectionRefs[5]} id="basicImpressive">
								<Box component={"h2"}>
									Resume education example: from basic to impressive
								</Box>
								<Box component={"p"}>
									Customer service specialists come from all sorts of educational
									backgrounds. Due to the universal nature of customer service,
									you can be confident in showcasing almost any degree or
									certificate. More than 30% have majors in business (
									administration , management, etc.). Nearly 8% majored in social
									sciences. Two other strong educational directions observed in
									statistical data are psychology and computer science degrees.
								</Box>
								<Box component={"p"}>
									Customer service specialists come from all sorts of educational
									backgrounds. Due to the universal nature of customer service,
									you can be confident in showcasing almost any degree or
									certificate. More than 30% have majors in business
									(administration, management, etc.). Nearly 8% majored in social
									sciences. Two other strong educational directions observed in
									statistical data are psychology and computer science degrees.
								</Box>
								<Box component={"p"}>
									There’s no need to list your high school experience if you have
									enough content elsewhere on your customer service resume.
								</Box>
								<Box className={styles.expertTips}>
									<Box className={styles.expertTipsLabel}>
										<EmojiObjectsIcon />
										Expert Tip
									</Box>
									<Box component={"p"}>
										Whichever professional or academic field you come from, you
										were bound to have had cooperative human interactions. You
										can highlight college interests, clubs and similar
										activities if you are a fresh graduate and your resume is
										looking thin. The goal is to showcase that you are friendly,
										sociable, patient and can understand and resolve problems.
									</Box>
								</Box>
								<Box component={"p"}>
									Scholarships, awards, certificates and the like are useful
									things for a young professional to underline when applying for a
									first or second position. For more seasoned customer service
									professionals, the employment history will almost always take
									precedence in length. Keeping the education segment concise,
									understandable and clean is usually a good resume strategy.
								</Box>
								<Box className={styles.copyAble}>
									<Box className={styles.copyAbleLabel}>
										RESUME SAMPLE: EDUCATION
									</Box>
									<Box className={styles.copyAbleText}>
										<Box component={"h4"}>
											Bachelor of Communications, University of Seattle,
											Seattle August 2007 - May 2011
										</Box>
										<ul className={styles.mainTemplatePoints}>
											<li>Graduated with High Honors.</li>
										</ul>
										<Box component={"h4"}>
											High School Diploma, Hartwick High School, Hartwick
											September 2003 - May 2007
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
							<Box ref={sectionRefs[6]} id="keyTakeaways">
								<Box component={"h2"}>
									Key takeaways for a customer service resume
								</Box>
								<Box className={styles.digitalNumbers}>
									<ol>
										<li>
											Customer service has grown in complexity due to
											technological shifts. Competition is higher, so having a
											great resume is much more important than before.
										</li>
										<li>
											Your summary is the best way to show some personality,
											energy and social qualities – essential for customer
											service positions.
										</li>
										<li>
											Make use of limited recruiter time in the best way: Use
											reverse chronological order for your employment history.
										</li>
										<li>
											The skills section on your resume should focus on soft
											and social skills for you, but don't neglect hard skills
											and technological understanding too. Customer service is
											a digital universe.
										</li>
										<li>
											The resume&nbsp;template or layout conveys character.
											It's your visual ambassador preceding an interview.
										</li>
									</ol>
								</Box>
								<Box component={"p"}>
									If you want the perfect tool to save time and get a great job,
									use Resume.io’s builder tool with professionally made and
									recruiter-tested resume templates . Check out our free resume
									samples for inspiration. And if you’ve been fortunate enough to
									land a job interview , check out this blog about how to ace your
									customer service job interview.
								</Box>
							</Box>
							<Box ref={sectionRefs[7]} id="administrativeField">
								<Box component={"h2"}>
									Other related resume examples from the same administrative
									field:
								</Box>
								<ul className={styles.mainTemplatePoints}>
									<li>
										{" "}
										<a href="/">Administrative Assistant&nbsp;</a>
									</li>
									<li>
										{" "}
										<a href="/">Production assistant</a>
									</li>
									<li>
										{" "}
										<a href="/">Call Center agent&nbsp;</a>
									</li>
									<li>
										{" "}
										<a href="/">Office Administrator&nbsp;</a>
									</li>
									<li>
										{" "}
										<a href="/">Personal Assistant&nbsp;</a>
									</li>
									<li>
										<a href="/">Office Assistant&nbsp;</a>
									</li>
									<li>
										<a href="/">Receptionist</a>
									</li>
									<li>
										<a href="/">Office Clerk</a>
									</li>
									<li>
										<a href="/">Office Manager</a>
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
								<Image src={CustomerServiceAside} alt="Customer Service Aside" />
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
