import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      {/* default homepage */}
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
