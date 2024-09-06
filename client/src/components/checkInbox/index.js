import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";
import * as styles from "./checkInbox.module.scss";

function CheckInbox() {
	return (
		<Container className={styles.emailSuccess}>
			<div className={styles.loginContent}>
				<img className={styles.loginImage} src={"/images/login.svg"} alt="login" />
				<h2 className={styles.loginTitle}>Please check your inbox</h2>
				<p className={styles.loginDescription}>
					We just emailed a confirmation link to <strong>abbas.a@hashmakersol.net</strong>
					<br />
					Click the link, and you'll be signed in.
				</p>
			</div>
			<p className={styles.contactSupport}>
				Didn't receive a link?
				<Link href="#"> Contact Support</Link>
			</p>
			<p>
				Get back to <Link href="#">Home</Link>
			</p>
		</Container>
	);
}

export default CheckInbox;
