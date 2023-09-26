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
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import ConsecutiveSnackbars from "./muiComponents/fadeButton";
import Viewcourses from "./viewCourses";
export default function Loginpage({ setLoggedIn }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleBtnCLick = () => {
    fetch("http://localhost:3000/user/login", {
      method: "get",
      headers: {
        "content-type": "application/json",
        email: email,
        password: password,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((x) => {
        console.log(x);
        if (x[0] == "failure") {
          alert("auth failed");
        } else {
          localStorage.setItem("token", x.token);
          setLoggedIn(true);
          navigate("/viewcourses");
        }
      });
  };
  return (
    <>
      <div className="parent">
        <Card sx={{ maxWidth: 320, height: 270, borderRadius: 5 }}>
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
                  label="Email"
                  variant="outlined"
                  onChange={(e) => {
                    setEmail(e.target.value);
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
              </Box>
            </Typography>
            <FormControl className="abc">
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="USER"
                  control={<Radio />}
                  label="USER"
                  onClick={() => {
                    setUser(true);
                  }}
                />
                <FormControlLabel
                  value="ADMIN"
                  control={<Radio />}
                  label="ADMIN"
                  onClick={() => {
                    setUser(false);
                  }}
                />
              </RadioGroup>
            </FormControl>
          </CardContent>
          <ConsecutiveSnackbars
            user={user}
            handleBtnCLick={handleBtnCLick}
            email={email}
            password={password}
          />
        </Card>
      </div>
    </>
  );
}
