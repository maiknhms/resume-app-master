import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import * as styles from "../../components/aboutUs/aboutUs.module.scss";
import FreeBuilderSection from "../../../public/images/freeBuilderRightSideImg.png";
import Image from "next/image";

function index() {
	return (
		<>
			<Box className={styles.aboutUs}>
				<Box className={styles.heroSection}>
					<Container>
						<Box className={styles.heroContent}>
							<Box component={"h1"}>
								We’re proud to have helped nearly 6 million people during their job
								search
							</Box>
							<Box component={"p"}>
								We believe that the job search is hard enough, so we want to make
								resume writing easy. In 2019, we partnered with Indeed, the world’s
								#1 job site, to redesign our resume builder using data about how
								employers really read resumes.* Our resume builder helps you choose
								the resume template and design that represents you best, so that you
								can trust your resume is working for you.
							</Box>
							<Box component={"p"}>
								We’re proud to have helped over 6 million people build professional
								resumes since 2014.
							</Box>
						</Box>
					</Container>
				</Box>
				<Box className={styles.freeResumeSection}>
					<Box className={styles.freeResumeSectionContent}>
						<Grid container spacing={2}>
							<Grid item md={7}>
								<Box component={"h2"}>Our resume builder is 100% free☨ to use</Box>
								<Box component={"p"}>
									Resume.com has no cost, no ads and no limitations. Access
									features that will help you get hired:
								</Box>
								<ul className={styles.freeSectionPoints}>
									<li>
										Build a professional resume backed by research with hundreds
										of employers.
									</li>
									<li>
										Choose from smart resume templates that highlight your best
										qualities.
									</li>
									<li>
										Print, download and share your resume instantly in flexible
										formats like PDF and .doc.
									</li>
									<li>Share your resume with Indeed to easily apply to jobs.</li>
									<li>
										Access professional resume examples formatted for specific
										jobs and industries.
									</li>
									<li>Log in to your account to update your resume online.</li>
									<li>
										Get free job search and career advice to help you build your
										resume and get the job.
									</li>
									<Box component={"p"}>
										*Source: comScore, Total Visits, March 2019 ☨Terms,
										conditions and quality standards apply.
									</Box>
								</ul>
							</Grid>
							<Grid item md={5}>
								<Box className={styles.rightSideSection}>
									<Box>
										<Image
											src={FreeBuilderSection}
											alt="Free Builder Section"
										/>
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Box>
		</>
	);
}

export default index;
