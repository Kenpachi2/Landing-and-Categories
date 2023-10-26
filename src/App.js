import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LatestArrival from "./components/LatestArrival";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/landing" />
        <Route path="/female" />

        <Route path="/accessories" />

        <Route path="/phonesAndTablet" />
        <Route path="/" element={<LatestArrival />} />
      </Routes>
    </div>
  );
}

export default App;
