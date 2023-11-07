import { Button } from "@/components/ui/button";
import { FiEdit2 } from "react-icons/fi";
import AddToolTip from "@/components/addToolTip";
const EditBookBtn = () => {
  return (
    <AddToolTip text={"Edit Book"}>
      <Button variant="transparent" size="icon">
        <FiEdit2 className=" h-2/5 w-full hover:text-emerald-600 dark:hover:text-emerald-300 " />
      </Button>
    </AddToolTip>
  );
};

export default EditBookBtn;
