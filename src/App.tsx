import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Layout from "./components/Layout";
import MainContent from "./components/MainContent";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigation />} />
        <Route path="content" element={<MainContent />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
