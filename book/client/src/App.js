import "./bootstrap.min.css";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";

const App = () => {
  return (
    <>
      <Navbar />
      <div id="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<BookDetail />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
