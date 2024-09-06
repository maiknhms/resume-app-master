import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import React from "react";
import * as styles from "./InValidUrl.module.scss";

function InValidUrl() {
	return (
		<Container className={styles.notFoundSection}>
			<Box className={styles.notFoundContent}>
				<img className={styles.notFoundImage} src={"/images/404.png"} alt="404" />
				<Typography component="h2" className={styles.notFoundTitle}>
					Page Not Found
				</Typography>
				<p>
					Go back to
					<Link href="/"> Home</Link>
				</p>
			</Box>
		</Container>
	);
}

export default InValidUrl;
