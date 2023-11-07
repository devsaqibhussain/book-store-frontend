"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DeleteBookBtn from "@/components/CardBtns/DeleteBookBtn";
import { Button } from "./ui/button";
import axios from "axios";

const DeleteBox = ({ id }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://book-store-backend-production-d3c0.up.railway.app/api/book/${id}`
      );
      alert("Book Deleted");
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };
  return (
    <Dialog>
      <DialogTrigger>
        <DeleteBookBtn />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Book</DialogTitle>
          <DialogDescription>
            Are you sure you want to perform this action?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteBox;
