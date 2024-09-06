import ACTIONS from "./index";
import axios from "axios";

import config from "../../config.json";

export const fetchAllUsers = async (token) => {
	const res = await axios.get(`${config.API_ENDPOINT}/user/all_info`, {
		headers: { Authorization: token },
		withCredentials: true,
	});
	return res;
};

export const dispatchGetAllUsers = (res) => {
	return {
		type: ACTIONS.GET_ALL_USERS,
		payload: res.data,
	};
};

export const fetchUserResume = async (token) => {
	const res = await axios.get(`${config.API_ENDPOINT}/resume/all_info`, {
		headers: { Authorization: token },
		withCredentials: true,
	});
	return res;
};

export const dispatchGetAllResumes = (res) => {
	return {
		type: ACTIONS.GET_ALL_RESUMES,
		payload: res.data,
	};
};
