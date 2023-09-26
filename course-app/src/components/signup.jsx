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

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const handleBtnCLick = () => {
    console.log(email, password);
    fetch("http://localhost:3000/user/signup", {
      method: "post",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((x) => {
        console.log(x);
        localStorage.setItem("token", x.token);
      });
  };
  return (
    <>
      <div className="parent">
        <Card sx={{ maxWidth: 320, height: 290, borderRadius: 5 }}>
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
                  id="outlined-basic"
                  label="username"
                  variant="outlined"
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="password"
                  variant="outlined"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="email"
                  variant="outlined"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Box>
            </Typography>
            <Stack spacing={2} direction="row">
              <Button
                className="btn"
                onClick={handleBtnCLick}
                variant="contained"
              >
                Sign up
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
