import { Box, Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import * as styles from "../allTemplates/resumeTemplate.module.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import GestureIcon from "@mui/icons-material/Gesture";
import wTemplate1 from "../../../public/images/resumeBuilder.png";
import wTemplate2 from "../../../public/images/designIt.png";
import wTemplate3 from "../../../public/images/resumeDesign.png";
import wTemplate4 from "../../../public/images/w-4.png";
import wTemplate5 from "../../../public/images/w-5.png";
import wTemplate6 from "../../../public/images/w-6.png";
import blogCvTemplate from "../../../public/images/blogTemplateExample.jpg";
import BottomBanner from "../../../public/images/bottomBanner.png";
import Actor from "../../../public/images/actor.png";
import Internship from "../../../public/images/internship.png";
import Accountant from "../../../public/images/accountant.png";
import Mechanical from "../../../public/images/mechanical.png";
import Electrical from "../../../public/images/electrical.png";
import Nurse from "../../../public/images/nurse.png";
import CV1 from "../../../public/images/cv-1.png";
import CV2 from "../../../public/images/cv-2.png";
import CV3 from "../../../public/images/cv-3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "@mui/material/Rating";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import resumeTemplates from "../../templates/resumes.json";

import { Container } from "@mui/system";
import Slider from "react-slick";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

function index() {
	const router = useRouter();
	const dispatch = useDispatch();
	const [category, setCategory] = React.useState(
		router.query.category ? router.query.category : "all"
	);

	const handleChange = (event, newValue) => {
		setCategory(newValue);
	};
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: <ArrowForwardIosIcon />,
		prevArrow: <ArrowBackIosIcon />,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<>
			<Box className={styles.winningResumeTemplates}>
				<Box
					sx={{
						maxWidth: "550px",
						margin: "0 auto 48px",
						textAlign: "center",
					}}
				>
					<Box
						sx={{
							fontWeight: "700",
							fontSize: "38px",
							lineHeight: "40px",
							marginBottom: "12px",
						}}
						component={"h1"}
					>
						Job-winning resume templates
					</Box>
					<Box component={"p"}>
						Each resume template is expertly designed and follows the exact “resume
						rules” hiring managers look for. Stand out and get hired faster with
						field-tested resume templates.
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
							<Box>
								<Button
									sx={{
										fontSize: "14px",
										fontWeight: "600",
										lineHeight: "22px",
										padding: "14px 24px",
										mt: "24px",
									}}
									variant="contained"
								>
									Create My Resume
								</Button>
							</Box>
						</a>
					</Link>
				</Box>
				<Box className={styles.filtersTypeContent}>
					<Tabs
						value={category}
						onChange={handleChange}
						aria-label="icon position tabs example"
					>
						<Tab
							className={styles.filtersTypeItem}
							icon={<ContentCopyRoundedIcon />}
							label="All Templates"
							iconPosition="start"
							value="all"
						/>
						<Tab
							className={styles.filtersTypeItem}
							icon={<EmojiObjectsIcon />}
							iconPosition="start"
							label="Creative"
							value="creative"
						/>
						<Tab
							className={styles.filtersTypeItem}
							icon={<AutoAwesomeIcon />}
							iconPosition="start"
							label="Simple"
							value="simple"
						/>
						<Tab
							className={styles.filtersTypeItem}
							icon={<WorkOutlineIcon />}
							iconPosition="start"
							label="Professional"
							value="professional"
						/>
						<Tab
							className={styles.filtersTypeItem}
							icon={<GestureIcon />}
							iconPosition="start"
							label="Modern"
							value="modern"
						/>
					</Tabs>
				</Box>
				<Box className={styles.winningTemplateSection}>
					<Grid container spacing={2}>
						{resumeTemplates.map((resumeTemplate, index) => {
							return category == "all" ? (
								<Grid item sm={6} md={4} key={index}>
									<Box className={styles.winningTemplateItem}>
										<Box>
											<Box
												component="img"
												src={resumeTemplate.path}
												alt="Resume Template"
												sx={{
													width: "100%",
													height: "auto",
												}}
											/>
										</Box>
										<Box className={styles.templatesBadges}>
											<Box
												className={styles.templatesCardBadge}
												component={"p"}
											>
												pdf
											</Box>
										</Box>
										<Link href="/resumeBuilder">
											<a
												onClick={() => {
													dispatch({
														type: "selectedTemplateChange",
														payload: resumeTemplate.id,
													});
												}}
											>
												<Box className={styles.templateCardBtn}>
													<Button
														sx={{
															fontSize: "14px",
															fontWeight: "600",
															lineHeight: "22px",
															padding: "14px 24px",
														}}
														variant="contained"
													>
														Use This Template
													</Button>
												</Box>
											</a>
										</Link>
									</Box>
									<Box>
										<Box className={styles.templateCardName}>
											{resumeTemplate.title}
										</Box>
										<Box className={styles.templateCardCaption}>
											{resumeTemplate.description}
										</Box>
									</Box>
								</Grid>
							) : (
								resumeTemplate.category == category && (
									<Grid item sm={6} md={4} key={index}>
										<Box className={styles.winningTemplateItem}>
											<Box>
												<Box
													component="img"
													src={resumeTemplate.path}
													alt="Resume Template"
													sx={{
														width: "100%",
														height: "auto",
													}}
												/>
											</Box>
											<Box className={styles.templatesBadges}>
												<Box
													className={styles.templatesCardBadge}
													component={"p"}
												>
													pdf
												</Box>
											</Box>
											<Link href="/resumeBuilder">
												<a
													onClick={() => {
														dispatch({
															type: "selectedTemplateChange",
															payload: resumeTemplate.id,
														});
													}}
												>
													<Box className={styles.templateCardBtn}>
														<Button
															sx={{
																fontSize: "14px",
																fontWeight: "600",
																lineHeight: "22px",
																padding: "14px 24px",
															}}
															variant="contained"
														>
															Use This Template
														</Button>
													</Box>
												</a>
											</Link>
										</Box>
										<Box>
											<Box className={styles.templateCardName}>
												{resumeTemplate.title}
											</Box>
											<Box className={styles.templateCardCaption}>
												{resumeTemplate.description}
											</Box>
										</Box>
									</Grid>
								)
							);
						})}
						{/* <Grid item sm={6} md={4}>
							<Box className={styles.winningTemplateItem}>
								<Box>
									<Image src={wTemplate1} alt="Resume Template" />
								</Box>
								<Box className={styles.templatesBadges}>
									<Box className={styles.templatesCardBadge} component={"p"}>
										pdf
									</Box>
								</Box>
								<Link href="/resumeBuilder">
									<a>
										<Box className={styles.templateCardBtn}>
											<Button
												sx={{
													fontSize: "14px",
													fontWeight: "600",
													lineHeight: "22px",
													padding: "14px 24px",
												}}
												variant="contained"
											>
												Use This Template
											</Button>
										</Box>
									</a>
								</Link>
							</Box>
							<Box>
								<Box className={styles.templateCardName}>Berlin</Box>
								<Box className={styles.templateCardCaption}>
									Modern resume template with bold, clean formatting.
								</Box>
							</Box>
						</Grid>
						<Grid item sm={6} md={4}>
							<Box className={styles.winningTemplateItem}>
								<Box>
									<Image src={wTemplate2} alt="Resume Template" />
								</Box>
								<Box className={styles.templatesBadges}>
									<Box className={styles.templatesCardBadge} component={"p"}>
										pdf
									</Box>
								</Box>

								<Link href="/resumeBuilder">
									<a>
										<Box className={styles.templateCardBtn}>
											<Button
												sx={{
													fontSize: "14px",
													fontWeight: "600",
													lineHeight: "22px",
													padding: "14px 24px",
												}}
												variant="contained"
											>
												Use This Template
											</Button>
										</Box>
									</a>
								</Link>
							</Box>
							<Box>
								<Box className={styles.templateCardName}>Geneva</Box>
								<Box className={styles.templateCardCaption}>
									Minimalist font styling contrasts with an electric background in
									this edgy resume template.
								</Box>
							</Box>
						</Grid>
						<Grid item sm={6} md={4}>
							<Box className={styles.winningTemplateItem}>
								<Box>
									<Image src={wTemplate3} alt="Resume Template" />
								</Box>
								<Box className={styles.templatesBadges}>
									<Box className={styles.templatesCardBadge} component={"p"}>
										pdf
									</Box>
								</Box>
								<Link href="/resumeBuilder">
									<a>
										<Box className={styles.templateCardBtn}>
											<Button
												sx={{
													fontSize: "14px",
													fontWeight: "600",
													lineHeight: "22px",
													padding: "14px 24px",
												}}
												variant="contained"
											>
												Use This Template
											</Button>
										</Box>
									</a>
								</Link>
							</Box>
							<Box>
								<Box className={styles.templateCardName}>Vancouver</Box>
								<Box className={styles.templateCardCaption}>
									Creative, light-hearted resume template with color and flair.
								</Box>
							</Box>
						</Grid>
						<Grid item sm={6} md={4}>
							<Box className={styles.winningTemplateItem}>
								<Box>
									<Image src={wTemplate4} alt="Resume Template" />
								</Box>
								<Box className={styles.templatesBadges}>
									<Box className={styles.templatesCardBadge} component={"p"}>
										pdf
									</Box>
								</Box>
								<Link href="/resumeBuilder">
									<a>
										<Box className={styles.templateCardBtn}>
											<Button
												sx={{
													fontSize: "14px",
													fontWeight: "600",
													lineHeight: "22px",
													padding: "14px 24px",
												}}
												variant="contained"
											>
												Use This Template
											</Button>
										</Box>
									</a>
								</Link>
							</Box>
							<Box>
								<Box className={styles.templateCardName}>Tokyo</Box>
								<Box className={styles.templateCardCaption}>
									Tech-inspired design, minimalist page, skill-point visuals.
								</Box>
							</Box>
						</Grid>
						<Grid item sm={6} md={4}>
							<Box className={styles.winningTemplateItem}>
								<Box>
									<Image src={wTemplate5} alt="Resume Template" />
								</Box>
								<Box className={styles.templatesBadges}>
									<Box className={styles.templatesCardBadge} component={"p"}>
										pdf
									</Box>
								</Box>
								<Link href="/resumeBuilder">
									<a>
										<Box className={styles.templateCardBtn}>
											<Button
												sx={{
													fontSize: "14px",
													fontWeight: "600",
													lineHeight: "22px",
													padding: "14px 24px",
												}}
												variant="contained"
											>
												Use This Template
											</Button>
										</Box>
									</a>
								</Link>
							</Box>
							<Box>
								<Box className={styles.templateCardName}>Milan</Box>
								<Box className={styles.templateCardCaption}>
									Streamlined professional resume template with a human touch.
								</Box>
							</Box>
						</Grid>
						<Grid item sm={6} md={4}>
							<Box className={styles.winningTemplateItem}>
								<Box>
									<Image src={wTemplate6} alt="Resume Template" />
								</Box>
								<Box className={styles.templatesBadges}>
									<Box className={styles.templatesCardBadge} component={"p"}>
										pdf
									</Box>
								</Box>
								<Link href="/resumeBuilder">
									<a>
										<Box className={styles.templateCardBtn}>
											<Button
												sx={{
													fontSize: "14px",
													fontWeight: "600",
													lineHeight: "22px",
													padding: "14px 24px",
												}}
												variant="contained"
											>
												Use This Template
											</Button>
										</Box>
									</a>
								</Link>
							</Box>
							<Box>
								<Box className={styles.templateCardName}>Lisbon</Box>
								<Box className={styles.templateCardCaption}>
									A beautiful way to showcase your expertise, this creative resume
									template stands out with artistic touches.
								</Box>
							</Box>
						</Grid> */}
					</Grid>
				</Box>
			</Box>
			<Box className={styles.blockSection}>
				<Grid container spacing={2}>
					<Grid item md={8} xs={12}>
						<Box>
							<Box component={"h2"}>Free Resume Templates</Box>
						</Box>
						<Box component={"p"}>
							And just like our resume examples and resume guides our resume templates
							are free to download. Within our free plan, you can use the builder tool
							to create a great resume from scratch using our free resume templates.
							Once logged in, you can download your resume for free as a .txt file to
							design on your own.
						</Box>
						<Box component={"p"}>
							To make things even easier, you can also download our resume templates
							as a .pdf or Word file. Our builder allows for maximum customization so
							you can add, delete and rearrange sections all based on your personal
							needs. And with our payment options you can easily download your resume
							as a .pdf.
						</Box>
						<Box component={"p"}>
							At Resume.io, we understand that the job hunt can be a stressful time.
							That’s why it’s our mission to make the process as easy as possible.
							That means the best templates for resumes, a hassle-free online builder
							tool and free online guides.
						</Box>
						<Box component={"p"}>
							When it comes to picking the perfect resume template, you might be
							overwhelmed by your options. Don’t be! There are a few simple rules that
							can help you narrow down the field to only the best templates that are a
							good fit. Then, the choice is yours. There’s no rule against showing off
							your personality and what makes you truly unique.
						</Box>
						<Box component={"p"}>
							From a bigger salary to fresh skills, a new job can open a world of
							possibilities. But in today’s increasingly competitive job market, you
							simply can’t get there without the perfect resume template. That’s why
							Resume.io is by your side, with the best resume templates to help you
							create the best resume that shows off your strongest attributes and gets
							you hired in a flash.
						</Box>
						<Box component={"p"}>
							The Top 10 tips below are meant to guide you through picking the best
							resume template to land not just any job – but a dream position that
							will open new doors to a meaningful career. Let’s go!
						</Box>
						<Box>
							<Box component={"h2"}>Top 10 tips for picking a resume template</Box>
						</Box>
						<Box className={styles.tipsPickingResume}>
							<ol>
								<li>Understand the standards of your industry</li>
								<li>Familiarize yourself with the tone of your company</li>
								<li>Decide on the self-image you want to present</li>
								<li>
									Reflect on which sections are most important for your career
								</li>
								<li>Think about where you’ll need to add the most writing</li>
								<li>
									Evaluate the presentation and attractiveness of the template
								</li>
								<li>
									Pay attention to whether icons and color are appropriate for
									your industry
								</li>
								<li>
									Check if you’ll have space for a photo or logo if it’s needed
								</li>
								<li>
									Assess the most eye-catching section and make sure it matches
									your needs
								</li>
								<li>
									Choose the resume that captures your personal style and feels
									right for you!
								</li>
							</ol>
						</Box>
						<Box component={"p"}>
							If there was one resume template that worked for everyone – well, our
							website would be much, much smaller. But the truth is, a variety of
							templates are important to help capture the uniqueness of each
							candidate. And as beautiful as each resume template might be, a hiring
							manager doesn’t want to see the same one 100 times in a row. At the end
							of the day, the choice comes down to you. It’s important to evaluate the
							level of professionalism in your industry and at the company you’re
							applying to and decide if a modern, stylish resume or a more traditional
							one would be in line with those standards.
						</Box>
						<Box component={"p"}>
							Beyond that, it’s about highlighting the experiences and abilities that
							make you unique. In some industries, a pop of color or a friendly photo
							can do the trick. In others, you’ll have to rely on your expert writing
							to sell yourself as a top candidate{" "}
						</Box>
						<Box component={"p"}>
							Let’s say you pick a template but find out the skills section just
							doesn’t have enough space for all your talents. The best part about
							using our resume creator is that you can switch between templates with
							ease. So go on,
							<b> pick a resume template</b> and test it out. Changing your mind is
							never a problem.
						</Box>
						<Box component={"h2"}>What makes the best resume template</Box>
						<Box component={"p"}>
							Most resumes contain the same basic elements: contact info, a profile
							summary and sections for experience, education, skills and achievements.
							While our builder tool makes it easy to add or delete sections based on
							your industry and needs, it’s a good idea to start with a resume
							template that offers you the best chances at customization. The best
							layouts make your information attractive and clear, with the right
							balance of text and white space. Color and icons should be used
							depending on the best practices for your industry, and whether or not to
							include a photo often depends on the country where you intend to work.
						</Box>
						<Box component={"p"}>
							Our resume templates are expertly designed so that all your information
							fits on one page (strongly recommended for most industries and
							experience levels), without looking crammed or cluttered. Our resume
							builder tool, along with our guides, will help you create the best
							layout that makes the most of each element.
						</Box>
						<Box className={styles.blogCvTemplate}>
							<Box>
								<Image src={blogCvTemplate} alt="Resume Template" />
							</Box>
						</Box>

						<Box component={"p"}>
							The job hunt is a fierce competition, and you’ll want to take on this
							challenge from all angles. That means applying to multiple positions at
							once. Tailoring your resume for each and every opening is not only
							highly suggested, it’s the reality of the 22st century hiring process.
							But that doesn’t mean it has to be time consuming. With our subscription
							service, you can edit, update and change your resume as many times as
							you’d like and download each new version as a .pdf to make the
							application process run even smoother.
						</Box>
						<Box component={"h2"}>CV Templates for every career</Box>
						<Box component={"p"}>
							As a candidate, you are a unique individual with the skills and
							experience to get the job done. So why shouldn’t your resume be just as
							interesting as you are? When it comes to convincing an employer to hire
							you, your resume is the best way to tell your story and make a strong
							first impression. That’s why we’ve curated a collection of dozens of
							expertly-designed CV templates to fit a variety of fields and career
							levels. To make choosing a template even easier, we’ve divided our
							collection into five types: professional, modern, creative, simple and
							basic. These groupings offer a great starting point to explore the CV
							templates best suited for your field. Then, if nothing catches your eye,
							try another collection to find the right style and add your personal
							flair.
						</Box>
						<Box component={"h2"}>Modern resume templates</Box>
						<Box component={"p"}>
							Modern resume templates are best for showing employers that you are a
							forward-thinking candidate who isn’t afraid to be bold and be
							themselves. These templates offer blocks of color, strong lines and
							added emphasis to your name or title.
						</Box>
						<Box component={"p"}>
							Modern resume templates are best for showing employers that you are a
							forward-thinking candidate who isn’t afraid to be bold and be
							themselves. These templates offer blocks of color, strong lines and
							added emphasis to your name or title.
						</Box>
						<Box className={styles.blogCvLink}>
							<Link href="/">
								<a>
									<strong>Show all modern templates →</strong>
								</a>
							</Link>
						</Box>
						<Box component={"h2"}>Professional resume templates</Box>
						<Box component={"p"}>
							Professional resume templates are a safe bet for almost any position or
							industry, but they are particularly great for serious roles at
							traditional companies. Applicants for jobs in the medical field,
							administration, law or finance would all benefit from our professional
							templates, which offer crisp, clean formatting and a focus on skills.
							Within our free plan, you can use Resume.io to create a perfect resume
							from scratch using our free professional templates.
						</Box>
						<Box component={"p"}>
							A Professional resume template can work in just about any position where
							you need to highlight your experience with just a touch of design and
							layout flair. Many of our professional templates also contain space for
							a professional headshot or logo which adds credibility and class to your
							resume.
						</Box>
						<Box className={styles.blogCvLink}>
							<Link href="/">
								<a>
									<strong>Show all professional templates →</strong>
								</a>
							</Link>
						</Box>

						<Box component={"h2"}>Creative resume templates</Box>
						<Box component={"p"}>
							Creative resume templates are for times when thinking out of the box is
							not only encouraged – it’s required. Candidates in creative fields are
							most likely to benefit from these templates, but they can also be used
							by a variety of professionals when the situation calls for a bold move.
						</Box>
						<Box component={"p"}>
							These templates offer a variety of colorful accents, interesting
							backgrounds and space for headshots, logos and professional titles. When
							trying to show off your artistic prowess, you don’t want a resume layout
							to hold you back. That’s why these templates are perfect for getting the
							job done – creatively. Pick one and get started creating your resume
							masterpiece.
						</Box>
						<Box className={styles.blogCvLink}>
							<Link href="/">
								<a>
									<strong>Show all creative templates →</strong>
								</a>
							</Link>
						</Box>
						<Box component={"h2"}>Simple resume templates</Box>
						<Box component={"p"}>
							Simple resume templates are multitalented. Just about any job requiring
							a straightforward basic resume with a touch of class will benefit from
							the options in this category. With a simple template, employers aren’t
							focused on bells and whistles – they’re focused on you! After all,
							you’re the star of this show.
						</Box>
						<Box component={"p"}>
							Simple templates can work well for law, education, marketing – just
							about any position that requires a clean resume where the focus is on
							your experience and skills. When in doubt, keep it simple! Try a basic
							and simple resume template right now to land the job of your dreams in
							no time.
						</Box>
						<Box className={styles.blogCvLink}>
							<Link href="/">
								<a>
									<strong>Show all simple templates →</strong>
								</a>
							</Link>
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
									Use professional field-tested resume templates that follow the
									exact ‘resume rules’ employers look for.
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
					</Grid>
					<Grid item xs={4}>
						<Box className={styles.rightSideSection}>
							<Box className={styles.rightSideMain}>
								<Box className={styles.rightSideImg}>
									<Image src={BottomBanner} alt="Resume Banner" />
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

			{/* <Box className={styles.saveTimeSection}>
				<Container>
					<Box
						sx={{
							display: {
								md: "flex",
								xs: "bloxk",
							},
							mb: "80px",
						}}
					>
						<Box component={"h1"}>Save time with resume examples</Box>
						<Box component={"p"}>
							Check out our free resume samples for inspiration. Use the expert guides
							and our resume builder to create a beautiful resume in minutes. Our new
							and advanced resume builder will guide you from start to finish.
						</Box>
					</Box>
					<Box className={`${styles.saveTimeSlider} saveSlider`}>
						<Slider {...settings}>
							<Link href="/resumeBuilder">
								<a>
									<Box className={styles.saveTimeSliderItem}>
										<Box component={"h3"}>Actor</Box>
										<Box
											sx={{
												display: "flex",
												justifyContent: "space-between",
											}}
										>
											<Rating
												className={styles.sliderRating}
												name="half-rating-read"
												defaultValue={5}
												precision={0.5}
												readOnly
											/>
											<Box className={styles.reviews}>32 reviews</Box>
										</Box>
										<Image src={Actor} alt="Resume Template" />
									</Box>
								</a>
							</Link>
							<Link href="/resumeBuilder">
								<a>
									<Box className={styles.saveTimeSliderItem}>
										<Box component={"h3"}>Internship</Box>
										<Box
											sx={{
												display: "flex",
												justifyContent: "space-between",
											}}
										>
											<Rating
												name="half-rating-read"
												defaultValue={5}
												precision={0.5}
												readOnly
											/>
											<Box className={styles.reviews}>32 reviews</Box>
										</Box>
										<Image src={Internship} alt="Resume Template" />
									</Box>
								</a>
							</Link>
							<Link href="/resumeBuilder">
								<a>
									<Box className={styles.saveTimeSliderItem}>
										<Box component={"h3"}>Accountant</Box>
										<Box
											sx={{
												display: "flex",
												justifyContent: "space-between",
											}}
										>
											<Rating
												name="half-rating-read"
												defaultValue={5}
												precision={0.5}
												readOnly
											/>
											<Box className={styles.reviews}>32 reviews</Box>
										</Box>
										<Box>
											<Image src={Accountant} alt="Resume Template" />
										</Box>
									</Box>
								</a>
							</Link>
							<Link href="/resumeBuilder">
								<a>
									<Box className={styles.saveTimeSliderItem}>
										<Box component={"h3"}>Mechanical</Box>
										<Box
											sx={{
												display: "flex",
												justifyContent: "space-between",
											}}
										>
											<Rating
												name="half-rating-read"
												defaultValue={5}
												precision={0.5}
												readOnly
											/>
											<Box className={styles.reviews}>32 reviews</Box>
										</Box>
										<Box>
											<Image src={Mechanical} alt="Resume Template" />
										</Box>
									</Box>
								</a>
							</Link>
							<Link href="/resumeBuilder">
								<a>
									<Box className={styles.saveTimeSliderItem}>
										<Box component={"h3"}>Electrical</Box>
										<Box
											sx={{
												display: "flex",
												justifyContent: "space-between",
											}}
										>
											<Rating
												name="half-rating-read"
												defaultValue={5}
												precision={0.5}
												readOnly
											/>
											<Box className={styles.reviews}>32 reviews</Box>
										</Box>
										<Box>
											<Image src={Electrical} alt="Resume Template" />
										</Box>
									</Box>
								</a>
							</Link>
							<Link href="/resumeBuilder">
								<a>
									<Box className={styles.saveTimeSliderItem}>
										<Box component={"h3"}>Nurse</Box>
										<Box
											sx={{
												display: "flex",
												justifyContent: "space-between",
											}}
										>
											<Rating
												name="half-rating-read"
												defaultValue={5}
												precision={0.5}
												readOnly
											/>
											<Box className={styles.reviews}>32 reviews</Box>
										</Box>
										<Box>
											<Image src={Nurse} alt="Resume Template" />
										</Box>
									</Box>
								</a>
							</Link>
						</Slider>
					</Box>
				</Container>
			</Box> */}
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
		</>
	);
}

export default index;
