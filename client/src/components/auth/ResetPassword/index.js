import React, { useEffect, useState } from "react";
import * as styles from "./ResetPassword.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
import { isLength, isMatch } from "../../utils/validation/Validation";

import config from "../../../config.json";
import Notification from "../../utils/notification/Notification";

const initialState = {
	password: "",
	cf_password: "",
	err: "",
	success: "",
};

function ResetPassword() {
	const [data, setData] = useState(initialState);
	const [notificationKey, setNotificationKey] = useState("");
	const { token } = useRouter();

	useEffect(() => {
		setNotificationKey(Math.random());
	}, [data]);

	const { password, cf_password, err, success } = data;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value, err: "", success: "" });
	};

	const handleResetPass = async () => {
		if (isLength(password))
			return setData({
				...data,
				err: "Password must be at least 6 characters.",
				success: "",
			});

		if (!isMatch(password, cf_password))
			return setData({ ...data, err: "Password did not match.", success: "" });

		try {
			const res = await axios.post(
				`${config.API_ENDPOINT}/user/reset`,
				{ password },
				{
					headers: { Authorization: token },
					withCredentials: true,
				}
			);

			return setData({ ...data, err: "", success: res.data.msg });
		} catch (err) {
			err.response.data.msg && setData({ ...data, err: err.response.data.msg, success: "" });
		}
	};

	return (
		<div className="fg_pass">
			<h2>Reset Your Password</h2>

			<div className="row">
				{err && <Notification msg={err} key={notificationKey} type="error" />}
				{success && <Notification msg={success} key={notificationKey} type="success" />}

				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					value={password}
					onChange={handleChangeInput}
				/>

				<label htmlFor="cf_password">Confirm Password</label>
				<input
					type="password"
					name="cf_password"
					id="cf_password"
					value={cf_password}
					onChange={handleChangeInput}
				/>

				<button onClick={handleResetPass}>Reset Password</button>
			</div>
		</div>
	);
}

export default ResetPassword;
