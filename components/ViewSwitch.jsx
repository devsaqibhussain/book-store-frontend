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

const ViewSwitch = ({ setView, view }) => {
  return (
    <Select onValueChange={(e) => setView(e)} value={view}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Display as:" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="table">
          <BsTable className=" inline-block" /> Table View
        </SelectItem>
        <SelectItem value="card">
          <PiCardsBold className=" inline-block" /> Card View
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ViewSwitch;
