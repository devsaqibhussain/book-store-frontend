import { Button } from "@/components/ui/button";
import { FiEdit2 } from "react-icons/fi";
import AddToolTip from "@/components/addToolTip";
import Link from "next/link";

const EditBookBtn = ({ id }) => {
  return (
    <AddToolTip text={"Edit Book"}>
      <Link href={`/book/edit/${id}`}>
        <Button variant="transparent" size="icon">
          <FiEdit2 className=" h-2/5 w-full hover:text-emerald-600 dark:hover:text-emerald-300 " />
        </Button>
      </Link>
    </AddToolTip>
  );
};

export default EditBookBtn;
