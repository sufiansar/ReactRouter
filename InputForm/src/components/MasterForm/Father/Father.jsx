import React from "react";
import Brother from "../Brother/Brother";
import Myself from "../MySelf/Myself";

const Father = () => {
  return (
    <div className="  border-3 border-purple-900 p-10">
      <h1 className="text-center text-2xl">Father</h1>
      <div className=" flex border-3 border-purple-900 p-10 gap-10">
        <Brother></Brother>
        <Myself></Myself>
      </div>
    </div>
  );
};

export default Father;
