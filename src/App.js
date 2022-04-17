import logo from "./logo.svg";
import "./App.css";
import TopNavbar from "./component/TopNavbar/TopNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home/Home/Home";
import Slider from "./component/Home/Slider/Slider";
import Blog from "./component/Blog/Blog";
import About from "./component/About/About";
import Footer from "./component/Footer/Footer";
import Services from "./component/Services/Services";
import { Routes, Route, Link } from "react-router-dom";
import CheckOut from "./component/CheckOut/CheckOut";
import SignIn from "./component/LoginSignup/SignIn/SignIn";
import SignUp from "./component/LoginSignup/SignUp.js/SignUp";
import RequireAuth from "./component/RequireAuth/RequireAuth";
import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "./component/404Page/ErrorPage";

function App() {
  return (
    <div>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
