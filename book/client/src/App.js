import "./bootstrap.min.css";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import BookDetail from "./pages/BookDetail";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CreateBook from "./pages/CreateBook";

const App = () => {
  return (
    <>
      <Navbar />
      <div id="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:id" element={<BookDetail />} />
          <Route path="/book-create-summary" element={<CreateBook />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
