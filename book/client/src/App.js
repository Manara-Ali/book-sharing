import "./bootstrap.min.css";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import BookDetail from "./pages/BookDetail";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <>
      <Navbar />
      <div id="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/:id" element={<BookDetail />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
