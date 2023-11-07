import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Spinner = ({height}) => {
  return <div className={` flex justify-center items-center h-[${height || `50vh`}]`}>
    <AiOutlineLoading3Quarters className=" animate-spin"/>
  </div>;
};

export default Spinner;
