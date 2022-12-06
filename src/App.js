import { BrowserRouter, Routes, Route } from "react-router-dom";
import Biling from "./pages/Billing";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Tables from "./pages/Tables";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/billing" element={<Biling />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
