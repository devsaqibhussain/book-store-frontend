"use client";
import React, { useState } from "react";
import BookFields from "@/components/BookFields.jsx";
import axios from "axios";
import { useRouter } from "next/navigation";

const Page = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState(2023);

  const router = useRouter();
  const handleSubmit = async () => {
    const data = { title: title, author: author, publishYear: publishYear };
    axios
      .post(
        `https://book-store-backend-production-d3c0.up.railway.app/api/book`,
        data
      )
      .then(() => {
        alert("Book created");
        router.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="flex justify-center">
      <BookFields
        title={"Create new book"}
        desc={
          "Create new book that will be saved in database for other to see."
        }
        setTitle={(e) => setTitle(e)}
        setAuthor={(e) => setAuthor(e)}
        setPublishYear={(e) => setPublishYear(e)}
        bookTitle={title}
        author={author}
        publishYear={publishYear}
        handleSubmit={handleSubmit}
      ></BookFields>
    </div>
  );
};

export default Page;
