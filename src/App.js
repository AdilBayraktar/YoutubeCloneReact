import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Search from "./screens/Search";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import ScreenLayout from "./containers/ScreenLayout";
import { useSelector } from "react-redux";

const App = () => {
  const { toggle } = useSelector((state) => state.toggle);
  // console.log(toggle);
  return (
    <BrowserRouter>
      <Navbar />
      <ScreenLayout>
        {toggle && <SideNav />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="video/:id" element={<Details />} />
          <Route path="search/:keyword" element={<Search />} />
        </Routes>
      </ScreenLayout>
    </BrowserRouter>
  );
};

export default App;
