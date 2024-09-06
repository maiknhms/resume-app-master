import React from "react";
import { useSelector } from "react-redux";
import ForgotPassword from "../components/auth/ForgotPassword";
import Header from "../components/header";
import NotFound from "../components/utils/NotFound/NotFound";
import Layout from "./layout";

function forgotPassword() {
	const auth = useSelector((state) => state.auth);
	const { isLogged } = auth;
	return (
		<Layout>
			<Header /> {isLogged ? <NotFound /> : <ForgotPassword />}
		</Layout>
	);
}

export default forgotPassword;
