import { Button } from "@/components/ui/button";
import { BiBookAdd } from "react-icons/bi";
import AddToolTip from "@/components/addToolTip";
import Link from "next/link";
const AddBookBtn = () => {
  return (
    <AddToolTip text={"Add new Book"}>
      <Link href={`/book/create`}>
        <Button variant="transparent" size="icon" className="dark:bg-zinc-950">
          <BiBookAdd className=" h-3/5 w-full" />
        </Button>
      </Link>
    </AddToolTip>
  );
};

export default AddBookBtn;
