"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Spinner from "@/components/Spinner";
import Image from "next/image";

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
        <Card className="grid grid-cols-1 sm:grid-cols-2 max-w-3xl m-auto">
          <div className=" flex justify-center items-center p-5">
            <Image
              src={`${data.img||"/noimage.jpg"}`}
              alt="Book Image"
              width={250}
              height={400}
              className="rounded-xl"
            />
          </div>
          <div>
            <CardHeader>
              <CardTitle>{data.title}</CardTitle>
              <CardDescription>
                Publication Date: {data.publishYear}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className=" font-semibold text-zinc-400">
                Author:{" "}
                <span className=" text-zinc-800 dark:text-zinc-100 font-semibold">
                  {data.author}
                </span>
              </p>
            </CardContent>
            <CardContent>
              <p className=" font-semibold text-zinc-400">
                URL:{" "}
                <span className=" text-zinc-800 dark:text-zinc-100 font-semibold">
                  {data.url? <a href={data.url}> Book&apos;s Link </a>: "N/A"}
                </span>
              </p>
            </CardContent>
            <CardFooter>
              <p className=" text-xs font-bold mr-4">
                Created: {new Date(data.createdAt).toLocaleDateString()}
              </p>
              <p className=" text-xs font-bold ml-4">
                Last Updated: {new Date(data.updatedAt).toLocaleDateString()}
              </p>
            </CardFooter>
          </div>
        </Card>
      )}
    </>
  );
};

export default Page;
