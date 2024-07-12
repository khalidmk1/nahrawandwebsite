import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import ShowContent from "./screens/content/ShowContent";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllSpeakers from "./pages/speakers/AllSpeakers";
import DetailConetent from "./screens/content/DetailConetent";
import DeatailEvent from "./pages/event/DeatailEvent";
import ContactUs from "./screens/ContactUs";
import ContentComponent from "./pages/content/partial/ContentComponent";


function App() {
  return (
    <Router>
     
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content" element={<ShowContent />} />
          <Route path="/AllSpeakers" element={<AllSpeakers />} />
          <Route path="/detail" element={<DetailConetent />} />
          <Route path="/DeatailEvent" element={<DeatailEvent />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/ContentComponent" element={<ContentComponent />} />


        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
