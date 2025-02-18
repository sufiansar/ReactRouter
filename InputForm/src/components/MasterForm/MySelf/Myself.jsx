import { useContext } from "react";
import { InheritVumi } from "../GrandPa";

const Myself = () => {
  const gift = useContext(InheritVumi);
  return (
    <div className="border-2 border-amber-500 p-10">
      <h1> MySelf {gift}</h1>
      <button className="bg-green-950 p-2 rounded-2xl btn mt-4">
        Money Demand
      </button>
    </div>
  );
};

export default Myself;
