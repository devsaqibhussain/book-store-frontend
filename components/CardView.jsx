import React from "react";
import BookCards from "@/components/BookCards";
const CardView = ({ books }) => {
  return (
    <div className=" grid lg:grid-cols-5 gap-4">
      {books.map((book) => 
        <BookCards key={book._id} book={book}  />
      )}
    </div>
  );
};

export default CardView;
