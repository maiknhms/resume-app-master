import React from "react";
import { Box, Button, Grid, Grow, Paper } from "@mui/material";
import { Container, Stack } from "@mui/system";
import * as styles from "./resumesTemplate.module.scss";
import Image from "next/image";
import Link from "next/link";
import template1 from "../../../public/images/resumeBuilder.png";
import template2 from "../../../public/images/designIt.png";
import template3 from "../../../public/images/resumeDesign.png";
import template4 from "../../../public/images/template-4.png";
import resumeTemplates from "../../templates/resumes.json";
import { useDispatch } from "react-redux";

function index() {
	const [checked, setChecked] = React.useState(true);
	const dispatch = useDispatch();

	return (
		<>
			<Container sx={{ py: "100px" }}>
				<Box>
					<Box component={"h1"}>Resume Templates</Box>
				</Box>

				<Grid sx={{ marginTop: "20px" }} container spacing={2}>
					{resumeTemplates.map((resumeTemplate, index) => (
						<Grid item md={3} sm={4} xs={12} key={index}>
							<Grow
								in={checked}
								style={{ transformOrigin: "0 0 0" }}
								{...(checked ? { timeout: 1000 } : {})}
							>
								<Box
									sx={{
										position: "relative",
										border: "1px solid #646C75",
										cursor: "pointer",

										"&:hover .innButton": {
											opacity: "1",
											transition: "0.3s ease-in",
										},
										"&:hover .boxOverlay": {
											opacity: "1",
											transition: "0.3s ease-in",
										},
									}}
								>
									<Box
										component="img"
										src={resumeTemplate.path}
										alt="template1"
										sx={{
											width: "100%",
											height: "auto",
										}}
									/>
									<Box
										className="boxOverlay"
										sx={{
											position: "absolute",
											width: "100%",
											height: "100%",
											top: "0",
											left: "0",
											right: "0",
											bottom: "0",
											backgroundColor: "rgba(0,0,0,20%)",
											opacity: "0",
											transition: "opacity 0.3s ease-out",
										}}
									></Box>

									<Box
										className={"innButton"}
										sx={{
											position: "absolute",
											bottom: "0",
											left: "50%",
											bottom: "40%",
											transform: "translate(-50%, -50%)",
											opacity: {
												md: "0",
												xs: "1",
											},
											transition: "opacity 0.3s ease-out",
											minWidth: "175px",
										}}
									>
										<Link href="/resumeBuilder">
											<a
												onClick={() => {
													dispatch({
														type: "selectedTemplateChange",
														payload: resumeTemplate.id,
													});
												}}
											>
												<Button
													sx={{
														backgroundColor: "#646C75",
														color: "#fff",
														border: "none",
													}}
													variant="contained"
												>
													Create My Resume
												</Button>
											</a>
										</Link>
									</Box>
								</Box>
							</Grow>
						</Grid>
					))}
					{/* <Grid item md={3} sm={4} xs={12}>
						<Grow
							in={checked}
							style={{ transformOrigin: "0 0 0" }}
							{...(checked ? { timeout: 1000 } : {})}
						>
							<Box
								sx={{
									position: "relative",
									border: "1px solid #646C75",
									cursor: "pointer",

									"&:hover .innButton": {
										opacity: "1",
										transition: "0.3s ease-in",
									},
									"&:hover .boxOverlay": {
										opacity: "1",
										transition: "0.3s ease-in",
									},
								}}
							>
								<Image src={template1} alt="template1" />
								<Box
									className="boxOverlay"
									sx={{
										position: "absolute",
										width: "100%",
										height: "100%",
										top: "0",
										left: "0",
										right: "0",
										bottom: "0",
										backgroundColor: "rgba(0,0,0,20%)",
										opacity: "0",
										transition: "opacity 0.3s ease-out",
									}}
								></Box>

								<Box
									className={"innButton"}
									sx={{
										position: "absolute",
										bottom: "0",
										left: "50%",
										bottom: "40%",
										transform: "translate(-50%, -50%)",
										opacity: {
											md: "0",
											xs: "1",
										},
										transition: "opacity 0.3s ease-out",
										minWidth: "175px",
									}}
								>
									<Link href="/resumeBuilder">
										<a>
											<Button
												sx={{
													backgroundColor: "#646C75",
													color: "#fff",
													border: "none",
												}}
												variant="contained"
											>
												Create My Resume
											</Button>
										</a>
									</Link>
								</Box>
							</Box>
						</Grow>
					</Grid>

					<Grid item md={3} sm={4} xs={12}>
						<Grow
							in={checked}
							style={{ transformOrigin: "0 0 0" }}
							{...(checked ? { timeout: 1500 } : {})}
						>
							<Box
								sx={{
									position: "relative",
									border: "1px solid #646C75",
									cursor: "pointer",
									"&:hover .innButton": {
										opacity: "1",
										transition: "0.3s ease-in",
									},
									"&:hover .boxOverlay": {
										opacity: "1",
										transition: "0.3s ease-in",
									},
								}}
							>
								<Image src={template2} alt="template2" />
								<Box
									className="boxOverlay"
									sx={{
										position: "absolute",
										width: "100%",
										height: "100%",
										top: "0",
										left: "0",
										right: "0",
										bottom: "0",
										backgroundColor: "rgba(0,0,0,20%)",
										opacity: "0",
										transition: "opacity 0.3s ease-out",
									}}
								></Box>

								<Box
									className={"innButton"}
									sx={{
										position: "absolute",
										bottom: "0",
										left: "50%",
										bottom: "40%",
										transform: "translate(-50%, -50%)",
										opacity: {
											md: "0",
											xs: "1",
										},
										transition: "opacity 0.3s ease-out",
										minWidth: "175px",
									}}
								>
									<Link href="/resumeBuilder">
										<a>
											<Button
												sx={{
													backgroundColor: "#646C75",
													color: "#fff",
													border: "none",
													"& :hover": {
														backgroundColor: "#646C75 ",
														color: "#fff",
													},
												}}
												variant="contained"
											>
												Create My Resume
											</Button>
										</a>
									</Link>
								</Box>
							</Box>
						</Grow>
					</Grid>
					<Grid item md={3} sm={4} xs={12}>
						<Grow
							in={checked}
							style={{ transformOrigin: "0 0 0" }}
							{...(checked ? { timeout: 2000 } : {})}
						>
							<Box
								sx={{
									position: "relative",
									border: "1px solid #646C75",
									cursor: "pointer",
									"&:hover .innButton": {
										opacity: "1",
										transition: "0.3s ease-in",
									},
									"&:hover .boxOverlay": {
										opacity: "1",
										transition: "0.3s ease-in",
									},
								}}
							>
								<Image src={template3} alt="template3" />
								<Box
									className="boxOverlay"
									sx={{
										position: "absolute",
										width: "100%",
										height: "100%",
										top: "0",
										left: "0",
										right: "0",
										bottom: "0",
										backgroundColor: "rgba(0,0,0,20%)",
										opacity: "0",
										transition: "opacity 0.3s ease-out",
									}}
								></Box>

								<Box
									className={"innButton"}
									sx={{
										position: "absolute",
										bottom: "0",
										left: "50%",
										bottom: "40%",
										transform: "translate(-50%, -50%)",
										opacity: {
											md: "0",
											xs: "1",
										},
										transition: "opacity 0.3s ease-out",
										minWidth: "175px",
									}}
								>
									<Link href="/resumeBuilder">
										<a>
											<Button
												sx={{
													backgroundColor: "#646C75",
													color: "#fff",
													border: "none",
												}}
												variant="contained"
											>
												Create My Resume
											</Button>
										</a>
									</Link>
								</Box>
							</Box>
						</Grow>
					</Grid>
					<Grid item md={3} sm={4} xs={12}>
						<Grow
							in={checked}
							style={{ transformOrigin: "0 0 0" }}
							{...(checked ? { timeout: 2500 } : {})}
						>
							<Box
								sx={{
									position: "relative",
									border: "1px solid #646C75",
									cursor: "pointer",
									"&:hover .innButton": {
										opacity: "1",
										transition: "0.3s ease-in",
									},
									"&:hover .boxOverlay": {
										opacity: "1",
										transition: "0.3s ease-in",
									},
								}}
							>
								<Image src={template4} alt="template4" />
								<Box
									className="boxOverlay"
									sx={{
										position: "absolute",
										width: "100%",
										height: "100%",
										top: "0",
										left: "0",
										right: "0",
										bottom: "0",
										backgroundColor: "rgba(0,0,0,20%)",
										opacity: "0",
										transition: "opacity 0.3s ease-out",
									}}
								></Box>

								<Box
									className={"innButton"}
									sx={{
										position: "absolute",
										bottom: "0",
										left: "50%",
										bottom: "40%",
										transform: "translate(-50%, -50%)",
										opacity: {
											md: "0",
											xs: "1",
										},
										transition: "opacity 0.3s ease-out",
										minWidth: "175px",
									}}
								>
									<Link href="/resumeBuilder">
										<a>
											<Button
												sx={{
													backgroundColor: "#646C75",
													color: "#fff",
													border: "none",
													"& :hover": {
														backgroundColor: "#646C75 ",
														color: "#fff",
													},
												}}
												variant="contained"
											>
												Create My Resume
											</Button>
										</a>
									</Link>
								</Box>
							</Box>
						</Grow>
					</Grid> */}
				</Grid>
			</Container>
		</>
	);
}

export default index;
