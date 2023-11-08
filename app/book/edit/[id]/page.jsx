"use client";
import React, { useState, useEffect } from "react";
import BookFields from "@/components/BookFields.jsx";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const Page = ({ params }) => {
  const { id } = params;
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [img, setImg] = useState(null);
  const [url, setUrl] = useState(null);
  const [publishYear, setPublishYear] = useState(2023);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async () => {
    const data = {
      title: title,
      author: author,
      publishYear: publishYear,
      img: img,
      url: url,
    };
    axios
      .put(
        `https://book-store-backend-production-d3c0.up.railway.app/api/book/${id}`,
        data
      )
      .then(() => {
        toast({
          title: "Upaded Book Successfull",
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
  useEffect(() => {
    axios
      .get(
        `https://book-store-backend-production-d3c0.up.railway.app/api/book/${id}`
      )
      .then((req) => {
        setTitle(req.data.title);
        setAuthor(req.data.author);
        setPublishYear(req.data.publishYear);
        setImg(req.data.img);
        setUrl(req.data.url);
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
