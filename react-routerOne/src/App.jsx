import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting"; // Fixed incorrect import

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/about" element={<About />}>
          <Route path="profile" element={<Profile />} />{" "}
          <Route path="settings" element={<Setting />} />
        </Route>
        <Route path="/contact" element={<>Contact</>} />
      </Routes>
    </>
  );
}

export default App;
