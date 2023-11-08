"use client";
import React, { useState } from "react";
import BookFields from "@/components/BookFields.jsx";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const Page = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [img, setImg] = useState(null);
  const [url, setUrl] = useState(null);
  const [publishYear, setPublishYear] = useState(2023);
  const { toast } = useToast();

  const router = useRouter();
  const handleSubmit = async () => {
    const data = {
      title: title,
      author: author,
      publishYear: publishYear,
      img: img,
      url: url,
    };
    axios
      .post(
        `https://book-store-backend-production-d3c0.up.railway.app/api/book`,
        data
      )
      .then(() => {
        toast({
          title: "Created Book Successfull",
          description: "Returning to Homepage",
        });
        setTimeout(() => {
          router.push("/");
        }, 2000);
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          title: "Error Occured",
          description: err.message,
        });
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
        setUrl={(e) => setUrl(e)}
        setImg={(e) => setImg(e)}
        bookTitle={title}
        author={author}
        publishYear={publishYear}
        img={img}
        url={url}
        handleSubmit={handleSubmit}
      ></BookFields>
    </div>
  );
};

export default Page;
