import { Button } from "@/components/ui/button";
import { MdDelete } from "react-icons/md";
import AddToolTip from "@/components/addToolTip";

const DeleteBookBtn = () => {
  return (
    <AddToolTip text={"Delete Book"}>
      <Button variant="transparent" size="icon" className="dark:bg-transparent">
        <MdDelete className=" h-3/5 w-full hover:text-red-600" />
      </Button>
    </AddToolTip>
  );
};

export default DeleteBookBtn;
