import ACTIONS from "./index";
import axios from "axios";

import config from "../../config.json";

// export const dispatchLogin = () => {
// 	return {
// 		type: ACTIONS.LOGIN,
// 	};
// };

export const dispatchLogin = (payload) => {
	return {
		type: ACTIONS.LOGIN,
		payload: payload,
	};
};

export const fetchUser = async (token) => {
	const res = await axios.get(`${config.API_ENDPOINT}/user/info`, {
		headers: { Authorization: token },
		withCredentials: true,
	});
	return res;
};

export const dispatchGetUser = (res) => {
	return {
		type: ACTIONS.GET_USER,
		payload: {
			user: res.data,
			isAdmin: res.data.role === 1 ? true : false,
		},
	};
};
