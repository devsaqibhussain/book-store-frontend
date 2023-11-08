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
  setImg,
  setUrl,
  bookTitle,
  author,
  publishYear,
  img,
  url,
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
        <Label>
          Image (Optional):
          <Input
            className="mt-2"
            type="text"
            value={img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
        </Label>
        <Separator className="mt-4 mb-2" />
        <Label>
          Book Source (Optional):
          <Input
            className="mt-2"
            type="text"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
        </Label>
        <Separator className="mt-4 mb-2" />
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} className="rounded-xl">
          {title}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookFields;
