import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HallsPage from "./components/HallsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HallsPage />} />
      </Routes>
    </Router>
  );
};

export default App;