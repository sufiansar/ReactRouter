import { createContext, useState } from "react";
import Aunty from "./Aunty/Aunty";
import Father from "./Father/Father";
export const InheritVumi = createContext();
export const IncreaseProperty = createContext(0);

const GrandPa = () => {
  const [property, setProperty] = useState(500);
  return (
    <div className="border-2 border-purple-400 p-20 ">
      <h1 className="text-center text-2xl">Gradpa</h1>
      <IncreaseProperty.Provider value={[property, setProperty]}>
        <InheritVumi.Provider value="Uttar">
          <div className="flex p-10 justify-between">
            <Father></Father>
            <Aunty></Aunty>
          </div>
        </InheritVumi.Provider>
      </IncreaseProperty.Provider>
    </div>
  );
};

export default GrandPa;
