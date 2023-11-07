import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Spinner = () => {
  return <div className={` flex justify-center items-center mt-10`}>
    <AiOutlineLoading3Quarters className=" animate-spin"/>
  </div>;
};

export default Spinner;
