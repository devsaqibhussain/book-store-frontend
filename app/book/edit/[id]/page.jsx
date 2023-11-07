"use client";
import React, { useState, useEffect } from "react";
import BookFields from "@/components/BookFields.jsx";
import axios from "axios";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {
  const { id } = params;
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState(2023);
  const router = useRouter();

  const handleSubmit = async () => {
    const data = { title: title, author: author, publishYear: publishYear };
    axios
      .put(
        `https://book-store-backend-production-d3c0.up.railway.app/api/book/${id}`,
        data
      )
      .then(() => {
        alert("Book Updated");
        router.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  useEffect(() => {
    axios
      .get(
        `https://book-store-backend-production-d3c0.up.railway.app/api/book/${id}`
      )
      .then((req) => {
        setTitle(req.data.title);
        setAuthor(req.data.author);
        setPublishYear(req.data.publishYear);
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
      });
  }, []);

  return (
    <div className="flex justify-center">
      <BookFields
        title={"Update book"}
        desc={"Update the book by replacing the text."}
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
