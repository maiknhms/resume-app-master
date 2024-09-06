import React, { useEffect } from "react";
import Layout from "./layout.js";
import ResumesList from "../components/resumesList";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function dashboard() {
	// const auth = useSelector((state) => state.auth);
	// const { isLogged } = auth;
	// const route = useRouter();

	// useEffect(() => {
	// 	if (!isLogged) {
	// 		route.push("/login");
	// 	}
	// }, []);
	return (
		<Layout>
			<ResumesList></ResumesList>
		</Layout>
	);
}

export default dashboard;
