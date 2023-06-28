import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { HiOutlinePlus } from "react-icons/hi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="header">
      <div className="book-review-header">
        <h1>Latest Books Reviewed</h1>
        <Button className="add-book-btn">
          <HiOutlinePlus />
          <Link to="/book-create-summary" className="new-book">
            Add Book
          </Link>
        </Button>
      </div>
      <div className="card-container">"bookList"</div>
    </div>
  );
};

export default Home;
