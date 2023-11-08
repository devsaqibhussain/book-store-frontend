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
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

const DeleteBox = ({ id }) => {
  const { toast } = useToast();
  const handleReload = () => {
    location.reload();
  };
  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://book-store-backend-production-d3c0.up.railway.app/api/book/${id}`
      );
      toast({
        title: "Delete Book Successfull",
        description:
          "Reload to see results if browser doesnt reload automatically",
        action: (
          <ToastAction onClick={() => handleReload} altText="Reload">
            Reload
          </ToastAction>
        ),
      });
      setTimeout(() => {
        handleReload();
      }, 3000);
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Error Occured",
        description: err.message,
      });
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
