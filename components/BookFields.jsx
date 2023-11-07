"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";

const BookFields = ({
  title,
  desc,
  setTitle,
  setAuthor,
  setPublishYear,
  bookTitle,
  author,
  publishYear,
  handleSubmit,
}) => {
  return (
    <Card className=" w-full max-w-[1000px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <Label>
          Book Title
          <Input
            required
            value={bookTitle}
            className="mt-2"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Label>
        <Separator className="mt-4 mb-2" />

        <Label>
          Author Name
          <Input
            required
            className="mt-2"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Label>
        <Separator className="mt-4 mb-2" />

        <Label>
          Publish Year
          <Input
            required
            className="mt-2"
            type="number"
            value={publishYear}
            onChange={(e) => {
              setPublishYear(e.target.value);
            }}
          />
        </Label>
        <Separator className="mt-4 mb-2" />
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit}>Create Book</Button>
      </CardFooter>
    </Card>
  );
};

export default BookFields;
