import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import ShowContent from "./screens/content/ShowContent";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllSpeakers from "./pages/speakers/AllSpeakers";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content" element={<ShowContent />} />
          <Route path="/AllSpeakers" element={<AllSpeakers />} />


        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
