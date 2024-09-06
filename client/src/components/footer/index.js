import { Box, Grid } from "@mui/material";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Linkdin from "../../../public/images/linkdin.svg";
import Pinterest from "../../../public/images/pinterest.svg";
import Insta from "../../../public/images/insta.svg";
import Facebook from "../../../public/images/facebook.svg";
import * as styles from "../../components/footer/footer.module.scss";

function index() {
	return (
		<>
			<Box
				sx={{
					width: "100%",
					color: "#ffffff",
					backgroundColor: "#0f141e",
				}}
			>
				<Grid className={styles.footerSection} container spacing={2} sx={{ mt: 0 }}>
					<Grid item sm={3}>
						<Box className={styles.footerContent}>
							<Box className={styles.footerLinksTitle}>Job Seekers</Box>
							<Box className={styles.footerLinksList}>
								<Link href="/resumeBuilder">
									<a className={styles.footerLinksItem}>Build a Resume</a>
								</Link>
								<Link href="/resumeTemplates">
									<a className={styles.footerLinksItem}>Samples</a>
								</Link>
								{/* <Link href="#">
                                    <a className={styles.footerLinksItem}>
                                        Cover Letter Samples
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className={styles.footerLinksItem}>
                                        Apps
                                    </a>
                                </Link> */}
							</Box>
						</Box>
					</Grid>
					<Grid item sm={3}>
						<Box className={styles.footerContent}>
							<Box className={styles.footerLinksTitle}>Resources</Box>
							<Box className={styles.footerLinksList}>
								<Link href="#">
									<a className={styles.footerLinksItem}>Career Advice</a>
								</Link>
								<Link href="#">
									<a className={styles.footerLinksItem}>Resumes</a>
								</Link>
								<Link href="#">
									<a className={styles.footerLinksItem}>Career Development</a>
								</Link>
								<Link href="#">
									<a className={styles.footerLinksItem}>Getting a Job</a>
								</Link>
								{/* <Link href="#">
                                    <a className={styles.footerLinksItem}>
                                        Cover Letters
                                    </a>
                                </Link> */}
								<Link href="#">
									<a className={styles.footerLinksItem}>Interviewing</a>
								</Link>
							</Box>
						</Box>
					</Grid>
					<Grid item sm={3}>
						<Box className={styles.footerContent}>
							<Box className={styles.footerLinksTitle}>Need Help?</Box>
							<Box className={styles.footerLinksList}>
								<Link href="/helpCenter">
									<a className={styles.footerLinksItem}>Help Center</a>
								</Link>
								<Link href="/aboutUs">
									<a className={styles.footerLinksItem}>About Us</a>
								</Link>
								<Link href="#">
									<a className={styles.footerLinksItem}>Sitemap</a>
								</Link>
							</Box>
						</Box>
					</Grid>
					<Grid item sm={3}>
						<Box>
							<Box
								sx={{
									fontWeight: "500",
									fontSize: "1.25rem",
									marginBottom: "24px",
									pl: {
										sm: "10px",
										xs: "0",
									},
								}}
								component={"p"}
							>
								Stay Connected
							</Box>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexWrap: "wrap",
								justifyContent: "flex-start",
								mt: "20px",
							}}
						>
							<Link href="#">
								<a className={styles.linkdin}>
									<Image src={Linkdin} alt="Linkdin" />
								</a>
							</Link>
							<Link href="#">
								<a className={styles.youtube}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										className="footer__social-link-icon"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M22.59 19.04c.45-.4.75-.92.87-1.5.32-1.83.5-3.68.54-5.54 0-1.86-.19-3.71-.54-5.54a2.75 2.75 0 0 0-.87-1.5 3.08 3.08 0 0 0-1.64-.74 66.5 66.5 0 0 0-17.96 0c-.61.08-1.19.34-1.64.74-.45.4-.75.92-.87 1.5A30.72 30.72 0 0 0 0 12c0 1.86.15 3.71.48 5.54.12.58.42 1.1.87 1.5.45.4 1.03.66 1.64.74a66.5 66.5 0 0 0 17.96 0 3.08 3.08 0 0 0 1.64-.74ZM16.76 12 9.58 8.08v7.84L16.76 12Z"
										></path>
									</svg>
								</a>
							</Link>

							<Link href="#">
								<a className={styles.pinterest}>
									<Image src={Pinterest} alt="Pinterest" />
								</a>
							</Link>
							<Link href="#">
								<a className={styles.instagram}>
									<Image src={Insta} alt="Instagram" />
								</a>
							</Link>

							<Link href="#">
								<a className={styles.facebook}>
									<Image src={Facebook} alt="Facebook" />
								</a>
							</Link>
						</Box>
					</Grid>
				</Grid>

				<Box
					sx={{
						textAlign: "center",
						color: "#495163",
						fontSize: "18px",
						lineHeight: "16px",
						py: "18px",
						color: "#fff",
					}}
				>
					Copyright © Resumer.com 2022
				</Box>
			</Box>
		</>
	);
}

export default index;
