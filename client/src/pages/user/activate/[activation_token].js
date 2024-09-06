import axios from "axios";
import React from "react";
import config from "../../../config.json";
// import ActivationEmail from "../../../components/auth/ActivationEmail";
function activation_token() {
	return <h1>Email Activation Page</h1>;
}
export default activation_token;
export async function getServerSideProps(ctx) {
	const { activation_token } = ctx.params;
	const { req, res } = ctx;
	const verify = await axios.post(`${config.API_ENDPOINT}/user/activate`, {
		activation_token,
	});
	if (verify.status === 200) {
		res.setHeader("location", "/dashboard");
		res.statusCode = 302;
	} else {
		res.setHeader("location", "/login");
		res.statusCode = 302;
	}
	res.end();
	return {
		props: {},
	};
}
