import { useContext } from "react";
import { IncreaseProperty } from "../GrandPa";

const Brother = () => {
  const [property, setProperty] = useContext(IncreaseProperty);
  return (
    <div className="border-2 border-amber-500 p-10">
      <h1>Brother</h1>
      <h1 className="text-3xl font-bold">{property}</h1>
      <button
        onClick={() => setProperty(property + 2000)}
        className="bg-green-950 p-2 rounded-2xl btn mt-4"
      >
        Money Demand
      </button>
    </div>
  );
};

export default Brother;
