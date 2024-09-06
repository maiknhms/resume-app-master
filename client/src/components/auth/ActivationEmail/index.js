import React, { useState, useEffect } from "react";
import * as styles from "./ActivationEmail.module.scss";
import { useRouter } from "next/router";
import axios from "axios";

import config from "../../../config.json";
import Notification from "../../utils/notification/Notification";

function ActivationEmail() {
	const router = useRouter();
	const [err, setErr] = useState("");
	const [success, setSuccess] = useState("");
	const [activationToken, setActivationToken] = useState();
	const [notificationKey, setNotificationKey] = useState("");

	useEffect(() => {
		if (router.asPath !== router.route) {
			setActivationToken(router.query.activation_token);
		}
	}, [router]);

	useEffect(() => {
		setNotificationKey(Math.random());
	}, [err, success]);

	useEffect(() => {
		if (activation_Token) {
			const activationEmail = async () => {
				try {
					const res = await axios.post(`${config.API_ENDPOINT}/user/activation`, {
						activation_Token,
					});
					setSuccess(res.data.msg);
				} catch (err) {
					err.response.data.msg && setErr(err.response.data.msg);
				}
			};
			activationEmail();
		}
	}, [activation_Token]);

	return (
		<div className="active_page">
			{err && <Notification msg={err} key={notificationKey} type="error" />}
			{success && <Notification msg={success} key={notificationKey} type="success" />}
		</div>
	);
}

export default ActivationEmail;
