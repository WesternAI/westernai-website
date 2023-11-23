import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import AInnovation from "./pages/Events/AInnovation";

function App() {
  return (
    <Routes>
      {/* default homepage */}
      <Route exact path="/" element={<Home />} />
      <Route path="/ainnovation" element={<AInnovation />} />
    </Routes>
  );
}

export default App;
