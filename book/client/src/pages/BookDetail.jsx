import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { fetchBook } from "../store";

const BookDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    title,
    genre,
    author,
    numberOfPages,
    numberOfChapters,
    ratingsAverage,
    ratingsQuantity,
    synopsis,
    myExplanation,
    finalThoughts,
    recommend,
    coverImage,
    images,
    createdAt,
    reviews,
    userId,
  } = useSelector((state) => {
    return state.booksCombinedReducer.book;
  });

  const date = createdAt && new Date(createdAt);

  useEffect(() => {
    dispatch(fetchBook(id));
  }, [id, dispatch]);

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
            <p>Title:{title}</p>
            <p>Genre:{genre}</p>
            <p>Author:{author}</p>
            <p>Pages:{numberOfPages}</p>
            <p>Chapters:{numberOfChapters}</p>
            <p>
              Ratings:{ratingsAverage} ({ratingsQuantity})
            </p>
            <p>Synopsis:{synopsis}</p>
            <p>My Understanding of the Story Line:{myExplanation}</p>
            <p>Final Thoughts:{finalThoughts}</p>
            <p>Would you recommend this book?:{recommend && "YES"}</p>
            <p>
              Created:{" "}
              {date
                ? Intl.DateTimeFormat("en-US", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }).format(date)
                : "Loading..."}
            </p>
            <div className="image-list-container">
              User's Images
            </div>
          </div>
        </div>
      
    </>
  );
};

export default BookDetail;
