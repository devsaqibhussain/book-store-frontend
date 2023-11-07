"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Spinner from "@/components/Spinner";
const Page = ({ params }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://book-store-backend-production-d3c0.up.railway.app/api/book/${params.id}`
      )
      .then((req) => {
        setData(req.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [params.id]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <p className=" font-semibold text-lg text-zinc-400">
            Book&apos;s Title:
          </p>
          <p className=" font-normal text-lg indent-20">{data.title}</p>
          <p className=" font-semibold text-lg text-zinc-400">
            Author&apos;s Name:
          </p>
          <p className=" font-normal text-lg indent-20">{data.author}</p>
          <p className=" font-semibold text-lg text-zinc-400">Publish Year:</p>
          <p className=" font-normal text-lg indent-20">{data.publishYear}</p>
          <p className=" font-semibold text-lg text-zinc-400">Created on:</p>
          <p className=" font-normal text-lg indent-20">
            {new Date(data.createdAt).toLocaleString()}
          </p>
          <p className=" font-semibold text-lg text-zinc-400">
            Last updated on:
          </p>
          <p className=" font-normal text-lg indent-20">
            {new Date(data.updatedAt).toLocaleString()}
          </p>
        </div>
      )}
    </>
  );
};

export default Page;
