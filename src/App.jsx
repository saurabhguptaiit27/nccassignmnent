import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EventGallery from "./components/EventGallery";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<EventGallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
