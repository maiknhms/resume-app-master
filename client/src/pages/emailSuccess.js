import { Link } from "@mui/material";
import React from "react";
import Layout from "./layout";
import CheckInbox from "../components/checkInbox";

function emailSuccess() {
	return (
		<Layout>
			<CheckInbox />
		</Layout>
	);
}

export default emailSuccess;
