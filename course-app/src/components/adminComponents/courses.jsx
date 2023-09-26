import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function AdminCoursePage() {
  const [courses, setCourses] = useState([]);
  const [idd, setIdd] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const handleClickOpen = (e) => {
    setIdd(e.target.id);
    setOpen(true);
  };

  const handleClose = (e) => {
    console.log(idd);
    fetch(`http://localhost:3000/course/update/${idd}`, {
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
        setOpen(false);
      });
  };
  useEffect(() => {
    fetch("http://localhost:3000/course", {
      method: "get",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((x) => {
        setCourses(x);
      });
  }, [courses]);
  if (courses.length == 0) return <div>Loading....</div>;
  return (
    <div className="courses">
      {courses.map((x) => {
        return (
          <Card className="course" sx={{ maxWidth: 345 }}>
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
            <Stack spacing={2} direction="row">
              <div>
                <Button
                  className="btn"
                  id={x._id}
                  variant="contained"
                  onClick={handleClickOpen}
                >
                  UPDATE
                </Button>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>UPDATE THE COURSE</DialogTitle>
                  <DialogContent>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="TITLE"
                      type="email"
                      fullWidth
                      variant="standard"
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="DESCRIPTION"
                      type="email"
                      fullWidth
                      variant="standard"
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="IMAGE LINK"
                      type="email"
                      fullWidth
                      variant="standard"
                      onChange={(e) => {
                        setImgUrl(e.target.val);
                      }}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>CANCEL</Button>
                    <Button id={x._id} onClick={handleClose}>
                      UPDATE
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </Stack>
          </Card>
        );
      })}
    </div>
  );
}

export default AdminCoursePage;
