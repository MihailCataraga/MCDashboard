import { Routes, Route, HashRouter } from "react-router-dom";
import Biling from "./pages/Billing";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Tables from "./pages/Tables";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/billing" element={<Biling />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
