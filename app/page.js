"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

import ViewSwitch from "@/components/ViewSwitch";
import CardView from "@/components/CardView";
import TableView from "@/components/TableView";
import Spinner from "@/components/Spinner";
import AddBookBtn from "@/components/CardBtns/addBookBtn";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://book-store-backend-production-d3c0.up.railway.app/api/book")
      .then((request) => {
        setBooks(request.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);
  const [view, setView] = useState("card");
  return (
    <div>
      <div className=" flex justify-between mb-4">
        <ViewSwitch setView={(e) => setView(e)} />

        <AddBookBtn />
      </div>
      <Separator />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-4">
          {view === "card" ? (
            <CardView books={books}  />
          ) : (
            <TableView books={books} />
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
