import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ShowBookBtn from "./CardBtns/ShowBookBtn";
import EditBookBtn from "./CardBtns/EditBookBtn";
import DeleteBox from "./DeleteBox";

const TableView = ({ books }) => {
  return (
    <Table>
      <TableCaption>A list of books in database.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className=" whitespace-nowrap text-center">No.</TableHead>
          <TableHead className=" text-center">Title</TableHead>
          <TableHead className=" text-center">Author</TableHead>
          <TableHead className=" hidden sm:table-cell text-center whitespace-nowrap">
            Published Year
          </TableHead>
          <TableHead className="text-center">Controls</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {books.map((book, index) => (
          <TableRow key={book._id}>
            <TableCell className="font-medium text-center">
              {index + 1}
            </TableCell>
            <TableCell className=" text-center max-w-[70px] whitespace-nowrap overflow-hidden">{book.title}</TableCell>
            <TableCell className=" text-center max-w-[60px] whitespace-nowrap overflow-hidden">{book.author}</TableCell>
            <TableCell className="hidden sm:table-cell text-center ">
              {book.publishYear}
            </TableCell>
            <TableCell className="flex gap-1 items-center justify-center">
              <ShowBookBtn book={book} />
              <EditBookBtn id={book._id} />
              <DeleteBox id={book._id}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableView;
