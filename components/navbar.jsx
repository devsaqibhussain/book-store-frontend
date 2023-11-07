import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { BiHomeAlt } from "react-icons/bi";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className=" m-auto mb-6 mt-1 sm:mt-0">
      <div className=" flex justify-between container items-center py-1 px-2 bg-zinc-850 rounded-full drop-shadow-md border-b-2 border-zinc-200 dark:border-zinc-800 p-2">
        <Link href={"/"}>
          <Button variant="transparent" size="icon">
            <BiHomeAlt className="w-full h-2/3" />
          </Button>
        </Link>
        <p className=" font-semibold text-lg">Saqib&apos;s Book DataBase</p>
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
