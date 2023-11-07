import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EditBookBtn from "@/components/CardBtns/EditBookBtn";
import ShowBookBtn from "@/components/CardBtns/ShowBookBtn";
import DeleteBox from "@/components/DeleteBox";

const BookCards = ({ book }) => {
  return (
    <div>
      <Card className="h-[40vh]">
        <CardHeader>
          <CardTitle className=" line-clamp-1">{book.title}</CardTitle>
          <CardDescription>
            <span className=" text-cyan-300 text-xs">
              Created: {new Date(book.createdAt).toDateString()}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <span className=" font-extralight text-xs line-clamp-1">
              Book&apos;s Author:
            </span>
            <span className=" font-semibold block">{book.author}</span>
          </div>
        </CardContent>
        <CardFooter>
          <div className=" flex flex-col gap-2">
            <span className=" text-xs font-extralight">Book Tools:</span>
            <div className=" flex flex-row gap-2">
              <ShowBookBtn book={book} />
              <EditBookBtn id={book._id} />
              <DeleteBox id={book._id} />
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BookCards;
