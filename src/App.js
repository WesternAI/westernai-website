import { Routes, Route } from "react-router-dom";

// pages 
import Home from "./pages/Home/Home";
import Event from "./pages/Events/Event";

function App() {
  return (
    <Routes>
      {/* default homepage */}
      <Route exact path="/" element={<Home />} />
      <Route path="/events" element={<Event />} />
      {/* <Route path="/ainnovation" element={<AInnovation />} /> */}
    </Routes>
  );
}

export default App;
