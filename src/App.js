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
import AllEvents from "./pages/event/AllEvents";

function App() {
  var endDate = new Date().getTime() + 1000800000;

var x = setInterval(function() {

    var now =  new Date().getTime();

    var timeRemaining = endDate - now;

    var daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / (1000));

    document.getElementById("days").innerHTML = daysRemaining;
    document.getElementById("hours").innerHTML = hoursRemaining;
    document.getElementById("minutes").innerHTML = minutesRemaining;
    document.getElementById("seconds").innerHTML = secondsRemaining; 

    if (timeRemaining < 0) { 
        clearInterval(x);
		document.getElementById("days").innerHTML ='0'; 
		document.getElementById("hours").innerHTML ='0'; 
		document.getElementById("minutes").innerHTML ='0' ; 
        document.getElementById("seconds").innerHTML = '0';
        alert("Thank you for your patience");
    }

},1000);
  return (
    // <Router>
    //   <div className="App">
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/content" element={<ShowContent />} />
    //       <Route path="/AllSpeakers" element={<AllSpeakers />} />
    //       <Route path="/detail" element={<DetailConetent />} />
    //       <Route path="/DeatailEvent" element={<DeatailEvent />} />
    //       <Route path="/ContactUs" element={<ContactUs />} />
    //       <Route path="/ContentComponent" element={<ContentComponent />} />
    //       <Route path="/AllEvents" element={<AllEvents />} />
    //     </Routes>
    //     <Footer />
    //   </div>
    // </Router>

    <section class="min-vh-100 d-flex flex-column" >
      <main className="my-auto" >
        <div className="container">
          <div className="row">
            <div className="col-md-6 section-left">
              <h1 className="page-title">We are launching soon</h1>
              <div id="timer" className="bd-cd-timer">
                <div className="time-card">
                  <span className="time-count" id="days" />
                  <span className="time-label">DAYS</span>
                </div>
                <div className="time-card">
                  <span className="time-count" id="hours" />
                  <span className="time-label">HOURS</span>
                </div>
                <div className="time-card">
                  <span className="time-count" id="minutes" />
                  <span className="time-label">MINUTES</span>
                </div>
                <div className="time-card">
                  <span className="time-count" id="seconds" />
                  <span className="time-label">SECONDS</span>
                </div>
              </div>
       
            </div>
            <div className="col-md-6 d-none d-md-flex align-items-center jutify-content-center">
              <img
                src="../img/logonahrawand.png"
                alt="coming soon"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center">
        <nav className="footer-social-links">
          <a href="#!" className="social-link">
            <i className="mdi mdi-facebook-box" />
          </a>
          <a href="#!" className="social-link">
            <i className="mdi mdi-twitter" />
          </a>
          <a href="#!" className="social-link">
            <i className="mdi mdi-google" />
          </a>
        </nav>
        <p className="footer-text mb-0">Copyright 2020 bootstrapdash</p>
      </footer>
    </section>
  );
}

export default App;
