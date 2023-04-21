import "./App.css";
import { Route, BrowserRouter as Router, Routes, Switch } from "react-router-dom";
import { Home } from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
