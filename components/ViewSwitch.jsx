import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BsTable } from "react-icons/bs";
import { PiCardsBold } from "react-icons/pi";

const ViewSwitch = ({ setView }) => {
  return (
    <Select onValueChange={(e) => setView(e)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Display as:" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="card">
          <PiCardsBold className=" inline-block" /> Card View
        </SelectItem>
        <SelectItem value="table">
          <BsTable className=" inline-block" /> Table View
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ViewSwitch;
