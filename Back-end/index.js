const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const port = 3000;
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());

const adminCredentials = {
  email: "admin4021@gmail.com",
  password: "admin@123",
};

mongoose.connect(
  "mongodb+srv://joshik21:%40Birami1@cluster0.gau2y9q.mongodb.net/admins"
);
const secretKey = "pokiri";
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  imgUrl: String,
});
const users = mongoose.model("users", userSchema);
const courses = mongoose.model("courses", courseSchema);

const authentication = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const tok = token.split(" ")[1];
    console.log(tok);
    jwt.verify(tok, secretKey, (err, verifiedJwt) => {
      if (err) {
        res.send(err.message);
      } else {
        users
          .findOne({
            email: verifiedJwt.email,
            password: verifiedJwt.password,
          })
          .then((user) => {
            if (user) {
              console.log("User found");
              next();
            } else {
              console.log("User not found");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }
};

app.use(express.json());

//skip it
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// signup route
app.post("/user/signup", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  const myToken = jwt.sign(
    {
      email,
      password,
    },
    secretKey
  );
  users
    .create({
      email: email,
      password: password,
    })
    .then(() => {
      res.status(200).json({
        token: myToken,
      });
    });
});

//login route
app.get("/user/login", (req, res) => {
  users
    .findOne({
      email: req.headers.email,
      password: req.headers.password,
    })
    .then((user) => {
      if (user) {
        console.log("User found");
        const token = jwt.sign(
          {
            email: req.headers.email,
            password: req.headers.password,
          },
          secretKey
        );
        res.json({ token: token });
      } else {
        res.json(["failure"]);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/admin/course", (req, res) => {
  const { title, description, imgUrl } = req.body;
  courses
    .create({
      title,
      description,
      imgUrl,
    })
    .then(() => {
      courses.find({}).then((x) => {
        console.log(x);
        res.status(200).json(x);
      });
    });
});

app.post("/admin/login", (req, res) => {
  const cred = req.body;
  if (
    adminCredentials.email == cred.email &&
    adminCredentials.password == cred.password
  ) {
    res.json(["success"]);
  } else {
    res.json(["bad"]);
  }
});

app.get("/course", (req, res) => {
  courses.find({}).then((x) => {
    res.status(200).json(x);
  });
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  courses.findById(id).then((x) => {
    res.status(200).json(x);
  });
});

app.put("/course/update/:id", (req, res) => {
  const id = req.params.id;
  const updatedCourse = req.body;
  courses.findByIdAndUpdate(id, updatedCourse).then((data) => {
    res.status(200).json(["updated successfully"]);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
