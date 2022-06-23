import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "./BooksSlice";

const BooksView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  console.log("boooks lsi is ",books)
  const dispatch = useDispatch();
  const handleDeleteBook = (id) => {
    
    
  
    
    dispatch(deleteBook(id));
  };
  return (
   <div>Hello</div>
  );
};

export default BooksView;
