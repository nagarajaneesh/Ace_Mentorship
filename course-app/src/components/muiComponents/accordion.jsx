import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
export default function BasicAccordion() {
  return (
    <div
      style={{
        maxWidth: "1000px", // Adjust the width as per your requirement
        margin: "0 auto",
      }}
    >
      <h3 className="faq">Frequently Asked Questions</h3>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            {" "}
            <QuestionAnswerIcon
              fontSize="small"
              style={{ marginRight: 5 }}
            />{" "}
            CAN I APPLY FOR A REFUND ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            YES indeed!! But there will be a deadline duration of 2 weeks to ask
            for it
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            {" "}
            <QuestionAnswerIcon
              fontSize="small"
              style={{ marginRight: 5 }}
            />{" "}
            ARE THESE LECTURE'S RECORDED ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes!! Every lecture is recorderd and will be available for 12 months
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            {" "}
            <QuestionAnswerIcon
              fontSize="small"
              style={{ marginRight: 5 }}
            />{" "}
            HOW MANY CLASS PER WEEK ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Two. One on saturday and one on sunday</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            {" "}
            <QuestionAnswerIcon
              fontSize="small"
              style={{ marginRight: 5 }}
            />{" "}
            WHAT IS THE TIMING FOR LIVE SESSIONS ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>7pm to 8:30pm on weekends</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            {" "}
            <QuestionAnswerIcon
              fontSize="small"
              style={{ marginRight: 5 }}
            />{" "}
            WILL WE GET DOUBT SUPPORT SESSIONS ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Yes!! In discord</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
