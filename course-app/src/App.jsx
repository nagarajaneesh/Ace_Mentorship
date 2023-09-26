import { useState } from "react";
import Loginpage from "./components/loginPage.jsx";
import { Routes, Route } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Signup from "./components/signup.jsx";
import Addcourse from "./components/addCourses.jsx";
import Viewcourses from "./components/viewCourses.jsx";
import Welcome from "./components/adminComponents/welcome.jsx";
import AdminCoursePage from "./components/adminComponents/courses.jsx";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./App.css";
function App() {
  const handleWhatsAppClick = () => {
    // Replace "YOUR_PHONE_NUMBER" with your actual phone number, including the country code
    const phoneNumber = "8688450833";

    // Replace "YOUR_MESSAGE" with the pre-filled message you want to send
    const message =
      "Hello....I am texting you for some imformation about ACE MENTORSHIP courses";

    // Form the WhatsApp URL with the phone number and the pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Redirect the user to the WhatsApp URL
    window.open(whatsappUrl, "_blank");
  };
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <Box sx={{ "& button": { m: 1 } }}>
        {!loggedIn && (
          <div className="nav">
            <Button
              onClick={() => {
                navigate("/");
              }}
              variant="outlined"
            >
              HOME
            </Button>
            <Button
              onClick={() => {
                navigate("/login");
              }}
              variant="contained"
              size="small"
            >
              Login
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </Button>
          </div>
        )}
        {loggedIn && (
          <div className="nav">
            <Button
              onClick={() => {
                navigate("/");
              }}
              variant="outlined"
            >
              HOME
            </Button>
            <Button
              onClick={() => {
                navigate("/viewcourses");
              }}
              variant="contained"
              size="small"
            >
              Courses
            </Button>
            <Button
              onClick={() => {
                setLoggedIn(false);
                navigate("/login");
              }}
              variant="contained"
              size="small"
            >
              Sign out
            </Button>
          </div>
        )}
      </Box>
      <div
        className="whatsapp-icon-container"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          cursor: "pointer",
        }}
      >
        <WhatsAppIcon onClick={handleWhatsAppClick} fontSize="large" />
      </div>

      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route
          path="/login"
          element={<Loginpage setLoggedIn={setLoggedIn} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Addcourse" element={<Addcourse />} />
        <Route path="/viewCourses" element={<Viewcourses />} />
        <Route path="/courses" element={<AdminCoursePage />} />
      </Routes>
    </>
  );
}

export default App;
