import React from "react";
import { useSelector } from "react-redux";
import ResetPassword from "../../../components/auth/ResetPassword";
import NotFound from "../../../components/utils/NotFound/NotFound";

function token() {
	const auth = useSelector((state) => state.auth);
	const { isLogged } = auth;
	return isLogged ? <NotFound /> : <ResetPassword />;
}

export default token;
