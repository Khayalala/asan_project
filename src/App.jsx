import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HallsPage from "./components/HallsPage";
import { Header } from "./components/Header";
import { ActiveHalls } from "./components/ActiveHalls";
import { WaitingHalls } from "./components/WaitingHalls";
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HallsPage />} />
        <Route path="/active" element={<ActiveHalls/>} />
        <Route path="/waiting" element={<WaitingHalls/>}  />
        <Route path="/rejected" element={<h2 className="zalHeading">İmtinalar Page</h2>} />
      </Routes>
    </Router>
  );
};

export default App;