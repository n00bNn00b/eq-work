import Banner from "./components/Banner";
import Chart from "./components/Chart";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/About";

function App() {
  return (
    <div>
      <NavBar />

      <Banner />
      <About />
      <Search />
      <Chart />

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
