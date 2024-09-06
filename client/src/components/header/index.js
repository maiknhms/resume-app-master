import React, { useEffect, useState } from "react";
import * as styles from "./Header.module.scss";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import config from "../../config.json";
import Image from "next/image";

import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
	Avatar,
	Container,
	createTheme,
	Grid,
	ListItemIcon,
	Menu,
	MenuItem,
	Popover,
	SwipeableDrawer,
	ThemeProvider,
	Tooltip,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import GestureIcon from "@mui/icons-material/Gesture";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import avatarPic from "../../../public/images/avatar.svg";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useRouter } from "next/router";
import LoginIcon from "@mui/icons-material/Login";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const drawerWidth = 240;
const navItems = {
	navItem: [
		{
			navItemName: "Resume",
			hasPopup: true,
			template: 1,
		},
		{
			navItemName: "Resume Writing",
			hasPopup: true,
			template: 2,
		},
		{
			navItemName: "Blog",
			hasPopup: false,
			link: "#",
		},
		{
			navItemName: "FAQ",
			hasPopup: false,
			link: "/faqs",
		},
	],
};

const theme = createTheme({
	components: {
		// Name of the component
		MuiPaper: {
			styleOverrides: {
				// Name of the slot
				root: {
					width: "100%",
					boxShadow: "none",
					left: "0 !important",
					maxWidth: "unset !important",
				},
			},
		},
	},
});

