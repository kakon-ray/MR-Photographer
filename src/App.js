import logo from "./logo.svg";
import "./App.css";
import TopNavbar from "./component/TopNavbar/TopNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home/Home/Home";
import Slider from "./component/Home/Slider/Slider";
import Blog from "./component/Blog/Blog";
import About from "./component/About/About";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div>
      <TopNavbar />
      <Slider />
      <Blog />
      <About />
      <Footer />
    </div>
  );
}

export default App;
