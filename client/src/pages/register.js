import React from "react";
import { useSelector } from "react-redux";
import Register from "../components/auth/Register";
import Header from "../components/header";
import NotFound from "../components/utils/NotFound/NotFound";
import Layout from "./layout";

function register() {
	const auth = useSelector((state) => state.auth);
	const { isLogged } = auth;
	return (
		<Layout>
			<Header /> {isLogged ? <NotFound /> : <Register />}
		</Layout>
	);
}

export default register;
