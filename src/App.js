import Banner from "./components/Banner";
import Chart from "./components/Chart";
import GeoMap from "./components/GeoMap";
import NavBar from "./components/NavBar";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Search />
      <Chart />
      {/* <GeoMap /> */}
    </div>
  );
}

export default App;
