import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../cssFiles/loginPage.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate } from "react-router-dom";

function Addcourse() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  return (
    <Card sx={{ maxWidth: 320, height: 300, borderRadius: 5 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "20ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              id="outlined-basic"
              label="Title"
              variant="outlined"
            />
            <TextField
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              id="outlined-basic"
              label="Description"
              variant="outlined"
            />
            <TextField
              onChange={(e) => {
                setImgUrl(e.target.value);
              }}
              id="outlined-basic"
              label="IMG url"
              variant="outlined"
            />
          </Box>
        </Typography>
      </CardContent>
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
      >
        <Button
          onClick={() => {
            fetch("http://localhost:3000/admin/course", {
              method: "post",
              body: JSON.stringify({
                title,
                description,
                imgUrl,
              }),
              headers: { "content-type": "application/json" },
            })
              .then((res) => {
                return res.json();
              })
              .then((x) => {
                console.log(x);
              });
          }}
          className="btn"
          variant="contained"
        >
          Add
        </Button>
        <Button onClick={() => {
          navigate('/courses');
        }}>View</Button>
      </ButtonGroup>
    </Card>
  );
}

export default Addcourse;
