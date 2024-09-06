import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import InValidUrl from "../components/404";
import Layout from "./layout";

function NotFound() {
	return (
		<Layout>
			<InValidUrl />
		</Layout>
	);
}

export default NotFound;
