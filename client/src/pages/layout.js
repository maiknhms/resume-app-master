import { createTheme, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
import config from "../config.json";

import { useDispatch, useSelector } from "react-redux";
import { dispatchLogin, dispatchGetUser, fetchUser } from "../redux/actions/authAction";
import { fetchUserResume, dispatchGetAllResumes } from "../redux/actions/usersAction";

function Layout({ children }) {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.token);
	const auth = useSelector((state) => state.auth);

	useEffect(() => {
		const firstLogin = localStorage.getItem("firstLogin");
		if (firstLogin) {
			const getToken = async () => {
				const res = await axios.post(`${config.API_ENDPOINT}/user/refresh_token`, null, {
					withCredentials: true,
				});
				dispatch({ type: "SET_TOKEN", payload: res.data.access_token });
			};
			getToken();
		}
	}, [auth.isLogged, dispatch]);

	useEffect(() => {
		if (token) {
			const getUser = () => {
				dispatch(dispatchLogin(true));
				return fetchUser(token).then((res) => {
					dispatch(dispatchGetUser(res));
				});
			};
			getUser();
		}
	}, [token, dispatch]);

	const theme = createTheme({
		components: {
			// Name of the component
			MuiButton: {
				styleOverrides: {
					// Name of the slot
					root: {
						textTransform: "capitalize",
					},
				},
			},
		},
	});
	return (
		<ThemeProvider theme={theme}>
			<Header></Header>
			{children}
			<Footer></Footer>
		</ThemeProvider>
	);
}

export default Layout;
