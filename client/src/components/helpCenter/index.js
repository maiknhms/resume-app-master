import { Button, Divider, Grid, TextareaAutosize, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import * as styles from "../../components/helpCenter/helpCenter.module.scss";

function index() {
	const handleOnChange = (e) => {
		console.log(e.target.files[0]);
	};
	return (
		<>
			<Box className={styles.helpCenter}>
				<Container maxWidth="md">
					<Box>
						<Box component={"h1"}>Submit a request</Box>
						<Grid
							sx={{ display: "flex", flexDirection: "column" }}
							container
							spacing={2}
						>
							<Grid item xs={12} sm={6}>
								<Box className={styles.textField}>
									<TextField
										label="Your email address"
										variant="standard"
										fullWidth
									/>
								</Box>
								<Box className={styles.textField}>
									<TextField label="Subject" variant="standard" fullWidth />
								</Box>
								<Box className={styles.textField}>
									<TextField
										id="outlined-multiline-flexible"
										label="Please enter the details of your request."
										multiline
										rows={3}
										fullWidth
										variant="standard"
									/>
									<Box component={"p"}>
										Please enter the details of your request. A member of our
										support staff will respond as soon as possible.
									</Box>
								</Box>

								<Box marginBottom={"30px"}>
									<input type="file" onChange={handleOnChange} />
								</Box>
								<Divider></Divider>
								<Box sx={{ mt: "30px", float: "right" }}>
									<Button variant="outlined">Submit</Button>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</Box>
		</>
	);
}

export default index;
