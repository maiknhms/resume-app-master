import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/header";
import Profile from "../components/profile";
import NotFound from "../components/utils/NotFound/NotFound";
import Layout from "./layout";

function profile() {
	const auth = useSelector((state) => state.auth);
	const { isLogged } = auth;
	return <Layout>{isLogged ? <NotFound /> : <Profile />}</Layout>;
}

export default profile;
