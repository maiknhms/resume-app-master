import { Accordion, AccordionSummary, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import * as styles from "./faqs.module.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Link from "next/link";

function index() {
    return (
        <>
            <Container className={styles.frequentlySection}>
                <Box
                    className={styles.frequentlyContent}
                    sx={{
                        py: "120px",
                        margin: "0 auto",
                    }}
                >
                    <Box
                        component={"h1"}
                        sx={{
                            fontSize: "42px",
                            lineHeight: "44px",
                            margin: "auto",
                            fontWeight: "700",
                            textAlign: "center",
                            pb: "80px",
                        }}
                    >
                        Frequently Asked Questions
                    </Box>
                    <div className={styles.accordianContent}>
                        <Accordion sx={{ boxShadow: "none" }}>
                            <AccordionSummary
                                className={styles.accordianSummary}
                                expandIcon={
                                    <ExpandMoreIcon
                                        className={styles.moreIcon}
                                    />
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={styles.accordianTitle}>
                                    How can I use Resume.io for free?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                className={styles.accordionDetails}
                            >
                                <Typography>
                                    Resume.io has a few different tools you can
                                    use 100% for free without entering any
                                    credit card details.
                                    <Link href="/">
                                        <a className={styles.typographyLink}>
                                            Learn more in this article.
                                        </a>
                                    </Link>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ boxShadow: "none" }}>
                            <AccordionSummary
                                className={styles.accordianSummary}
                                expandIcon={
                                    <ExpandMoreIcon
                                        className={styles.moreIcon}
                                    />
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={styles.accordianTitle}>
                                    How can I customize my resume?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                className={styles.accordionDetails}
                            >
                                <Typography>
                                    Our resume templates are designed to adapt
                                    to your content and look great across all of
                                    our designs.
                                    <Link href="/">
                                        <a className={styles.typographyLink}>
                                            Learn more in this article.
                                        </a>
                                    </Link>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ boxShadow: "none" }}>
                            <AccordionSummary
                                className={styles.accordianSummary}
                                expandIcon={
                                    <ExpandMoreIcon
                                        className={styles.moreIcon}
                                    />
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={styles.accordianTitle}>
                                    Can I download my resume to Word or PDF?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                className={styles.accordionDetails}
                            >
                                <Typography>
                                    Once your resume is ready there are a number
                                    of ways you can export your resumes or cover
                                    letters to start applying for jobs. You can
                                    download a PDF, DOCX(Word), or TXT file of
                                    your resume either directly from your
                                    Dashboard or from the Resume Editor.
                                    <Link href="/">
                                        <a className={styles.typographyLink}>
                                            Learn more in this article.
                                        </a>
                                    </Link>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ boxShadow: "none" }}>
                            <AccordionSummary
                                className={styles.accordianSummary}
                                expandIcon={
                                    <ExpandMoreIcon
                                        className={styles.moreIcon}
                                    />
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>
                                    How do I cancel, downgrade or delete my
                                    account?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                className={styles.accordionDetails}
                            >
                                <Typography>
                                    You can cancel a Resume.io subscription
                                    right from our website without even logging
                                    into the app. To do that visit our Contact
                                    Us page
                                    <Link href="/">
                                        <a className={styles.typographyLink}>
                                            Learn more in this article.
                                        </a>
                                    </Link>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Box sx={{ pt: "50px" }} className={styles.homeFaqNote}>
                            Didn't find what you're looking for? —
                            <Link href="/">
                                <a className={styles.typographyLink}>
                                    Use our FAQ
                                </a>
                            </Link>
                        </Box>
                    </div>
                </Box>
            </Container>
        </>
    );
}

export default index;
