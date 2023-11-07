import { Button } from "@/components/ui/button";
import { BiShow } from "react-icons/bi";
import AddToolTip from "@/components/addToolTip";
import Link from "next/link";
const ShowBookBtn = ({ book }) => {
  return (
    <AddToolTip text={"Show Book"}>
      <Link href={`/book/show/${book._id}`}>
        <Button variant="transparent" size="icon" className="dark:bg-zinc-950 ">
          <BiShow className=" h-3/5 w-full hover:text-cyan-400 dark:hover:text-cyan-300" />
        </Button>
      </Link>
    </AddToolTip>
  );
};

export default ShowBookBtn;
