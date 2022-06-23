import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from "../fetaures/books/Addbook";
import BooksView from "../fetaures/books/BooksView";
import EditBook from "../fetaures/books/EditBook";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Error from "../pages/Error";
import Home from "../pages/Home";


const Index = () => {
  return (
    <BrowserRouter>
    
      
      <main>
        <Routes>
          <Route path="/" element={<AddBook/>} />
          <Route path="/show-books" element={<BooksView />} />
         
          <Route path="/edit-book" element={<EditBook />} />
          
        </Routes>
      </main>
   
    </BrowserRouter>
    
    
  );
};

export default Index;
