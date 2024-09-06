import React from "react";
import { useSelector } from "react-redux";
import Login from "../components/auth/Login";
import Header from "../components/header";
import NotFound from "../components/utils/NotFound/NotFound";
import Layout from "./layout";

function login() {
	const auth = useSelector((state) => state.auth);
	const { isLogged } = auth;

	return (
		<Layout>
			<Header /> {isLogged ? <NotFound /> : <Login />}
		</Layout>
	);
}

export default login;
