import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import "../cssFiles/courses.css";
import Button from "@mui/material/Button";

function Viewcourses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/course", {
      method: "get",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((x) => {
        console.log(x);
        setCourses(x);
      });
  }, []);
  if (courses.length == 0) return <div></div>;
  return (
    <div className="courses">
      {courses.map((x) => {
        return (
          <Card className="course" sx={{ maxWidth: 345 }}>
            <div className="card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={x.imgUrl}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {x.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {x.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </div>
            <Button className="buyButton" variant="contained">
              BUY NOW
            </Button>
          </Card>
        );
      })}
    </div>
  );
}

export default Viewcourses;