function Header(props) {
	// const [navItems, setNavItems] = useState(navItemss);
	const auth = useSelector((state) => state.auth);

	const [anchorEl, setAnchorEl] = useState([]);

	const router = useRouter();
	const dispatch = useDispatch();

	const [avatarEl, setAvatarEl] = React.useState(null);
	const openAccountMenu = Boolean(avatarEl);
	const handleAvatarClick = (event) => {
		setAvatarEl(event.currentTarget);
	};
	const handleAvatarClose = () => {
		setAvatarEl(null);
	};

	const handlePopoverOpen = (event, i) => {
		let newArr = [...anchorEl];
		newArr[i] = event.currentTarget;
		setAnchorEl(newArr);
	};

	const handlePopoverClose = (i) => {
		let newArr = [...anchorEl];
		newArr[i] = null;
		setAnchorEl(newArr);
	};

	const { user, isLogged } = auth;

	const handleLogout = async () => {
		try {
			await axios.get(`${config.API_ENDPOINT}/user/logout`);
			localStorage.removeItem("firstLogin");
			router.push("/resumeTemplates");
			dispatch({
				type: "LOGOUT",
			});
			dispatch({ type: "SET_TOKEN", payload: "" });
		} catch (err) {
			router.push("/resumeTemplates");
		}
	};

	const AccountSetting = () => {
		return (
			<>
				<Tooltip title="Account settings">
					<IconButton
						onClick={handleAvatarClick}
						size="small"
						aria-controls={openAccountMenu ? "account-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={openAccountMenu ? "true" : undefined}
					>
						<Avatar sx={{ width: 32, height: 32 }}>AI</Avatar>
					</IconButton>
				</Tooltip>

				<Menu
					anchorEl={avatarEl}
					id="account-menu"
					open={openAccountMenu}
					onClose={handleAvatarClose}
					onClick={handleAvatarClose}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "right",
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					PaperProps={{
						elevation: 0,
						sx: {
							overflow: "visible",
							filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
							mt: 1.5,
							width: "auto",
							right: "45px",
							left: "unset !important",
							top: "50px !important",
							"& .MuiAvatar-root": {
								width: 32,
								height: 32,
								ml: -0.5,
								mr: 1,
							},
							"&:before": {
								content: '""',
								display: "block",
								position: "absolute",
								top: 0,
								right: 14,
								width: 10,
								height: 10,
								bgcolor: "background.paper",
								transform: "translateY(-50%) rotate(45deg)",
								zIndex: 0,
							},
						},
					}}
				>
					<MenuItem>Dashboard</MenuItem>
					<MenuItem>Account Settings</MenuItem>
					<MenuItem>FAQ</MenuItem>
					<Divider />
					<MenuItem onClick={handleLogout}>Log Out</MenuItem>
				</Menu>
			</>
		);
	};

	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<Box
			onClick={handleDrawerToggle}
			className={styles.drawer}
			sx={{
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<Box>
				<Typography variant="h6" sx={{ my: 2, textAlign: "center" }}>
					RESUMER
				</Typography>
				<Divider />
				<Box sx={{ p: 2, display: "flex", flexDirection: "column" }}>
					<Box className={styles.navItem}>
						<Link href="#">
							<a className={styles.navLink}>Resume Templates</a>
						</Link>
					</Box>
					<Box className={styles.navItem}>
						<Link href="">
							<a className={styles.navLink}>Resume Examples</a>
						</Link>
					</Box>
					<Box className={styles.navItem}>
						<Link href="">
							<a className={styles.navLink}>Resume Builder</a>
						</Link>
					</Box>
					<Box className={styles.navItem}>
						<Link href="">
							<a className={styles.navLink}>Resume Writing</a>
						</Link>
					</Box>

					{isLogged ? (
						<Box className={styles.navItem}>
							<Button component="a" href="#" variant="contained">
								Dashboard
							</Button>
						</Box>
					) : (
						<>
							<Box className={styles.navItem}>
								<Link href="/register" className={styles.navLink}>
									<Button variant="contained" sx={{ lineHeight: "normal" }}>
										Create My Resume
										<KeyboardArrowRightIcon></KeyboardArrowRightIcon>
									</Button>
								</Link>
							</Box>

							<Box className={styles.navItem}>
								<Link href="/login" className={styles.navLink}>
									<Button variant="text">Login</Button>
								</Link>
							</Box>
						</>
					)}
				</Box>
			</Box>
			<Box>
				<Box sx={{ p: 2, backgroundColor: "rgb(247, 249, 252)" }}>
					<Box className={styles.navItem}>
						<Link href="#">
							<a className={styles.navLink}>About Us</a>
						</Link>
					</Box>
					<Box className={styles.navItem}>
						<Link href="#">
							<a className={styles.navLink}>FAQ</a>
						</Link>
					</Box>
					<Box className={styles.navItem}>
						<Link href="#">
							<a className={styles.navLink}>Blog</a>
						</Link>
					</Box>
					<Box className={styles.navItem}>
						<Link href="#">
							<a className={styles.navLink}>Contact Us</a>
						</Link>
					</Box>
					<small>Copyright 2022 - RESUMER</small>
				</Box>
			</Box>
		</Box>
	);

	const container = window !== undefined ? () => window().document.body : undefined;
	const iOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ display: "flex" }} className={styles.navbar}>
				<AppBar
					component="nav"
					style={{
						background: "#fff",
						color: "#1976d2",
						boxShadow: "none",
					}}
				>
					<Toolbar
						sx={{
							justifyContent: "space-between",
							minHeight: {
								xs: "56px",
							},
						}}
					>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { md: "none" } }}
						>
							<MenuIcon />
						</IconButton>
						<Link href="/">
							<a>
								<img src="/images/logo.png" alt="logo" className={styles.logo} />
							</a>
						</Link>
						<Box sx={{ display: { xs: "none", md: "flex" } }}>
							<Box className={styles.mainMenu} sx={{ display: "flex" }}>
								{navItems.navItem.map((item, i) => (
									<Box className={styles.navItem} key={i}>
										<Button
											component="a"
											href={Boolean(item.link) ? item.link : "#"}
											className={styles.navLink}
											aria-describedby={
												Boolean(anchorEl[i])
													? `mouse-over-popover-${i}`
													: undefined
											}
											// aria-describedby={`mouse-over-popover-${i}`}
											{...(item.hasPopup && {
												onClick: (e) => handlePopoverOpen(e, i),
											})}
										>
											{item.navItemName}
											{item.hasPopup && (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="20"
													height="20"
													viewBox="0 0 20 20"
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M10.2 10.4l2.9-2.8L14.5 9l-4.3 4.2L6 9l1.4-1.4 2.8 2.8z"
													></path>
												</svg>
											)}
										</Button>
										{item.hasPopup &&
											(() => {
												switch (item.template) {
													case 1:
														return (
															<Popover
																id={
																	Boolean(anchorEl[i])
																		? `mouse-over-popover-${i}`
																		: undefined
																}
																className={styles.navbarPopover}
																open={Boolean(anchorEl[i])}
																anchorEl={anchorEl[i]}
																anchorOrigin={{
																	vertical: "bottom",
																	horizontal: "left",
																}}
																onClose={() =>
																	handlePopoverClose(i)
																}
															>
																<Grid container spacing={0}>
																	<Grid item lg={2}></Grid>
																	<Grid
																		item
																		lg={6}
																		md={8}
																		style={{
																			padding: "100px 30px",
																		}}
																	>
																		<Grid container spacing={5}>
																			<Grid item md={8}>
																				<Box
																					style={{
																						display:
																							"flex",
																						justifyContent:
																							"space-between",
																						width: "100%",
																					}}
																				>
																					<h3>
																						Resume
																						Templates
																					</h3>
																					<Link href="/resume-templates">
																						<a>
																							View all
																						</a>
																					</Link>
																				</Box>
																				<Box
																					sx={{
																						my: 4,
																					}}
																					style={{
																						width: "100%",
																					}}
																				>
																					<Grid
																						container
																						spacing={2}
																					>
																						<Grid
																							item
																							md={6}
																						>
																							<Box
																								style={{
																									width: "100%",
																								}}
																							>
																								<Link href="#">
																									<a>
																										<Box
																											style={{
																												display:
																													"flex",
																												justifyContent:
																													"space-between",
																												width: "100%",
																											}}
																										>
																											<Box
																												style={{
																													display:
																														"flex",
																													alignItems:
																														"center",
																												}}
																											>
																												<Box
																													sx={{
																														mr: 1,
																													}}
																													style={{
																														display:
																															"flex",
																														alignItems:
																															"center",
																													}}
																												>
																													<AutoAwesomeIcon></AutoAwesomeIcon>
																												</Box>
																												Simple
																											</Box>
																											<KeyboardArrowRightIcon></KeyboardArrowRightIcon>
																										</Box>
																										<Box
																											component="p"
																											sx={{
																												my: 2,
																											}}
																										>
																											Clean,
																											timeless
																											templates
																											with
																											a
																											classic
																											balanced
																											structure.
																											A
																											perfect
																											basic
																											canvas
																										</Box>
																									</a>
																								</Link>
																							</Box>
																						</Grid>
																						<Grid
																							item
																							md={6}
																						>
																							<Box
																								style={{
																									width: "100%",
																								}}
																							>
																								<Link href="#">
																									<a>
																										<Box
																											style={{
																												display:
																													"flex",
																												justifyContent:
																													"space-between",
																												width: "100%",
																											}}
																										>
																											<Box
																												style={{
																													display:
																														"flex",
																													alignItems:
																														"center",
																												}}
																											>
																												<Box
																													sx={{
																														mr: 1,
																													}}
																													style={{
																														display:
																															"flex",
																														alignItems:
																															"center",
																													}}
																												>
																													<WorkOutlineIcon></WorkOutlineIcon>
																												</Box>
																												Professional
																											</Box>
																											<KeyboardArrowRightIcon></KeyboardArrowRightIcon>
																										</Box>
																										<Box
																											component="p"
																											sx={{
																												my: 2,
																											}}
																										>
																											Job-winning
																											templates
																											to
																											showcase
																											professionalism,
																											dependability
																											and
																											expertise
																										</Box>
																									</a>
																								</Link>
																							</Box>
																						</Grid>
																						<Grid
																							item
																							md={6}
																						>
																							<Box
																								style={{
																									width: "100%",
																								}}
																							>
																								<Link href="#">
																									<a>
																										<Box
																											style={{
																												display:
																													"flex",
																												justifyContent:
																													"space-between",
																												width: "100%",
																											}}
																										>
																											<Box
																												style={{
																													display:
																														"flex",
																													alignItems:
																														"center",
																												}}
																											>
																												<Box
																													sx={{
																														mr: 1,
																													}}
																													style={{
																														display:
																															"flex",
																														alignItems:
																															"center",
																													}}
																												>
																													<GestureIcon></GestureIcon>
																												</Box>
																												Modern
																											</Box>
																											<KeyboardArrowRightIcon></KeyboardArrowRightIcon>
																										</Box>
																										<Box
																											component="p"
																											sx={{
																												my: 2,
																											}}
																										>
																											A
																											current
																											and
																											stylish
																											feel
																											for
																											forward-thinking
																											candidates
																											in
																											innovative
																											fields
																										</Box>
																									</a>
																								</Link>
																							</Box>
																						</Grid>
																						<Grid
																							item
																							md={6}
																						>
																							<Box
																								style={{
																									width: "100%",
																								}}
																							>
																								<Link href="#">
																									<a>
																										<Box
																											style={{
																												display:
																													"flex",
																												justifyContent:
																													"space-between",
																												width: "100%",
																											}}
																										>
																											<Box
																												style={{
																													display:
																														"flex",
																													alignItems:
																														"center",
																												}}
																											>
																												<Box
																													sx={{
																														mr: 1,
																													}}
																													style={{
																														display:
																															"flex",
																														alignItems:
																															"center",
																													}}
																												>
																													<EmojiObjectsIcon></EmojiObjectsIcon>
																												</Box>
																												Creative
																											</Box>
																											<KeyboardArrowRightIcon></KeyboardArrowRightIcon>
																										</Box>
																										<Box
																											component="p"
																											sx={{
																												my: 2,
																											}}
																										>
																											A
																											bold,
																											original
																											feel
																											perfect
																											for
																											artistic
																											fields
																											and
																											contemporary
																											companies
																										</Box>
																									</a>
																								</Link>
																							</Box>
																						</Grid>
																					</Grid>
																				</Box>
																			</Grid>
																			<Grid item md={4}>
																				<Box>
																					<h3>
																						Resume
																						Examples
																					</h3>
																					<Box
																						component="ul"
																						className={
																							styles.resumeExamples
																						}
																						sx={{
																							my: 2,
																						}}
																					>
																						<li
																							className={
																								styles.resumeExample
																							}
																						>
																							<Link href="/nurse">
																								<a>
																									Nurse
																								</a>
																							</Link>
																						</li>
																						<li
																							className={
																								styles.resumeExample
																							}
																						>
																							<Link href="/customerServiceRepresentative">
																								<a>
																									Customer
																									Service
																									Representative
																								</a>
																							</Link>
																						</li>
																						<li
																							className={
																								styles.resumeExample
																							}
																						>
																							<Link href="/internship">
																								<a>
																									Internship
																								</a>
																							</Link>
																						</li>
																						<li
																							className={
																								styles.resumeExample
																							}
																						>
																							<Link href="/teachers">
																								<a>
																									Teacher
																								</a>
																							</Link>
																						</li>
																						<li
																							className={
																								styles.resumeExample
																							}
																						>
																							<Link href="/accountant">
																								<a>
																									Accountant
																								</a>
																							</Link>
																						</li>
																						<li
																							className={
																								styles.resumeExample
																							}
																						>
																							<Link href="/resumeTemplates">
																								<a
																									style={{
																										display:
																											"flex",
																									}}
																								>
																									All
																									Examples
																									<KeyboardArrowRightIcon></KeyboardArrowRightIcon>
																								</a>
																							</Link>
																						</li>
																					</Box>
																				</Box>
																			</Grid>
																		</Grid>
																	</Grid>
																	<Grid
																		item
																		md={4}
																		style={{
																			padding: "100px 30px",
																			backgroundColor:
																				"#f7f9fc",
																		}}
																	>
																		<Grid container spacing={2}>
																			<Grid
																				item
																				lg={6}
																				md={12}
																			>
																				<Box>
																					<svg
																						xmlns="http://www.w3.org/2000/svg"
																						width="154"
																						height="180"
																						viewBox="0 0 154 180"
																						fill="none"
																					>
																						<g clipPath="url(#a)">
																							<path
																								d="M109.84 56.78a5.85 5.85 0 0 0-4.35-3.22c-2.1-.37-4.72.15-6.29 1.72a24.32 24.32 0 0 1-20.16-8.6 13.83 13.83 0 0 1-1.9-2.9 7.8 7.8 0 0 1-.56-1.74 1.24 1.24 0 0 0-.65-.94.79.79 0 0 0-.94.13c-5.28 5.38-7.05 13.21-5.87 20.5a607.2 607.2 0 0 1-8.16 9.64.78.78 0 0 0 .16 1.2c.65.41 1.69.24 2.43.24.83 0 1.65 0 2.48-.03 1.4 0 2.8 0 4.22.08.95 3.05 1.87 6.19 3.36 9.01a10.94 10.94 0 0 0 14.04 5.1c2.98-1.2 5.4-3.5 6.74-6.4a.86.86 0 0 0 .08-.37c1.44-3.85 3.5-7.77 7.2-9.83.16.05.33.05.49 0 1.19-.3 2.36-.66 3.5-1.08a8.24 8.24 0 0 0 2.82-1.54 6.88 6.88 0 0 0 1.35-2.15c.55-1 .93-2.09 1.13-3.21a10.7 10.7 0 0 0-1.12-5.61Z"
																								fill="#FFB59B"
																							/>
																							<path
																								d="M105.36 70.2c-.24-1.95-.52-3.92-.8-5.88-.15-.97-1.64-.56-1.5.41l.11.72-14.42 20.57c-.17 0-.33-.04-.51-.05-.99-.07-.99 1.47 0 1.54 3.46.22 6.7 1.57 9.85 2.93 2.88 1.25 5.84 2.4 8.64 3.79.47.23 1.24-.04 1.17-.66-.88-7.76-1.58-15.59-2.54-23.36Z"
																								fill="#FFB59B"
																							/>
																							<path
																								d="M87.85 88.41a21.91 21.91 0 0 0 9.55-6.87c2.48-3.2 3.38-7.2 3.5-11.2.03-1.39-2.13-1.38-2.17 0-.1 3.55-.88 7.18-3.12 10a19.56 19.56 0 0 1-8.34 5.98 1.12 1.12 0 0 0-.75 1.33 1.08 1.08 0 0 0 1.33.75v.01Z"
																								fill="#182B81"
																							/>
																							<path
																								d="M128.86 127.97c.48-2.56.96-5.13 1.23-7.69.22-2.15.51-4.67-.33-6.72-.84-2.06-2.46-3.52-3.15-5.6-1.42-4.48-4.71-7.77-8.55-10.36-4.46-3-9.71-4.55-14.75-6.27-2.32-.79-4.59-1.71-6.88-2.59a30.2 30.2 0 0 0-6.77-1.98 33.48 33.48 0 0 0-6.76-.06c-2.32.16-4.62.43-6.91.8-2.1.3-4.14.9-6.06 1.75-1.83.88-3.5 2.04-4.96 3.46-3.05 2.95-5.15 6.74-7.04 10.5-.53.98-.92 2.04-1.15 3.14-.24 1.3-.41 2.6-.52 3.91a113.7 113.7 0 0 0-.4 11.08c0 3.91.16 7.83.51 11.72.3 3.21.7 6.44 1.8 9.48a66.6 66.6 0 0 0 5.52 11.23c1.54 2.63 3.14 5.64 6.08 6.92 4.04 1.78 8.7 1.02 12.98 1.47 1.2.15 2.4.15 3.6 0 1.22-.22 2.42-.56 3.57-1.03 2.35-.9 4.6-2.1 7-2.87 2.45-.7 5.02-.82 7.52-.34 2.28.34 4.63.87 6.94.59a9.01 9.01 0 0 0 3.18-1c.95-.61 1.93-1.17 2.93-1.68 1.78-.73 3.7-.99 5.57-1.38 1.61-.32 3.29-.79 4.51-1.96a5.8 5.8 0 0 0 1.76-4 29.32 29.32 0 0 0-.45-4.38c-.26-1.8-.56-3.59-.83-5.4a17.61 17.61 0 0 1-.35-3.56c.16-2.4.7-4.82 1.16-7.18Z"
																								fill="#BCBBE3"
																							/>
																							<path
																								d="m102.38 58.38-1.94 4.21a1.11 1.11 0 0 0 0 1.09 1.07 1.07 0 0 0 .93.51c1.65-.1 3.28-.38 4.86-.85a1.08 1.08 0 1 0-.57-2.08c-.73.21-1.47.38-2.22.52l-.51.08-.2.03c.15-.02-.18 0-.21 0-.38.05-.76.08-1.14.1l.94 1.63 1.94-4.21a1.1 1.1 0 0 0-.4-1.47 1.1 1.1 0 0 0-1.47.38v.06ZM73.28 63.96c.06-.16-.14.25-.03.08a.9.9 0 0 0 .07-.14l.23-.35s.16-.21.07-.1l.1-.11.38-.42a7.04 7.04 0 0 1 1.9-1.46c.67-.4 1.47-.55 2.24-.43.86.16 1.64.58 2.25 1.2 1.03.95 2.54-.57 1.55-1.54-.9-.9-2.04-1.5-3.28-1.75a5.84 5.84 0 0 0-3.6.54 9.3 9.3 0 0 0-2.53 1.87 5.56 5.56 0 0 0-1.4 2.05 1.07 1.07 0 0 0 .71 1.44 1.08 1.08 0 0 0 1.35-.87Z"
																								fill="#182B81"
																							/>
																							<path
																								d="M78.34 58.96c-1.8.34-2.95 2.32-2.94 4.05a4 4 0 0 0 2.87 3.78c.8.27 1.67.21 2.44-.15a4.34 4.34 0 0 0 1.8-1.72 3.96 3.96 0 0 0-.04-3.64A3.7 3.7 0 0 0 78.75 59a1.11 1.11 0 0 0-1.08 1.08 1.09 1.09 0 0 0 1.08 1.08h.46-.05l.2.04.19.05s.26.1.1.03c-.16-.06.08.04.09.05l.24.14c.08.06.2.06 0 0 .05 0 .1.1.15.13.04.04.12.1.12.14l-.07-.1.08.12a4.2 4.2 0 0 1 .33.63c.06.12 0 .16-.03-.08 0 .18.14.36.18.54 0 .06 0 .23.05.27-.07-.07-.03-.26 0-.12V63.46v-.12l-.05.24c0 .04 0 .08-.04.12-.05.17-.1.06 0 0-.06.05-.11.23-.16.3l-.1.14c-.06.13.18-.18 0 0-.17.19-.22.24-.35.35 0 0-.22.18-.1.09.13-.1-.13.09-.12.08l-.18.11c-.18.13.03 0 .03 0s-.35.08-.35.1c0 .01.27 0 0 0h-.22c-.24 0 .17.05.03 0-.06 0-.13 0-.18-.04-.06-.05-.28-.13-.36-.12l.11.05-.14-.06-.13-.08-.2-.12-.06-.04.04.03c-.1-.03-.21-.19-.28-.26-.07-.07-.13-.11-.15-.17-.01-.05.14.22.04.04-.1-.17-.15-.24-.21-.37.11.23 0 0 0-.07a2.19 2.19 0 0 1-.07-.24v-.09.03a.87.87 0 0 1 0-.26v-.31c.02-.18.06-.35.13-.51 0 0 .1-.27.03-.12-.06.15.08-.16.1-.18l.08-.16c.03-.05.26-.33.08-.13l.35-.36c.05-.05.16-.09 0 0l.3-.17c.06-.05.15-.04-.03 0l.33-.1a1.08 1.08 0 0 0 .75-1.31 1.1 1.1 0 0 0-1.33-.76l-.04-.03ZM72.77 58.64c.23-.23.47-.45.73-.66.14-.11-.11.08 0 0l.16-.12.34-.21c.5-.3 1-.55 1.54-.76a6.2 6.2 0 0 1 3.86 0c1.35.38 1.92-1.7.58-2.05a8.27 8.27 0 0 0-5.01 0c-1.4.48-2.67 1.25-3.75 2.26-.99.97.52 2.5 1.55 1.54ZM73.06 79.14a9.8 9.8 0 0 0 5.07-4.19 1.08 1.08 0 0 0-1.6-1.42c-.1.1-.2.2-.27.33-.11.2-.24.4-.37.58l-.12.17a.87.87 0 0 0-.04.06c.1-.14-.04.04-.05.05a8.38 8.38 0 0 1-1.12 1.13l-.25.22c.08-.07.15-.12.03-.03l-.14.1a8.72 8.72 0 0 1-1.23.72l-.16.07c-.05 0-.2.05-.06.04.15-.02 0 0-.06 0l-.2.07a1.1 1.1 0 0 0-.75 1.33 1.09 1.09 0 0 0 1.33.75l-.01.02ZM99.99 71.32c1.88-.1 3.74-.44 5.54-1a1.08 1.08 0 1 0-.57-2.07c-.83.28-1.68.49-2.55.63l-.62.1-.19.02-.29.03c-.44.06-.88.1-1.32.13a1.08 1.08 0 0 0-1.08 1.08 1.07 1.07 0 0 0 1.08 1.08Z"
																								fill="#182B81"
																							/>
																							<path
																								d="M136.2 46.7c-.17-10.6-.48-21.19-.93-31.78-.01-.2-.1-.38-.24-.52a.9.9 0 0 0-.14-.13c-.52-.38-1.17-.26-1.8-.25h-2.97l-5.66.06a1138.66 1138.66 0 0 0-33.87 1c-15.08.69-30.14 1.67-45.2 2.94-8.38.73-16.76 1.54-25.14 2.44a.8.8 0 0 0-.77.77c-.17 1.91-.08 3.85-.1 5.77l-.06 7.25-.1 14.2-.24 28.72-.46 57.11a24927.66 24927.66 0 0 1-.2 23.88l-.03 3.93v2.11c.05.51.04 1.03-.04 1.54a.77.77 0 0 0 .4.89c.12.05.23.08.35.08 15.18 0 30.38-.36 45.53-.95 14.42-.56 28.84-1.33 43.25-2.05 8.58-.43 17.17-.83 25.75-1.2a.8.8 0 0 0 .77-.76c.76-19.11 1.39-38.22 1.75-57.35.35-19.24.46-38.47.15-57.7Zm-14.82 102.81h-.04c-.13.06-.05 0 .04-.03v.03Zm.35-9.5a348.6 348.6 0 0 1-.35 9.48h-.43l-2.26.13-4.34.25c-2.95.18-5.89.37-8.83.58-5.97.4-11.94.84-17.91 1.25a643.57 643.57 0 0 1-36.24 1.68c-6.3.08-12.58-.02-18.86-.38-.12-7.54-.43-15.08-.56-22.63-.13-7.86-.14-15.73-.09-23.58.06-8.05.19-16.1.39-24.14a2791.9 2791.9 0 0 1 1.59-47.53c0-.71.06-1.42.08-2.13 10.1-1.69 20.3-2.75 30.5-3.64a497.19 497.19 0 0 1 34.83-1.74c7.38-.14 14.76-.17 22.14-.17.24 7.6.63 15.2.78 22.8.27 13.54.51 27.1.42 40.65a638.4 638.4 0 0 1-.54 23.28c-.37 8.62-.13 17.24-.32 25.85Z"
																								fill="#F38360"
																							/>
																							<path
																								d="M31.98 33.11c0 15.58-.16 31.15-.33 46.73-.18 15.57-.39 31.11-.52 46.65-.07 8.77-.11 17.54-.13 26.31 0 1.39 2.16 1.4 2.16 0 0-15.57.16-31.15.34-46.72.17-15.57.37-31.12.51-46.68.08-8.77.12-17.54.13-26.31 0-1.4-2.16-1.4-2.16 0v.02Z"
																								fill="#182B81"
																							/>
																							<path
																								d="M33.06 33.71c11.28-1.14 22.58-2.17 33.89-3.01a808.72 808.72 0 0 1 34.88-1.9c6.56-.2 13.12-.32 19.67-.33 1.4 0 1.4-2.15 0-2.15-11.64 0-23.28.36-34.91.97a939.09 939.09 0 0 0-34.6 2.47c-6.32.55-12.63 1.15-18.93 1.8a1.1 1.1 0 0 0-1.08 1.08 1.08 1.08 0 0 0 1.08 1.07ZM147.61 41.69c.88-1.66.13-3.59-.92-4.99a9.56 9.56 0 0 0-3.94-2.98c-3.78-1.6-8.01-.9-11.79.36a33.94 33.94 0 0 0-5.6 2.42 51.59 51.59 0 0 0-5.38 3.59c-3.44 2.51-7.12 4.69-10.7 7.01a.6.6 0 0 0-.1.09c-.42-2.4-1.2-4.72-2.31-6.88-1.83-3.32-5.42-5.02-9-5.82-3.42-.78-7.2-1.09-10.64-.28-5.1 1.2-9.9 4.2-13.6 7.86a.7.7 0 0 0-.18.76.72.72 0 0 0 0 .46 19.07 19.07 0 0 0 6.11 9.35 21.11 21.11 0 0 0 9.07 4.42c2.24.57 4.53.93 6.84 1.07.7.03 1.16-.56 1.68-.96.94-.74 1.92-1.45 2.92-2.12.21-.13.42-.28.64-.4.08-.05.15-.1.24-.14l.22-.07c1.18-.33 2.5-.75 3.75-.62.77.15 1.5.46 2.12.93.7.42 1.34.95 1.86 1.58.41.55 1.48.46 1.44-.39a54.04 54.04 0 0 0-.32-3.51c.24.07.48.13.73.16 1 .12 2 .18 3 .19 1.82.1 3.61.48 5.32 1.11 3.48 1.21 6.75 2.97 10.4 3.66 1.89.35 3.8.53 5.72.56 1.95.1 3.9-.14 5.77-.7a10.2 10.2 0 0 0 3.98-2.35c1.13-1.12 2.16-2.73 1.82-4.38-.33-1.66-1.83-3.14-3.36-3.9a9.29 9.29 0 0 0-2.76-.86 32.2 32.2 0 0 0 2.62-1.07c1.5-.68 3.53-1.6 4.35-3.16Zm-38 6.52.17 2.52-.1-.66c-.1-.63-.2-1.28-.32-1.91.08.04.17.05.26.05Z"
																								fill="#182B81"
																							/>
																							<path
																								d="M110.03 47.39c.51 2.01.23 2.7.48 4.76Z"
																								fill="#5755D0"
																							/>
																							<path
																								d="m109.29 47.6.14.66.06.34v.14c0 .05 0-.11 0 0 .04.35.07.7.08 1.03.03.79.05 1.58.15 2.37a.79.79 0 0 0 .77.77c.37 0 .82-.35.77-.77-.1-.81-.11-1.62-.15-2.43-.03-.87-.15-1.73-.36-2.57a.79.79 0 0 0-.36-.48.78.78 0 0 0-1.15.59c-.01.1 0 .2.03.3l.02.05Z"
																								fill="#BCBBE3"
																							/>
																							<path
																								d="M63.21 46.16c-.7-1.57-2.25-2.05-3.85-1.92a.75.75 0 0 0-.57.29c-.29-1.29-.58-2.56-.97-3.83-.3-1.04-.71-2.04-1.21-3-.18-.38-.4-.72-.67-1.03-1.32-1.37-3.67-1.25-5.38-1-2.02.29-3.99.9-5.82 1.82a15.03 15.03 0 0 0-4.06 3.28c-.89 1-1.9 2.22-1.65 3.64.33 1.82.77 3.59 1.2 5.4.66 2.66 1.36 5.31 2.1 7.95-1.48 2.5-2.74 5.24-4.57 7.5a.79.79 0 0 0 .15 1.21l3.39 2.42 2.94 2.12 1.41 1.03c.42.3.9.6 1.34.16.33-.4.6-.85.79-1.32.46-.87.93-1.73 1.4-2.57a34.43 34.43 0 0 1 2.51-4.24l2.4-3.18A8.56 8.56 0 0 0 57 59.15c.67-.6 1.26-1.26 1.79-1.98.43-.66.8-1.36 1.08-2.1.73-1.64 1.79-3.05 2.69-4.6.8-1.35 1.32-2.78.64-4.31Z"
																								fill="#FFB59B"
																							/>
																							<path
																								d="M44.14 44.1c3.06.5 6.2.11 9.06-1.1a1.08 1.08 0 0 0 .39-1.48 1.11 1.11 0 0 0-1.48-.38l-.07.03-.23.08-.47.17a16.03 16.03 0 0 1-2.8.63c-1.26.16-2.55.16-3.82 0a1.12 1.12 0 0 0-1.33.75 1.09 1.09 0 0 0 .76 1.32l-.01-.01Z"
																								fill="#182B81"
																							/>
																							<path
																								d="M48.3 43.23c-.28.95-.45 1.94-.51 2.93a3.4 3.4 0 0 0 .85 2.8c.38.45.88.78 1.44.96.65.1 1.32.05 1.95-.15 1-.17 1.93-.6 2.7-1.24.9-.75 1.74-1.57 2.58-2.36.85-.78 1.86-1.53 2.21-2.76.66-2.39-.95-4.89-2.51-6.56-1.85-1.98-4.43-2.17-6.95-1.57-1.35.32-.78 2.4.58 2.05a6.45 6.45 0 0 1 2.88-.16c.57.13 1.1.4 1.55.79.42.39.8.83 1.14 1.3.62.86 1.26 1.88 1.28 2.96 0 .89-.52 1.34-1.14 1.88l-2.2 2.02c-.3.28-.61.56-.93.83-.14.16-.32.29-.52.38-.38.15-.78.27-1.2.33-.28.12-.57.19-.87.21-.2-.04-.38-.31-.52-.44l-.25-.3c0 .05.11.24.08.12a4.18 4.18 0 0 1-.04-1.09c.06-.8.21-1.6.45-2.36.41-1.33-1.67-1.9-2.06-.58h.01Z"
																								fill="#182B81"
																							/>
																							<path
																								d="M51.63 54.45a16.4 16.4 0 0 0 1.6-1.82c.76-.91 1.48-1.85 2.2-2.8l2.06-2.72.87-1.16.36-.46c.18-.24-.1.11 0 0l.15-.18a1.1 1.1 0 0 0-.78-1.86 1.09 1.09 0 0 0-.77.32c-1.24 1.54-2.41 3.19-3.6 4.78-.7.93-1.24 1.63-2 2.57-.49.64-1.02 1.25-1.6 1.81-1.04.95.5 2.47 1.54 1.54l-.03-.02Z"
																								fill="#182B81"
																							/>
																							<path
																								d="M90.65 91.01c-1.91-2.21-5.26-3.16-8.03-3.63a19.76 19.76 0 0 0-4.64-.29 33.7 33.7 0 0 0-4.67.86c-3.64.79-7.28 1.6-10.92 2.43a1558.54 1558.54 0 0 0-27.32 6.5c-.73.18-1.5.32-2.27.51 2.75-5.06 5.61-10.06 8.6-15 1.99-3.33 4.02-6.66 5.75-10.13 1.03-2 2.66-3.84 3.48-5.93.09-.22-.82-.76-1.03-.87a161.3 161.3 0 0 1-4.7-2.62c-2.42-1.4-4.94-2.82-7.12-4.62a.62.62 0 0 0-.7-.09c-.23.08-.45.19-.67.3-.55.37-1 1.14-1.41 1.64a167.08 167.08 0 0 0-7.37 9.61c-2.85 4-5.54 8.12-8.24 12.21-1.33 2-2.67 4-4.03 5.99-1.36 1.97-2.9 4-4.33 6.04a27.76 27.76 0 0 0-4.87 11.91c-.51 3.87.04 7.97 2.65 11.02a12.59 12.59 0 0 0 3.94 2.9c1.81.92 3.68 1.72 5.6 2.4 1.59.62 3.23 1.1 4.9 1.46 2.73.52 5.5.83 8.3.93 5.74.27 11.5-.03 17.25.12 4.11.1 8.17.44 12.25.61a60.07 60.07 0 0 0 14.9-1.24.51.51 0 0 0 .21-.56l3.06-.43a.6.6 0 0 0 .4.45.61.61 0 0 0 .58-.12c1.7-1.59 3.35-3.22 4.95-4.9a47.8 47.8 0 0 0 4.34-5.01c2.47-3.46 3.2-7.64 3.51-11.8.26-3.62.15-7.74-2.35-10.65Z"
																								fill="#BCBBE3"
																							/>
																							<path
																								d="M56.96 126.06c3.04-.1 6.08-.19 9.1-.51 3.13-.36 6.22-.94 9.31-1.54a1.09 1.09 0 0 0 .75-1.33 1.1 1.1 0 0 0-1.32-.74c-2.95.55-5.9 1.12-8.88 1.45-2.99.33-5.97.42-8.96.51-1.38.05-1.39 2.2 0 2.15ZM24.14 100.83c1.55-.67 3.02-1.3 4.61-1.87 1.6-.56 3.28-1.07 4.92-1.6 1.32-.43.75-2.51-.58-2.06-1.67.55-3.34 1.03-5 1.63-1.65.6-3.37 1.34-5.04 2.05a1.08 1.08 0 0 0-.38 1.48 1.1 1.1 0 0 0 1.47.38ZM36.93 59.11c4.3 2.15 8.48 4.5 12.56 7.06 1.18.74 2.27-1.12 1.09-1.86a143.73 143.73 0 0 0-12.56-7.06c-1.24-.61-2.33 1.24-1.09 1.86ZM32.83 62.9c4.3 3.15 8.77 6.06 13.4 8.71 1.2.71 2.28-1.15 1.08-1.85a145.48 145.48 0 0 1-13.38-8.72 1.09 1.09 0 0 0-1.48.39 1.1 1.1 0 0 0 .38 1.47ZM91.27 87.1c1.06.27 2.09.61 3.1 1.03 1.63.6 3.25 1.27 4.85 1.97 4 1.72 7.96 3.58 11.8 5.7a59.27 59.27 0 0 1 5.73 3.52 1.09 1.09 0 0 0 1.47-.39 1.09 1.09 0 0 0-.38-1.47 78.26 78.26 0 0 0-11.01-6.24c-3.7-1.8-7.48-3.48-11.33-4.95-1.19-.5-2.42-.9-3.67-1.22-1.36-.3-1.93 1.78-.57 2.05h.01ZM19.22 21.68l12.63 11.68c1.03.94 2.58-.58 1.55-1.54L20.73 20.16c-1.03-.95-2.57.57-1.54 1.54l.03-.02ZM122.27 28.16c3.87-4.15 7.64-8.43 11.84-12.26 1.03-.93-.52-2.45-1.55-1.54-4.2 3.83-7.97 8.11-11.84 12.26-.94 1.03.58 2.57 1.55 1.54ZM31.34 152.3l-12.91 12.86c-.98.98.54 2.5 1.54 1.54 4.31-4.28 8.6-8.58 12.92-12.85.98-.98-.55-2.5-1.55-1.54ZM120.96 150.92a50.09 50.09 0 0 1 5.96 5.57c1.91 1.98 3.77 4.03 5.77 5.92 1 .96 2.54-.56 1.55-1.54-4.12-3.88-7.61-8.44-12.17-11.83a1.1 1.1 0 0 0-1.48.39 1.1 1.1 0 0 0 .39 1.47l-.02.02Z"
																								fill="#182B81"
																							/>
																							<path
																								d="M129.15 128.5c-6.7-.4-14.07-.14-19.84-4.08-2.06-1.4-3.24-3.59-4.12-5.88a45.3 45.3 0 0 1-2.14-8.2 62.15 62.15 0 0 1-.9-7.72.65.65 0 0 0-.4-.41.63.63 0 0 0-.3-.03.7.7 0 0 0-.78.42.7.7 0 0 0-.04.31c-.4 3.66-.6 7.34-1.03 11-.33 2.82-.79 5.77-2.09 8.33-.72 1.58-1.78 3-3.09 4.15-2.23 1.78-5.24 2.41-8 2.87-4.21.69-8.48 1.02-12.71 1.64-.91.13-.6 1.45.2 1.51 3.31.26 6.6.6 9.9 1.1 1.66.25 3.34.5 5.01.8 1 .16 1.98.4 2.94.72a9.78 9.78 0 0 1 5.66 5.04c1.63 3.35 2.13 7.13 2.97 10.7.63 2.75 1.27 5.45 1.7 8.21.14.9 1.46.6 1.51-.2.22-3.02.45-6.03.73-9.04a39.9 39.9 0 0 1 1.15-7.26 22.6 22.6 0 0 1 1.77-4.45c.52-.98 1.03-1.99 2-2.63 2.23-1.54 5.14-2.09 7.72-2.67 4.12-.94 8.26-1.66 12.36-2.72a.78.78 0 0 0 .53-.83.77.77 0 0 0-.7-.68Z"
																								fill="#F9D78A"
																							/>
																							<path
																								d="M94.02 102.18c-2.98-.16-6.75.42-9.23-1.64-.8-.67-1.19-1.79-1.48-2.76-.36-1.23-.61-2.5-.76-3.77a40.21 40.21 0 0 1-.34-3.64.67.67 0 0 0-.72-.44.7.7 0 0 0-.79.73c-.25 3.26-.05 7.15-2.06 9.92-.81 1.12-2.2 1.54-3.5 1.8-2.11.44-4.28.59-6.41.88l-.21.02c-.9.13-.61 1.46.2 1.51 1.55.1 3.14.17 4.71.26 1.35.08 2.9 0 4.15.6 1.24.6 1.8 1.7 2.26 2.86.3.77.63 1.54.88 2.34.23.79.35 1.6.38 2.43.05.46.12.91.22 1.36 0 .1.04.14.04.17v1.61a.77.77 0 0 0 .77.77.77.77 0 0 0 .78-.77c.03-.55.03-1.1 0-1.66 0-2.34.02-4.7 1.35-6.74a7.24 7.24 0 0 1 4.2-3.1c1.9-.56 3.9-.76 5.82-1.21.82-.22.58-1.5-.26-1.53Z"
																								fill="#EDEEF6"
																							/>
																							<path
																								d="M51.47 137.83c-2.8-.15-6.34.4-8.67-1.53-.75-.64-1.11-1.69-1.4-2.6a22.46 22.46 0 0 1-.72-3.54 39.56 39.56 0 0 1-.32-3.44.63.63 0 0 0-.68-.41.66.66 0 0 0-.54.17.64.64 0 0 0-.2.52c-.24 3.08-.05 6.71-1.95 9.32-.77 1.02-2.06 1.44-3.3 1.7-1.98.4-4.02.54-6.01.8l-.2.03c-.85.12-.57 1.37.2 1.43l4.35.23c1.27.08 2.72 0 3.9.54 1.08.48 1.69 1.51 2.12 2.57.3.75.61 1.5.87 2.26.23.76.36 1.55.37 2.35.03.8.04 1.6 0 2.42v1.02a.72.72 0 0 0 .72.72.73.73 0 0 0 .73-.72v-1.02c.02-.26.05-.5.1-.76.1-.46.14-.93.16-1.4.06-1.87.21-3.56 1.27-5.17a6.78 6.78 0 0 1 3.94-2.91c1.78-.51 3.66-.7 5.46-1.14.82-.22.59-1.4-.2-1.44Z"
																								fill="#B5DAED"
																							/>
																							<path
																								d="M61.98 80.1c-1.85-.1-4.9.38-5.88-1.66-.72-1.5-.84-3.36-.93-5a.66.66 0 0 0-.45-.7.67.67 0 0 0-.3-.03.7.7 0 0 0-.8.73c-.13 1.88 0 4.25-1.2 5.83-.48.63-1.33.84-2.06.98-1.2.23-2.43.33-3.64.51h-.21c-.9.13-.61 1.47.2 1.54 1.13.07 2.25.11 3.36.19.98.06 1.99.08 2.58.94.29.47.52.97.7 1.49.24.54.4 1.12.48 1.72.06.9.05 1.77.03 2.67a.77.77 0 0 0 .77.76.77.77 0 0 0 .77-.76v-.34c0-.54.1-.9.14-1.54.06-1.17.08-2.23.73-3.26 1.3-2.08 3.74-2.05 5.91-2.56.89-.21.65-1.47-.2-1.51Z"
																								fill="#F9D78A"
																							/>
																						</g>
																						<defs>
																							<clipPath id="a">
																								<path
																									fill="#fff"
																									transform="translate(6 14)"
																									d="M0 0h142v153H0z"
																								/>
																							</clipPath>
																						</defs>
																					</svg>
																					<Box
																						component="h3"
																						sx={{
																							mb: 2,
																						}}
																					>
																						Resume
																						Builder
																					</Box>
																					<Box
																						component="p"
																						sx={{
																							mb: 2,
																						}}
																					>
																						Build
																						powerful
																						resumes in
																						only 5
																						minutes with
																						our easy to
																						use Resume
																						Builder and
																						get hired
																						faster.
																					</Box>
																					<Link href="#">
																						<a
																							style={{
																								display:
																									"flex",
																							}}
																						>
																							Get
																							Started
																							Now
																							<KeyboardArrowRightIcon></KeyboardArrowRightIcon>
																						</a>
																					</Link>
																				</Box>
																			</Grid>
																		</Grid>
																	</Grid>
																</Grid>
															</Popover>
														);
													case 2:
														return (
															<Popover
																id={
																	Boolean(anchorEl[i])
																		? `mouse-over-popover-${i}`
																		: undefined
																}
																className={styles.navbarPopover}
																open={Boolean(anchorEl[i])}
																anchorEl={anchorEl[i]}
																anchorOrigin={{
																	vertical: "bottom",
																	horizontal: "left",
																}}
																onClose={() =>
																	handlePopoverClose(i)
																}
															>
																<Grid container spacing={0}>
																	<Grid item lg={2}></Grid>
																	<Grid
																		item
																		lg={6}
																		md={8}
																		style={{
																			padding: "100px 30px",
																		}}
																	>
																		<h3>Resume Writing</h3>
																		<Grid container>
																			<Grid
																				item
																				lg={6}
																				md={12}
																			>
																				<Link href="/writeResume">
																					<a
																						style={{
																							display:
																								"flex",
																							alignItems:
																								"center",
																						}}
																					>
																						<svg
																							xmlns="http://www.w3.org/2000/svg"
																							width="128"
																							height="128"
																							viewBox="0 0 128 128"
																							fill="none"
																						>
																							<path
																								d="M6.2 116c3.2-11 9-18.2 13-23 6-7.1 13.1-13.2 21.1-17.9 3 5.2 6.3 10.1 10 14.7 3 3.7 4.5 5.6 7 7.4 6 4.1 11.2.2 14.9 0 3-1.4 7.2 1.3 10.2 0-2.9 7.2-2.2 10.1-1 11.5 1.2 1.3 3.2 1.1 5 3.1a9 9 0 0 1 2 5.3l8.8 7.1h-93l2-8.2Z"
																								fill="#F38360"
																							/>
																							<path
																								d="M45.8 23.2c-.4 3-3 8.8-9 14.5-4.3 4.2-13.2 8-20 4.6-6.4-3.1-7.8-10.5-6-16.4 3.4-11.7 17.4-15.7 24.4-17.7C46 5.2 55.2-2.1 68 5a50.7 50.7 0 0 1 22 22.7c-2.2 2.4-4.2 2.7-5 2.8-4.3.2-17.4-2-19-10-1.5 1.5-2.5 2.1-9 3.6-4 1-7 2.7-11-.9Z"
																								fill="#F1C66C"
																							/>
																							<path
																								d="M85.8 30.3c3-2.4 6.6-3.7 10.4-3.6a10.5 10.5 0 0 1 8.4 4.9c3.8 6.2 1 14.2-4.8 18.2a2.6 2.6 0 0 0-.9 3.4 2.5 2.5 0 0 0 3.4.9c6.4-4.4 10.1-11.8 8.7-19.6a15.8 15.8 0 0 0-16.3-12.8c-4.6.4-9 2.1-12.4 5.1a2.5 2.5 0 0 0 0 3.5 2.5 2.5 0 0 0 3.5 0ZM33.4 57.1c5.9-1.6 11.8-3 17.8-4.5L48 50.8c1.7 6.1 3.6 12.1 5.8 18a2.6 2.6 0 0 0 3 1.8 2.5 2.5 0 0 0 1.8-3.1c-2.2-6-4.1-12-5.8-18a2.5 2.5 0 0 0-3-1.8L32 52.3c-3.1.8-1.8 5.6 1.3 4.8ZM59.1 44.3a390.8 390.8 0 0 0 18.4-5.4 2.5 2.5 0 0 0-2.3-4.4A318.4 318.4 0 0 1 57 39.9a2.5 2.5 0 0 0 2.2 4.4Z"
																								fill="#182B81"
																							/>
																							<path
																								d="M41.7 60.9 42 62c0 .3.2.6.4.8l.7.7c.3.2.6.3 1 .3h1l.6-.3.9-.9.2-.6v-1.3l-.3-1.2c-.1-.6-.6-1.1-1.1-1.5a2 2 0 0 0-1-.3h-1l-.5.3c-.4.2-.7.5-1 1l-.2.5v1.3ZM68.4 51.6v1c0 .3 0 .6.2 1 0 .2.3.5.5.7.2.3.5.4.8.5.3.2.7.3 1 .2h.7c.4-.2.8-.4 1-.7l.5-.5c.2-.4.3-.8.3-1.3v-.9c0-.3 0-.7-.2-1l-.5-.8-.8-.5c-.3-.2-.7-.3-1-.2l-.7.1c-.4.1-.8.3-1 .6l-.5.5c-.2.4-.3.9-.3 1.3ZM113.8 77c-1.7-5.6-5.9-9.8-7.9-15.2-1-3-1.7-6-2.9-9-.9-2.4-2-5-4.1-6.7a7.3 7.3 0 0 0-8.1-1c-2.7 1.3-4.4 4-5.5 6.6a20 20 0 0 0 1 16.4c1.2 2.4 2.7 4.6 4.6 6.5l2.2 2.4a11.5 11.5 0 0 1 .6 1.1c-.2-.6 0 .2 0 .3l1.8-3C88.8 76.9 82 77.9 75.2 79c-5 .9-10 1.4-14.7 3.5-4.5 2-10 6.1-7.8 11.7 2.1 5.7 9.5 5.4 14.5 5 7.2-.8 14.5-1.5 21.7-1.9 3.2-.1 3.2-5.1 0-5-6.4.3-12.7 1-19 1.6-2.3.2-4.4.5-6.6.5h-1.9c-.4 0-1-.1-1.4-.3-.5 0-1-.2-1.4-.4l-.3-.1-.4-.3c.2.2.2.1 0 0l-.2-.2-.3-.5c.2.4 0-.3-.1-.5v.1-.7l.1-.5.2-.4.2-.3c1.4-1.5 3.1-2.7 5-3.4 3.9-1.7 8.7-2.2 13-2.9 7-1.1 14.1-2.2 21-3.8a2.6 2.6 0 0 0 1.8-3c-.7-3.4-4-5.7-6-8.3C90 65.7 88.4 61 89 57c.3-2.4 3-10 6.6-7.1 1.6 1.3 2.4 3.6 3 5.5.9 2.6 1.5 5.3 2.5 7.9 2 5.3 6.2 9.6 7.8 15 1 3.1 5.8 1.8 4.8-1.3h.1Z"
																								fill="#182B81"
																							/>
																							<path
																								d="M98.3 119.6c-3-.6-5.5-1-8.1-2.6-1.2-.6-2-1.5-2.6-2.7-.3-.7-.3-2 .2-2.3 1.9-1.5 1.4-4.7-1.3-4.7a9 9 0 0 1-3.7-1.2c-1-.6-2-1.2-2-2.3 0-1.7 1.7-3 3-3.8 1.9-1 4-1.8 6-2a2.5 2.5 0 0 0 1.8-3.2 2.6 2.6 0 0 0-3-1.7c-5.4.8-13 4.5-12.7 11 .1 5 6 8.1 10.6 8.2l-1.3-4.6c-4 3-3.4 8.6 0 11.8 1.8 1.6 3.8 2.8 6 3.6 1.9.6 3.8 1 5.8 1.3a2.6 2.6 0 0 0 3-1.7 2.5 2.5 0 0 0-1.7-3.1ZM46.5 24.9c1.5.8 3.2 1.5 4.9 1.9a17.9 17.9 0 0 0 15.5-6l-4.2-1c1.3 3.2 3.8 6 7 7.4a2.6 2.6 0 0 0 3.4-.9 2.5 2.5 0 0 0-.9-3.4c-2-.9-3.8-2.4-4.7-4.5-.7-1.5-2.8-2.7-4.2-1a13.3 13.3 0 0 1-7.2 4.3c-2.8.6-4.6.1-7.1-1.2a2.6 2.6 0 0 0-3.5 1 2.5 2.5 0 0 0 1 3.4Z"
																								fill="#182B81"
																							/>
																						</svg>
																						<Box>
																							<Box
																								component={
																									"h4"
																								}
																								style={{
																									display:
																										"flex",
																								}}
																							>
																								How
																								to
																								write
																								a
																								resume
																								<KeyboardArrowRightIcon></KeyboardArrowRightIcon>
																							</Box>
																							<Box
																								component={
																									"p"
																								}
																							>
																								A
																								complete
																								guide
																								with
																								step
																								by
																								step
																								expert
																								tips.
																								Writing
																								your
																								job-winning
																								resume
																								has
																								never
																								been
																								this
																								easy!
																							</Box>
																						</Box>
																					</a>
																				</Link>
																			</Grid>
																		</Grid>

																		<Divider
																			sx={{
																				mt: 2,
																				mb: 4,
																			}}
																		/>
																		<Grid container spacing={2}>
																			<Grid item md={4}>
																				<Link href="/writeResume#resumeFormats">
																					<a
																						onClick={() =>
																							handlePopoverClose(
																								i
																							)
																						}
																					>
																						Resume
																						formats
																					</a>
																				</Link>
																			</Grid>
																			<Grid item md={4}>
																				<Link href="/writeResume#chronologicalResume">
																					<a
																						onClick={() =>
																							handlePopoverClose(
																								i
																							)
																						}
																					>
																						Chronological
																						resume
																					</a>
																				</Link>
																			</Grid>
																			<Grid item md={4}>
																				<Link href="/writeResume#functionalResume">
																					<a
																						onClick={() =>
																							handlePopoverClose(
																								i
																							)
																						}
																					>
																						Functional
																						resume
																					</a>
																				</Link>
																			</Grid>
																			<Grid item md={4}>
																				<Link href="/writeResume#summaryObjective">
																					<a
																						onClick={() =>
																							handlePopoverClose(
																								i
																							)
																						}
																					>
																						Summary,
																						objective
																					</a>
																				</Link>
																			</Grid>
																			<Grid item md={4}>
																				<Link href="/writeResume#employmentHistory">
																					<a
																						onClick={() =>
																							handlePopoverClose(
																								i
																							)
																						}
																					>
																						Employment
																						history
																					</a>
																				</Link>
																			</Grid>
																			<Grid item md={4}>
																				<Link href="/writeResume#skills">
																					<a
																						onClick={() =>
																							handlePopoverClose(
																								i
																							)
																						}
																					>
																						Skills
																					</a>
																				</Link>
																			</Grid>
																			<Grid item md={4}>
																				<Link href="/writeResume#education">
																					<a
																						onClick={() =>
																							handlePopoverClose(
																								i
																							)
																						}
																					>
																						Education
																					</a>
																				</Link>
																			</Grid>
																			<Grid item md={4}>
																				<Link href="/writeResume#hobbies">
																					<a
																						onClick={() =>
																							handlePopoverClose(
																								i
																							)
																						}
																					>
																						Hobbies
																					</a>
																				</Link>
																			</Grid>
																			<Grid item md={4}>
																				<Link href="/writeResume#references">
																					<a
																						onClick={() =>
																							handlePopoverClose(
																								i
																							)
																						}
																					>
																						References
																					</a>
																				</Link>
																			</Grid>
																			<Grid item md={4}>
																				<Link href="/writeResume#languages">
																					<a
																						onClick={() =>
																							handlePopoverClose(
																								i
																							)
																						}
																					>
																						Languages
																					</a>
																				</Link>
																			</Grid>
																			<Grid item md={4}>
																				<Link href="/writeResume#proofreading">
																					<a
																						onClick={() =>
																							handlePopoverClose(
																								i
																							)
																						}
																					>
																						Proofreading
																					</a>
																				</Link>
																			</Grid>
																			<Grid item md={4}>
																				<Link href="/writeResume#international">
																					<a
																						onClick={() =>
																							handlePopoverClose(
																								i
																							)
																						}
																					>
																						International
																						resumes
																					</a>
																				</Link>
																			</Grid>
																			<Grid item md={4}>
																				<Box
																					sx={{
																						mt: 2,
																					}}
																				>
																					<Link href="/writeResume">
																						<a
																							style={{
																								display:
																									"flex",
																							}}
																						>
																							Read
																							full
																							guide
																							<KeyboardArrowRightIcon></KeyboardArrowRightIcon>
																						</a>
																					</Link>
																				</Box>
																			</Grid>
																		</Grid>
																	</Grid>
																	<Grid
																		item
																		md={4}
																		style={{
																			padding: "100px 30px",
																			backgroundColor:
																				"#f7f9fc",
																		}}
																	>
																		<Grid container spacing={2}>
																			<Grid
																				item
																				lg={6}
																				md={12}
																			>
																				<Box>
																					<svg
																						xmlns="http://www.w3.org/2000/svg"
																						width="225"
																						height="151"
																						viewBox="0 0 225 151"
																						fill="none"
																					>
																						<g clipPath="url(#a)">
																							<path
																								d="m219.3 15.5-.1-.4c-35 3.9-59.4 8.4-119.9 18.1-36.3 5.9-43 5.3-68 16.3 24 16.4 22.4 17.1 39.1 31.2l148.9-65.2Z"
																								fill="#EDEEF6"
																							/>
																							<path
																								d="m80.9 92 138-76.1L70.4 80.8c.2 12.5.2 16.2 1.9 31.8 9.1-5 7.6-4.7 15.7-8.5l-7.1-11.2V92Z"
																								fill="#DADEF2"
																							/>
																							<path
																								d="M79.3 89.3a.5.5 0 0 0-.3.6l.1.2L90 107.5c9 10.2 9.2 13.1 21.8 28.6l.4.2.3-.1c28-22.3 33.3-29 63-62.6 11.7-13.2 36-43.6 44.2-57.3.3-.4.5-1.6 0-1.4l-2.3.4c-23 4.7-85 37.1-85 37.1l-.3.2v.4l1 5.4a.5.5 0 0 1-.2.5L79.3 89.3Z"
																								fill="#EDEEF6"
																							/>
																							<path
																								d="M134.9 56.2c5.3-2.4 10.5-5.2 15.7-7.8 5.2-2.6 10.5-5 15.7-7.5 8.7-4.1 17.3-8.5 26-13a878 878 0 0 1 17-8c.3 0 .5.2.7.4a1 1 0 0 1-.4 1.3c-9.2 4.4-18.3 9-27.4 13.7l-13.1 6.5c-5.2 2.5-10.4 4.7-15.5 7.3-6 3-11.7 6-17.8 8.8a1 1 0 0 1-1.3-.3 1 1 0 0 1 .4-1.4Z"
																								fill="#BDBCE4"
																							/>
																							<path
																								d="M109 93.3c-.5 1.6-2.3 3-3.8 3.8-2.3 1.2-3.4.8-4.4 2.2-.6 1 1 2.9 3.7 2.9 3.6 0 5-.2 7.9-2.4.1-.2.3-.2.5-.3l.3.2c.9.7 1.6 1.9 2.7 1.8.8 0 1.4-1 1.6-1.8.8-2.3-.3-4.6-.7-7 0-.3.7-1 .5-1.1a53.2 53.2 0 0 0-7.4.5l-.8 1.2ZM151.6 78.5c1.5 2.3 4 3.5 6.5 4.9.3.2.6.4.8.8.4.8-.6 1.6-1.4 2a9.7 9.7 0 0 1-10-2.2c-.3-.2-.6-.4-.8-.2l-.2.3a3.8 3.8 0 0 1-1.8 2.4 1 1 0 0 1-.6.1c-.4 0-.6-.3-.8-.7-.4-1-.2-2.1 0-3.2l1.3-5 7 .8Z"
																								fill="#182B81"
																							/>
																							<path
																								d="M68 19.5c.4-.8 2.3-1.2 2.7.4.1-2 3.8-2 3.8 0 0 0 1.8-1 2.7.8.4.7.4 1.9-.4 2.3 1.3 0 2 1.4 1.5 2.7-.3 1.1-1.3 1.3-2.6 2-.6.2-.2-.5-.8-.6l-3.2-1c-1-.4-1.1-2-1.8-2.7-1-.9-3-1.9-2-3.9Z"
																								fill="#F38360"
																							/>
																							<path
																								d="m81.5 62.9 1.5-.1c1.1 0 2.3-.2 3.3.3 1 .4 1.9 1.4 1.6 2.4-.3 1.1-1.7 1.6-2.9 1.8a7 7 0 0 1-3 0c-1-.4-1.8-1-2-2a1.9 1.9 0 0 1 1.2-2.3l.3-.1Z"
																								fill="#FFB59B"
																							/>
																							<path
																								d="M109.8 41.9c-6.5-6.6-7.1-20.6-7.1-20.6l-1-.4c-1.5-.6-2-1.7-2.4-3.3-.3-1.1-.1-2.3.4-3.3 1-2 4.4-2.5 6.1-1.2 1.8 1.2 2.2 2.4 2 4.5l-.3 2.5s1.1 5.5 2 7.1c2 4.1 5.8 7.4 5.7 7.7 0 .3-5.4 7-5.4 7Z"
																								fill="#9D583F"
																							/>
																							<path
																								d="m123.7 39.2-5-3c-.8-.6-3-1.7-3.3-1.6-.3 0-5.2 6.4-7.3 8.9a.7.7 0 0 0-.3.6.7.7 0 0 0 .3.5c1.5 1.5 6.7 4.6 6.7 5 .5 7.2-1.3 12 .4 19 6.2-1.9 11.9-4.1 18-6.6.5-.2 2.5-1 2.5-1.6-.2-5.8-.4-5.6-.1-11.1l3 1.5c.2 0 1.4-2.2 1.5-2.4l3.8-6.8v-.4s0-.2-.2-.3c-5-4.2-10-5-18.9-1l-1.1-.7Z"
																								fill="#F1BF5F"
																							/>
																							<path
																								d="M126.6 31.5c.2-.9 0-1.8-.5-2.6-.5-1-1.5-1.8-1.3-2.8a1.6 1.6 0 0 1 1.6-1.3c.6.1 1.2.4 1.7.8 1 .7 2.3 1 3.5 1.9 2 1.6 1.6 3.3.7 5.4-.4 1-1.4 1.7-2.5 2.2-.6.3-1.3-.6-2-.7a1.9 1.9 0 0 1-1.6-1.3l.4-1.6Z"
																								fill="#182B81"
																							/>
																							<path
																								d="M125 27.2a10 10 0 0 0-3 4l-3.9 1 2.7 2s-1 3.2 1.8 4.4l.8.4v.7a2.8 2.8 0 0 0 3 2.9c1.2-.2 2-1 2.3-2.4.3-1.2.4-3.7.4-3.7s2-.8 2.2-2.2c0-1-.3-2-1.2-2.5-.9-.4-2 0-2.8.3.6-3-2.3-5-2.3-5Z"
																								fill="#9D583F"
																							/>
																							<path
																								d="M176.2 29.5c1.7-.6 4.6-1.6 6.5-1.6 2.5 0 4 1 4.7 2.7l.4.7s3.7.9 4.3 3.2c1 3.9-1.5 6-3.4 7-4.5 2-11.8 2.5-16.6 3.7-1.4.3-5 6.2-6.2 5.3-1.1-.8.7-3.5.8-5 .2-2.1-1.3-4.7-1.1-7 .1-2 1.8-3.5 3.4-4.9l4.5-3.8 2.7-.3Z"
																								fill="#182B81"
																							/>
																							<path
																								d="M173.3 14.3c0-2-1-3.4-2.4-3.7-1.5-.3-2-.4-3.3.4-1.5 1-1.6 1.6-1.7 2 0 1 .5 1.5 1.2 2a5.5 5.5 0 0 0 5.9-.3l.3-.4Z"
																								fill="#308AE8"
																							/>
																							<path
																								d="M167.2 19.5c-1.6.8-5 3-6.9 6.5-1.1 2.1-1.7 4.5-1.6 6.8 0 1.8-.2 3.5-.1 5.2.2 2.3 2.2 4 3.7 5.5.7.8.8 2 1.8 1.7a3 3 0 0 0 1.3-.9c.6-.6 1 .1 1.3-.7.3-.5-.4-4.2-.4-4.2s5.4-.8 10.1-6c.9-1 1.6-2 2.1-3.2a8.4 8.4 0 0 0-.6-7.6 6.4 6.4 0 0 0 5.2-1.8 8 8 0 0 0 2.3-5.4c0-1.7-.4-3.3-.9-5a8 8 0 0 0-2.2-3c-1.4-1.3-2.3-.2-2.9 1.6-.5 1.7.4 4-.4 5.7-.5 1.1-3 1-4 1.3-.7.2-4.5.8-6.6 2.4l-1.2 1Z"
																								fill="#308AE8"
																							/>
																							<path
																								d="M166 13c-.6 1-.8 2.2-.9 3.4 0 0-2.2 1.7-2.8 2l3.2.7c.4 1.4 1 2.3 2.2 2.6a4 4 0 0 0 3.6-1.2 4.3 4.3 0 0 0 1.2-3.3c.7 0 1.2-.4 1.5-1.2.3-.7 0-1.8-.7-2-1.6-.9-2.4.7-2.4.7-.8.3-1.7.3-2.5 0-1-.3-1.8-1-2.5-1.7ZM152.5 7.8a2.5 2.5 0 0 1-2-2.1 2.3 2.3 0 0 1 1.5-2.4 3 3 0 0 1 2.2.2l.8.6c.4.6.4 1.4.4 2.2 0 .3 0 .5-.2.8a1.5 1.5 0 0 1-1.1.8h-1.6ZM162.4 44.4a2.3 2.3 0 0 0 .8 1.7c.4.3.8.5 1.3.5.8.1 1.6 0 2.3-.5a3 3 0 0 0 1-3 3 3 0 0 0-2.1-2.1h-.3c-1.4-.2-2.6 1-2.9 2.4v1Z"
																								fill="#E28771"
																							/>
																							<path
																								d="M84.5 62.8c-1.6 0-2.7.4-4.2.7-.2-1.3-.8-3.4-1.4-5.5 2.2-1 4.6-1.7 7-1.9a15 15 0 0 1-1.4 6.7Z"
																								fill="#F38360"
																							/>
																							<path
																								d="M57.6 52.2c.2-1.6.6-3 1.2-4.5l1-2.3c.3-1.2.1-2.4 0-3.6 0-1.7 0-3.4.5-5s1.1-3.9 3.4-5c2.2-1 6.2.5 6.2.5s-.1 1.7 1.5 2.1c2.4.6 2.7-.5 3-1.4 5.8 2.3 9.6 4.5 9.5 10.4l.4 6.5c.2 1.6 1.3 4.2 1.6 5.8l.1.5c-2.4.1-4.8.8-7 1.9-.5-1.4-.8-2.8-1-4.3-.6 1-1 2.1-1.2 3.3-.4 1.4-1 3.8-1.1 3.7-1.3-1-4.4-1.4-5.8-2.2-.9-.5-1.3-1.3-2.4-1.4-10.5-.4-10.1-2.2-10-5Z"
																								fill="#F38360"
																							/>
																							<path
																								d="M70.3 21s-2.6 2.6-2.7 4c-1.2.2-2.3.6-3.5 1l2.2 1.9s.2 2.4.4 2.9C67 32 69 32 69 32v1a2.2 2.2 0 0 0 1.1 1.9c.4.2.9.4 1.4.4.8 0 1.6-.3 2.2-.8a1.3 1.3 0 0 0 .6-1.2c0-1-.4-3.2-.3-3.8 1.2-.4 2-.8 2.3-1.5.6-1.2.4-2.8-1.1-3-1.2-.3-1.7.4-1.7.4s-.2-1.7-1.8-1.7c-2 0-1.5-2.7-1.5-2.7Z"
																								fill="#FFB59B"
																							/>
																							<path
																								d="M171 11.4a3.7 3.7 0 0 0 .3-3.4c-.5-1-1.2-2-2.2-2.7-1.3-1.1-2.7-2-4.2-2.8-2-1-4-2-6.3-2.4-2.2-.3-4.6 0-6.4 1.5-.8.6-1.4 1.5-1.6 2.5-.2 1.4.6 3 1.8 3.8 1.2.8 2.7 1.2 4.2 1.4 2 .2 4 .2 6.1.3 2.9.3 5.7.7 8.5 1.3"
																								fill="#308AE8"
																							/>
																							<path
																								d="M114.8 65.7c-2.1 9-3 19.5-6.8 28.1a.8.8 0 0 0 0 .8.8.8 0 0 0 .6.4 108 108 0 0 0 16.1.6c.2-.1.3-2 .3-2.2l1.5-22.2c4.5-.3 7.5-.7 12.5-.7-.7 2.1-1.3 6.6-2 8.7a.8.8 0 0 0 1 1.2 157.3 157.3 0 0 0 14.4-.9.7.7 0 0 0 .2-.5c.7-3.1 1-6.4.8-9.6-.1-1.7-.3-3.5-1.3-4.9-1.3-1.8-3.6-2.5-5.7-3a65 65 0 0 0-11-1.6l-1.8.6c-6 2.6-18.8 5.2-18.8 5.2Z"
																								fill="#F38360"
																							/>
																							<path
																								d="M141 50.7c-.4 1.6-3.3 3.5-3.3 3.5s-1.7-.7-2.4-.7c-1.8 0-3.5 1.6-3.4 3.4.1 1.8 1.6 4.1 3.4 4.3 3.6.4 4-2.5 4-2.5s8.6-2.6 8.6-8.6c0-3.7-2-6.2-4.5-7.8-.8 1.6-2.4 3.7-3.2 5.7 0 0 1.2.5.7 2.7Z"
																								fill="#9D583F"
																							/>
																							<path
																								d="M166.9 30.9c.2 3.2.8 6.3 1.2 9.5a1 1 0 0 1-1 1 1 1 0 0 1-1-1c-.4-3.2-1-6.3-1.2-9.5 0-1.3 2-1.3 2 0ZM65.3 41l.1 2 .3 3.2v3.9l-.5 2.4c-.4 1-2 .6-1.6-.4a10.5 10.5 0 0 0 .5-3v-3l-.3-3.2v-2c0-1 1.6-1 1.5 0Z"
																								fill="#182B81"
																							/>
																							<path
																								d="M157.6 59.9c3.6 3.1 7 6.4 10.4 9.9.9.9-.5 2.3-1.4 1.4-3.3-3.5-6.8-6.8-10.4-10a1 1 0 0 1 .7-1.6c.3 0 .5 0 .7.3ZM159.6 55.6c3.4 3 6.6 6.2 10 9.3l1.8 1.6a1 1 0 0 1 0 1.4 1 1 0 0 1-1.3 0c-1.4-1.1-2.7-2.4-4-3.6l-5.7-5.2-2.2-2a1 1 0 0 1 0-1.5 1 1 0 0 1 1.4 0ZM169 58c1.8 1.8 4 3.5 5.9 5.3a1 1 0 0 1 0 1.4 1 1 0 0 1-1.4 0l-6-5.3a1 1 0 0 1 .7-1.7c.3 0 .5.1.7.3Z"
																								fill="#B6DBEE"
																							/>
																							<path
																								d="M90.2 41.4c4.3 4 8.7 7.8 13.4 11.4.4.3.3 1 0 1.4a1 1 0 0 1-1.4 0c-4.6-3.6-9-7.4-13.4-11.4-1-.9.5-2.3 1.4-1.4ZM99.1 42.5l4.4 4.2a1 1 0 0 1-.8 1.6 1 1 0 0 1-.6-.3l-4.3-4a1 1 0 0 1 1.3-1.5ZM133.5 95.4c-.2.1 0-.2 0 0l-.2.2c-.2.2 0-.1 0 0l-.2.2v.2l-.1.1-.2.5v1.7l1.1 1.4a3.6 3.6 0 0 0 1.6.6h1.1a4.8 4.8 0 0 0 .9-.4c.5-.2 1-.7 1.2-1.2a3 3 0 0 0-1-3.6c-1-.8-3-1-4 0-.9 1-2.3-.5-1.4-1.3 1.6-1.6 4.2-1.7 6-.6a5 5 0 0 1 2.4 5.5 4.8 4.8 0 0 1-4.4 3.6 5.3 5.3 0 0 1-5-2.8c-1-1.9-.6-4.6 1.2-5.8a1 1 0 0 1 1.3.3 1 1 0 0 1-.3 1.4ZM126 127.4c-3.9 3.6-8.1 7-12.4 10.2a1 1 0 0 1-1.4-1.1 165.9 165.9 0 0 0 12.5-10.5c1-.9 2.3.5 1.4 1.4Z"
																								fill="#BDBCE4"
																							/>
																							<path
																								d="M70.7 112.1a110 110 0 0 1 5.8-17.7l2-4.9a1 1 0 0 1 .7-.6 1 1 0 0 1 1 .4 583.6 583.6 0 0 0 26 37.2 290.3 290.3 0 0 0 7.9 10.2c0 .3-.1.5-.3.7a1 1 0 0 1-1.4 0 474.3 474.3 0 0 1-34-47.1l1.9-.2c-2.3 5.8-4.7 11.5-6.5 17.5a63.7 63.7 0 0 0-1.4 5.4 1 1 0 0 1-1 .3 1 1 0 0 1-.7-1.2Z"
																								fill="#182B81"
																							/>
																							<path
																								d="m33.1 49.1.3.2c.1.1-.1 0 0 0l.1.1.7.5a78 78 0 0 0 4.8 3.5l7.2 5 3 2.3a1 1 0 0 1 0 1.4 1 1 0 0 1-1.3 0l-.2-.2c-.2 0 0 .1 0 0h-.2l-.6-.6a98 98 0 0 0-4.9-3.5l-7.2-5-3-2.3a1 1 0 0 1 0-1.4 1 1 0 0 1 1.3 0ZM198.8 30.6l3.2 2.8a1 1 0 0 1 0 1.4 1 1 0 0 1-1.4 0l-3.2-2.8a1 1 0 0 1 0-1.4 1 1 0 0 1 1.4 0ZM146.9 30.4a20 20 0 0 1 3.1 2.4 1 1 0 0 1-.7 1.7 1 1 0 0 1-.6-.3l-1.4-1.1.2.1-1.6-1.1a1 1 0 0 1-.3-1.3 1 1 0 0 1 1.3-.4Z"
																								fill="#BDBCE4"
																							/>
																							<path
																								d="M177.8 5.4a2.7 2.7 0 0 0 .8 2c.5.4 1 .5 1.5.6 1 .1 1.9 0 2.7-.5a3.3 3.3 0 0 0 1.1-3.4 3.4 3.4 0 0 0-2.7-2.6c-1.6-.2-3 1.2-3.3 2.9l-.1 1Z"
																								fill="#E28771"
																							/>
																							<path
																								d="M64.9 118s1.5 17.2-9.6 19.5c-3.7.7-8.6-.1-14.6-2.5A18.9 18.9 0 0 1 28 150c-11.7 3.6-24-4-24-4 1-2.2.8-1.7 2.7-4.4 8.9 5 25.1 8.4 29-8.7-3.8-2-9.8-2.7-14.3-8.4-2.7-3.4-4.5-7.3-3.8-11.6.6-4.2 3.7-8.2 8-9.4 4.7-1.2 9.9 1.4 12.8 5.3 2.9 4 3.9 9 4.3 13.8 0 .8-.4 6.7.2 7C46 131 53 133.2 56 131.4c3.4-2 4.1-10.5 4.2-14.4 3.4.3 4.7 1 4.7 1Zm-31-5.9c-1.3-2.5-5-3.9-7.6-2.4a7 7 0 0 0-3.2 7.4c.7 3.2 3.4 5.7 6.2 7.6 2 1.4 7.8 3.7 7.8 3.7A26 26 0 0 0 34 112Z"
																								fill="#B5DAED"
																							/>
																							<path
																								d="M53.9 79.5c.5 2.4 1.4 4.5-.2 6.6-.9 1-9.1 7-10 4.4-.2-.4-.5-1.7.5-3.2l4.2-5.4c.6-.6 1.5-1 2.4-1.1 1-.2 1.6-2 1.8-1.2l1.3-.1Z"
																								fill="#182B81"
																							/>
																							<path
																								d="M63.7 51.2c-4.3.8-6.9 2.7-11 5-1 .5-3.6 2.3-4.7 4.6-2 4-1.7 12.3-2 17.7 0 .4 0 .8.2 1.2.2.5.5.9 1 1.2a6.2 6.2 0 0 0 5 .8 5.4 5.4 0 0 0 3.7-3c.6-1.4.4-3 .4-4.4 0-1.7 1.3-3.1 1.6-4.8.1-.5.6-.9.8-1.3 1.2-2 3-2.3 4.9-3.8a4.5 4.5 0 0 0 1.6-3.6c0-1.4-.5-2.7-1-4l-.5-5.6Z"
																								fill="#308AE8"
																							/>
																							<path
																								d="M67.6 65.9c-1.2 3 2 3.3-.8 6.1-.7.8-6.5 2.4-7.7 2.7-1.5.4-4.3 1.2-5.1.4-.6-.5-.5-2.3 1-3.8 1.4-1.8 4.8-4.2 6.5-5.8 1-1 2.3-2 3.8-2.4 1.4-.4 3.3 0 4 1.3L67.6 66Z"
																								fill="#182B81"
																							/>
																							<path
																								d="M61.4 38.8c6 0 11.3 12.2 12 16.8a5 5 0 0 0 1.5 2.6 3.2 3.2 0 0 1 .3 4C74 64 73.1 65.9 69.4 66a3.9 3.9 0 0 0-2.8 1.2C65.4 68.5 62 69 61 69c-1.3 0-2.5-.4-3.5-1.2-1.2-.9-1.7-1.3-1.8-2.7l.5-20.3a8 8 0 0 1 1.3-4.7c1-1.2 2.6-1.2 3.9-1.2Z"
																								fill="#308AE8"
																							/>
																							<path
																								d="M56.8 55.5 56 60c-.3 1.4-.4 2.3-.3 3.7 0 1 .4 2 1.1 2.7.7.8 1.7 1.8 2.8 2 1.2.4.7 2.3-.5 2a7.7 7.7 0 0 1-3.5-2.5c-1-1-1.6-2.2-1.8-3.6-.2-1.4 0-2.8.2-4.2l1-5.2a1 1 0 0 1 1.1-.7 1 1 0 0 1 .7 1.2Z"
																								fill="#182B81"
																							/>
																						</g>
																						<defs>
																							<clipPath id="a">
																								<path
																									fill="#fff"
																									transform="matrix(-1 0 0 1 220 0)"
																									d="M0 0h216v151H0z"
																								/>
																							</clipPath>
																						</defs>
																					</svg>
																					<Box
																						component="h3"
																						sx={{
																							mb: 2,
																						}}
																					>
																						Get Started
																						Now
																					</Box>
																					<Box
																						component="p"
																						sx={{
																							mb: 2,
																						}}
																					>
																						Make your
																						job-winning
																						resume easy
																						and fast
																						with our top
																						resume
																						builder.
																					</Box>
																					<Link href="#">
																						<a
																							style={{
																								display:
																									"flex",
																							}}
																						>
																							Create
																							my
																							resume
																							<KeyboardArrowRightIcon></KeyboardArrowRightIcon>
																						</a>
																					</Link>
																				</Box>
																			</Grid>
																		</Grid>
																	</Grid>
																</Grid>
															</Popover>
														);
												}
											})()}
									</Box>
								))}
							</Box>
							<Divider
								orientation="vertical"
								flexItem
								className={styles.navbarDivider}
							></Divider>
							<Box className={styles.navMenuRight} sx={{ display: "flex" }}>
								{isLogged ? (
									<>
										<AccountSetting></AccountSetting>
									</>
								) : (
									<>
										<Box className={styles.navItem}>
											<Link href="/login">
												<Button
													variant="outlined"
													endIcon={<LoginIcon />}
													color="secondary"
													className={styles.navLink}
												>
													Login
												</Button>
											</Link>
										</Box>

										<Box className={styles.navItem}>
											<Link href="/register">
												<Button
													variant="contained"
													endIcon={<ExitToAppIcon />}
													className={styles.navLink}
												>
													Sign Up
												</Button>
											</Link>
										</Box>
									</>
								)}
							</Box>
						</Box>
					</Toolbar>
				</AppBar>
				<Box component="nav">
					<SwipeableDrawer
						disableBackdropTransition={!iOS}
						disableDiscovery={iOS}
						container={container}
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						onOpen={handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							display: { xs: "block", md: "none" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
						}}
					>
						{drawer}
					</SwipeableDrawer>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

Header.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default Header;
