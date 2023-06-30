import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const BookDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  return (
    <>
      <div className="header">
        <Link to="/" className="back-btn-parent">
          <Button className="back-btn">Back</Button>
        </Link>
      </div>
        <div className="detail-container">
          <img
            className="cover-image"
            // src={`/img/books/${coverImage}`}
            alt="book cover"
          />
          <div className="book-detail">
            <h1>Book Detail Page</h1>
            <p>Title:</p>
            <p>Genre:</p>
            <p>Author:</p>
            <p>Pages:</p>
            <p>Chapters:</p>
            <p>
              Ratings:
            </p>
            <p>Synopsis:</p>
            <p>My Understanding of the Story Line:</p>
            <p>Final Thoughts:</p>
            <p>Would you recommend this book?:</p>
            <div className="image-list-container">
              Images
            </div>
          </div>
        </div>
      
    </>
  );
};

export default BookDetail;
