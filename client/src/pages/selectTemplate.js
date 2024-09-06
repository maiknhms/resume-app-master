import React, { useEffect } from "react";
import Layout from "./layout";
import SelectTemplate from "../components/selectTemplate";
import { useSelector } from "react-redux";
import Login from "../components/auth/Login";
import { useRouter } from "next/router";

function selectTemplate() {
	const auth = useSelector((state) => state.auth);
	const { isLogged } = auth;
	const route = useRouter();

	// useEffect(() => {
	// 	if (!isLogged) {
	// 		route.push("/login");
	// 	}
	// }, []);

	return (
		<Layout>
			<SelectTemplate></SelectTemplate>
		</Layout>
	);
}

export default selectTemplate;
