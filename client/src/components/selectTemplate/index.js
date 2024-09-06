import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import Slider from "react-slick";
import EmailIcon from "@mui/icons-material/Email";
import PrintIcon from "@mui/icons-material/Print";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import EditIcon from "@mui/icons-material/Edit";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import * as styles from "./selectTemplate.module.scss";
import Image from "next/image";
import Letter6 from "../../../public/images/letter6.jpg";
import Letter7 from "../../../public/images/letter7.png";
import Letter8 from "../../../public/images/letter8.png";
import Letter1 from "../../../public/images/letter1.png";
import Letter10 from "../../../public/images/letter10.png";
import Letter3 from "../../../public/images/letter3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ResumeTemplate1 from "../resumeTemplates/resumeTemplate1";
import ResumeTemplate2 from "../resumeTemplates/resumeTemplate2";
import Link from "next/link";
import { useSelector } from "react-redux";
import Pdf from "react-to-pdf";
import Doc from "./DocService";
import { savePDF } from "@progress/kendo-react-pdf";

const options = {
	unit: "px",
};

function index() {
	const selectedTemplateReducer = useSelector((state) => state.selectedTemplateReducer);
	const { selectedTemplate } = selectedTemplateReducer;
	const settings = {
		className: "center",
		centerMode: true,
		infinite: false,
		centerPadding: "0",
		slidesToShow: 3,
		speed: 500,
		nextArrow: <ArrowForwardIosIcon />,
		prevArrow: <ArrowBackIosIcon />,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: false,
				},
			},
		],
	};

	const ref = useRef();

	const createPdf = (ref) => {
		console.log(ref);
		console.log(ref.current);
		Doc.createPdf(ref.current);
	};

	return (
		<>
			<Box className={styles.selectTempSection}>
				<Box
					sx={{
						display: {
							sm: "flex",
							xs: "block",
						},
						textAlign: "center",
						justifyContent: {
							md: "end",
							xs: "center",
						},
						mr: {
							md: "25px",
							xs: "0",
						},
						py: {
							md: "60px",
							xs: "20px",
						},
						px: {
							md: "0",
							xs: "10px",
						},
					}}
				>
					{/* <Box>
						<Button
							className={styles.selectTempTopButtons}
							sx={{
								color: "#333",
							}}
							variant="outlined"
							startIcon={<EmailIcon />}
						>
							Email
						</Button>
					</Box>
					<Box>
						<Button
							sx={{
								mx: {
									sm: "10px",
									xs: "0",
								},
								my: {
									sm: "0",
									xs: "10px",
								},
								color: "#333",
							}}
							className={styles.selectTempTopButtons}
							variant="outlined"
							startIcon={<PrintIcon />}
						>
							Print
						</Button>
					</Box> */}
					{/* <Box>
						<Pdf targetRef={ref} filename="resume.pdf" options={options}>
							{({ toPdf }) => (
								<Button
									onClick={toPdf}
									sx={{
										bgcolor: "#06D892",
										transition: "all 0.7s ease",
										"&:hover": {
											bgcolor: "#3f856d",
										},
										color: "#ffff",
									}}
									className={styles.selectTempTopButtons}
									variant="outlined"
									startIcon={<FileDownloadIcon />}
								>
									Download
								</Button>
							)}
						</Pdf>
					</Box> */}
					<Box>
						<Button
							onClick={() => createPdf(ref)}
							sx={{
								bgcolor: "#06D892",
								transition: "all 0.7s ease",
								"&:hover": {
									bgcolor: "#3f856d",
								},
								color: "#ffff",
							}}
							className={styles.selectTempTopButtons}
							variant="outlined"
							startIcon={<FileDownloadIcon />}
						>
							Download
						</Button>
					</Box>
				</Box>
				<Box
					sx={{
						pb: {
							md: "120px",
							xs: "50px",
						},
					}}
				>
					<Box className="selectTempSlider" sx={{ width: "fit-content", margin: "auto" }}>
						{/* <Slider {...settings}>
                            <Box className="selectTempItem">
                                <h3 className="selectTempItemContent">
                                    Taj Mahal
                                </h3>
                                <Image src={Letter6} alt="Template 6" />
                            </Box>
                            <Box className="selectTempItem">
                                <h3 className="selectTempItemContent">
                                    Elegant
                                </h3>
                                <Image src={Letter7} alt="Template 7" />
                            </Box>

                            <Box className="selectTempItem">
                                <h3 className="selectTempItemContent">
                                    Pantheon
                                </h3>
                                <Image src={Letter8} alt="Template 8" />
                            </Box>
                            <Box className="selectTempItem">
                                <h3 className="selectTempItemContent">
                                    Professional
                                </h3>
                                <Image src={Letter1} alt="Template 9" />
                            </Box>
                            <Box className="selectTempItem">
                                <h3 className="selectTempItemContent">
                                    Classic
                                </h3>
                                <Image src={Letter10} alt="Template 10" />
                            </Box>
                            <Box className="selectTempItem">
                                <h3 className="selectTempItemContent">
                                    Milano
                                </h3>

                                <Image src={Letter3} alt="Template 11" />
                            </Box>
                        </Slider> */}
						<Box className={styles.resumeTemplate}>
							{selectedTemplate == 1 || selectedTemplate == undefined ? (
								<ResumeTemplate1 ref={ref} />
							) : (
								<ResumeTemplate2 ref={ref} />
							)}
						</Box>
					</Box>
					<Box
						sx={{
							display: {
								sm: "flex",
								xs: "block",
							},
							justifyContent: "center",
							py: "40px",
							textAlign: "center",
						}}
					>
						<Box>
							<Link href="/resumeBuilder">
								<Button
									className={styles.selectTempBottomButtons}
									sx={{
										color: "#333",
									}}
									variant="outlined"
									startIcon={<EditIcon />}
								>
									Edit Resume
								</Button>
							</Link>
						</Box>
						<Box>
							<Link href="/dashboard">
								<Button
									className={styles.selectTempBottomButtons}
									sx={{
										ml: {
											sm: "10px",
											xs: "0",
										},
										mt: {
											sm: "0",
											xs: "10px",
										},
										color: "#fff",
										bgcolor: "#06D892",
										transition: "all 0.7s ease",
										"&:hover": {
											bgcolor: "#3f856d",
										},
									}}
									variant="outlined"
									startIcon={<BeenhereIcon />}
								>
									Save & Continue
								</Button>
							</Link>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
}

export default index;
