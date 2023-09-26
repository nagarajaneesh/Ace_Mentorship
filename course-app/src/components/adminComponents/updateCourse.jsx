import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState } from "react";

function UpdateCourse({ id }) {
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
      <Stack spacing={2} direction="row">
        <Button
          onClick={() => {
            fetch("http://localhost:3000/admin/course", {
              method: "put",
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
          Update
        </Button>
      </Stack>
    </Card>
  );
}

export default UpdateCourse;
